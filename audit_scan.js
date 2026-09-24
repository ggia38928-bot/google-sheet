const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else {
      results.push({ path: path.relative('D:\\google sheet', fullPath).replace(/\\/g, '/'), size: stat.size });
    }
  });
  return results;
}

const files = walk('D:\\google sheet');
console.log('TOTAL_FILES=' + files.length);
files.forEach(f => console.log(f.size + '\t' + f.path));
