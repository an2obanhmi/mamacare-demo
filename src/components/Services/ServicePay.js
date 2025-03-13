import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ServicePay.css";

const API_URL = process.env.REACT_APP_API_URL || "https://mamacare-backend.vercel.app";

const pricingData = [
  { title: "Gói Lẻ", price: "300,000 VND" },
  { title: "Gói Cơ Bản: “Mẹ Tròn Con Vuông”", price: "2,000,000 VND" },
  { title: "Gói Nâng Cao: “Hồi Phục Toàn Diện”", price: "4,000,000 VND" },
  { title: "Gói Cao Cấp: “Chăm Sóc Vàng”", price: "6,000,000 VND" },
];

const ServicePay = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, email, phone, message, servicePackage } = location.state || {};

  const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // 🔥 Nếu không có dữ liệu, quay về trang đặt dịch vụ
  useEffect(() => {
    if (!name || !email) {
      navigate("/service");
    }
  }, [name, email, navigate]);

  const selectedPackage = pricingData.find(pkg => pkg.title === servicePackage);
  const price = selectedPackage ? selectedPackage.price : "Không có giá";

  const handleConfirmPayment = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/send-payment-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message: message || "Không có lời nhắn",
          servicesUse: selectedPackage.title,
        }),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message);
      console.log("✅ Email sent!");
      setIsPaymentConfirmed(true);
    } catch (error) {
      console.error("❌ Lỗi khi gửi email:", error);
      setError("Không thể gửi email. Hãy thử lại sau.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="servicepay-container">
      {isPaymentConfirmed ? (
        <div className="thank-you-message">
          <h2>Cảm ơn quý khách đã sử dụng dịch vụ</h2>
          <p>Chúng tôi sẽ liên hệ lại sớm nhất để xác nhận và phục vụ quý khách.</p>
        </div>
      ) : (
        <div className="servicepay-card">
          <h2 className="servicepay-title">Xác nhận dịch vụ</h2>
          <div className="servicepay-info">
            <p><strong>Họ và tên:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Số điện thoại:</strong> {phone}</p>
            <p><strong>Lời nhắn:</strong> {message || "Không có lời nhắn"}</p>
            <p><strong>Gói dịch vụ:</strong> {servicePackage}</p>
          </div>

          <div className="servicepay-total">
            <h3>Tổng hóa đơn:</h3>
            <p>{price}</p>
          </div>

          <div className="servicepay-qrcode">
            <img src="/assets/qr.jpg" alt="QR code" />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button
            onClick={handleConfirmPayment}
            className="servicepay-confirm-button"
            disabled={isLoading}
          >
            {isLoading ? "Đang xử lý..." : "Xác nhận & Thanh toán"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ServicePay;
