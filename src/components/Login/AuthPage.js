import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../UserContext";
import "./AuthPage.css";
import { API_URL } from "../../config";

const AuthPage = () => {
  // State cho form đăng nhập
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  
  // State cho form đăng ký
  const [username, setUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [registerLoading, setRegisterLoading] = useState(false);
  
  // State chung
  const [isSignUp, setIsSignUp] = useState(false);
  
  const { login, user } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Kiểm tra nếu người dùng đã đăng nhập, chuyển hướng đến trang chủ
  useEffect(() => {
    if (user) {
      const redirectTo = location.state?.from || "/";
      navigate(redirectTo);
    }
  }, [user, navigate, location.state]);

  // Xử lý đăng nhập
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");
    setLoginLoading(true);
    try {
      const response = await axios.post(
        `${API_URL}/login`,
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      
      // Đăng nhập thành công
      login({ username: response.data.username, email });
      
      // Thông báo đăng nhập thành công
      alert('Đăng nhập thành công!');
      
      // Chuyển hướng đến trang chủ
      const redirectTo = location.state?.from || "/";
      navigate(redirectTo);
    } catch (error) {
      console.error(
        "Lỗi đăng nhập:",
        error.response ? error.response.data : error
      );
      setLoginError("Đăng nhập thất bại! Kiểm tra lại email và mật khẩu.");
    } finally {
      setLoginLoading(false);
    }
  };

  // Xử lý đăng ký
  const handleRegister = async (e) => {
    e.preventDefault();
    setRegisterError("");
    setRegisterLoading(true);
    
    // Kiểm tra dữ liệu đầu vào
    if (!username || !registerEmail || !registerPassword) {
      setRegisterError("Vui lòng điền đầy đủ thông tin!");
      setRegisterLoading(false);
      return;
    }

    try {
      console.log('Đang gửi dữ liệu đăng ký:', { 
        username, 
        email: registerEmail, 
        password: registerPassword 
      });
      
      const response = await axios.post(
        `${API_URL}/register`, 
        { 
          username, 
          email: registerEmail, 
          password: registerPassword 
        },
        {
          headers: { "Content-Type": "application/json" }
        }
      );
      
      console.log('Phản hồi từ server:', response.data);
      
      // Đăng ký thành công
      alert('Đăng ký thành công!');
      
      // Đăng nhập tự động sau khi đăng ký
      login({ username, email: registerEmail });
      
      // Chuyển hướng đến trang chủ
      navigate('/');
      
      // Reset form đăng ký
      setUsername("");
      setRegisterEmail("");
      setRegisterPassword("");
    } catch (error) {
      console.error("Chi tiết lỗi đăng ký:", {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data
      });
      
      if (error.response?.status === 500) {
        setRegisterError("Lỗi máy chủ! Vui lòng thử lại sau hoặc liên hệ quản trị viên.");
      } else if (error.response?.status === 400) {
        setRegisterError("Dữ liệu không hợp lệ. Vui lòng kiểm tra lại thông tin.");
      } else if (error.response?.status === 409) {
        setRegisterError("Email đã tồn tại. Vui lòng sử dụng email khác.");
      } else {
        setRegisterError("Đăng ký thất bại! Vui lòng thử lại sau.");
      }
    } finally {
      setRegisterLoading(false);
    }
  };

  return (
    <div className="auth-page fade-transition">
      {/* Nút quay về trang chủ */}
      <Link to="/" className="back-home-button">
        <i className="fas fa-home"></i> Quay về Trang chủ
      </Link>
      
      <div className={`container ${isSignUp ? 'right-panel-active' : ''}`}>
        {/* Form đăng ký */}
        <div className="form-container-auth sign-up-container">
          <form onSubmit={handleRegister}>
            <h1>Tạo tài khoản</h1>
            {registerError && <div className="error-message">{registerError}</div>}
            <input
              type="text"
              placeholder="Tên đăng nhập"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Mật khẩu"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
              required
            />
            <button type="submit" disabled={registerLoading}>
              {registerLoading ? "Đang xử lý..." : "Đăng ký"}
            </button>
          </form>
        </div>
        
        {/* Form đăng nhập */}
        <div className="form-container-auth sign-in-container">
          <form onSubmit={handleLogin}>
            <h1>Đăng nhập</h1>
            {loginError && <div className="error-message">{loginError}</div>}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a href="#forgot-password">Quên mật khẩu?</a>
            <button type="submit" disabled={loginLoading}>
              {loginLoading ? "Đang xử lý..." : "Đăng nhập"}
            </button>
          </form>
        </div>
        
        {/* Overlay - Phần nền di chuyển */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Chào mừng trở lại!</h1>
              <p>Vui lòng đăng nhập để kết nối với tài khoản của bạn</p>
              <button 
                className="ghost" 
                id="signIn" 
                onClick={() => setIsSignUp(false)}
              >
                Đăng nhập
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Xin chào bạn!</h1>
              <p>Nhập thông tin cá nhân để bắt đầu hành trình với chúng tôi</p>
              <button 
                className="ghost" 
                id="signUp" 
                onClick={() => setIsSignUp(true)}
              >
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
