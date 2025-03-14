import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Resources.css";
import ServiceFeedback from "./../Services/ServiceFeedback";

const doctors = [
  {
    id: "le-thanh-hung",
    name: "ThS. BS. CKII. Lê Thanh Hùng",
    position: "Bệnh viện Quốc tế Mỹ (Phó khoa Phụ Sản)",
    hospitals: ["Bệnh viện Từ Dũ", "Bệnh viện FV", "Bệnh viện Tâm Anh"],
    image: "/assets/docter1.jpg",
  },
  {
    id: "tran-thi-sang",
    name: "ThS. Trần Thị Sáng",
    position: "Bệnh viện Từ Dũ",
    hospitals: ["Bệnh viện FV", "CMI Việt Nam"],
    image: "/assets/docter2.jpg",
  },
  {
    id: "huynh-khac-luan",
    name: "BS. CKI. Huỳnh Khắc Luân",
    position: "Bệnh viện Nhi Đồng 2",
    hospitals: [],
    image: "/assets/docter3.jpg",
  },
];

const Resources = () => {
  return (
    <div className="resources-wrapper">
      {/* Banner Trái */}
      <div className="banner-left">
        <img src="/assets/banner-left.jpg" alt="Banner Left" width="150px" height="500px" />
      </div>

      {/* Banner Phải */}
      <div className="banner-right">
        <img src="/assets/banner-right.jpg" alt="Banner Right" width="150px" height="500px" />
      </div>

      {/* Nội dung chính */}
      <div className="resources-container text-center my-5">
        <h2 className="mb-4">Đội ngũ bác sĩ chuyên môn</h2>
        <p className="text-muted">
          Bác sĩ Mamacare chịu trách nhiệm hỗ trợ trong các liệu trình chăm sóc và đào tạo.
        </p>

        {/* Hiển thị bác sĩ */}
        <div className="row">
          {doctors.map((doctor) => (
            <div className="col-md-4 mb-4" key={doctor.id}>
              <div className="card shadow-sm">
                <img src={doctor.image} alt={doctor.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{doctor.name}</h5>
                  <p className="card-text">{doctor.position}</p>
                  {doctor.hospitals.length > 0 && (
                    <ul className="list-unstyled">
                      {doctor.hospitals.map((hospital, idx) => (
                        <li key={idx}>{hospital}</li>
                      ))}
                    </ul>
                  )}
                  <div className="d-flex justify-content-around">
                    <Link to={`/doctor/${doctor.id}`} className="btn btn-success">CHI TIẾT</Link>
                    <button className="btn btn-primary">VIDEO</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <ServiceFeedback />
      </div>
    </div>
  );
};

export default Resources;
