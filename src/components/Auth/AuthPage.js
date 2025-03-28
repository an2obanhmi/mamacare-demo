import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './AuthPage.css';

const AuthPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  // ... các state khác giữ nguyên

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        login(data.user, data.token);
        
        // Kiểm tra xem có dịch vụ đã chọn trước không
        const selectedService = localStorage.getItem('selectedService');
        if (selectedService) {
          localStorage.removeItem('selectedService'); // Xóa thông tin đã lưu
          // Chuyển hướng về trang dịch vụ đã chọn
          const service = JSON.parse(selectedService);
          navigate(`/services/${service.typeService}`);
        } else {
          // Nếu có trang trước đó, quay lại trang đó
          navigate(location.state?.from || '/');
        }
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Đã có lỗi xảy ra khi đăng nhập');
    }
  };

  // ... phần code còn lại giữ nguyên
};

export default AuthPage; 