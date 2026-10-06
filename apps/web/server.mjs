import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import repositoryModule from './lib/repositories/fixture-repository.cjs';
import serviceModule from './lib/services/commercial-service.cjs';

const root = fileURLToPath(new URL('.', import.meta.url));
const publicRoot = join(root, 'public');
const repository = repositoryModule.createFixtureRepository();
const service = serviceModule.createCommercialService(repository);
const port = Number(process.env.PORT || 4173);

const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml' };
const sendJson = (response, status, data) => {
  response.writeHead(status, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' });
  response.end(JSON.stringify(data));
};
const readBody = request => new Promise((resolve, reject) => {
  let body = '';
  request.on('data', chunk => { body += chunk; if (body.length > 1_000_000) reject(new Error('Dữ liệu gửi lên quá lớn.')); });
  request.on('end', () => { try { resolve(body ? JSON.parse(body) : {}); } catch { reject(new Error('JSON không hợp lệ.')); } });
  request.on('error', reject);
});

async function api(request, response, url) {
  const pathname = url.pathname;
  if (request.method === 'GET' && pathname === '/api/dashboard') return sendJson(response, 200, service.dashboard(Object.fromEntries(url.searchParams)));
  if (request.method === 'GET' && pathname === '/api/khach-hang') return sendJson(response, 200, service.customers());
  if (request.method === 'GET' && pathname === '/api/san-pham') return sendJson(response, 200, service.dataset().SAN_PHAM);
  if (request.method === 'GET' && pathname === '/api/bao-gia') return sendJson(response, 200, service.quotes());
  if (request.method === 'POST' && pathname === '/api/bao-gia') return sendJson(response, 201, service.createQuote(await readBody(request)));
  if (request.method === 'GET' && pathname === '/api/don-hang') return sendJson(response, 200, service.orders());
  if (request.method === 'GET' && pathname === '/api/cong-no') return sendJson(response, 200, { orders: service.orders(), payments: service.payments() });
  if (request.method === 'GET' && pathname === '/api/giao-hang') return sendJson(response, 200, { orders: service.orders(), shipments: service.shipments() });
  const customerMatch = pathname.match(/^\/api\/khach-hang\/([^/]+)$/);
  if (customerMatch && request.method === 'GET') {
    const result = service.customer(decodeURIComponent(customerMatch[1]));
    return sendJson(response, result ? 200 : 404, result || { error: 'Không tìm thấy khách hàng.' });
  }
  const quoteMatch = pathname.match(/^\/api\/bao-gia\/([^/]+)$/);
  if (quoteMatch && request.method === 'GET') {
    const result = service.quote(decodeURIComponent(quoteMatch[1]));
    return sendJson(response, result ? 200 : 404, result || { error: 'Không tìm thấy báo giá.' });
  }
  if (quoteMatch && request.method === 'PATCH') return sendJson(response, 200, service.updateQuote(decodeURIComponent(quoteMatch[1]), await readBody(request)));
  const convertMatch = pathname.match(/^\/api\/bao-gia\/([^/]+)\/chuyen-don$/);
  if (convertMatch && request.method === 'POST') return sendJson(response, 200, service.convertQuote(decodeURIComponent(convertMatch[1])));
  const paymentMatch = pathname.match(/^\/api\/don-hang\/([^/]+)\/thanh-toan$/);
  if (paymentMatch && request.method === 'POST') return sendJson(response, 201, service.addPayment(decodeURIComponent(paymentMatch[1]), (await readBody(request)).soTien));
  const shipmentMatch = pathname.match(/^\/api\/don-hang\/([^/]+)\/giao-hang$/);
  if (shipmentMatch && request.method === 'POST') return sendJson(response, 201, service.addShipment(decodeURIComponent(shipmentMatch[1]), (await readBody(request)).soLuong));
  return false;
}

const server = http.createServer(async (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host || 'localhost'}`);
  try {
    if (url.pathname.startsWith('/api/')) {
      const handled = await api(request, response, url);
      if (handled === false && !response.writableEnded) sendJson(response, 404, { error: 'Không tìm thấy API.' });
      return;
    }
    const asset = ['/app.js', '/styles.css', '/security.js'].includes(url.pathname) ? url.pathname.slice(1) : 'index.html';
    const path = normalize(join(publicRoot, asset));
    if (!path.startsWith(publicRoot)) return sendJson(response, 403, { error: 'Đường dẫn không hợp lệ.' });
    const content = await readFile(path);
    response.writeHead(200, { 'content-type': mime[extname(path)] || 'application/octet-stream' });
    response.end(content);
  } catch (error) {
    sendJson(response, 400, { error: error.message || 'Yêu cầu không thể xử lý.' });
  }
});

const isMain = Boolean(process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url));
if (isMain) {
  server.listen(port, '127.0.0.1', () => console.log(`Web App KD đang chạy tại http://127.0.0.1:${port}`));
}

export { server, api, service, repository };
