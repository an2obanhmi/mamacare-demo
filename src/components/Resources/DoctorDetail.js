import React from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./DoctorDetail.css";

const doctorData = {
  "le-thanh-hung": {
    name: "ThS. BS. CKII. Lê Thanh Hùng",
    position: "Bệnh viện Quốc tế Mỹ (Phó khoa Phụ Sản)",
    hospitals: ["Bệnh viện Từ Dũ", "Bệnh viện FV", "Bệnh viện Tâm Anh"],
    image: "/assets/docter1.jpg",
    gallery: [
      "/assets/gallery1.jpg",
      "/assets/gallery2.jpg",
      "/assets/gallery3.jpg",
      "/assets/gallery4.jpg",
    ],
    degrees: [
      "Tốt nghiệp Đại học Y Dược TP. Hồ Chí Minh - 1998",
      "Đào tạo chuyên sâu về Sản phụ khoa tại Pháp - 2001",
      "Thạc sĩ ngành Sản phụ khoa - 2004",
      "Chứng chỉ chuyên sâu về Siêu âm, nội soi Phụ khoa - 2011",
    ],
    experience: ["20 năm kinh nghiệm trong ngành Sản - Phụ khoa"],
    message:
      "Tôi luôn mong muốn mang đến sự chăm sóc tốt nhất cho các mẹ bầu và em bé.",
  },
  "tran-thi-sang": {
    name: "ThS. Trần Thị Sáng",
    position: "Bệnh viện Từ Dũ",
    hospitals: ["Bệnh viện FV", "CMI Việt Nam"],
    image: "/assets/docter2.jpg",
    gallery: [
      "/assets/gallery1.jpg",
      "/assets/gallery2.jpg",
      "/assets/gallery3.jpg",
      "/assets/gallery4.jpg",
    ],
    degrees: [
      "Chứng chỉ điều dưỡng chuyên nghiệp - 2005",
      "Chuyên gia tư vấn y tế - 2010",
    ],
    experience: ["15 năm kinh nghiệm trong lĩnh vực điều dưỡng"],
    message:
      "Chúng tôi luôn đồng hành cùng các mẹ để mang đến trải nghiệm chăm sóc tốt nhất.",
  },
  "huynh-khac-luan": {
    name: "BS. CKI. Huỳnh Khắc Luân",
    hospitals: [],
    gallery: [
      "/assets/gallery1.jpg",
      "/assets/gallery2.jpg",
      "/assets/gallery3.jpg",
      "/assets/gallery4.jpg",
    ],
    image: "/assets/docter3.jpg",
    degrees: [
      "Bằng chuyên khoa I về Nhi khoa - 2007",
      "Đào tạo nâng cao về Chăm sóc trẻ sơ sinh - 2015",
    ],
    experience: ["Hơn 10 năm kinh nghiệm trong lĩnh vực Nhi khoa"],
    message: "Sức khỏe của trẻ là ưu tiên hàng đầu của tôi.",
  },
  "dao-thi-nhung": {
    name: "Đào Thị Nhung",
    position: "Chuyên viên chăm sóc mẹ và bé",
    hospitals: ["qn"],
    gallery: [
      "/assets/gallery1.jpg",
      "/assets/gallery2.jpg",
      "/assets/gallery3.jpg",
      "/assets/gallery4.jpg",
    ],
    image: "/assets/DaoThiNhung.jpg",
    degrees: ["Dược sĩ trung cấp"],
    experience: ["Chăm sóc mẹ và bé tại nhà", "Hơn 2 năm kinh nghiệm"],
    message:
      "Chúng tôi luôn đồng hành cùng các mẹ để mang đến trải nghiệm chăm sóc tốt nhất.",
  },
  "do-thi-ly-van": {
    name: "Đỗ Thị Lý Vân",
    position: "Chuyên viên chăm sóc mẹ và bé",
    hospitals: ["qn"],
    gallery: [
      "/assets/gallery1.jpg",
      "/assets/gallery2.jpg",
      "/assets/gallery3.jpg",
      "/assets/gallery4.jpg",
    ],
    image: "/assets/DoThiLyVan.jpg",
    degrees: [
      "Y sĩ đa khoa",
      "Chứng chỉ Chăm sóc mẹ và bé",
      "Chứng chỉ Nghiệp vụ sư phạm",
    ],
    experience: ["Gần 8 năm kinh nghiệm trong ngành"],
    message:
      "Chúng tôi luôn đồng hành cùng các mẹ để mang đến trải nghiệm chăm sóc tốt nhất.",
  },
};

const DoctorDetail = () => {
  const { doctorId } = useParams();
  const doctor = doctorData[doctorId];

  if (!doctor) {
    return <h2>Bác sĩ không tồn tại!</h2>;
  }

  return (
    <div className="doctor-detail-container">
      {/* Banner chạy ảnh */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="doctor-gallery"
      >
        {doctor.gallery.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Gallery ${index}`} className="gallery-image" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thông tin bác sĩ */}
      <div className="doctor-header">
        <img src={doctor.image} alt={doctor.name} className="doctor-image" />
        <div className="doctor-info-text">
          <h2>{doctor.name}</h2>
          <p className="doctor-position">{doctor.position}</p>
        </div>
      </div>

      {/* Kinh nghiệm & Bằng cấp */}
      <div className="doctor-experience-certificates">
        <div className="doctor-experience">
          <h3>Kinh nghiệm làm việc</h3>
          <ul>
            {doctor.experience.map((exp, index) => (
              <li key={index}>{exp}</li>
            ))}
          </ul>
        </div>

        <div className="doctor-certificates">
          <h3>Bằng cấp - Chứng chỉ</h3>
          <ul>
            {doctor.degrees.map((degree, index) => (
              <li key={index}>{degree}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Lời nhắn từ bác sĩ */}
      <div className="doctor-message">
        <h3>Lời nhắn từ bác sĩ</h3>
        <p>{doctor.message}</p>
      </div>

      {/* Nút liên hệ & đặt lịch */}
      <div className="doctor-buttons">
        <button className="btn btn-primary">Liên hệ ngay</button>
      </div>
    </div>
  );
};

export default DoctorDetail;
