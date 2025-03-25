import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: '1',
      name: 'Chăm Sóc Bé Tại Nhà',
      description: 'Hãy để bé khỏe mạnh – Thông minh – Phát triển toàn diện ngay từ những năm tháng đầu đời.',
      image: 'https://homecaresausinh.com/wp-content/uploads/2024/06/img_service1.png'
    },
    {
      id: '2',
      name: 'Chăm sóc sau sinh',
      description: 'Sau sinh, sức khỏe của mẹ thay đổi nhanh chóng. Mẹ phải đối mặt với nhiều thay đổi.',
      image: 'https://homecaresausinh.com/wp-content/uploads/2024/06/img_service2.png'
    },
    {
      id: '3',
      name: 'Chăm sóc mẹ bầu',
      description: 'Mang thai là giai đoạn nhạy cảm, tinh thần mẹ bầu ảnh hưởng lớn đến sự phát triển của thai nhi.',
      image: 'https://homecaresausinh.com/wp-content/uploads/2024/06/img_service3.png'
    },
    {
      id: '4',
      name: 'Chữa tia tắc sữa',
      description: 'Sữa mẹ là nguồn dinh dưỡng tốt nhất cho trẻ sơ sinh và trẻ nhỏ. Nuôi con bằng sữa mẹ là một lựa chọn tuyệt vời.',
      image: 'https://homecaresausinh.com/wp-content/uploads/2024/06/img_service4.png'
    }
  ];

  return (
    <div className="services-container">
      <div className="services-content">
        <h2 className="services-title">Dịch vụ của MamaCare</h2>
        
        <div className="services-cards">
          {services.map((service) => (
            <Link 
              to={`/services/${service.id}`} 
              key={service.id} 
              className="service-card"
            >
              <div className="service-icon">
                <img src={service.image} alt={service.name} />
              </div>
              <h3 className="service-name-item">{service.name}</h3>
              <p className="service-description-item">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;