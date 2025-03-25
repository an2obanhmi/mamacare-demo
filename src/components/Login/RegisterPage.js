      import React, { useState, useContext } from "react";
      import { useNavigate, useLocation } from "react-router-dom";
      import axios from "axios";
      import { UserContext } from "../UserContext";
      import "./RegisterPage.css"; // Tên file CSS mới
      import { API_URL } from "../../config";

      const RegisterPage = () => {
        const [username, setUsername] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [error, setError] = useState("");
        const [loading, setLoading] = useState(false);
        const navigate = useNavigate();
        const location = useLocation();
        const { login } = useContext(UserContext);

        const handleRegister = async (e) => {
          e.preventDefault();
          setError("");
          setLoading(true);
          try {
            await axios.post(`${API_URL}/register`, { username, email, password });
            login({ username, email });
            navigate("/login", { state: { from: location.state?.from } });
          } catch (error) {
            setError("Đăng ký thất bại! Email có thể đã tồn tại.");
          } finally {
            setLoading(false);
          }
        };

        return (
          <div className="register-page fade-transition">
            <section className="register-container">
              {/* Panel thông tin bên trái */}
              <div className="register-info-container">
                <div className="register-info">
                  <h1>Chào mừng trở lại!</h1>
                  <p>Vui lòng đăng nhập để kết nối với tài khoản của bạn</p>
                  <button
                    className="ghost-button"
                    onClick={() => {
                      document
                        .querySelector(".register-page")
                        ?.classList.add("fade-exit");
                      setTimeout(() => navigate("/login"), 500);
                    }}
                  >
                    Đăng nhập
                  </button>
                </div>
              </div>

              {/* Form đăng ký bên phải */}
              <div className="register-form-container">
                <form onSubmit={handleRegister}>
                  <h1>Tạo tài khoản</h1>
                  {error && <div className="error-message">{error}</div>}
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
                  <button type="submit" disabled={loading}>
                    {loading ? "Đang xử lý..." : "Đăng ký"}
                  </button>
                </form>
              </div>
            </section>
          </div>
        );
      };

      export default RegisterPage;
