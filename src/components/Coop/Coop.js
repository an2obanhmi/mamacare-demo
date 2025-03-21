import React from "react";
import "./Coop.css";

const Coop = () => {
  return (
    <div className="coop-container">
      {/* Banner */}
      <div className="coop-banner">
        <h1>CÙNG NHAU TẠO NÊN HẠNH PHÚC CHO MẸ VÀ BÉ</h1>
        <p>
          Tại Mamacare, chúng tôi không chỉ xây dựng một nền tảng chăm sóc toàn
          diện giúp các mẹ vượt qua những thử thách sau sinh, mà còn mang đến
          niềm vui và sự bình yên cho cả gia đình.
        </p>
      </div>

      {/* Nội dung chính */}
      <div className="coop-content">
        <h2>Sứ mệnh của Mamacare</h2>
        <p>
          Dịch vụ chăm sóc sau sinh của chúng tôi kết hợp công nghệ hiện đại cùng
          sự tận tâm, giúp các mẹ nhanh chóng hồi phục về sức khỏe và tinh thần,
          đồng thời chăm sóc bé yêu với sự chu đáo và yêu thương nhất.
        </p>
        <p>
          Đây là sứ mệnh mà Mamacare tự hào mang đến: giúp các mẹ có những khoảnh
          khắc an tâm và hạnh phúc khi được chăm sóc bởi đội ngũ chuyên nghiệp và
          giàu lòng nhân ái của chúng tôi.
        </p>
      </div>

      {/* Lợi ích hợp tác */}
      <div className="coop-benefits">
        <h2>Lợi ích khi hợp tác cùng Mamacare</h2>
        <div className="benefits-list">
          <div className="benefit-item">
            <h3>Đối với bệnh viện & phòng khám</h3>
            <p>
              - Tùy chỉnh chương trình chăm sóc sức khỏe tại nhà cho bệnh nhân.
              <br />
              - Phát triển thương hiệu và tiếp cận nhiều bệnh nhân hơn.
              <br />
              - Xây dựng chương trình chăm sóc sau xuất viện giúp hồi phục nhanh hơn.
            </p>
          </div>
          <div className="benefit-item">
            <h3>Đối với bác sĩ & y tá</h3>
            <p>
              - Cung cấp dịch vụ chăm sóc tại nhà chuyên nghiệp.<br />
              - Xây dựng thương hiệu cá nhân và chia sẻ kiến thức y tế hữu ích.<br />
              - Hỗ trợ bệnh nhân hồi phục nhanh sau sinh.
            </p>
          </div>
          <div className="benefit-item">
            <h3>Đối với đối tác doanh nghiệp</h3>
            <p>
              - Cơ hội mở rộng dịch vụ chăm sóc mẹ & bé.<br />
              - Hợp tác quảng bá và nâng cao độ nhận diện thương hiệu.<br />
              - Hỗ trợ phát triển các chương trình ưu đãi đặc biệt cho khách hàng.
            </p>
          </div>
        </div>
      </div>

      {/* Lời mời hợp tác */}
      <div className="coop-invitation">
        <h2>Hãy cùng Mamacare tạo nên giá trị</h2>
        <p>
          Nếu bạn quan tâm đến việc hợp tác cùng Mamacare, hãy liên hệ với chúng tôi ngay hôm nay để cùng nhau tạo ra những giá trị tốt đẹp cho mẹ và bé.
        </p>
        <button  className="contact-button" >Liên hệ ngay</button>
      </div>
    </div>
  );
};

export default Coop;
