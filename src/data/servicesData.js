const servicesData = {
  "cham-soc-be-tai-nha": {
    id: "cham-soc-be-tai-nha",
    name: "Chăm Sóc Bé Tại Nhà",
    description: "Giúp bé phát triển toàn diện với các gói chăm sóc chuyên nghiệp tại nhà.",
    challenges: [
      "Con khó ngủ sâu giấc do không được massage và tắm đúng kỹ thuật.",
      "Mẹ thiếu kinh nghiệm trong việc chăm sóc bé sơ sinh.",
      "Bé hay quấy khóc, khó chịu."
    ],
    benefits: [
      "Thư giãn và thoải mái",
      "Giấm ngon giấc",
      "Phát triển toàn diện",
      "Tăng cường sức đề kháng",
      "Thúc đẩy kỹ năng vận động"
    ],
    testimonial: "MamaCare được nhắc đến trên nhiều diễn đàn mẹ và bé, nhận được phản hồi tích cực từ hàng ngàn mẹ bỉm sữa.",
    layout: "single",
    services: [
      {
        id: "massage-tam-be",
        name: "Massage tắm bé chuẩn y khoa",
        shortDescription: "Chăm sóc bé khỏe mạnh, thông minh và phát triển toàn diện",
        description: [
          "Kiểm tra sức khỏe bé",
          "Massage, Tập vận động cho bé",
          "Tắm bé y khoa",
          "Chăm sóc rốn và vệ sinh các bộ phận",
          "Hô hấp",
          "Tương tác thông minh với bé"
        ],
        duration: "60 phút",
        sessions: {
          "1 buổi": "120.000 VND",
          "10 buổi": "990.000 VND",
          "30 buổi": "2.700.000 VND"
        }
      }
    ]
  },
  "cham-soc-sau-sinh": {
    id: "cham-soc-sau-sinh",
    name: "Chăm Sóc Sau Sinh",
    description: "Giúp mẹ phục hồi sức khỏe sau sinh và chăm sóc bé yêu một cách tốt nhất.",
    challenges: [
      "Mệt mỏi, suy nhược cơ thể sau khi sinh.",
      "Thiếu kiến thức chăm sóc bé sơ sinh.",
      "Dễ bị stress và trầm cảm sau sinh."
    ],
    benefits: [
      "Giảm đau mỏi cơ thể",
      "Cải thiện tuần hoàn máu",
      "Tăng cường sức khỏe tinh thần",
      "Thúc đẩy tiết sữa tự nhiên",
      "Phòng tránh các bệnh hậu sản"
    ],
    testimonial: "Dịch vụ MamaCare được nhắc đến trên nhiều diễn đàn mẹ và bé, nhận được phản hồi tích cực từ hàng ngàn mẹ bỉm sữa.",
    layout: "multiple",
    services: [
      {
        id: "phuc-hoi-sau-sinh",
        name: "Chăm sóc phục hồi sau sinh",
        shortDescription: "Phục hồi sức khỏe và vóc dáng sau sinh",
        description: [
          "Chăm sóc vết mổ, vết khâu tầng sinh môn",
          "Gội đầu thảo dược",
          "Chăm sóc da mặt",
          "Chăm sóc vùng mắt, vùng nách",
          "Chăm sóc vùng bụng, body",
          "Chăm sóc vùng kín, xông hơi, massage kích sữa",
          "Uống nghệ mật ong ngâm Saffron"
        ],
        duration: "90 phút",
        sessions: {
          "1 buổi": "400.000 VND",
          "10 buổi": "3.500.000 VND",
          "30 buổi": "9.000.000 VND"
        }
      },
      {
        id: "chuyen-sau-sau-sinh",
        name: "Chăm sóc chuyên sâu sau sinh",
        shortDescription: "Phục hồi toàn diện với liệu trình chuyên sâu",
        description: [
          "Thay băng vết mổ, vệ sinh vết cắt tầng sinh môn",
          "Thoa kem chống sẹo (sinh mổ)",
          "Xông hơi toàn thân với thảo dược đông y",
          "Xông hơ mặt, vùng kín",
          "Massage ấn huyệt, thoa rượu gừng nghệ gấc hạ thổ",
          "Massage ngực, thông tia sữa",
          "Chăm sóc da mặt chuyên sâu",
          "Ủ dưỡng body, tẩy tế bào chết"
        ],
        duration: "150 phút",
        sessions: {
          "1 buổi": "500.000 VND",
          "10 buổi": "4.500.000 VND",
          "30 buổi": "12.000.000 VND"
        }
      }
    ]
  },
  "cham-soc-me-bau": {
    id: "cham-soc-me-bau",
    name: "Chăm sóc mẹ bầu",
    description: "Dịch vụ chăm sóc chuyên nghiệp dành cho mẹ bầu, giúp mẹ và bé khỏe mạnh.",
    challenges: [
      "Đau lưng, mỏi cổ vai gáy khi mang thai.",
      "Khó ngủ, mất ngủ trong thai kỳ.",
      "Lo lắng, stress về sức khỏe của bé."
    ],
    benefits: [
      "Giảm đau lưng và mỏi cơ",
      "Cải thiện giấc ngủ",
      "Giảm phù nề chân tay",
      "Tăng cường tuần hoàn máu",
      "Thư giãn tinh thần"
    ],
    testimonial: "Dịch vụ MamaCare được nhắc đến trên nhiều diễn đàn mẹ và bé, nhận được phản hồi tích cực từ hàng ngàn mẹ bỉm sữa.",
    layout: "multiple",
    services: [
      {
        id: "massage-bau-vip",
        name: "Massage bầu VIP",
        shortDescription: "Liệu trình cao cấp dành cho mẹ bầu",
        description: [
          "Ngâm chân thảo dược giúp lưu thông khí huyết",
          "Massage lưng hông, xua tan mệt mỏi",
          "Liệu pháp đá nóng giảm đau nhức lưng",
          "Massage tay chống tê tay",
          "Massage chân hạn chế chuột rút",
          "Chườm muối thảo dược nóng thư giãn vùng đầu, mắt",
          "Massage cổ, vai, gáy giúp giảm đau nhức"
        ],
        duration: "120 phút",
        sessions: {
          "1 buổi": "350.000 VND",
          "10 buổi": "3.000.000 VND",
          "30 buổi": "8.500.000 VND"
        }
      },
      {
        id: "massage-bau-chuyen-sau",
        name: "Massage bầu chuyên sâu",
        shortDescription: "Giảm đau nhức và mệt mỏi cho mẹ bầu",
        description: [
          "Ngâm chân thảo dược giúp lưu thông khí huyết",
          "Massage lưng hông, xua tan mệt mỏi",
          "Liệu pháp đá nóng giảm đau nhức lưng",
          "Massage tay, chân hạn chế chuột rút",
          "Chườm muối thảo dược nóng thư giãn vùng đầu, mắt",
          "Massage cổ, vai, gáy giúp giảm đau nhức",
          "Massage đầu gối giảm mỏi chân"
        ],
        duration: "90 phút",
        sessions: {
          "1 buổi": "250.000 VND",
          "10 buổi": "2.300.000 VND",
          "30 buổi": "6.000.000 VND"
        }
      },
      {
        id: "massage-bau-thu-gian",
        name: "Massage bầu thư giãn",
        shortDescription: "Thư giãn nhẹ nhàng cho mẹ bầu",
        description: [
          "Ngâm chân thảo dược giúp lưu thông khí huyết",
          "Massage lưng hông, xua tan mệt mỏi",
          "Liệu pháp đá nóng giảm đau nhức lưng",
          "Massage tay, chân hạn chế chuột rút",
          "Chườm muối thảo dược nóng thư giãn vùng đầu, mắt",
          "Massage cổ, vai, gáy giúp giảm đau nhức"
        ],
        duration: "60 phút",
        sessions: {
          "1 buổi": "180.000 VND",
          "10 buổi": "1.500.000 VND",
          "30 buổi": "4.000.000 VND"
        }
      }
    ]
  },
  "chua-tac-tia-sua": {
    id: "chua-tac-tia-sua",
    name: "Chữa tắc tia sữa",
    description: "Giải pháp hiệu quả cho các vấn đề về tắc tia sữa, giúp mẹ nuôi con bằng sữa mẹ thuận lợi.",
    challenges: [
      "Đau đớn khi bị tắc tia sữa, cương tức ngực.",
      "Lo lắng về lượng sữa không đủ cho bé.",
      "Khó khăn trong việc cho bé bú đúng cách."
    ],
    benefits: [
      "Giảm đau và khó chịu",
      "Thông tắc tia sữa hiệu quả",
      "Tăng cường sản xuất sữa",
      "Hướng dẫn kỹ thuật cho bé bú đúng",
      "Phòng ngừa tái phát tắc tia sữa"
    ],
    testimonial: "Dịch vụ MamaCare được nhắc đến trên nhiều diễn đàn mẹ và bé, nhận được phản hồi tích cực từ hàng ngàn mẹ bỉm sữa.",
    layout: "single",
    services: [
      {
        id: "thong-tac-tia-sua",
        name: "Thông tắc tia sữa",
        shortDescription: "Giải quyết nhanh chóng tình trạng tắc tia sữa",
        description: [
          "Massage và thông tắc các tuyến sữa",
          "Hướng dẫn kỹ thuật cho con bú đúng",
          "Hướng dẫn xử lý tắc tia sữa tại nhà",
          "Tư vấn chế độ ăn uống hỗ trợ tiết sữa"
        ],
        duration: "60 phút",
        sessions: {
          "1 buổi": "200.000 VND"
        }
      }
    ]
  }
};

export default servicesData;
