// Hàm để tạo hiệu ứng parallax khi cuộn trang
export const initParallaxEffect = () => {
  const parallaxSections = document.querySelectorAll('.parallax-section');
  
  const handleScroll = () => {
    parallaxSections.forEach(section => {
      // Lấy vị trí của section
      const distance = window.pageYOffset;
      
      // Tạo hiệu ứng chuyển động
      // Điều chỉnh tốc độ bằng cách thay đổi giá trị 0.5
      const yPos = -(distance * 0.5) + 'px';
      
      // Áp dụng hiệu ứng dịch chuyển
      section.style.backgroundPositionY = yPos;
    });
  };
  
  // Đăng ký sự kiện scroll
  window.addEventListener('scroll', handleScroll);
  
  // Gọi ngay khi trang load để đặt vị trí ban đầu
  handleScroll();
  
  // Cleanup khi component unmount
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}; 