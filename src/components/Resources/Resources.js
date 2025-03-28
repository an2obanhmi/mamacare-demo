import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Resources.css";
import ServiceFeedback from "./../Services/ServiceFeedback";

const doctors = [
  {
    id: "le-thanh-hung",
    name: "ThS. BS. CKII. Lê Thanh Hùng",
    position: ["Bệnh viện Quốc tế Mỹ" ,"(Phó khoa Phụ Sản)"],
    hospitals: ["Bệnh viện Từ Dũ", "Bệnh viện FV", "Bệnh viện Tâm Anh"],
    degrees: [
      "Tốt nghiệp Đại học Y Dược TP. Hồ Chí Minh - 1998",
      "Đào tạo chuyên sâu về Sản phụ khoa tại Pháp - 2001",
      "Thạc sĩ ngành Sản phụ khoa - 2004",
    ],
    experience: ["20 năm kinh nghiệm trong ngành Sản - Phụ khoa"],
    image: "/assets/docter1.jpg",
  },
  {
    id: "tran-thi-sang",
    name: "ThS. Trần Thị Sáng",
    position: "Bệnh viện Từ Dũ",
    hospitals: ["Bệnh viện FV", "CMI Việt Nam"],
    degrees: ["Chứng chỉ điều dưỡng chuyên nghiệp - 2005", "Chuyên gia tư vấn y tế - 2010"],
    experience: ["15 năm kinh nghiệm trong lĩnh vực điều dưỡng"],
    image: "/assets/docter2.jpg",
  },
  {
    id: "huynh-khac-luan",
    name: "BS. CKI. Huỳnh Khắc Luân",
    position: "Bệnh viện Nhi Đồng 2",
    hospitals: [],
    degrees: ["Bằng chuyên khoa I về Nhi khoa - 2007", "Đào tạo nâng cao về Chăm sóc trẻ sơ sinh - 2015"],
    experience: ["Hơn 10 năm kinh nghiệm trong lĩnh vực Nhi khoa"],
    image: "/assets/docter3.jpg",
  },
  {
    id: "dao-thi-nhung",
    name: "Đào Thị Nhung",
    position: "Chuyên viên chăm sóc mẹ và bé",
    hospitals: [],
    degrees: ["Dược sĩ trung cấp"],
    experience: ["Chăm sóc mẹ và bé tại nhà", "Hơn 2 năm kinh nghiệm"],
    image: "/assets/DaoThiNhung.jpg",
  },
  {
    id: "do-thi-ly-van",
    name: "Đỗ Thị Lý Vân",
    position: "Chuyên viên chăm sóc mẹ và bé",
    hospitals: [],
    degrees: ["Y sĩ đa khoa", "Chứng chỉ Chăm sóc mẹ và bé", "Chứng chỉ Nghiệp vụ sư phạm"],
    experience: ["Gần 8 năm kinh nghiệm trong ngành"],
    image: "/assets/DoThiLyVan.jpg",
  },
  {
    id: "le-thi-my-thoa",
    name: "Lê Thị Mỹ Thoa",
    position: "Chuyên viên chăm sóc mẹ và bé",
    hospitals: ["Làm việc tại trạm y tế xã Phước Sơn"],
    degrees: [
      "Chứng chỉ Chăm sóc mẹ và bé",
      " Cao đẳng y tế Bình Định",
    ],
    experience: [ "8  năm làm điều dưỡng tại bệnh viện đa khoa huyện Tuy Phước phụ trách bên khoa sản"],
    image: "/assets/LeThiMyThoa.jpg",
  },
  { 
    id: "nguyen-thi-thu-hong",
    name: "Nguyễn Thị Thu Hồng",
    position: "Chuyên viên chăm sóc mẹ và bé",
    hospitals: ["Làm việc tại trạm y tế xã Phước Sơn"],
    
    degrees: [
      "Y sĩ đa khoa",
      "Chứng chỉ Chăm sóc mẹ và bé",
      " Trung cấp y dược",
    ],
    experience: ["Có 10 năm kinh nghiệm chăm sóc mẹ và bé tại nhà"],
    image: "/assets/NguyenThiThuHong.jpg",
  },
];

const Resources = () => {
  return (
    <div className="wraaped-container">
        {/* Banner */}
        <div className="resources-banner">
        <img src="/assets/banner-service.jpg" alt="Resources Banner" className="banner-image" />
      </div>
    <div className="resources-container text-center my-5">
    <div className="section-divider"></div>
      <h2 className="mb-4">Đội ngũ bác sĩ chuyên môn</h2>
      <p className="text-muted">
        Bác sĩ Mamacare chịu trách nhiệm hỗ trợ trong các liệu trình chăm sóc và đào tạo.
      </p>
      <div className="row">
        {doctors.map((doctor) => (
          <div className="col-md-4 mb-4" key={doctor.id}>
            <div className="card shadow-sm">
              <img src={doctor.image} alt={doctor.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{doctor.name}</h5>
                <p className="card-text">{doctor.position}</p>
                <p><strong>Bằng cấp:</strong></p>
                <ul className="list-unstyled">
                  {doctor.degrees.map((degree, idx) => (
                    <li key={idx}>{degree}</li>
                  ))}
                </ul>
                <div className="d-flex justify-content-around">
                  <Link to={`/doctor/${doctor.id}`} className="btn btn-success">CHI TIẾT</Link>
                  <button className="btn btn-primary">VIDEO</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="section-divider"></div>
      <ServiceFeedback />
    </div>
    </div>
  );
};

export default Resources;
