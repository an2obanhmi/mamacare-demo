import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ServiceForm.css';
import servicesData from '../../data/servicesData';

const ServiceForm = ({ typeService }) => {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const serviceData = servicesData[typeService];

  if (!serviceData) {
    return null;
  }

  const handlePackageSelect = (serviceId, packageName) => {
    const serviceObj = serviceData.services.find(s => s.id === serviceId);
    setSelectedPackage({ 
      serviceId, 
      packageName,
      serviceName: serviceObj.name,
      price: serviceObj.sessions[packageName],
      duration: serviceObj.duration,
      description: serviceObj.description.join(', ').substring(0, 100) + '...'
    });
    setShowBookingForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Vui lòng nhập họ tên';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Vui lòng nhập số điện thoại';
    } else if (!/^[0-9]{10,11}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Số điện thoại không hợp lệ';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Vui lòng nhập email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Email không hợp lệ';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Map dịch vụ đã chọn sang định dạng mà ServicePay sử dụng
    let servicePackageTitle;
    switch(selectedPackage.packageName) {
      case "1 buổi":
        servicePackageTitle = "Gói Lẻ";
        break;
      case "10 buổi":
        servicePackageTitle = "Gói Cơ Bản: \"Mẹ Tròn Con Vuông\"";
        break;
      case "30 buổi":
        servicePackageTitle = serviceData.name.includes("sau sinh") 
          ? "Gói Nâng Cao: \"Hồi Phục Toàn Diện\""
          : "Gói Cao Cấp: \"Chăm Sóc Vàng\"";
        break;
      default:
        servicePackageTitle = selectedPackage.serviceName;
    }
    
    // Chuyển hướng đến trang ServicePay với dữ liệu đầy đủ
    navigate('/service-pay', { 
      state: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message || "Không có lời nhắn",
        servicePackage: servicePackageTitle,
        // Thêm thông tin chi tiết để email đầy đủ hơn
        serviceDetails: {
          originalName: selectedPackage.serviceName,
          originalPackage: selectedPackage.packageName,
          price: selectedPackage.price,
          duration: selectedPackage.duration,
          description: selectedPackage.description,
          serviceType: serviceData.name
        }
      }
    });
  };

  return (
    <div className="service-form-container">
      <h2 className="price-table-title">Bảng giá dịch vụ</h2>
      
      <div className="service-table-container">
        <table className="service-table">
          <thead>
            <tr>
              <th>GÓI</th>
              <th>MÔ TẢ</th>
              <th>DỊCH VỤ</th>
              <th>THỜI GIAN</th>
              <th>SỐ BUỔI</th>
              <th>GIÁ</th>
            </tr>
          </thead>
          <tbody>
            {serviceData.services.map((service) => {
              const sessionEntries = Object.entries(service.sessions);
              return sessionEntries.map(([sessionName, price], index) => (
                <tr 
                  key={`${service.id}-${sessionName}`}
                  className={selectedPackage && selectedPackage.serviceId === service.id && selectedPackage.packageName === sessionName ? 'selected-row' : ''}
                  onClick={() => handlePackageSelect(service.id, sessionName)}
                >
                  {index === 0 && (
                    <>
                      <td rowSpan={sessionEntries.length} className="service-name-cell">
                        {service.name}
                      </td>
                      <td rowSpan={sessionEntries.length} className="service-desc-cell">
                        {service.shortDescription || service.description[0]}
                      </td>
                      <td rowSpan={sessionEntries.length} className="service-list-cell">
                        <ul>
                          {service.description.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </td>
                      <td rowSpan={sessionEntries.length}>{service.duration}</td>
                    </>
                  )}
                  <td>{sessionName}</td>
                  <td className="price-cell">{price}</td>
                </tr>
              ));
            })}
          </tbody>
        </table>
      </div>

      {showBookingForm && selectedPackage && (
        <div className="booking-form-wrapper">
          <h2 className="booking-form-title">Đặt ngay dịch vụ</h2>
          
          <div className="booking-form">
            <h3>Đặt dịch vụ</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="service-form-group">
                <label htmlFor="name">Họ và tên:</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              
              <div className="service-form-group">
                <label htmlFor="email">Email:</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className="service-form-group">
                <label htmlFor="phone">Số điện thoại:</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={errors.phone ? 'error' : ''}
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>
              
              <div className="service-form-group">
                <label htmlFor="message">Lời nhắn:</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                ></textarea>
              </div>
              
              <div className="service-form-group">
                <label>Gói dịch vụ:</label>
                <div className="selected-package-info">
                  <p>{selectedPackage.serviceName} - {selectedPackage.packageName} - {selectedPackage.price}</p>
                </div>
              </div>
              
              <button type="submit" className="submit-button">Đặt ngay</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceForm;
