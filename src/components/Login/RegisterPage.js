// src/components/Login/RegisterPage.js
import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../UserContext';
import './AuthPage.css';
import { API_URL } from '../../config';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useContext(UserContext);

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await axios.post(`${API_URL}/register`, { username, email, password });
            alert('Đăng ký thành công!');
            login({ username, email });
            navigate('/login', { state: { from: location.state?.from } });
        } catch (error) {
            setError('Đăng ký thất bại! Email có thể đã tồn tại.');
        }
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-box">
                <h2>Đăng Ký</h2>
                {error && <p className="error-text">{error}</p>}
                <form onSubmit={handleRegister}>
                    <div className="input-group">
                        <label>Tên đăng nhập</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
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
                    <button type="submit" className="auth-button">Đăng Ký</button>
                </form>
                <p>Đã có tài khoản? <span onClick={() => navigate('/login')} className="toggle-link">Đăng Nhập</span></p>
            </div>
        </div>
    );
};

export default RegisterPage;
