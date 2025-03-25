import React from "react";
import { useParams } from "react-router-dom";
import "./ServiceDetail.css";
import ServiceForm from "./ServiceForm";
import ServiceInfor from "./ServiceInfor";
import servicesData from "../../data/servicesData";

const ServiceDetail = () => {
  const { id } = useParams();
  
  // Ánh xạ ID sang slug dịch vụ
  const serviceMapping = {
    "1": "cham-soc-be-tai-nha",
    "2": "cham-soc-sau-sinh",
    "3": "cham-soc-me-bau",
    "4": "chua-tac-tia-sua"
  };

  const typeService = serviceMapping[id];
  const serviceData = servicesData[typeService];

  // Nếu không tìm thấy dịch vụ, chuyển hướng về trang dịch vụ
  if (!serviceData) {
    return (
      <div className="service-not-found">
        <h2>Không tìm thấy dịch vụ</h2>
      </div>
    );
  }

  return (
    <div className="service-detail-container">
      <div className="service-detail-header">
        <h1>Dịch vụ của MamaCare</h1>
        <p className="service-intro">
          Chúng tôi cung cấp các gói dịch vụ giúp mẹ bầu và em bé có một trải nghiệm chăm sóc tốt nhất.
        </p>
      </div>
      
      <div className="service-detail-content">
        {/* Thông tin dịch vụ */}
        <ServiceInfor typeService={typeService} />

        {/* Form đặt dịch vụ */}
        <div className="form-section">
          <h2>Đặt ngay dịch vụ</h2>
          <ServiceForm typeService={typeService} />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;