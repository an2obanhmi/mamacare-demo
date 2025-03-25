// ServiceInfor.js
import React, { useEffect } from 'react';
import './ServiceInfor.css';
import servicesData from '../../data/servicesData';

const ServiceInfor = ({ typeService }) => {
  const serviceData = servicesData[typeService];

  useEffect(() => {
    // Hàm này thêm class animation khi phần tử xuất hiện trong viewport
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-fade-in');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (elementPosition.top < windowHeight * 0.9) {
          element.style.animationPlayState = 'running';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Kích hoạt ngay lần đầu load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!serviceData) {
    return null;
  }

  return (
    <>
      <div className="service-info-container">
        <h2 className="service-name">{serviceData.name}</h2>
        <p className="service-description">{serviceData.description}</p>
        
        <div className="service-content-grid">
          <div className="service-challenges">
            <h3>NHỮNG TRỞ NGẠI MẸ CÓ THỂ GẶP</h3>
            <ul>
              {serviceData.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>
          
          <div className="service-benefits">
            <h3>LỢI ÍCH</h3>
            <ul>
              {serviceData.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
          
          <div className="service-testimonials">
            <h3>BÁO CHÍ NÓI VỀ CHÚNG TÔI</h3>
            <p>{serviceData.testimonial}</p>
          </div>
        </div>
      </div>
      
      {/* Thêm phần Parallax */}
      <div className="parallax-section">
        <div className="parallax-content">
          <h2 className="animate-fade-in delay-100">Trải nghiệm dịch vụ chăm sóc tận tâm</h2>
          <p className="animate-fade-in delay-200">
            Tại MamaCare, chúng tôi mang đến dịch vụ chăm sóc tận tình, đảm bảo sức khỏe và sự an tâm cho mẹ và bé. 
            Đội ngũ chuyên viên được đào tạo chuyên sâu, sẵn sàng hỗ trợ bạn trong mọi giai đoạn.
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceInfor;
