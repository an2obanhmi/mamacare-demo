// ServiceFeedback.js
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
        <h2>Nếu bạn đang thắc mắc về dịch vụ hoặc sản phẩm của Home Care, hãy liên hệ chúng mình.</h2>
        <p><i className="fas fa-phone"></i> 1900 0387 - 0973 871 376</p>
        <p><i className="fas fa-envelope"></i> cksh@homegroups.vn</p>
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
      <div className="social-icons">
        <a href="tel:0973871376" className="call-icon"><i className="fas fa-phone"></i></a>
        <a href="https://zalo.me/0973871376" className="zalo-icon">Zalo</a>
        <a href="https://m.me/homecaresausinh" className="messenger-icon">Messenger</a>
      </div>
    </div>
  );
};

export default ServiceFeedback;
