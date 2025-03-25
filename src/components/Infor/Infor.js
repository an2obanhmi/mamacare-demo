import React from "react";
import "./Infor.css"; // Import your CSS styling

const Infor = () => {
  return (
    <footer className="footer-i">
      <div className="infor-container-infor">
        <div className="footer-content">
          {/* Company Information */}
          <div className="company-info">
            <img
              src="/assets/icon.jpg"
              alt="Homecare Logo"
              className="company-logo"
            />
            <h3 className="company-title">
              CÔNG TY TNHH CHĂM SÓC MẸ VÀ BÉ TẠI NHÀ MamaCARE
            </h3>
            <p>Địa chỉ: Quy Nhơn, Bình Định Việt Nam.</p>
            <p>Tổng đài hỗ trợ: 6666 0000</p>
            <p>Hotline: 079 937 9956</p>
            <p>Email: mamacare666@gmail.com</p>
            <p>
              Mã số doanh nghiệp: 0102100740-012 do TRƯỜNG ĐẠI HỌC FPT TẠI TỈNH
              BÌNH ĐỊNH cấp lần đầu ngày 02/03/2022
            </p>
          </div>

          {/* Social Media Links */}
          <div className="social-media">
            <h3 className="section-title">Nền tảng mạng xã hội</h3>
            <div className="fb-page">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61571516415576&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="410"
                height="320"
                title="Facebook Page"
                frameBorder="0"
                scrolling="no"
                allow="encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Footer Links */}
          <div className="footer-links">
            <h3 className="section-title">Liên kết trên trang</h3>
            <ul className="menu">
              <li>
                <a href="https://mamacare-demo.vercel.app/service/baby-care/">
                  Chăm Sóc Bé Tại Nhà
                </a>
              </li>
              <li>
                <a href="https://mamacare-demo.vercel.app/service/postpartum-care/">
                  Chăm sóc sau sinh
                </a>
              </li>
              <li>
                <a href="https://mamacare-demo.vercel.app/service/pregnancy-care/">
                  Chăm sóc mẹ bầu
                </a>
              </li>
              <li>
                <a href="https://mamacare-demo.vercel.app/service/milk-duct-treatment/">
                  Chữa tia tắc sữa
                </a>
              </li>
            </ul>

            {/* Social Media Icons */}
            <ul className="social-icons">
              <li>
                <a href="https://www.facebook.com/people/Mamacare-D%E1%BB%8Bch-v%E1%BB%A5-ch%C4%83m-s%C3%B3c-m%E1%BA%B9-sau-sinh/61571516415576/">
                  <img
                    src="/assets/facebook.png"
                    alt="Facebook"
                  />
                </a>
              </li>
              <li>
                <a href="/">
                  <img
                    src="/assets/instagram.png"
                    alt="Instagram"
                  />
                </a>
              </li>
              <li>
                <a href="/">
                  <img
                    src="/assets/tiktok.png"
                    alt="TikTok"
                  />
                </a>
              </li>
              <li>
                <a href="/">
                  <img
                    src="/assets/shopee.png"
                    alt="Shopee"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Infor;
