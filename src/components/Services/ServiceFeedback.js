import React, { useState } from "react";
import "./ServiceFeedback.css";

const ServiceFeedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Cảm ơn bạn đã gửi phản hồi!");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="feedback-container">
      <div className="feedback-info">
        <h2>
          Nếu bạn đang thắc mắc về dịch vụ hoặc sản phẩm của MamaCare, hãy liên hệ chúng mình.
        </h2>
        <p>
          <img src="/assets/phone-call-icon.svg" alt="Phone" className="icon" />
          1900-1900
        </p>
        <p>
          <img src="/assets/envelope-icon.svg" alt="Email" className="icon" />
          mamacare2025@gmail.com
        </p>

        <div className="social-icons">
          <div className="icon-container">
            <img src="/assets/phone-call-icon.svg" alt="Phone" />
          </div>
          <div className="icon-container">
            <img src="/assets/zalo-icon.svg" alt="Zalo" />
          </div>
          <div className="icon-container">
          <a
            href="https://www.facebook.com/messages/t/557372944117703"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-container clickable"
          >
            <img src="/assets/facebook-messenger-icon.svg" alt="Messenger" />
            </a>
          </div>
        </div>
      </div>

      <div className="feedback-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Tên của bạn"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Số điện thoại"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email của bạn"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Viết tin nhắn"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Gửi</button>
        </form>
      </div>
    </div>
  );
};

export default ServiceFeedback;
