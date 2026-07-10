# 💬 Chat Backend API

Backend RESTful API cho hệ thống Chat Realtime được xây dựng bằng **Node.js**, **Express.js**, **Prisma ORM** và **MySQL**.

## 🚀 Công nghệ sử dụng

- Node.js
- Express.js
- Prisma ORM
- MySQL
- JWT Authentication
- bcrypt
- Multer
- Socket.IO *(sắp triển khai)*
- Express Validator

---

# 📁 Cấu trúc thư mục

```
Chat-BE
│
├── prisma
│   ├── migrations
│   ├── schema.prisma
│   └── seed.js
│
├── src
│   ├── configs
│   │   ├── prisma.js
│   │   └── jwt.js
│   │
│   ├── controllers
│   │
│   ├── services
│   │
│   ├── repositories
│   │
│   ├── middlewares
│   │
│   ├── routes
│   │
│   ├── utils
│   │
│   ├── validations
│   │
│   └── app.js
│
├── uploads
├── .env
├── package.json
└── server.js
```

---

# ⚙️ Cài đặt

Clone project

```bash
git clone https://github.com/your-name/chat-be.git
```

Cài package

```bash
npm install
```

---

# ⚙️ Cấu hình môi trường

Tạo file `.env`

```env
PORT=3000

DATABASE_URL="mysql://root:password@localhost:3306/chat_db"

JWT_SECRET=your_secret_key

JWT_EXPIRES_IN=7d
```

---

# 🗄️ Prisma

Generate Prisma Client

```bash
npx prisma generate
```

Migration Database

```bash
npx prisma migrate dev
```

Reset Database

```bash
npx prisma migrate reset
```

Mở Prisma Studio

```bash
npx prisma studio
```

---

# ▶️ Chạy project

Development

```bash
npm run dev
```

Production

```bash
npm start
```

---

# 📌 Kiến trúc

```
Client

↓

Router

↓

Middleware

↓

Controller

↓

Service

↓

Repository

↓

Prisma ORM

↓

MySQL
```

---

# 🔐 Authentication

Sử dụng JWT Authentication.

Header

```
Authorization: Bearer <token>
```

---

# 📚 API Router

## Authentication

| Method | Endpoint | Mô tả |
|----------|----------|------|
| POST | /api/auth/register | Đăng ký |
| POST | /api/auth/login | Đăng nhập |
| POST | /api/auth/logout | Đăng xuất |
| GET | /api/auth/profile | Thông tin cá nhân |
| PUT | /api/auth/change-password | Đổi mật khẩu |

---

## User

| Method | Endpoint | Mô tả |
|----------|----------|------|
| GET | /api/users | Danh sách user |
| GET | /api/users/:id | Chi tiết user |
| PUT | /api/users/:id | Cập nhật user |
| DELETE | /api/users/:id | Xóa user |

---

## Conversation

| Method | Endpoint | Mô tả |
|----------|----------|------|
| GET | /api/conversations | Danh sách cuộc trò chuyện |
| POST | /api/conversations | Tạo cuộc trò chuyện |
| GET | /api/conversations/:id | Chi tiết cuộc trò chuyện |
| DELETE | /api/conversations/:id | Xóa cuộc trò chuyện |

---

## Message

| Method | Endpoint | Mô tả |
|----------|----------|------|
| GET | /api/messages/:conversationId | Lấy tin nhắn |
| POST | /api/messages | Gửi tin nhắn |
| PUT | /api/messages/:id | Sửa tin nhắn |
| DELETE | /api/messages/:id | Thu hồi/Xóa tin nhắn |

---

## Friend

| Method | Endpoint | Mô tả |
|----------|----------|------|
| GET | /api/friends | Danh sách bạn bè |
| POST | /api/friends/request | Gửi lời mời |
| POST | /api/friends/accept | Chấp nhận |
| POST | /api/friends/reject | Từ chối |
| DELETE | /api/friends/:id | Hủy kết bạn |

---

## Notification

| Method | Endpoint | Mô tả |
|----------|----------|------|
| GET | /api/notifications | Danh sách thông báo |
| PUT | /api/notifications/read/:id | Đánh dấu đã đọc |

---

# 🔄 HTTP Status

| Code | Ý nghĩa |
|------|----------|
|200|Success|
|201|Created|
|400|Bad Request|
|401|Unauthorized|
|403|Forbidden|
|404|Not Found|
|409|Conflict|
|422|Validation Error|
|500|Internal Server Error|

---

# 📦 Response Format

Success

```json
{
    "success": true,
    "message": "Success",
    "data": {}
}
```

Error

```json
{
    "success": false,
    "message": "Error message"
}
```

---

# 🛡️ Middleware

- Authentication
- Authorization
- Error Handler
- Validation
- Upload
- Logger

---

# 🔜 Roadmap

- JWT Authentication
- Friend Request
- Private Chat
- Group Chat
- Socket.IO
- Upload Image
- Upload File
- Voice Message
- Video Call
- Search User
- Notification
- Online Status
- Message Reaction
- Seen Message
- Pin Message
- Reply Message
- Delete For Everyone

---

# 👨‍💻 Author

**Bùi Văn Khánh**

GitHub

```
https://github.com/KhanhsDev
```

---

# 📄 License

MIT License
