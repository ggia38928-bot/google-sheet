# Ví dụ sửa lỗi đã tái hiện trong mã tham chiếu

Lỗi: `transitionOpportunity` dùng điều kiện `canReadContact`. Một STAFF có chia sẻ chỉ đọc (`sharedWith`) được phép đổi stage vì quyền đọc bị dùng làm quyền sửa.

Tái hiện: tạo deal owner khác, cấp staff vào `sharedWith`, thử chuyển PROPOSAL→WON. Expected FORBIDDEN; bản trước sửa không ném lỗi. Regression `CRM access: read-only sharing must not grant write access` đã fail với “Missing expected exception”.

Sửa: thêm `canEditContact` riêng, chỉ owner, người phụ trách, manager cùng team không rỗng hoặc grant `editSharedWith`; VIEWER luôn bị chặn. Thay điều kiện trong `transitionOpportunity` thành `canEditContact`.

```javascript
if (!canEditContact(actor, record)) throw new DomainError('FORBIDDEN');
```

Implementation đầy đủ nằm trong `reference/domain.mjs`; test nằm trong `tests/domain.test.mjs`. Đây là ví dụ một vòng reproduce→regression→patch→rerun đã thực hiện, không phải tuyên bố mọi lỗi CRM thực tế đã được sửa. Khi dùng schema ContactAccess ở app thật, adapter phải chuyển đúng Permission VIEW/EDIT thành hai tập grant; không lấy chung một danh sách cho cả hai.
