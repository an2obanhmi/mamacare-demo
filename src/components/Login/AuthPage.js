// src/components/Login/AuthPage.js
import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../UserContext';
import './AuthPage.css';
import { API_URL } from '../../config';

const AuthPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.post(`${API_URL}/login`,  // ✅ Đảm bảo dùng POST
                { email, password }, 
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true  // 🔥 Quan trọng: Hỗ trợ cookie/token
                }
            );
            alert('Đăng nhập thành công!');
            login({ username: response.data.username, email });
            const redirectTo = location.state?.from || '/';
            navigate(redirectTo);
        } catch (error) {
            console.error("Lỗi đăng nhập:", error.response ? error.response.data : error);
            setError('Đăng nhập thất bại! Kiểm tra lại email và mật khẩu.');
        }
    };
    
    
    
    

    return (
        <div className="auth-wrapper">
            <div className="auth-box">
                <h2>Đăng Nhập</h2>
                {error && <p className="error-text">{error}</p>}
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Mật khẩu</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="auth-button">Đăng Nhập</button>
                </form>
                <p>Chưa có tài khoản? <span onClick={() => navigate('/register')} className="toggle-link">Đăng Ký</span></p>
            </div>
        </div>
    );
};

export default AuthPage;
