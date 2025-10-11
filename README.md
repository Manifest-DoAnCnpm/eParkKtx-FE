# EParkKTX - Hệ thống quản lý bãi giữ xe cho Ký túc xá

Quản lý gửi xe KTX - Node.js (backend) & React.js (frontend)

## Cấu trúc dự án

```
ĐATH_CNPM/
│
├── client/            # Frontend React.js
│   ├── public/        # index.html, favicon, ...
│   └── src/
│       ├── assets/    # Ảnh, icon, font
│       ├── components/# Component giao diện chung
│       ├── context/   # React Context
│       ├── hooks/     # Custom hooks
│       ├── pages/     # Mỗi chức năng 1 page
│       ├── services/  # Hàm gọi API/backend
│       ├── styles/    # CSS/scss toàn cục
│       ├── types/     # Định nghĩa kiểu dữ liệu
│       ├── utils/     # Hàm tiện ích
│       ├── App.js     # Router chính
│       └── index.js   # Entry point React
│
├── server/            # Backend Node.js
│   ├── src/
│   │   ├── models/    # Mongoose models
│   │   ├── routes/    # API routes
│   │   └── index.js   # Entry point Express
│   ├── .env.example   # Biến môi trường mẫu
│   └── package.json   # Thông tin & scripts backend
│
└── README.md          # Hướng dẫn dự án
```

## Cách sử dụng

### 1. Backend (server)

```sh
cd server
cp .env.example .env   # hoặc tự tạo file .env từ mẫu
npm install
npm run dev            # hoặc npm start
```
- Server mặc định chạy ở http://localhost:5000
- Cần cài MongoDB (local/cloud) và chỉnh biến MONGO_URI trong .env

### 2. Frontend (client)

```sh
cd client
npm install
npm start
```
- Ứng dụng React chạy ở http://localhost:8080 (hoặc port webpack config)

### 3. Một số lưu ý
- Chỉnh sửa cấu hình kết nối backend trong các file service (nếu cần).
- Đảm bảo backend chạy trước khi dùng các chức năng cần API.
- Có thể mở rộng thêm các thư mục khác theo nhu cầu.

---

Nếu cần hướng dẫn chi tiết hơn hoặc gặp lỗi, hãy xem lại README này hoặc liên hệ người phát triển.
