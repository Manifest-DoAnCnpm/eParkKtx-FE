import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 Thêm import này
import '../styles/HomePage.css';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate(); // 👈 Hook điều hướng

  // Hiệu ứng hiện hero khi load trang
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleStart = () => {
    navigate('/login');
  };

  // 👉 Khi bấm "Liên hệ"
  const handleContact = () => {
    alert('Liên hệ: support@manifest.vn\nSố điện thoại: 1900-xxxx');
  };

  return (
    <div className="homepage">
      <div className="container">
        {/* Content Section */}
        <div className={`content ${isVisible ? 'visible' : ''}`}>
          <span className="badge">Manifest</span>

          <h1 className="title">
            Hệ thống <span className="highlight">quản lý</span><br />
            thẻ xe <span className="highlight">ký túc xá</span>
          </h1>

          <p className="description">
            Giải pháp số hóa hoàn toàn — Đăng ký online, tra cứu nhanh,<br />
            gia hạn dễ dàng và thanh toán tự động.
          </p>

          <div className="buttons">
            <button
              onClick={handleStart}
              className="btn btn-primary"
            >
              Bắt đầu
            </button>
            <button
              onClick={handleContact}
              className="btn btn-secondary"
            >
              Liên hệ
            </button>
          </div>
        </div>

        {/* Illustration Section */}
        <div className={`illustration ${isVisible ? 'visible' : ''}`}>
          <img
            src="/images/ellipse.png"
            alt="Ellipse"
            className="ellipse-img"
          />
          <img
            src="/images/scooter.png"
            alt="Scooter Illustration"
            className="scooter-img"
          />
        </div>
      </div>
    </div>
  );
}
