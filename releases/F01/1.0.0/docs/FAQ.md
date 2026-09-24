# CÂU HỎI THƯỜNG GẶP (FAQ) - F01
**Dòng sản phẩm:** Việc cá nhân và ưu tiên  
**Thương hiệu:** Minh Templates  

---

### Q1: Làm thế nào để công thức DaysLate không bị lỗi khi tôi thêm dòng mới?
**Trả lời:** Bảng tính F01 đã được cấu hình công thức động. Khi bạn nhập dòng mới tại tab `Tasks`, hãy kéo sao chép công thức tại cột `J` (`DaysLate`) xuống các dòng tương ứng hoặc sử dụng chức năng "Tự động tính ngày trễ" trên thanh menu `Minh Templates > Tự động tính ngày trễ (DaysLate)`.

### Q2: Tại sao một số công việc quá hạn nhưng tỷ lệ hoàn thành vẫn là 100%?
**Trả lời:** Tỷ lệ hoàn thành được tính bằng:
`Số việc hoàn thành (DONE) / (Tổng số việc - Số việc bị hủy CANCELLED)`
Nếu bạn đã hoàn thành tất cả các công việc còn lại trong danh sách, tỷ lệ hoàn thành sẽ là 100%. Nếu có công việc quá hạn, chỉ số "Số việc đang quá hạn" sẽ hiển thị số lượng cụ thể và cảnh báo màu đỏ trên Dashboard.

### Q3: Nếu tôi mở lại (Reopen) một công việc đã hoàn thành thì điều gì xảy ra?
**Trả lời:** Theo chuẩn kiến trúc F01:
- Trạng thái công việc chuyển về `TODO`.
- Tiến độ (`Progress`) được đặt lại về `0%`.
- Mốc thời gian hoàn thành (`CompletedAt`) bị xóa (`null`).
- Hệ thống ghi lại một bản ghi lịch sử `TaskEvent` với hành động `REOPEN` để truy vết ai đã mở lại và thời điểm nào.

### Q4: Tôi có thể đổi tên các mức độ ưu tiên hoặc trạng thái không?
**Trả lời:** Các giá trị trạng thái (`TODO`, `DOING`, `DONE`, `CANCELLED`) và ưu tiên (`THẤP`, `TRUNG BÌNH`, `CAO`, `KHẨN CẤP`) là chuẩn dùng chung để liên kết công thức Dashboard và bộ lọc AppSheet. Bạn không nên thay đổi trực tiếp tên các giá trị này để tránh gây lỗi công thức. Nếu bạn cần phiên bản Song ngữ (Việt - Anh), vui lòng sử dụng gói `F01-BILINGUAL`.

### Q5: Tại sao tôi thấy cột ID chứa các ký tự lạ dạng chữ và số?
**Trả lời:** Cột `ID` sử dụng định dạng UUID chuẩn thương mại nhằm đảm bảo tính duy nhất tuyệt đối cho từng đầu việc. Điều này giúp bạn dễ dàng đồng bộ với điện thoại qua AppSheet hoặc xuất dữ liệu mà không sợ bị trùng lặp khi xóa hay sắp xếp lại các dòng.
