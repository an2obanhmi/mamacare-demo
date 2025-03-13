import React from "react";
import { useParams } from "react-router-dom";
import ServiceInfor from "./ServiceInfor";
import ServiceForm from "./ServiceForm";
import ServiceFeedback from "./ServiceFeedback";
import "./ServiceDetail.css";

const ServiceDetail = () => {
  const { typeService } = useParams();

  return (
    <div className="service-detail-container">
      {/* Header */}
      <div className="service-header">
        <h1>Dịch vụ của MamaCare</h1>
        <p>
          Chúng tôi cung cấp các gói dịch vụ giúp mẹ bầu và em bé có một trải nghiệm chăm sóc tốt nhất.
        </p>
      </div>

      {/* Thông tin dịch vụ */}
      <ServiceInfor typeService={typeService} />

      {/* Form đặt dịch vụ */}
      <div className="form-section">
        <h2>Đặt ngay dịch vụ</h2>
        <ServiceForm />
      </div>

      {/* Feedback khách hàng */}
      <div className="feedback-section">
        <h2>Khách hàng nói gì về chúng tôi?</h2>
        <ServiceFeedback />
      </div>
    </div>
  );
};

export default ServiceDetail;
