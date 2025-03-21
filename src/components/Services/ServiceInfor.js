// ServiceInfor.js
import React from 'react';
import './ServiceInfor.css';

const servicesData = {
  'baby-care': {
    name: 'Chăm Sóc Bé Tại Nhà',
    description: 'Hãy để bé khỏe mạnh – Thông minh – Phát triển toàn diện ngay từ những năm tháng đầu đời.',
    challenges: [
      'Cơ thể mẹ còn rất yếu, đi lại khó khăn.',
      'Mẹ chưa có nhiều kinh nghiệm trong việc chăm sóc trẻ sơ sinh.',
      'Con yêu còn quá nhỏ, rốn chưa rụng.',
    ],
    benefits: [
      'Thư giãn và thoải mái',
      'Giảm căng thẳng',
      'Phát triển toàn diện',
      'Tăng cường sức đề kháng',
      'Tăng sự gắn kết mẹ và bé',
    ],
    mediaRecognition: 'MamaCare đã nhận được sự quan tâm của nhiều báo chí nổi tiếng như Báo Sức Khỏe Đời Sống, Báo Dân Trí, và nhiều hơn nữa.'
  },
  'postpartum-care': {
    name: 'Chăm Sóc Sau Sinh',
    description: 'Giúp mẹ phục hồi sức khỏe sau sinh và chăm sóc bé yêu một cách tốt nhất.',
    challenges: [
      'Mệt mỏi, suy nhược cơ thể sau khi sinh.',
      'Thiếu kiến thức chăm sóc bé sơ sinh.',
      'Dễ bị stress và trầm cảm sau sinh.',
    ],
    benefits: [
      'Giảm đau mỏi cơ thể',
      'Cải thiện tuần hoàn máu',
      'Tăng cường sức khỏe tinh thần',
      'Thúc đẩy tiết sữa tự nhiên',
      'Phòng tránh các bệnh hậu sản',
    ],
    mediaRecognition: 'Dịch vụ MamaCare được nhắc đến trên nhiều diễn đàn mẹ và bé, nhận được phản hồi tích cực từ hàng ngàn mẹ bỉm sữa.'
  },
  'pregnancy-care': {
    name: 'Chăm Sóc Mẹ Bầu',
    description: 'Chăm sóc toàn diện cho mẹ bầu giúp giảm đau nhức và duy trì sức khỏe ổn định.',
    challenges: [
      'Đau lưng, mỏi vai gáy do tăng cân.',
      'Phù chân, tay do tích nước.',
      'Căng thẳng, lo lắng trước khi sinh.',
    ],
    benefits: [
      'Giảm đau nhức, mệt mỏi',
      'Thúc đẩy lưu thông máu',
      'Tăng cường sức đề kháng',
      'Chuẩn bị tốt hơn cho quá trình sinh nở',
    ],
    mediaRecognition: 'Nhiều mẹ bầu tin dùng dịch vụ của MamaCare và đánh giá cao hiệu quả thư giãn, chăm sóc sức khỏe.'
  },
  'milk-duct-treatment': {
    name: 'Chữa Tắc Tia Sữa',
    description: 'Giúp mẹ thông tia sữa hiệu quả, tránh viêm tuyến vú và đảm bảo nguồn sữa cho bé.',
    challenges: [
      'Tắc sữa, căng tức ngực.',
      'Viêm tuyến vú gây đau đớn.',
      'Bé khó bú mẹ do sữa ra không đều.',
    ],
    benefits: [
      'Thông tia sữa nhanh chóng',
      'Giảm đau, giảm viêm nhiễm',
      'Duy trì nguồn sữa mẹ dồi dào',
      'Giúp bé bú mẹ dễ dàng hơn',
    ],
    mediaRecognition: 'Dịch vụ hỗ trợ mẹ bỉm sữa của MamaCare được chia sẻ rộng rãi trên các diễn đàn mẹ và bé.'
  }
};

// **Dữ liệu bảng giá** (Giữ nguyên)
const pricingData = [
  {
    package: "GÓI LẺ",
    description: "Dịch vụ chăm sóc sức khỏe cơ bản, tập trung vào các nhu cầu thiết yếu của mẹ và bé.",
    services: [
      "Massage nhẹ nhàng hỗ trợ lưu thông máu.",
      "Vệ sinh cá nhân và chăm sóc vết mổ.",
      "Chăm sóc vệ sinh rốn, tai, mũi, miệng cho bé."
    ],
    duration: "2 giờ",
    sessions: "1 buổi",
    price: "300,000 VND"
  },
  {
    package: "GÓI CƠ BẢN: “MẸ TRÒN CON VUÔNG”",
    description: "Chăm sóc sức khỏe hàng ngày sau sinh với các dịch vụ cần thiết.",
    services: [
      "Massage nhẹ nhàng hỗ trợ lưu thông máu.",
      "Vệ sinh cá nhân và chăm sóc vết mổ.",
      "Chăm sóc vệ sinh rốn, tai, mũi, miệng cho bé."
    ],
    duration: "2 giờ/buổi",
    sessions: "12 buổi",
    price: "2,000,000 VND"
  },
  {
    package: "GÓI NÂNG CAO: “HỒI PHỤC TOÀN DIỆN”",
    description: "Tăng cường phục hồi thể chất cho mẹ, hỗ trợ chăm sóc toàn diện.",
    services: [
      "Massage nhẹ nhàng hỗ trợ lưu thông máu.",
      "Vệ sinh cá nhân và chăm sóc vết mổ.",
      "Chăm sóc vệ sinh rốn, tai, mũi, miệng cho bé.",
      "Ủ muối bụng",
      "Mát xa vùng thông tia sữa."
    ],
    duration: "2 giờ/buổi",
    sessions: "20 buổi",
    price: "4,000,000 VND"
  },
  {
    package: "GÓI CAO CẤP: “CHĂM SÓC VÀNG”",
    description: "Chăm sóc chuyên sâu với liệu pháp thảo dược, trị liệu vật lý.",
    services: [
      "Massage nhẹ nhàng hỗ trợ lưu thông máu.",
      "Vệ sinh cá nhân và chăm sóc vết mổ.",
      "Chăm sóc vệ sinh rốn, tai, mũi, miệng cho bé.",
      "Ủ muối bụng",
      "Mát xa vùng thông tia sữa",
      "Xông hơi vùng kín, xông hơi toàn thân bằng thảo dược."
    ],
    duration: "3 giờ/buổi",
    sessions: "25 buổi",
    price: "6,000,000 VND"
  }
];

const ServiceInfor = ({ typeService }) => {
  const service = servicesData[typeService];

  if (!service) {
    return <div className="service-not-found">Service not found</div>;
  }

  return (
    <div className="service-info">
      <h1 className="service-title">{service.name}</h1>
      <p className="service-description">{service.description}</p>

      <div className="service-section">
        <h2 className="section-title-infor">Những trở ngại mẹ có thể gặp</h2>
        <ul className="service-list">
          {service.challenges.map((item, index) => (
            <li key={index} className="list-item">{item}</li>
          ))}
        </ul>
      </div>

      <div className="service-section">
        <h2 className="section-title-infor">Lợi ích</h2>
        <ul className="service-list">
          {service.benefits.map((item, index) => (
            <li key={index} className="list-item">{item}</li>
          ))}
        </ul>
      </div>

      <div className="service-section">
        <h2 className="section-title-infor">Báo chí nói về chúng tôi</h2>
        <p className="media-recognition">{service.mediaRecognition}</p>
      </div>

      <div className="service-section pricing-table-section">
        <h2 className="section-title">Bảng giá dịch vụ</h2>
        <table className="pricing-table">
          <thead>
            <tr>
              <th>Gói</th>
              <th>Mô tả</th>
              <th>Dịch vụ</th>
              <th>Thời gian</th>
              <th>Số buổi</th>
              <th>Giá</th>
            </tr>
          </thead>
          <tbody>
            {pricingData.map((row, index) => (
              <tr key={index}>
                <td>{row.package}</td>
                <td>{row.description}</td>
                <td>
                  <ul>
                    {row.services.map((service, idx) => (
                      <li key={idx}>{service}</li>
                    ))}
                  </ul>
                </td>
                <td>{row.duration}</td>
                <td>{row.sessions}</td>
                <td>{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceInfor;
