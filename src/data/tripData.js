export const tripData = {
  vi: {
    nav: {
      brand: "KL 5N4Đ • 20–24/11",
      tabs: [
        { key: "itinerary", label: "Lịch Trình" },
        { key: "transit", label: "Tàu Điện MRT" },
        { key: "budget", label: "Ngân Sách" },
        { key: "malls", label: "Mega Malls" },
        { key: "checklist", label: "Checklist" }
      ]
    },
    hero: {
      pill: "THỨ SÁU 20/11 – THỨ BA 24/11/2026 • ĐI BỘ GẦN & ƯU TIÊN MRT/LRT",
      title: "Kuala Lumpur 5N4Đ",
      subtitle:
        "Lịch trình chi tiết cho nhóm 4 người (1 Cặp đôi + 2 Bạn nữ) tại Hotel 99 Kuala Lumpur City (Bukit Bintang): Gần thì đi bộ ngắm phố, xa thì ưu tiên số 1 đi tàu MRT / LRT.",
      stats: [
        { label: "THÀNH VIÊN ĐOÀN", val: "👥 4 Người", sub: "1 Couple + 2 Nữ (1 Đôi, 1 Twin)" },
        { label: "KHÁCH SẠN TRUNG TÂM", val: "🏨 Hotel 99 KL City", sub: "44A-44B Jalan Pudu, Bukit Bintang" },
        { label: "NGUYÊN TẮC DI CHUYỂN", val: "🚶 Đi bộ + 🚇 MRT", sub: "Gần đi bộ (<800m) • Xa đi MRT/LRT" },
        { label: "TỔNG NGÂN SÁCH", val: "💰 ~33.5 Triệu", sub: "~8.375.000đ / người (Trọn gói)" }
      ]
    },
    itinerarySection: {
      heading: "Lịch Trình Chi Tiết Từng Ngày (20/11 – 24/11/2026)",
      subHeading:
        "Các điểm quanh khách sạn (<800m) ưu tiên đi bộ. Các điểm xa bắt buộc dùng phương tiện ưu tiên số 1 đi tàu MRT / LRT. Bấm vào từng chặng để xem hướng dẫn đi chi tiết.",
      fromLabel: "Điểm đi",
      toLabel: "Điểm đến",
      primaryRailLabel: "PHƯƠNG ÁN CHÍNH",
      backupLabel: "Phương án phụ / Lưu ý",
      groupTipLabel: "Mẹo cho nhóm (1 Couple + 2 Nữ)",
      openPinBtn: "Vị trí điểm đến",
      openRouteBtn: "Mở Google Maps chỉ đường",
      expandBtn: "Xem hướng dẫn đi chi tiết",
      collapseBtn: "Thu gọn hướng dẫn",
      expandAllBtn: "Mở tất cả chỉ dẫn",
      collapseAllBtn: "Thu gọn tất cả",
      days: [
        {
          day: 1,
          date: "Thứ Sáu, 20/11/2026",
          shortLabel: "Ngày 1 • T6 20/11",
          tag: "Check-in & Chinatown",
          title: "Ngày 1 (Thứ Sáu 20/11): Hạ Cánh KLIA – Hotel 99 KL City – REXKL – Kwai Chai Hong – Mee Tarik – Jalan Alor",
          alert: {
            type: "info",
            text: "Lưu ý nhận phòng cho 1 Couple + 2 Nữ: Tại lễ tân Hotel 99 Kuala Lumpur City (44A Jalan Pudu), xác nhận đúng 1 phòng Deluxe Double (1 giường đôi cho Couple) + 1 phòng Deluxe Twin (2 giường đơn cho 2 bạn nữ)."
          },
          nodes: [
            {
              time: "Chiều (13:30 – 15:30)",
              category: "transit",
              title: "Hạ cánh sân bay KLIA (T1/T2) → Nhận phòng Hotel 99 Kuala Lumpur City (Bukit Bintang)",
              desc: "Làm thủ tục nhập cảnh (đã khai MDAC online). Từ sân bay về khách sạn cách 55km nên đi bằng tàu cao tốc KLIA Ekspres kết nối tuyến MRT Kajang Line. Nộp 80 MYR thuế du lịch TTx + 100–200 MYR tiền mặt cọc phòng tại lễ tân.",
              from: "Sân bay Quốc tế KLIA Terminal 1 hoặc Terminal 2 (klia2)",
              to: "Hotel 99 Kuala Lumpur City (44A-44B, Jalan Pudu, Bukit Bintang)",
              primaryTransit: {
                mode: "🚇 Tàu KLIA Ekspres + MRT Kajang Line",
                badgeColor: "#007a33",
                duration: "~45 phút",
                cost: "~46.50 – 56.50 MYR / người",
                steps: [
                  "Bước 1: Tại tầng hầm B1 sân bay KLIA T1 hoặc T2, lên tàu KLIA Ekspres (28 phút) hoặc KLIA Transit (35 phút) về ga trung tâm KL Sentral (Mua vé Group Saver 4 người hoặc Klook giảm ~15%).",
                  "Bước 2: Tại KL Sentral, đi bộ 3 phút qua hành lang máy lạnh sang ga MRT Muzium Negara (Mã ga: KG15).",
                  "Bước 3: Lên tàu MRT Kajang Line (hướng đi Kajang) đi 2 trạm: Muzium Negara (KG15) → Pasar Seni (KG16) → xuống tại ga MRT Merdeka (KG17) (1.50 MYR/người, 4 phút).",
                  "Bước 4: Ra cửa nối thông sang Plaza Rakyat / Đường Jalan Pudu, đi bộ 300m (~4 phút) tới ngay Hotel 99 Kuala Lumpur City."
                ]
              },
              backupTransit:
                "Nếu mang nhiều vali nặng muốn đi thẳng: Đặt 1 xe GrabCar 6 chỗ (6-Seater) tại Tầng 1 Cửa 3-4 (KLIA1) hoặc Tầng 1 Transportation Hub (KLIA2). Giá ~95–120 MYR + ~12 MYR phí cầu đường. (Lưu ý: Grab 4 chỗ cốp nhỏ không vừa 4 vali).",
              groupTip:
                "Giữ kỹ biên lai giấy cọc phòng (Deposit Receipt) của cả 2 phòng để nhận lại đủ 100% tiền mặt khi trả phòng ngày 24/11.",
              mapPinUrl: "https://maps.google.com/?cid=17279110726563758836",
              mapRouteUrl:
                "https://www.google.com/maps/dir/?api=1&origin=Kuala+Lumpur+International+Airport&destination=Hotel+99+Kuala+Lumpur+City+Jalan+Pudu&travelmode=transit"
            },
            {
              time: "16:00 – 17:30",
              category: "culture",
              title: "Tổ hợp nghệ thuật sáng tạo REXKL & Mê cung sách BookXcess",
              desc: "Rạp chiếu phim REX cổ điển từ thập niên 1940 được cải tạo thành không gian nghệ thuật cực chất. Lên tầng thượng chụp ảnh tại hiệu sách BookXcess với các kệ sách cao chạm trần.",
              from: "Hotel 99 Kuala Lumpur City (44A Jalan Pudu)",
              to: "REXKL (80, Jalan Sultan, Chinatown)",
              primaryTransit: {
                mode: "🚶 Đi bộ (Chỉ 450m)",
                badgeColor: "#16a34a",
                duration: "6 phút đi bộ",
                cost: "Miễn phí",
                steps: [
                  "Từ cửa Hotel 99 Kuala Lumpur City rẽ trái đi dọc vỉa hè đường Jalan Pudu khoảng 300m.",
                  "Băng qua ngã tư Kotaraya, rẽ vào đường Jalan Sultan đi thêm 150m là tới REXKL nằm bên tay phải."
                ]
              },
              backupTransit: "Cự ly rất gần (450m), đi bộ hoàn toàn thoải mái không cần tàu hay xe.",
              groupTip:
                "Góc chụp hình đẹp nhất cho cặp đôi và 2 bạn nữ: Đứng ở ban công tầng lửng của BookXcess và nhờ người đứng dưới chụp góc rộng 0.5x lấy trọn bức tường sách khổng lồ.",
              mapPinUrl: "https://maps.google.com/?cid=8318395919362480651",
              mapRouteUrl:
                "https://www.google.com/maps/dir/?api=1&origin=Hotel+99+Kuala+Lumpur+City+Jalan+Pudu&destination=REXKL+Jalan+Sultan&travelmode=walking"
            },
            {
              time: "17:30 – 18:15",
              category: "culture",
              title: "Hẻm bích họa di sản Kwai Chai Hong",
              desc: "Con hẻm cổ tái hiện khung cảnh Chinatown thập niên 1960 với cây cầu gỗ đỏ và các bức tranh tường sống động ngay sát REXKL.",
              from: "REXKL (80, Jalan Sultan)",
              to: "Kwai Chai Hong (Lorong Panggung)",
              primaryTransit: {
                mode: "🚶 Đi bộ (250m)",
                badgeColor: "#16a34a",
                duration: "3 phút đi bộ",
                cost: "Miễn phí",
                steps: [
                  "Từ cổng REXKL rẽ trái đi thẳng dọc con đường Jalan Sultan khoảng 200m.",
                  "Rẽ trái vào ngõ Lorong Panggung là thấy ngay cổng vòm và cây cầu gỗ đỏ dẫn vào Kwai Chai Hong."
                ]
              },
              backupTransit: "Đi bộ liền kề trong khu phố cổ.",
              groupTip:
                "Mở cửa miễn phí đến 24:00 đêm. Quét mã QR cạnh mỗi bức tranh tường để nghe âm thanh phố cổ xưa!",
              mapPinUrl: "https://www.google.com/maps/search/?api=1&query=Kwai+Chai+Hong+Kuala+Lumpur",
              mapRouteUrl:
                "https://www.google.com/maps/dir/?api=1&origin=REXKL+Kuala+Lumpur&destination=Kwai+Chai+Hong+Kuala+Lumpur&travelmode=walking"
            },
            {
              time: "18:15 – 19:45",
              category: "food",
              title: "Phố lồng đèn Petaling Street & Ăn tối Mì kéo Mee Tarik Jalan Sultan",
              desc: "Thưởng thức tô mì bò/cừu kéo tay thủ công nước dùng thảo quả cay nồng, ăn kèm đĩa há cảo bò chiên đáy giòn rụm (Fried Beef Dumplings) chấm giấm ớt chưng.",
              from: "Kwai Chai Hong (Lorong Panggung)",
              to: "Mee Tarik Restoran (36, Jalan Sultan)",
              primaryTransit: {
                mode: "🚶 Đi bộ (150m)",
                badgeColor: "#16a34a",
                duration: "2 phút đi bộ",
                cost: "Miễn phí",
                steps: [
                  "Từ Kwai Chai Hong đi bộ ngược lại đường Jalan Sultan 150m. Quán Mee Tarik nằm ngay góc ngã tư giao với cổng chào Petaling Street."
                ]
              },
              backupTransit: "Đi bộ 150m.",
              groupTip:
                "Gọi món chuẩn cho 4 người: 2 tô mì bò hầm (Braised Beef Ramen), 1 tô mì bò xào hành tây, 2 đĩa há cảo chiên (10 viên/đĩa) và 4 ly trà chanh tắc lạnh.",
              mapPinUrl: "https://maps.google.com/?cid=534351893711703046",
              mapRouteUrl:
                "https://www.google.com/maps/dir/?api=1&origin=Kwai+Chai+Hong+Kuala+Lumpur&destination=Mee+Tarik+Jalan+Sultan+Kuala+Lumpur&travelmode=walking"
            },
            {
              time: "20:00 – 22:30",
              category: "food",
              title: "Thiên đường ẩm thực đêm Jalan Alor (Bukit Bintang) & Đi bộ về Khách sạn",
              desc: "Con phố ẩm thực đêm sầm uất nhất Kuala Lumpur: Cánh gà nướng than hoa Wong Ah Wah (cuối phố), xiên que lẩu Lok Lok tự chọn, kem dừa, sầu riêng Musang King.",
              from: "Mee Tarik Jalan Sultan (Chinatown)",
              to: "Phố đêm Jalan Alor (Bukit Bintang)",
              primaryTransit: {
                mode: "🚇 MRT Kajang Line (Chiều đi) + 🚶 Đi bộ 750m về KS",
                badgeColor: "#007a33",
                duration: "4 phút tàu MRT (Chiều về đi bộ 9 phút)",
                cost: "1.20 – 1.50 MYR / người",
                steps: [
                  "Chiều đi (Từ Mee Tarik ~1.3km): Đi bộ 3 phút ra ga MRT Pasar Seni (KG16) → lên tàu MRT Kajang Line (hướng Kajang) đi 2 trạm tới MRT Bukit Bintang (KG18) → ra Cửa Exit A đi bộ 200m vào phố Jalan Alor.",
                  "Chiều về Hotel 99 KL City (Chỉ 750m - Đi bộ được!): Từ đầu phố Jalan Alor đi bộ theo đường Jalan Tong Shin / Jalan Pudu khoảng 750m (~9 phút) là về tới thẳng cửa Hotel 99 Kuala Lumpur City (hoặc đi 1 trạm MRT Bukit Bintang KG18 → MRT Merdeka KG17)."
                ]
              },
              backupTransit:
                "Nếu cả nhóm muốn đi bộ luôn từ Chinatown sang Jalan Alor để tiêu cơm: Đi ngang qua cầu vượt Kotaraya → đường Jalan Pudu → rẽ vào Jalan Alor (~1.1km, 14 phút đi bộ).",
              groupTip:
                "Nhờ đổi về ở Hotel 99 Kuala Lumpur City (Bukit Bintang) nên từ phố đêm Jalan Alor đi bộ về khách sạn chỉ mất 9 phút, không lo trễ giờ tàu đóng cửa!",
              mapPinUrl: "https://maps.google.com/?cid=13050949940542192959",
              mapRouteUrl:
                "https://www.google.com/maps/dir/?api=1&origin=Mee+Tarik+Jalan+Sultan+Kuala+Lumpur&destination=Jalan+Alor+Kuala+Lumpur&travelmode=transit"
            }
          ]
        },
        {
          day: 2,
          date: "Thứ Bảy, 21/11/2026",
          shortLabel: "Ngày 2 • T7 21/11",
          tag: "Văn Hóa & Tháp Đôi KLCC",
          title: "Ngày 2 (Thứ Bảy 21/11): Roti Canai – Quảng Trường Merdeka – Bảo Tàng Hồi Giáo – ILHAM Gallery – Tháp Đôi Petronas",
          alert: {
            type: "success",
            text: "Lịch trình Thứ Bảy 21/11: Buổi sáng đi bộ liên hoàn qua khu phố cổ (Mansion Tea Stall → River of Life → Merdeka). Buổi chiều đi tàu LRT Kelana Jaya Line sang Bảo tàng Hồi giáo, ILHAM Gallery và Tháp đôi Petronas!"
          },
          nodes: [
            {
              time: "08:30 – 09:45",
              category: "food",
              title: "Bữa sáng Roti Banjir Special tại Mansion Tea Stall",
              desc: "Trải nghiệm bữa sáng quốc dân của người Malaysia: Bánh kếp Roti Canai xé nhỏ chan đẫm sốt cà ri đậu lăng (dhal), tương ớt sambal ngọt và 2 quả trứng lòng đào béo ngậy, uống cùng trà sữa kéo bọt Teh Tarik.",
              from: "Hotel 99 Kuala Lumpur City (44A Jalan Pudu)",
              to: "Mansion Tea Stall (Lorong Bunus Sebelas, Masjid India)",
              primaryTransit: {
                mode: "🚶 Đi bộ buổi sáng (800m)",
                badgeColor: "#16a34a",
                duration: "10 phút đi bộ",
                cost: "Miễn phí",
                steps: [
                  "Từ Hotel 99 Kuala Lumpur City rẽ phải đi dọc vỉa hè đường Jalan Pudu / Jalan Tun Perak khoảng 600m về hướng ga Masjid Jamek.",
                  "Rẽ phải vào khu phố Ấn Độ Jalan Masjid India đi thêm 200m là tới quán Mansion Tea Stall (ngay góc tòa nhà Selangor Mansion)."
                ]
              },
              backupTransit:
                "Nếu không muốn đi bộ: Lên ga LRT Plaza Rakyat (SP8 - cách KS 200m) đi đúng 1 trạm tới ga LRT Masjid Jamek (SP7) (1.20 MYR, 2 phút).",
              groupTip:
                "Chỉ cần đọc khẩu hiệu với nhân viên: '4 Roti Banjir Special + 4 Teh Tarik Panas/Ais'. Quán phục vụ cực nhanh chỉ trong 3 phút!",
              mapPinUrl: "https://maps.google.com/?cid=7937314599155281025",
              mapRouteUrl:
                "https://www.google.com/maps/dir/?api=1&origin=Hotel+99+Kuala+Lumpur+City+Jalan+Pudu&destination=Mansion+Tea+Stall+Kuala+Lumpur&travelmode=walking"
            },
            {
              time: "10:00 – 11:45",
              category: "culture",
              title: "Dòng sông River of Life – Quảng trường Merdeka & Tòa nhà Sultan Abdul Samad",
              desc: "Dạo bước bên bờ sông lịch sử River of Life, chiêm ngưỡng tòa nhà kiến trúc Moorish cổ kính với tháp đồng hồ 41m, sân cỏ Hoàng gia và biểu tượng chữ 'I LOVE KL' tại KL City Gallery.",
              from: "Mansion Tea Stall (Masjid India)",
              to: "Quảng trường Độc lập Dataran Merdeka",
              primaryTransit: {
                mode: "🚶 Đi bộ dọc bờ sông River of Life (450m)",
                badgeColor: "#16a34a",
                duration: "5 phút đi bộ",
                cost: "Miễn phí",
                steps: [
                  "Từ Mansion Tea Stall đi bộ ngang qua thánh đường Masjid Jamek và cầu đi bộ ven sông River of Life khoảng 450m là ra thẳng giữa Quảng trường Merdeka."
                ]
              },
              backupTransit: "Tất cả các điểm nằm liền kề trong một cụm phố đi bộ di sản.",
              groupTip:
                "Thời điểm 10:00 sáng nắng đẹp, đứng ở bãi cỏ xanh phía trước tòa nhà Sultan Abdul Samad chụp ảnh nhóm 4 người lên màu gạch đỏ cực kỳ nổi bật.",
              mapPinUrl: "https://maps.google.com/?cid=3750364922043052889",
              mapRouteUrl:
                "https://www.google.com/maps/dir/?api=1&origin=Mansion+Tea+Stall+Kuala+Lumpur&destination=Merdeka+Square+Kuala+Lumpur&travelmode=walking"
            },
            {
              time: "12:00 – 14:45",
              category: "culture",
              title: "Bảo tàng Nghệ thuật Hồi giáo (Islamic Arts Museum) & Thánh đường Quốc gia",
              desc: "Một trong những bảo tàng đẹp nhất Đông Nam Á với 5 mái vòm kính màu ngọc bích khổng lồ, trưng bày mô hình các thánh đường thế giới và cổ vật tinh xảo. Có máy lạnh mát lạnh để tránh nắng trưa.",
              from: "Quảng trường Merdeka / Ga LRT Masjid Jamek",
              to: "Islamic Arts Museum Malaysia (Jalan Lembah Perdana)",
              primaryTransit: {
                mode: "🚇 LRT Kelana Jaya Line (1 trạm) + Cầu bộ hành có mái che",
                badgeColor: "#e31837",
                duration: "2 phút tàu + 8 phút đi bộ qua cầu",
                cost: "1.10 MYR / người (Vé bảo tàng: 20 MYR/người)",
                steps: [
                  "Bước 1: Từ ga LRT Masjid Jamek (KJ13), lên tàu tuyến Kelana Jaya Line (hướng Putra Heights) đi 1 trạm tới ga LRT Pasar Seni (KJ14) (hoặc đi bộ 650m dọc bờ sông từ KL City Gallery sang ga Pasar Seni).",
                  "Bước 2: Đi theo biển chỉ dẫn trong ga Pasar Seni qua hành lang cầu bộ hành có mái che nối xuyên qua ga cổ KTM Kuala Lumpur.",
                  "Bước 3: Đi hết cầu bộ hành vượt qua đường cao tốc là tới ngay Thánh đường Quốc gia (Masjid Negara) và đi thêm 150m tới cổng Bảo tàng Hồi giáo."
                ]
              },
              backupTransit:
                "Nếu 2 bạn nữ mỏi chân không muốn đi bộ qua cầu lúc trưa: Bắt GrabCar 4 chỗ từ KL City Gallery lên sảnh bảo tàng (~6–8 MYR/xe, 5 phút).",
              groupTip:
                "Tầng 3 và Tầng 4 của bảo tàng có các mái vòm hoa văn đối xứng tuyệt đẹp. Nếu ghé thăm Masjid Negara cách đó 150m, khách nữ sẽ được phát áo choàng tím miễn phí ở cổng.",
              mapPinUrl: "https://maps.google.com/?cid=8999738247126300043",
              mapRouteUrl:
                "https://www.google.com/maps/dir/?api=1&origin=Merdeka+Square+Kuala+Lumpur&destination=Islamic+Arts+Museum+Malaysia&travelmode=transit"
            },
            {
              time: "15:15 – 17:00",
              category: "culture",
              title: "Triển lãm Nghệ thuật Đương đại ILHAM Gallery",
              desc: "Nằm tại tầng 3 và tầng 5 tòa nhà chọc trời Ilham Tower (do kiến trúc sư Norman Foster thiết kế). Không gian nghệ thuật đương đại tinh tế và cửa hàng quà tặng thiết kế độc bản.",
              from: "Bảo tàng Nghệ thuật Hồi giáo (IAMM)",
              to: "ILHAM Gallery (Tòa nhà Ilham Tower, 8 Jalan Binjai)",
              primaryTransit: {
                mode: "🚇 LRT Kelana Jaya Line (Đi thẳng 5 trạm)",
                badgeColor: "#e31837",
                duration: "11 phút đi tàu + đi bộ qua cầu",
                cost: "2.40 MYR / người (Vé vào cửa: Miễn phí)",
                steps: [
                  "Bước 1: Đi bộ 8 phút qua cầu bộ hành từ Thánh đường Quốc gia về lại ga LRT Pasar Seni (KJ14).",
                  "Bước 2: Lên tàu LRT Kelana Jaya Line (hướng đi Gombak) đi thẳng 5 trạm: Pasar Seni (KJ14) → Masjid Jamek → Dang Wangi → Kampung Baru → KLCC → xuống tại ga LRT Ampang Park (KJ9).",
                  "Bước 3: Ra khỏi ga LRT Ampang Park, đi bộ 200m (~3 phút) sang đường Jalan Binjai là tới tòa tháp Ilham Tower."
                ]
              },
              backupTransit: "Quãng đường 4.5km bắt buộc đi phương tiện — tàu LRT Kelana Jaya Line là nhanh và rẻ nhất.",
              groupTip:
                "Shop lưu niệm ở tầng 5 ILHAM Gallery có bán túi tote, bưu thiếp và đồ thủ công Malaysia cực xinh cho các bạn nữ.",
              mapPinUrl: "https://maps.google.com/?cid=13503462404486618185",
              mapRouteUrl:
                "https://www.google.com/maps/dir/?api=1&origin=Islamic+Arts+Museum+Malaysia&destination=ILHAM+Gallery+Kuala+Lumpur&travelmode=transit"
            },
            {
              time: "17:30 – 21:30",
              category: "food",
              title: "Đi bộ sang Suria KLCC ăn tối DIN by Din Tai Fung & Nhạc nước Tháp đôi Petronas",
              desc: "Thưởng thức tiểu long bao tại tầng 4 Suria KLCC, sau đó ra hồ Symphony dưới chân Tháp đôi Petronas xem trình diễn nhạc nước ánh sáng (20:00, 21:00, 22:00) và đi tàu LRT về khách sạn.",
              from: "ILHAM Gallery (Ilham Tower)",
              to: "Trung tâm thương mại Suria KLCC & Tháp đôi Petronas",
              primaryTransit: {
                mode: "🚶 Đi bộ sang KLCC (700m) + 🚇 Chiều về đi tàu LRT",
                badgeColor: "#16a34a",
                duration: "8 phút đi bộ (Chiều về KS: 10 phút tàu LRT)",
                cost: "Chiều đi: Miễn phí • Chiều về LRT: 2.30 MYR/người",
                steps: [
                  "Chặng đến (Đi bộ 700m): Từ sảnh Ilham Tower rẽ trái đi bộ dọc vỉa hè rợp bóng cây đường Jalan Binjai ~700m (8 phút) xuyên qua công viên KLCC Park là vào thẳng Suria KLCC (Hoặc đi 1 trạm LRT Ampang Park KJ9 → LRT KLCC KJ10).",
                  "Chặng về Hotel 99 lúc 21:30 (Bắt buộc đi tàu - 3km): Xuống tầng hầm Suria KLCC vào ga LRT KLCC (KJ10) → đi 3 trạm tới ga LRT Masjid Jamek (KJ13) → đổi sang tàu Sri Petaling Line đi 1 trạm tới ga LRT Plaza Rakyat (SP8) → đi bộ 3 phút (200m) về Hotel 99 Kuala Lumpur City!"
                ]
              },
              backupTransit:
                "Nếu chiều về muốn đi MRT: Có thể đi bộ qua cầu bộ hành máy lạnh KLCC–Pavilion (15 phút) tới ga MRT Bukit Bintang (KG18) rồi đi 1 trạm về MRT Merdeka (KG17).",
              groupTip:
                "Lưu ý ẩm thực: Chi nhánh Suria KLCC là 'DIN by Din Tai Fung' (Chuẩn Halal không có thịt heo, phục vụ tiểu long bao gà/bò/tôm & bánh bao kim sa). Nếu muốn ăn Tiểu Long Bao Thịt Heo truyền thống thì ăn tại Din Tai Fung ở The Gardens Mall (Ngày 3) hoặc Pavilion KL (Ngày 4)!",
              mapPinUrl: "https://maps.google.com/?cid=1650228018688243814",
              mapRouteUrl:
                "https://www.google.com/maps/dir/?api=1&origin=ILHAM+Gallery+Kuala+Lumpur&destination=Suria+KLCC+Kuala+Lumpur&travelmode=walking"
            }
          ]
        },
        {
          day: 3,
          date: "Chủ Nhật, 22/11/2026",
          shortLabel: "Ngày 3 • CN 22/11 🔥",
          tag: "Bunn Choon & Mid Valley",
          title: "Ngày 3 (Chủ Nhật 22/11): Đi Bộ Ăn Sáng Bunn Choon – Tàu LRT Đi Mid Valley Megamall & The Gardens",
          alert: {
            type: "warning",
            text: "Điều chỉnh quan trọng: Nhà hàng Bunn Choon Chinatown ĐÓNG CỬA THỨ HAI HÀNG TUẦN (23/11). Vì vậy lịch ăn sáng Dim Sum & Bánh Tart Trứng Bunn Choon được xếp vào sáng Chủ Nhật 22/11 (đi bộ 7 phút từ khách sạn) trước khi lên tàu LRT đi Mid Valley!"
          },
          nodes: [
            {
              time: "08:15 – 09:45",
              category: "food",
              title: "Đi bộ ăn sáng Dim Sum & Bánh tart trứng ngàn lớp tại Bunn Choon Restaurant",
              desc: "Thương hiệu điểm tâm lâu đời từ năm 1893 nổi tiếng với bánh tart trứng vỏ ngàn lớp giòn tan (vị truyền thống & mè đen), há cảo tôm tươi, xíu mại và bánh bao xá xíu.",
              from: "Hotel 99 Kuala Lumpur City (44A Jalan Pudu)",
              to: "Bunn Choon Restaurant (Số 8, Lorong Panggung, Chinatown)",
              primaryTransit: {
                mode: "🚶 Đi bộ (550m)",
                badgeColor: "#16a34a",
                duration: "7 phút đi bộ",
                cost: "Miễn phí",
                steps: [
                  "Từ cửa Hotel 99 Kuala Lumpur City rẽ trái đi bộ dọc đường Jalan Pudu ~300m.",
                  "Đi thẳng vào đường Jalan Sultan thêm 200m rồi rẽ trái vào ngõ Lorong Panggung là tới nhà hàng Bunn Choon."
                ]
              },
              backupTransit: "Cự ly 550m rất gần, đi bộ buổi sáng cực kỳ mát mẻ.",
              groupTip:
                "Có mặt lúc 08:15–08:30 để lấy bàn trên tầng 2 ngay khi vừa mở cửa, không phải xếp hàng chờ lâu vào sáng Chủ Nhật.",
              mapPinUrl: "https://maps.google.com/?cid=10783793124020186203",
              mapRouteUrl:
                "https://www.google.com/maps/dir/?api=1&origin=Hotel+99+Kuala+Lumpur+City+Jalan+Pudu&destination=Bunn+Choon+Restaurant+Kuala+Lumpur&travelmode=walking"
            },
            {
              time: "09:45 – 15:30",
              category: "shopping",
              title: "Tàu LRT sang Tổ hợp siêu mua sắm Mid Valley Megamall",
              desc: "Khám phá một trong những trung tâm thương mại lớn nhất Đông Nam Á với hơn 430 cửa hàng: Uniqlo siêu lớn, Padini Concept Store, Vincci, Charles & Keith, Sephora, Bath & Body Works, siêu thị Aeon Big và thiên đường bánh ngọt tầng LG.",
              from: "Bunn Choon Restaurant (Chinatown)",
              to: "Mid Valley Megamall & The Gardens Mall",
              primaryTransit: {
                mode: "🚇 LRT Kelana Jaya Line (3 trạm) + Cầu kính Eco City",
                badgeColor: "#e31837",
                duration: "7 phút đi tàu + 5 phút đi bộ qua cầu kính",
                cost: "2.00 MYR / người",
                steps: [
                  "Bước 1: Từ quán Bunn Choon đi bộ 250m (~3 phút) ra ga LRT Pasar Seni (KJ14).",
                  "Bước 2: Lên tàu LRT Kelana Jaya Line (hướng đi Putra Heights) đi đúng 3 trạm: Pasar Seni (KJ14) → KL Sentral (KJ15) → Bangsar (KJ16) → xuống tại ga LRT Abdullah Hukum (KJ17).",
                  "Bước 3: Đi theo biển chỉ dẫn 'The Gardens / Mid Valley' ngay trong ga Abdullah Hukum, băng qua cây cầu bộ hành máy lạnh KL Eco City Link Bridge (5 phút) là bước thẳng vào Tầng 1 của The Gardens Mall và thông sang Mid Valley Megamall!"
                ]
              },
              backupTransit:
                "Quãng đường 6km bắt buộc đi phương tiện — đi tàu LRT tới ga Abdullah Hukum rồi qua cầu kính là cách nhanh và mát nhất.",
              groupTip:
                "Mid Valley chia làm 3 khu: North Court, Centre Court và South Court. Nếu cặp đôi và 2 bạn nữ tách nhau đi mua sắm, hãy hẹn điểm tập kết tại Oriental Kopi (Tầng LG) hoặc đài phun nước Centre Court.",
              mapPinUrl: "https://maps.google.com/?cid=6817294246995646399",
              mapRouteUrl:
                "https://www.google.com/maps/dir/?api=1&origin=Pasar+Seni+LRT+Station&destination=Mid+Valley+Megamall+Kuala+Lumpur&travelmode=transit"
            },
            {
              time: "15:30 – 18:30",
              category: "shopping",
              title: "Đi bộ qua cầu kính sang The Gardens Mall & Nghỉ chân Specialty Cafe",
              desc: "Không gian mua sắm cao cấp nối liền với Mid Valley. Quy tụ các thương hiệu xa xỉ, trung tâm bách hóa Nhật Bản Isetan và các quán cà phê sang trọng để cả nhóm nghỉ chân.",
              from: "Mid Valley Megamall",
              to: "The Gardens Mall (Nối liền nội khu)",
              primaryTransit: {
                mode: "🚶 Đi bộ qua cầu nối kính trong nhà (Tầng LG, G hoặc Tầng 1)",
                badgeColor: "#16a34a",
                duration: "2 phút đi bộ",
                cost: "Miễn phí",
                steps: [
                  "Đi qua cầu kính nối ở Tầng 1 (Level 1) hoặc hành lang ẩm thực Tầng hầm (LG) nối trực tiếp giữa Mid Valley và The Gardens Mall (100% máy lạnh)."
                ]
              },
              backupTransit: "Nằm trong cùng một siêu quần thể.",
              groupTip:
                "Trạm nghỉ chân lý tưởng khi các bạn nữ thử đồ: Quán cà phê % Arabica (Tầng G The Gardens), Tsujiri Matcha hoặc Oriental Kopi (bánh tart trứng dày & bánh bao bơ Polo Bun).",
              mapPinUrl: "https://maps.google.com/?cid=11145328905228581898",
              mapRouteUrl:
                "https://www.google.com/maps/dir/?api=1&origin=Mid+Valley+Megamall&destination=The+Gardens+Mall+Kuala+Lumpur&travelmode=walking"
            },
            {
              time: "18:30 – 21:30",
              category: "food",
              title: "Ăn tối tại The Gardens / Mid Valley & Đi tàu LRT về lại Khách sạn",
              desc: "Thưởng thức bữa tối tại Din Tai Fung (Tầng LG The Gardens - có phục vụ Tiểu long bao nhân thịt heo truyền thống!), nhà hàng mì kéo Dragon-i, hoặc Madam Kwan's trước khi lên tàu LRT về lại khách sạn.",
              from: "The Gardens Mall / Mid Valley Megamall",
              to: "Hotel 99 Kuala Lumpur City (44A Jalan Pudu)",
              primaryTransit: {
                mode: "🚇 LRT Kelana Jaya Line (3 trạm về Pasar Seni)",
                badgeColor: "#e31837",
                duration: "7 phút đi tàu + đi bộ",
                cost: "2.00 – 2.60 MYR / người",
                steps: [
                  "Bước 1: Từ Tầng 1 The Gardens Mall đi bộ 5 phút qua cầu bộ hành máy lạnh ra ga LRT Abdullah Hukum (KJ17).",
                  "Bước 2: Lên tàu LRT Kelana Jaya Line (hướng Gombak) đi 3 trạm về ga LRT Pasar Seni (KJ14) rồi đi bộ 600m (7 phút) về Hotel 99 (Hoặc đi 4 trạm tới Masjid Jamek rồi chuyển sang tàu Sri Petaling Line đi 1 trạm về LRT Plaza Rakyat SP8 cách KS 200m)."
                ]
              },
              backupTransit:
                "Khung giờ tối 18:00–20:00 đường bộ quanh Mid Valley rất hay tắc nghẽn, đi tàu LRT hoàn toàn không lo kẹt xe!",
              groupTip:
                "Nếu 2 bạn nữ mua sắm nhiều đồ tại Uniqlo/Padini, có thể gửi đồ tại tủ Locker tự động ở tầng G trước khi đi ăn tối.",
              mapPinUrl: "https://maps.google.com/?cid=17279110726563758836",
              mapRouteUrl:
                "https://www.google.com/maps/dir/?api=1&origin=Abdullah+Hukum+LRT+Station&destination=Hotel+99+Kuala+Lumpur+City+Jalan+Pudu&travelmode=transit"
            }
          ]
        },
        {
          day: 4,
          date: "Thứ Hai, 23/11/2026",
          shortLabel: "Ngày 4 • T2 23/11 ✨",
          tag: "Siêu Dự Án TRX & Pavilion",
          title: "Ngày 4 (Thứ Hai 23/11): Đi Bộ Ăn Sáng Kopitiam – Tàu MRT Đi The Exchange TRX – Đi Bộ Qua Pavilion KL",
          alert: {
            type: "info",
            text: "Lộ trình tối ưu Ngày 4: Sáng đi bộ 6 phút ăn sáng tại Chinatown → Lên tàu ngầm MRT Kajang Line đi thẳng vào lòng The Exchange TRX → Chiều đi bộ qua lối bộ hành có mái che (hoặc đi MRT 1 trạm) sang Pavilion KL & Bukit Bintang!"
          },
          nodes: [
            {
              time: "08:15 – 09:45",
              category: "food",
              title: "Đi bộ ăn sáng tại Ho Kow Hainam Kopitiam (hoặc Oriental Kopi Chinatown)",
              desc: "Quán cà phê Hải Nam truyền thống từ năm 1956 (mở cửa Thứ Hai từ 07:30): Bánh mì nướng than phết sốt Kaya lá dứa và bơ lạnh, 2 trứng gà Kampung lòng đào, trà sữa pha cà phê Hainan Cham và Nasi Lemak.",
              from: "Hotel 99 Kuala Lumpur City (44A Jalan Pudu)",
              to: "Ho Kow Hainam Kopitiam (Số 1, Jalan Balai Polis, Chinatown)",
              primaryTransit: {
                mode: "🚶 Đi bộ (500m)",
                badgeColor: "#16a34a",
                duration: "6 phút đi bộ",
                cost: "Miễn phí",
                steps: [
                  "Từ Hotel 99 Kuala Lumpur City rẽ trái đi bộ dọc đường Jalan Pudu / Jalan Sultan khoảng 500m (~6 phút) tới đường Jalan Balai Polis (ngay sát Kwai Chai Hong)."
                ]
              },
              backupTransit:
                "Nếu Ho Kow đông khách, ngay sát bên cách 50m trên đường Jalan Sultan là nhà hàng Oriental Kopi Chinatown rộng rãi, máy lạnh mát rượi!",
              groupTip:
                "Gọi thử món bánh mì nướng bơ Kaya (Kaya Butter Toast) chấm vào đĩa trứng lòng đào đánh cùng nước tương đen và tiêu trắng chuẩn kiểu người Hoa Malaysia.",
              mapPinUrl: "https://www.google.com/maps/search/?api=1&query=Ho+Kow+Hainan+Kopitiam+Kuala+Lumpur",
              mapRouteUrl:
                "https://www.google.com/maps/dir/?api=1&origin=Hotel+99+Kuala+Lumpur+City+Jalan+Pudu&destination=Ho+Kow+Hainan+Kopitiam+Kuala+Lumpur&travelmode=walking"
            },
            {
              time: "10:00 – 15:30",
              category: "shopping",
              title: "Tàu MRT thẳng tiến The Exchange TRX & Công viên trên mái TRX City Park",
              desc: "Khu phức hợp tài chính - bán lẻ đẳng cấp nhất Malaysia: Check-in Apple Store đầu tiên của Malaysia với mái vòm phát sáng nằm giữa công viên trên tầng thượng rộng 4 hecta, ngắm trọn tòa tháp Merdeka 118 (cao thứ 2 thế giới), dạo Gentle Monster, Seibu, Bacha Coffee và Shake Shack.",
              from: "Ho Kow Hainam Kopitiam (Chinatown)",
              to: "The Exchange TRX (Tun Razak Exchange)",
              primaryTransit: {
                mode: "🚇 MRT Kajang Line (Đi thẳng vào tầng hầm TTTM)",
                badgeColor: "#007a33",
                duration: "5 phút đi tàu",
                cost: "1.50 MYR / người",
                steps: [
                  "Bước 1: Từ quán ăn sáng đi bộ 200m (3 phút) vào ga MRT Pasar Seni (KG16).",
                  "Bước 2: Lên tàu MRT Kajang Line (hướng đi Kajang) đi thẳng 3 trạm: Pasar Seni (KG16) → Merdeka (KG17) → Bukit Bintang (KG18) → xuống tại ga MRT Tun Razak Exchange - TRX (KG20).",
                  "Bước 3: Đi theo biển chỉ dẫn ngay trong ga MRT bước thẳng vào tầng Concourse của The Exchange TRX mà không cần ra ngoài nắng!"
                ]
              },
              backupTransit: "Tuyến MRT Kajang Line nối trực tiếp dưới hầm TRX, nhanh và tiện nhất.",
              groupTip:
                "Lên TRX City Park (Tầng 3 - Rooftop) chụp hình mái vòm trắng của Apple Store với nền phía sau là tòa tháp chọc trời Merdeka 118. Quán Bacha Coffee và Shake Shack cũng nằm ngay khu vực thông ra công viên!",
              mapPinUrl: "https://maps.google.com/?cid=4061662819426486708",
              mapRouteUrl:
                "https://www.google.com/maps/dir/?api=1&origin=Pasar+Seni+MRT+Station&destination=The+Exchange+TRX+Kuala+Lumpur&travelmode=transit"
            },
            {
              time: "15:30 – 22:00",
              category: "shopping",
              title: "Đi bộ hoặc MRT sang Pavilion Kuala Lumpur & Ngã tư Bukit Bintang",
              desc: "Tâm điểm thời trang sầm uất nhất Bukit Bintang: Đài phun nước pha lê Liuli, phố Nhật Bản Tokyo Street (Tầng 6), màn hình LED 3D khổng lồ tại giao lộ Shibuya của Malaysia, thưởng thức bánh mì nướng Damascus Shawarma hoặc ẩm thực Lot 10 Hutong.",
              from: "The Exchange TRX",
              to: "Pavilion Kuala Lumpur & Giao lộ Bukit Bintang",
              primaryTransit: {
                mode: "🚶 Đi bộ lối có mái che (750m) HOẶC 🚇 MRT Kajang Line (1 trạm)",
                badgeColor: "#16a34a",
                duration: "9 phút đi bộ (hoặc 2 phút tàu MRT)",
                cost: "Miễn phí (Đi bộ) hoặc 1.10 MYR (MRT)",
                steps: [
                  "Cách 1 (Đi bộ 750m): Đi theo tuyến phố đi bộ có mái che (TRX–Bukit Bintang Pedestrian Walkway) dọc đường Jalan Bukit Bintang khoảng 9–10 phút là tới thẳng cổng Pavilion KL.",
                  "Cách 2 (Nếu mỏi chân - Đi MRT 1 trạm): Từ ga MRT Tun Razak Exchange (KG20) lên tàu hướng Kwasa Damansara đi 1 trạm tới MRT Bukit Bintang (KG18) → ra Cửa Exit D/E đi bộ 250m tới Pavilion KL.",
                  "Chặng về Hotel 99 lúc 22:00: Đi bộ 850m (~10 phút) qua phố Jalan Alor về thẳng Hotel 99 Kuala Lumpur City, HOẶC đi 1 trạm MRT Bukit Bintang (KG18) → MRT Merdeka (KG17)!"
                ]
              },
              backupTransit:
                "Trải nghiệm thêm nếu thích: Có thể đi thử 1 trạm tàu điện một ray trên cao KL Monorail từ ga Bukit Bintang (MR6) → ga Imbi (MR5) để ngắm phố đêm từ trên cao.",
              groupTip:
                "Màn hình LED 3D khổng lồ nằm ngay ngã tư trước cổng Lot 10 / Fahrenheit88 (cách cổng chính Pavilion 150m đi bộ).",
              mapPinUrl: "https://maps.google.com/?cid=17119990127312478132",
              mapRouteUrl:
                "https://www.google.com/maps/dir/?api=1&origin=The+Exchange+TRX+Kuala+Lumpur&destination=Pavilion+Kuala+Lumpur&travelmode=walking"
            }
          ]
        },
        {
          day: 5,
          date: "Thứ Ba, 24/11/2026",
          shortLabel: "Ngày 5 • T3 24/11 ✈️",
          tag: "Mua Quà & Bay Về",
          title: "Ngày 5 (Thứ Ba 24/11): Đi Bộ Săn Quà Central Market & Chinatown – Check-out Hotel 99 – Tàu Ra Sân Bay KLIA",
          alert: {
            type: "info",
            text: "Mẹo mua quà chuẩn: Từ Hotel 99 chỉ cần đi bộ 7 phút (600m) xuyên qua phố Petaling Street là tới Chợ Trung Tâm Central Market (Pasar Seni) có máy lạnh để mua Socola Beryl's chính hãng, trà BOH và đồ lưu niệm Batik!"
          },
          nodes: [
            {
              time: "09:00 – 11:15",
              category: "shopping",
              title: "Đi bộ săn đặc sản làm quà tại Central Market (Pasar Seni) & Oriental Kopi Shop",
              desc: "Mua Socola Beryl's (vị Tiramisu hạnh nhân, Matcha, Sầu riêng), trà sữa BOH Teh Tarik, cà phê trắng OldTown White Coffee, mứt Kaya lá dứa và cà phê phin giấy Oriental Kopi.",
              from: "Hotel 99 Kuala Lumpur City (44A Jalan Pudu)",
              to: "Central Market (Pasar Seni) & Phố Jalan Sultan",
              primaryTransit: {
                mode: "🚶 Đi bộ xuyên phố Chinatown (600m)",
                badgeColor: "#16a34a",
                duration: "7 phút đi bộ",
                cost: "Miễn phí",
                steps: [
                  "Bước 1: Từ Hotel 99 rẽ trái đi bộ dọc đường Jalan Pudu ~300m, rẽ vào phố Petaling Street đi xuyên qua chợ thêm 300m là tới tòa nhà màu xanh ngọc Central Market (Pasar Seni).",
                  "Bước 2: Trên đường đi bộ về lại khách sạn, ghé cửa hàng Oriental Kopi / siêu thị KK Super Mart trên đường Jalan Sultan để mua cà phê và mứt Kaya."
                ]
              },
              backupTransit:
                "Nếu xách nhiều hộp quà nặng lúc về: Có thể vào ga MRT Pasar Seni (KG16) ngay cạnh Central Market đi 1 trạm về ga MRT Merdeka (KG17) (1.10 MYR).",
              groupTip:
                "Mứt trứng Kaya (Kaya Jam) dạng hũ thuộc chất lỏng/gel: Bắt buộc phải đóng vào vali ký gửi trước khi ra sân bay, không xách tay lên máy bay nếu hũ trên 100ml!",
              mapPinUrl: "https://www.google.com/maps/search/?api=1&query=Central+Market+Kuala+Lumpur",
              mapRouteUrl:
                "https://www.google.com/maps/dir/?api=1&origin=Hotel+99+Kuala+Lumpur+City+Jalan+Pudu&destination=Central+Market+Kuala+Lumpur&travelmode=walking"
            },
            {
              time: "11:30 – 12:00",
              category: "hotel",
              title: "Làm thủ tục Check-out Hotel 99 Kuala Lumpur City & Nhận lại tiền cọc",
              desc: "Trả thẻ từ 2 phòng tại quầy lễ tân, đưa biên lai cọc (Deposit slip) để nhận lại 100–200 MYR tiền mặt. Dùng số tiền lẻ Ringgit còn dư để ăn trưa nhẹ quanh Bukit Bintang / Chinatown.",
              from: "Tại sảnh Hotel 99 Kuala Lumpur City",
              to: "Quầy lễ tân Hotel 99 Kuala Lumpur City",
              primaryTransit: {
                mode: "🏨 Tại khách sạn",
                badgeColor: "#475569",
                duration: "15 phút",
                cost: "Nhận lại +100–200 MYR tiền cọc",
                steps: [
                  "Kiểm tra kỹ hộ chiếu, sạc dự phòng, củ sạc 3 chấu trong cả 2 phòng trước khi xuống lễ tân trả phòng."
                ]
              },
              backupTransit: "Có thể gửi nhờ hành lý tại lễ tân nếu chuyến bay cất cánh vào buổi tối.",
              groupTip: "Chia lại quỹ tiền mặt Ringgit còn dư hoặc giữ lại để tiêu nốt tại khu miễn thuế sân bay KLIA.",
              mapPinUrl: "https://maps.google.com/?cid=17279110726563758836",
              mapRouteUrl: null
            },
            {
              time: "Chiều (Trước giờ bay 3.5 – 4 tiếng)",
              category: "transit",
              title: "Di chuyển từ Hotel 99 Kuala Lumpur City ra Sân bay KLIA (T1 / T2) & Bay về Việt Nam",
              desc: "Khởi hành ra sân bay bằng tàu MRT kết nối tàu cao tốc KLIA Ekspres (không bao giờ lo kẹt xe cao tốc), làm thủ tục xuất cảnh và bay về Việt Nam.",
              from: "Hotel 99 Kuala Lumpur City (44A Jalan Pudu)",
              to: "Sân bay Quốc tế KLIA Terminal 1 hoặc Terminal 2 (klia2)",
              primaryTransit: {
                mode: "🚇 MRT Kajang Line + Tàu cao tốc KLIA Ekspres",
                badgeColor: "#007a33",
                duration: "~40–45 phút tổng cộng",
                cost: "1.50 MYR (MRT) + ~45–55 MYR (KLIA Ekspres)",
                steps: [
                  "Bước 1: Từ Hotel 99 đi bộ 4 phút (300m) ra ga MRT Merdeka (KG17).",
                  "Bước 2: Lên tàu MRT Kajang Line (hướng Kwasa Damansara) đi 2 trạm tới ga MRT Muzium Negara (KG15) (1.50 MYR, 4 phút).",
                  "Bước 3: Đi bộ 3 phút qua cầu nối có thang cuốn/thang máy vào thẳng sảnh ga KL Sentral.",
                  "Bước 4: Lên tàu cao tốc KLIA Ekspres chạy thẳng không dừng: Tới KLIA Terminal 1 sau 28 phút, hoặc tới KLIA Terminal 2 (klia2) sau 33 phút!"
                ]
              },
              backupTransit:
                "Dự phòng nếu cả 4 người mua sắm quá nhiều túi xách nặng: Đặt GrabCar 6 chỗ (6-Seater) đón ngay cửa Hotel 99 (~95–120 MYR + ~12 MYR phí cầu đường, ~55–65 phút).",
              groupTip:
                "Kiểm tra kỹ nhà ga trên vé máy bay: Vietnam Airlines, Vietjet Air, Malaysia Airlines, Batik Air bay tại KLIA Terminal 1. Hãng AirAsia bay tại KLIA Terminal 2 (klia2)!",
              mapPinUrl: "https://www.google.com/maps/search/?api=1&query=Kuala+Lumpur+International+Airport",
              mapRouteUrl:
                "https://www.google.com/maps/dir/?api=1&origin=Hotel+99+Kuala+Lumpur+City+Jalan+Pudu&destination=Kuala+Lumpur+International+Airport&travelmode=transit"
            }
          ]
        }
      ]
    },
    transitSection: {
      heading: "Bản Đồ Tàu Điện Quanh Hotel 99 Kuala Lumpur City & Cẩm Nang Di Chuyển",
      subHeading:
        "Khách sạn Hotel 99 Kuala Lumpur City (44A–44B Jalan Pudu, Bukit Bintang) nằm ở vị trí vàng: đi bộ được tới cả Chinatown lẫn Jalan Alor, và bao quanh bởi 4 tuyến tàu điện chính (MRT, LRT, Monorail).",
      hotelCardTitle: "Thẻ Địa Chỉ Khách Sạn (Đưa Lễ Tân / Hỏi Đường)",
      hotelName: "Hotel 99 Kuala Lumpur City (Bukit Bintang)",
      hotelAddress: "44A - 44B, Jalan Pudu, Bukit Bintang, 55100 Kuala Lumpur, Malaysia",
      hotelLandmark: "Đối diện tòa nhà Puduraya (UTC Kuala Lumpur), cách ga LRT Plaza Rakyat 200m & MRT Merdeka 300m.",
      roomSetup: "2 Phòng (4 Đêm: 20/11 – 24/11/2026): 1 Phòng Deluxe Double (Couple) + 1 Phòng Deluxe Twin (2 Nữ).",
      copyBtn: "Sao chép địa chỉ KS",
      copiedBtn: "Đã sao chép!",
      stationsTitle: "4 Trạm Tàu Điện Bao Quanh Khách Sạn (Đi Bộ 3–10 Phút)",
      stations: [
        {
          name: "1. Ga MRT Merdeka (Mã: KG17) — Tuyến Chính Của Đoàn",
          line: "Tuyến MRT Kajang Line (Tàu điện ngầm)",
          color: "#007a33",
          walk: "300m • 4 phút đi bộ (Qua lối nối Plaza Rakyat / Jalan Pudu)",
          connectsTo:
            "Đi 1 trạm tới Bukit Bintang (KG18 - Jalan Alor, Pavilion KL) • Đi 2 trạm tới TRX (KG20 - The Exchange TRX) • Đi 1 trạm tới Pasar Seni (KG16 - Chinatown) • Đi 2 trạm tới Muzium Negara (KG15 - KL Sentral đi sân bay).",
          mapUrl: "https://www.google.com/maps/dir/?api=1&origin=Hotel+99+Kuala+Lumpur+City+Jalan+Pudu&destination=Merdeka+MRT+Station&travelmode=walking"
        },
        {
          name: "2. Ga LRT Plaza Rakyat (Mã: SP8 / AG8)",
          line: "Tuyến LRT Ampang & Sri Petaling Line",
          color: "#80276c",
          walk: "200m • 3 phút đi bộ (Ngay cầu vượt đối diện khách sạn)",
          connectsTo: "Đi 1 trạm tới Masjid Jamek (SP7 - Đổi sang tuyến Kelana Jaya Line đi KLCC) hoặc đi 1 trạm tới Hang Tuah (đổi sang Monorail).",
          mapUrl: "https://www.google.com/maps/dir/?api=1&origin=Hotel+99+Kuala+Lumpur+City+Jalan+Pudu&destination=Plaza+Rakyat+LRT+Station&travelmode=walking"
        },
        {
          name: "3. Ga MRT / LRT Pasar Seni (Mã: KG16 / KJ14)",
          line: "Trạm trung chuyển MRT Kajang Line & LRT Kelana Jaya Line",
          color: "#e31837",
          walk: "600m • 7 phút đi bộ (Hoặc đi 1 trạm MRT từ Merdeka KG17)",
          connectsTo:
            "Tuyến LRT Kelana Jaya (Màu đỏ hồng) đi thẳng tới: KLCC (KJ10 - Tháp đôi Petronas), Ampang Park (KJ9 - ILHAM Gallery), và Abdullah Hukum (KJ17 - Cầu kính sang Mid Valley & The Gardens Mall).",
          mapUrl: "https://www.google.com/maps/dir/?api=1&origin=Hotel+99+Kuala+Lumpur+City+Jalan+Pudu&destination=Pasar+Seni+LRT+Station&travelmode=walking"
        },
        {
          name: "4. Ga KL Monorail Imbi (MR5) & Bukit Bintang (MR6)",
          line: "Tuyến Tàu Điện Một Ray Trên Cao (KL Monorail)",
          color: "#8cc63f",
          walk: "650m – 800m • 8–10 phút đi bộ",
          connectsTo:
            "Trải nghiệm tàu chạy trên cao ngắm toàn cảnh đại lộ Bukit Bintang, Berjaya Times Square, LaLaport BBCC và Lot 10.",
          mapUrl: "https://www.google.com/maps/dir/?api=1&origin=Hotel+99+Kuala+Lumpur+City+Jalan+Pudu&destination=Imbi+Monorail+Station&travelmode=walking"
        }
      ],
      ticketGuideTitle: "Cách Mua Vé Tàu Điện MRT / LRT / Monorail Tại Kuala Lumpur",
      ticketTips: [
        {
          title: "Cách 1: Mua Xu Nhựa (Token) từng chặng tại máy tự động",
          desc: "Tất cả các ga MRT/LRT/Monorail đều có máy bán xu tự động (màn hình cảm ứng tiếng Anh). Chọn tên ga đến → Chọn số lượng '4' cho cả nhóm → Đút tiền giấy mệnh giá lẻ (1, 5, 10 MYR) hoặc tiền xu. Khi vào cổng thì chạm xu (Tap in), khi ra cổng thì nhét xu vào khe (Insert token)."
        },
        {
          title: "Cách 2: Thẻ Touch 'n Go hoặc Gói MyCity Pass (Đi không giới hạn)",
          desc: "Nếu mua thẻ Touch 'n Go tại quầy dịch vụ khách hàng ở ga (10 MYR/thẻ), bạn có thể nạp tiền để quẹt nhanh mà không cần xếp hàng mua xu, hoặc kích hoạt gói MyCity Pass (15 MYR/1 ngày hoặc 35 MYR/3 ngày đi tàu MRT, LRT, Monorail không giới hạn)."
        },
        {
          title: "Cách 3: Tàu sân bay KLIA Ekspres / KLIA Transit",
          desc: "Riêng cổng tàu sân bay KLIA Ekspres cho phép quẹt trực tiếp thẻ Visa/Mastercard không tiếp xúc (Contactless) hoặc quét mã QR mua trước trên Klook / App KLIA Ekspres (mua gói Group Saver cho nhóm 4 người được giảm giá)."
        }
      ],
      terminalTitle: "Phân Biệt Sân Bay KLIA Terminal 1 và KLIA Terminal 2 (klia2)",
      terminals: [
        {
          name: "KLIA Terminal 1 (Nhà ga chính)",
          airlines: "Vietnam Airlines, Vietjet Air, Malaysia Airlines, Batik Air",
          note: "Tàu KLIA Ekspres dừng ở ga đầu tiên (28 phút từ KL Sentral)."
        },
        {
          name: "KLIA Terminal 2 (klia2 - Nhà ga giá rẻ)",
          airlines: "AirAsia (AK)",
          note: "Tàu KLIA Ekspres dừng ở ga cuối cùng (33 phút từ KL Sentral). Sảnh đi bộ khá rộng nên cần đến sớm!"
        }
      ]
    },
    budgetSection: {
      heading: "Ngân Sách Chi Tiết & Công Cụ Chia Tiền Nhóm (4 Người)",
      calcTitle: "Công Cụ Quy Đổi MYR ↔ VNĐ & Chia Tiền Cho Nhóm (1 Couple + 2 Nữ)",
      calcSub: "Nhập số tiền Ringgit (MYR) khi đi ăn hoặc mua sắm để xem ngay giá VNĐ và số tiền chia theo từng người hoặc theo phòng/cặp đôi.",
      myrInputLabel: "Số tiền hóa đơn (MYR)",
      rateInputLabel: "Tỷ giá (1 MYR = ? VNĐ)",
      totalVndLabel: "Tổng thành tiền (VNĐ)",
      perPersonLabel: "Mỗi người (Chia 4)",
      coupleShareLabel: "Phần của Couple (2 người - 50%)",
      singleGirlLabel: "Mỗi bạn nữ (1 người - 25%)",
      cashCardSplit: [
        {
          title: "TIỀN MẶT (CASH - 40%)",
          badge: "~1.200 – 1.500 MYR",
          color: "#ef4444",
          bg: "#fee2e2",
          items: [
            "Thuế Du lịch TTx: 80 MYR (10 MYR × 2 phòng × 4 đêm) nộp tại Hotel 99 KL City.",
            "Tiền cọc 2 phòng: ~100–200 MYR tiền mặt (nhận lại 100% khi check-out ngày 24/11).",
            "Mua xu tàu MRT/LRT tại máy tự động: Chuẩn bị nhiều tờ 1 MYR, 5 MYR, 10 MYR lẻ.",
            "Ẩm thực đường phố: Phố đêm Jalan Alor, Roti Mansion Tea Stall, Ho Kow Kopitiam."
          ]
        },
        {
          title: "QUẸT THẺ / ONLINE (60%)",
          badge: "Visa / Mastercard / Klook",
          color: "#2563eb",
          bg: "#dbeafe",
          items: [
            "Vé tàu sân bay KLIA Ekspres: Đặt online nhóm 4 người hoặc chạm thẻ Visa tại cổng.",
            "Mega Malls: Mid Valley, The Gardens, The Exchange TRX, Pavilion KL, Suria KLCC.",
            "Nhà hàng lớn & Bảo tàng: Din Tai Fung, Bunn Choon, Bảo tàng Hồi giáo, Central Market.",
            "Ứng dụng Grab (Dự phòng): Tự động trừ qua thẻ Visa/Mastercard đã liên kết."
          ]
        }
      ],
      tableHeaders: ["Khoản mục chi phí", "Công thức tính (4 người)", "Hình thức thanh toán", "Thành tiền (VNĐ)"],
      totalLabel: "TỔNG DỰ TOÁN TRỌN GÓI (4 NGƯỜI)",
      perPersonTotalLabel: "TRUNG BÌNH MỖI NGƯỜI (5N4Đ)",
      items: [
        {
          name: "Vé máy bay khứ hồi (20/11 – 24/11/2026)",
          formula: "3.750.000đ × 4 người",
          cost: 15000000,
          type: "Online (Prepaid)"
        },
        {
          name: "Khách sạn Hotel 99 Kuala Lumpur City (Bukit Bintang)",
          formula: "500.000đ × 2 phòng (1 Đôi + 1 Twin) × 4 đêm",
          cost: 4000000,
          type: "Online (Traveloka / Booking)"
        },
        {
          name: "Thuế Du Lịch Malaysia (TTx)",
          formula: "10 MYR × 2 phòng × 4 đêm (80 MYR)",
          cost: 460000,
          type: "Tiền mặt tại lễ tân"
        },
        {
          name: "Di chuyển Tàu điện (MRT/LRT/Monorail + KLIA Ekspres)",
          formula: "Vé tàu nội đô 5 ngày (~20 MYR/người) + Tàu/Xe sân bay khứ hồi",
          cost: 2650000,
          type: "Tiền mặt lẻ + Thẻ / Klook"
        },
        {
          name: "Ăn uống 5 ngày (Nhà hàng + Street Food + Cafe)",
          formula: "500.000đ / người / ngày × 4 người × 5 ngày",
          cost: 10000000,
          type: "Tiền mặt + Thẻ"
        },
        {
          name: "Vé tham quan Bảo tàng Nghệ thuật Hồi giáo",
          formula: "20 MYR × 4 người (ILHAM, Merdeka, Kwai Chai Hong miễn phí)",
          cost: 500000,
          type: "Thẻ / Tiền mặt"
        },
        {
          name: "eSIM / SIM 4G & Quỹ dự phòng phát sinh",
          formula: "4 eSIM/SIM 4G + nước uống, ăn vặt",
          cost: 890000,
          type: "Online / Tiền mặt"
        }
      ]
    },
    mallsSection: {
      heading: "Cẩm Nang Oanh Tạc Mega Malls & Trạm Tàu Điện Tương Ứng",
      subHeading:
        "Mỗi trung tâm thương mại đều kèm chỉ dẫn ga MRT/LRT đi thẳng vào sảnh và Điểm hẹn Cafe nghỉ chân cho nhóm 4 người.",
      stationLabel: "Ga tàu điện kết nối",
      restStopLabel: "Điểm hẹn & Cafe nghỉ chân cho nhóm",
      tipLabel: "Mẹo mua sắm & Ẩm thực",
      malls: [
        {
          name: "Mid Valley Megamall & The Gardens Mall",
          tag: "Ngày 3 (CN 22/11) • Rộng Lớn Nhất",
          station: "LRT Abdullah Hukum (KJ17 - Tuyến Kelana Jaya Line) → Đi bộ qua cầu kính máy lạnh 5 phút",
          highlight:
            "Quần thể 2 đại TTTM nối liền nhau với hơn 600 cửa hàng từ bình dân (Uniqlo, Padini, Vincci, Charles & Keith, Sephora) tới xa xỉ (LV, Hermes, Isetan).",
          restStop:
            "% Arabica (Tầng G The Gardens), Tsujiri Matcha, hoặc Oriental Kopi (Tầng LG Mid Valley).",
          tip: "Nếu muốn ăn Tiểu Long Bao nhân thịt heo nguyên bản, hãy ghé Din Tai Fung tại Tầng LG của The Gardens Mall!",
          mapUrl: "https://maps.google.com/?cid=6817294246995646399"
        },
        {
          name: "The Exchange TRX & TRX City Park",
          tag: "Ngày 4 (T2 23/11) • Hiện Đại & Đẳng Cấp Nhất",
          station: "MRT Tun Razak Exchange - TRX (KG20 - Tuyến Kajang Line) → Đi thẳng từ ga vào tầng Concourse",
          highlight:
            "Tổ hợp mới nhất KL với Apple Store mái vòm biểu tượng, công viên trên sân thượng rộng 4ha ngắm tháp Merdeka 118, Seibu Department Store và Gentle Monster.",
          restStop:
            "Bacha Coffee, Shake Shack (khu vực công viên tầng thượng) hoặc % Arabica TRX.",
          tip: "Từ Hotel 99 chỉ cần ra ga MRT Merdeka (KG17) đi đúng 2 trạm là vào thẳng lòng TRX!",
          mapUrl: "https://maps.google.com/?cid=4061662819426486708"
        },
        {
          name: "Pavilion Kuala Lumpur & Bukit Bintang",
          tag: "Ngày 4 (T2 23/11) • Trái Tim Bukit Bintang",
          station: "Đi bộ 750m từ TRX qua lối có mái che HOẶC MRT Bukit Bintang (KG18 - Cửa Exit D/E)",
          highlight:
            "Đài phun nước pha lê Liuli, khu phố Nhật Bản Tokyo Street (Tầng 6), giao lộ màn hình LED 3D khổng lồ và hàng trăm thương hiệu quốc tế.",
          restStop: "Khu phố Connection (Tầng 3), EL&N London Cafe (màu hồng cực hợp chụp ảnh cho các bạn nữ).",
          tip: "Buổi tối bước ra ngã tư trước cổng Lot 10 / Pavilion để xếp hàng mua bánh mì cuộn thịt nướng Damascus Shawarma nổi tiếng.",
          mapUrl: "https://maps.google.com/?cid=17119990127312478132"
        },
        {
          name: "Suria KLCC (Khối Đế Tháp Đôi Petronas)",
          tag: "Ngày 2 (T7 21/11) • Biểu Tượng Kuala Lumpur",
          station: "Đi bộ 700m từ ILHAM Gallery • Chiều về: LRT KLCC (KJ10 - Tuyến Kelana Jaya Line)",
          highlight:
            "Nằm ngay dưới chân Tháp đôi Petronas, hồ nhạc nước Lake Symphony, công viên KLCC Park và nhà hàng DIN by Din Tai Fung.",
          restStop: "Các quán cafe quanh hồ Esplanade nhìn thẳng ra đài phun nước.",
          tip: "Lấy số thứ tự ăn tối tại DIN by Din Tai Fung (Tầng 4) lúc 17:30 để kịp ăn xong trước suất nhạc nước 20:00.",
          mapUrl: "https://maps.google.com/?cid=1650228018688243814"
        }
      ]
    },
    checklistSection: {
      heading: "Checklist Chuẩn Bị Cho Đoàn 4 Người (Lưu Tự Động Trên Máy)",
      resetBtn: "Đặt lại danh sách",
      items: [
        {
          id: 1,
          text: "Khai tờ khai nhập cảnh điện tử Malaysia (MDAC) cho cả 4 người trong vòng 3 ngày trước ngày 20/11/2026 (từ ngày 17–19/11)",
          tag: "Bắt buộc"
        },
        {
          id: 2,
          text: "Kiểm tra Hộ chiếu (Passport) của cả 4 thành viên còn hạn tối thiểu trên 6 tháng tính từ ngày 24/11/2026",
          tag: "Bắt buộc"
        },
        {
          id: 3,
          text: "Xác nhận với Hotel 99 Kuala Lumpur City (Bukit Bintang) giữ đúng: 1 phòng Deluxe Double (Couple) + 1 phòng Deluxe Twin (2 giường đơn cho 2 bạn nữ)",
          tag: "Khách sạn"
        },
        {
          id: 4,
          text: "Đổi sẵn ~1.200 – 1.500 MYR tiền mặt (Ưu tiên nhiều tờ 1, 5, 10, 20 MYR lẻ để mua xu tàu MRT/LRT và ăn street food)",
          tag: "Tiền mặt"
        },
        {
          id: 5,
          text: "Để riêng 80 MYR tiền thuế du lịch + 200 MYR tiền cọc phòng trong phong bì để nộp ngay khi check-in Hotel 99",
          tag: "Khách sạn"
        },
        {
          id: 6,
          text: "Chuẩn bị 3–4 củ chuyển đổi ổ cắm điện 3 chấu vuông chuẩn Anh (Type G) + 1 ổ cắm nối dài nhiều cổng cho 2 phòng",
          tag: "Thiết bị"
        },
        {
          id: 7,
          text: "Cài đặt eSIM hoặc đặt trước SIM 4G Malaysia + Sạc dự phòng đầy pin (dùng Google Maps đi bộ & tra tuyến MRT)",
          tag: "Kết nối"
        },
        {
          id: 8,
          text: "Kích hoạt tính năng thanh toán quốc tế & chạm Contactless cho thẻ Visa/Mastercard + Cài sẵn app Grab dự phòng",
          tag: "Thanh toán"
        },
        {
          id: 9,
          text: "Chuẩn bị giày sneaker đi bộ êm chân (lịch trình đi bộ phố cổ & dạo Mega Malls khoảng 12.000–15.000 bước/ngày) + ô gấp gọn",
          tag: "Trang phục"
        }
      ]
    },
    footer:
      "Kế hoạch Kuala Lumpur 5N4Đ (20/11 – 24/11/2026) • Hotel 99 Kuala Lumpur City (Bukit Bintang) • Gần đi bộ, Xa ưu tiên MRT/LRT"
  },

  en: {
    nav: {
      brand: "KL 5D4N • 20–24 Nov",
      tabs: [
        { key: "itinerary", label: "Itinerary" },
        { key: "transit", label: "MRT / LRT" },
        { key: "budget", label: "Budget" },
        { key: "malls", label: "Mega Malls" },
        { key: "checklist", label: "Checklist" }
      ]
    },
    hero: {
      pill: "FRI 20 NOV – TUE 24 NOV 2026 • WALK WHEN CLOSE & MRT/LRT WHEN FAR",
      title: "Kuala Lumpur 5D4N",
      subtitle:
        "Detailed schedule for a group of 4 (1 Couple + 2 Female Friends) at Hotel 99 Kuala Lumpur City (Bukit Bintang): Walk to nearby spots (<800m), and prioritize MRT / LRT whenever transit is needed.",
      stats: [
        { label: "GROUP SIZE", val: "👥 4 Adults", sub: "1 Couple + 2 Girls (1 Double, 1 Twin)" },
        { label: "BASE CAMP HOTEL", val: "🏨 Hotel 99 KL City", sub: "44A-44B Jalan Pudu, Bukit Bintang" },
        { label: "TRANSIT RULE", val: "🚶 Walk + 🚇 MRT", sub: "Walk if <800m • MRT/LRT for longer legs" },
        { label: "TOTAL BUDGET", val: "💰 ~33.5M VNĐ", sub: "~8.375M VNĐ / person (All-in)" }
      ]
    },
    itinerarySection: {
      heading: "Day-by-Day Itinerary & Directions (20 Nov – 24 Nov 2026)",
      subHeading:
        "Walkable stops (<800m) prioritize walking. Longer distances prioritize RapidKL MRT/LRT. Click 'Show detailed directions' on any stop to expand the step-by-step route.",
      fromLabel: "From",
      toLabel: "To",
      primaryRailLabel: "PRIMARY ROUTE",
      backupLabel: "Alternative / Note",
      groupTipLabel: "Planner Tip (1 Couple + 2 Girls)",
      openPinBtn: "Place Pin",
      openRouteBtn: "Google Maps Directions",
      expandBtn: "Show detailed directions",
      collapseBtn: "Hide directions",
      expandAllBtn: "Expand all directions",
      collapseAllBtn: "Collapse all",
      days: [
        {
          day: 1,
          date: "Friday, 20 Nov 2026",
          shortLabel: "Day 1 • Fri 20 Nov",
          tag: "Arrival & Chinatown",
          title: "Day 1 (Fri 20 Nov): Land at KLIA – Hotel 99 KL City – REXKL – Kwai Chai Hong – Mee Tarik – Jalan Alor",
          alert: {
            type: "info",
            text: "Room Check-in Note for 1 Couple + 2 Girls: At Hotel 99 Kuala Lumpur City (44A Jalan Pudu), confirm your 2 rooms are assigned as 1 Deluxe Double (1 Queen bed for the Couple) + 1 Deluxe Twin (2 Single beds for the 2 Girls)."
          },
          nodes: [
            {
              time: "Afternoon (13:30 – 15:30)",
              category: "transit",
              title: "Arrive at KLIA (T1/T2) → Check-in Hotel 99 Kuala Lumpur City (Bukit Bintang)",
              desc: "Clear immigration (submit MDAC online 3 days prior). Since KLIA is 55km from the city, take the high-speed KLIA Ekspres train connecting to the MRT Kajang Line. Pay 80 MYR Tourism Tax + 100–200 MYR cash deposit at reception.",
              from: "KLIA Terminal 1 or Terminal 2 (klia2)",
              to: "Hotel 99 Kuala Lumpur City (44A-44B, Jalan Pudu, Bukit Bintang)",
              primaryTransit: {
                mode: "🚇 KLIA Ekspres + MRT Kajang Line",
                badgeColor: "#007a33",
                duration: "~45 mins total",
                cost: "~46.50 – 56.50 MYR / pax",
                steps: [
                  "Step 1: Board KLIA Ekspres (28 mins non-stop) or KLIA Transit (35 mins) from KLIA T1/T2 to KL Sentral (Buy 4-pax Group Saver or Klook voucher for ~15% off).",
                  "Step 2: At KL Sentral, walk 3 mins through the indoor air-conditioned linkway to MRT Muzium Negara (Station Code: KG15).",
                  "Step 3: Take the MRT Kajang Line (towards Kajang) for 2 stops: Muzium Negara (KG15) → Pasar Seni (KG16) → alight at MRT Merdeka (KG17) (Fare: 1.50 MYR/pax, 4 mins).",
                  "Step 4: Exit via Plaza Rakyat / Jalan Pudu linkway and walk 300m (~4 mins) to Hotel 99 Kuala Lumpur City."
                ]
              },
              backupTransit:
                "Backup with heavy suitcases: Book a GrabCar 6-Seater at Level 1 Door 3–4 (KLIA1) or Level 1 Transportation Hub (KLIA2). Cost: ~95–120 MYR + ~12 MYR toll. (Standard 4-seaters cannot fit 4 suitcases).",
              groupTip:
                "Keep the physical Deposit Receipt slips for both rooms safe—you will need them on Day 5 to get 100% of your cash deposit back.",
              mapPinUrl: "https://maps.google.com/?cid=17279110726563758836",
              mapRouteUrl:
                "https://www.google.com/maps/dir/?api=1&origin=Kuala+Lumpur+International+Airport&destination=Hotel+99+Kuala+Lumpur+City+Jalan+Pudu&travelmode=transit"
            },
            {
              time: "16:00 – 17:30",
              category: "culture",
              title: "REXKL Creative Hub & BookXcess Labyrinth",
              desc: "A 1940s vintage cinema transformed into a brutalist arts and cultural hub. Head up to the top floor to explore the famous floor-to-ceiling BookXcess book maze.",
              from: "Hotel 99 Kuala Lumpur City (44A Jalan Pudu)",
              to: "REXKL (80, Jalan Sultan, Chinatown)",
              primaryTransit: {
                mode: "🚶 Walk (Only 450m)",
                badgeColor: "#16a34a",
                duration: "6 mins walk",
                cost: "Free",
                steps: [
                  "Turn left out of Hotel 99 onto Jalan Pudu and walk 300m past the Kotaraya intersection.",
                  "Turn into Jalan Sultan and walk 150m—REXKL is on your right."
                ]
              },
              backupTransit: "Only 450m away—easy walk, no train or car needed.",
              groupTip:
                "Best photo angle for the couple and girls: Stand on the upper mezzanine walkway inside BookXcess while another member shoots with a 0.5x ultra-wide lens from below.",
              mapPinUrl: "https://maps.google.com/?cid=8318395919362480651",
              mapRouteUrl:
                "https://www.google.com/maps/dir/?api=1&origin=Hotel+99+Kuala+Lumpur+City+Jalan+Pudu&destination=REXKL+Jalan+Sultan&travelmode=walking"
            },
            {
              time: "17:30 – 18:15",
              category: "culture",
              title: "Kwai Chai Hong Heritage Mural Alley",
              desc: "Restored 1960s Chinatown back-alley featuring an iconic red wooden bridge, vintage lanterns, and interactive street murals.",
              from: "REXKL (80, Jalan Sultan)",
              to: "Kwai Chai Hong (Lorong Panggung)",
              primaryTransit: {
                mode: "🚶 Walk (250m)",
                badgeColor: "#16a34a",
                duration: "3 mins walk",
                cost: "Free",
                steps: [
                  "Walk west down Jalan Sultan (~200m) and turn left into Lorong Panggung through the heritage archway."
                ]
              },
              backupTransit: "Pedestrian heritage zone.",
              groupTip: "Open daily until midnight. Scan the QR codes beside each mural to hear 1960s Chinatown audio stories!",
              mapPinUrl: "https://www.google.com/maps/search/?api=1&query=Kwai+Chai+Hong+Kuala+Lumpur",
              mapRouteUrl:
                "https://www.google.com/maps/dir/?api=1&origin=REXKL+Kuala+Lumpur&destination=Kwai+Chai+Hong+Kuala+Lumpur&travelmode=walking"
            },
            {
              time: "18:15 – 19:45",
              category: "food",
              title: "Petaling Street & Hand-Pulled Ramen at Mee Tarik Jalan Sultan",
              desc: "Savor freshly hand-pulled beef/lamb noodle soup in spiced broth alongside crispy pan-fried beef dumplings dipped in chili oil and black vinegar.",
              from: "Kwai Chai Hong (Lorong Panggung)",
              to: "Mee Tarik Restoran (36, Jalan Sultan)",
              primaryTransit: {
                mode: "🚶 Walk (150m)",
                badgeColor: "#16a34a",
                duration: "2 mins walk",
                cost: "Free",
                steps: [
                  "Walk 150m back along Jalan Sultan towards the Petaling Street arch. Mee Tarik is right on the corner."
                ]
              },
              backupTransit: "150m walk.",
              groupTip:
                "Recommended order for 4: 2 Braised Beef Ramen, 1 Stir-fried Cumin Beef Noodles, 2 plates of Pan-Fried Beef Dumplings (Guo Tie), and 4 Iced Lime Teas.",
              mapPinUrl: "https://maps.google.com/?cid=534351893711703046",
              mapRouteUrl:
                "https://www.google.com/maps/dir/?api=1&origin=Kwai+Chai+Hong+Kuala+Lumpur&destination=Mee+Tarik+Jalan+Sultan+Kuala+Lumpur&travelmode=walking"
            },
            {
              time: "20:00 – 22:30",
              category: "food",
              title: "Jalan Alor Night Food Street (Bukit Bintang) & Walk Back to Hotel",
              desc: "KL's vibrant open-air food street: Famous Wong Ah Wah charcoal-grilled chicken wings, Lok-Lok skewers, coconut ice cream, and Musang King durian.",
              from: "Mee Tarik Jalan Sultan (Chinatown)",
              to: "Jalan Alor Night Market (Bukit Bintang)",
              primaryTransit: {
                mode: "🚇 MRT Kajang Line (Outbound) + 🚶 Walk 750m Back to Hotel",
                badgeColor: "#007a33",
                duration: "4 mins MRT (Return walk: 9 mins)",
                cost: "1.20 – 1.50 MYR / pax",
                steps: [
                  "Outbound from Mee Tarik (~1.3km): Walk 3 mins to MRT Pasar Seni (KG16) → take MRT Kajang Line (towards Kajang) for 2 stops to MRT Bukit Bintang (KG18) → Exit A and walk 200m into Jalan Alor.",
                  "Return to Hotel 99 KL City (Walkable - 750m!): Walk from Jalan Alor via Jalan Tong Shin onto Jalan Pudu (~750m, 9 mins) straight to Hotel 99 Kuala Lumpur City (or take 1 stop MRT Bukit Bintang KG18 → MRT Merdeka KG17)."
                ]
              },
              backupTransit:
                "You can also walk the entire way from Chinatown to Jalan Alor (~1.1km, 14 mins) along Jalan Pudu if you feel like an evening stroll.",
              groupTip:
                "Because Hotel 99 Kuala Lumpur City is right on the edge of Bukit Bintang, walking back from Jalan Alor takes only 9 minutes—no stress if you stay past midnight!",
              mapPinUrl: "https://maps.google.com/?cid=13050949940542192959",
              mapRouteUrl:
                "https://www.google.com/maps/dir/?api=1&origin=Mee+Tarik+Jalan+Sultan+Kuala+Lumpur&destination=Jalan+Alor+Kuala+Lumpur&travelmode=transit"
            }
          ]
        },
        {
          day: 2,
          date: "Saturday, 21 Nov 2026",
          shortLabel: "Day 2 • Sat 21 Nov",
          tag: "Heritage & Petronas KLCC",
          title: "Day 2 (Sat 21 Nov): Morning Walk to Roti Canai & Merdeka – LRT to Islamic Arts & ILHAM – Walk to KLCC",
          alert: {
            type: "success",
            text: "Saturday 21 Nov Flow: Morning heritage walk from Hotel 99 to Mansion Tea Stall, River of Life & Merdeka Square. Afternoon LRT Kelana Jaya Line to Islamic Arts Museum & ILHAM Gallery, then an 8-minute walk to Suria KLCC!"
          },
          nodes: [
            {
              time: "08:30 – 09:45",
              category: "food",
              title: "Morning Walk to Roti Banjir Special at Mansion Tea Stall",
              desc: "Experience KL's iconic mamak breakfast: shredded flaky Roti Canai flooded with lentil dhal curry, sweet-spicy sambal, and 2 runny soft-boiled eggs paired with frothy Teh Tarik milk tea.",
              from: "Hotel 99 Kuala Lumpur City (44A Jalan Pudu)",
              to: "Mansion Tea Stall (Lorong Bunus Sebelas, Masjid India)",
              primaryTransit: {
                mode: "🚶 Morning Walk (800m)",
                badgeColor: "#16a34a",
                duration: "10 mins walk",
                cost: "Free",
                steps: [
                  "Turn right out of Hotel 99 and walk 600m along Jalan Pudu / Jalan Tun Perak towards Masjid Jamek.",
                  "Turn right into Jalan Masjid India and walk 200m to Mansion Tea Stall (at Selangor Mansion)."
                ]
              },
              backupTransit:
                "Rail alternative: Walk 200m to LRT Plaza Rakyat (SP8) → take 1 stop to LRT Masjid Jamek (SP7) (1.20 MYR, 2 mins).",
              groupTip:
                "Simply order: '4 Roti Banjir Special + 4 Teh Tarik'. It arrives hot at your table in under 3 minutes!",
              mapPinUrl: "https://maps.google.com/?cid=7937314599155281025",
              mapRouteUrl:
                "https://www.google.com/maps/dir/?api=1&origin=Hotel+99+Kuala+Lumpur+City+Jalan+Pudu&destination=Mansion+Tea+Stall+Kuala+Lumpur&travelmode=walking"
            },
            {
              time: "10:00 – 11:45",
              category: "culture",
              title: "River of Life – Merdeka Square & Sultan Abdul Samad Building",
              desc: "Stroll along the historic River of Life confluence boardwalk to admire the 1897 Moorish-style Sultan Abdul Samad clock tower, Dataran Merdeka lawn, and the 'I LOVE KL' sculpture at KL City Gallery.",
              from: "Mansion Tea Stall (Masjid India)",
              to: "Dataran Merdeka (Merdeka Square)",
              primaryTransit: {
                mode: "🚶 Walk along River of Life Boardwalk (450m)",
                badgeColor: "#16a34a",
                duration: "5 mins walk",
                cost: "Free",
                steps: [
                  "Walk south past LRT Masjid Jamek along the riverside promenade directly onto Merdeka Square."
                ]
              },
              backupTransit: "All heritage landmarks are connected in a single walkable zone.",
              groupTip:
                "Stand on the green Dataran Merdeka field facing the red-brick Sultan Abdul Samad arches for a classic group photo of all 4 of you.",
              mapPinUrl: "https://maps.google.com/?cid=3750364922043052889",
              mapRouteUrl:
                "https://www.google.com/maps/dir/?api=1&origin=Mansion+Tea+Stall+Kuala+Lumpur&destination=Merdeka+Square+Kuala+Lumpur&travelmode=walking"
            },
            {
              time: "12:00 – 14:45",
              category: "culture",
              title: "Islamic Arts Museum Malaysia (IAMM) & National Mosque",
              desc: "Famous for its five intricate turquoise-tiled inverted domes, architectural scale models of world mosques, and air-conditioned galleries.",
              from: "Merdeka Square / LRT Masjid Jamek",
              to: "Islamic Arts Museum Malaysia (Jalan Lembah Perdana)",
              primaryTransit: {
                mode: "🚇 LRT Kelana Jaya Line (1 Stop) + Covered Pedestrian Bridge",
                badgeColor: "#e31837",
                duration: "2 mins train + 8 mins shaded bridge walk",
                cost: "1.10 MYR / pax (Museum entry: 20 MYR/pax)",
                steps: [
                  "Step 1: Take the LRT Kelana Jaya Line from LRT Masjid Jamek (KJ13) for 1 stop to LRT Pasar Seni (KJ14) (or walk 650m along the river from KL City Gallery to Pasar Seni).",
                  "Step 2: Follow the indoor signs connecting LRT Pasar Seni to the historic KTM Kuala Lumpur station overhead pedestrian bridge.",
                  "Step 3: Cross the covered bridge over the highway directly to Masjid Negara (National Mosque) and walk 150m up to the Islamic Arts Museum."
                ]
              },
              backupTransit:
                "If the group wants to skip walking up the hill at noon: GrabCar 4-Seater from KL City Gallery (~6–8 MYR total, 5 mins).",
              groupTip:
                "Don't miss the turquoise geometric domes on Levels 3 & 4 and the museum gift shop. If stopping by Masjid Negara (150m away), complimentary robes are provided for women.",
              mapPinUrl: "https://maps.google.com/?cid=8999738247126300043",
              mapRouteUrl:
                "https://www.google.com/maps/dir/?api=1&origin=Merdeka+Square+Kuala+Lumpur&destination=Islamic+Arts+Museum+Malaysia&travelmode=transit"
            },
            {
              time: "15:15 – 17:00",
              category: "culture",
              title: "ILHAM Gallery (Contemporary Southeast Asian Art)",
              desc: "Located on Levels 3 & 5 of the Norman Foster-designed Ilham Tower. Showcases curated contemporary exhibitions and an artsy Malaysian design gift shop.",
              from: "Islamic Arts Museum Malaysia",
              to: "ILHAM Gallery (Ilham Tower, 8 Jalan Binjai)",
              primaryTransit: {
                mode: "🚇 LRT Kelana Jaya Line (Direct 5 Stops)",
                badgeColor: "#e31837",
                duration: "11 mins on train + bridge walk",
                cost: "2.40 MYR / pax (Gallery entry: Free)",
                steps: [
                  "Step 1: Walk 8 mins across the covered link bridge back to LRT Pasar Seni (KJ14).",
                  "Step 2: Board the LRT Kelana Jaya Line (towards Gombak) for 5 stops: Pasar Seni (KJ14) → Masjid Jamek → Dang Wangi → Kampung Baru → KLCC → alight at LRT Ampang Park (KJ9).",
                  "Step 3: Exit LRT Ampang Park and walk 200m (3 mins) to Ilham Tower."
                ]
              },
              backupTransit: "4.5km distance requires transit—LRT Kelana Jaya Line is the fastest and cheapest option.",
              groupTip:
                "Check out the ILHAM Gift Shop on Level 5—it has unique batik notebooks, tote bags, and local artisan jewelry that the girls will love.",
              mapPinUrl: "https://maps.google.com/?cid=13503462404486618185",
              mapRouteUrl:
                "https://www.google.com/maps/dir/?api=1&origin=Islamic+Arts+Museum+Malaysia&destination=ILHAM+Gallery+Kuala+Lumpur&travelmode=transit"
            },
            {
              time: "17:30 – 21:30",
              category: "food",
              title: "Walk to Suria KLCC for DIN by Din Tai Fung & Petronas Lake Symphony Show",
              desc: "Walk 8 minutes to Suria KLCC for soup dumplings at Level 4, watch the Lake Symphony musical fountain show (20:00, 21:00, 22:00), then take the LRT back to Hotel 99.",
              from: "ILHAM Gallery (Ilham Tower)",
              to: "Suria KLCC & Petronas Twin Towers",
              primaryTransit: {
                mode: "🚶 Walk to KLCC (700m) + 🚇 LRT Return to Hotel",
                badgeColor: "#16a34a",
                duration: "8 mins walk (Return to Hotel: 10 mins LRT)",
                cost: "To KLCC: Free (Walk) • Return LRT: 2.30 MYR/pax",
                steps: [
                  "To Suria KLCC (Walkable - 700m): Turn left out of Ilham Tower and walk 700m (~8 mins) along Jalan Binjai into KLCC Park & Suria KLCC (or take 1 stop LRT Ampang Park KJ9 → LRT KLCC KJ10).",
                  "Return to Hotel 99 at 21:30 (3km - Take LRT): Enter LRT KLCC (KJ10) → ride 3 stops to LRT Masjid Jamek (KJ13) → switch platform to Sri Petaling Line for 1 stop to LRT Plaza Rakyat (SP8) → walk 3 mins (200m) to Hotel 99 Kuala Lumpur City!"
                ]
              },
              backupTransit:
                "Alternative return: Walk through the air-conditioned KLCC–Pavilion Pedestrian Walkway (15 mins) to MRT Bukit Bintang (KG18) and ride 1 stop to MRT Merdeka (KG17).",
              groupTip:
                "10-Year Planner Insider Tip: The Suria KLCC branch is 'DIN by Din Tai Fung' (Pork-Free/Halal-friendly). For classic Non-Halal Pork Xiao Long Bao, visit Din Tai Fung at The Gardens Mall (Day 3) or Pavilion KL (Day 4)!",
              mapPinUrl: "https://maps.google.com/?cid=1650228018688243814",
              mapRouteUrl:
                "https://www.google.com/maps/dir/?api=1&origin=ILHAM+Gallery+Kuala+Lumpur&destination=Suria+KLCC+Kuala+Lumpur&travelmode=walking"
            }
          ]
        },
        {
          day: 3,
          date: "Sunday, 22 Nov 2026",
          shortLabel: "Day 3 • Sun 22 Nov 🔥",
          tag: "Bunn Choon & Mid Valley",
          title: "Day 3 (Sun 22 Nov): Walk to Bunn Choon Dim Sum – LRT to Mid Valley Megamall & The Gardens",
          alert: {
            type: "warning",
            text: "Smart Date Swap: Bunn Choon Chinatown is CLOSED EVERY MONDAY (23 Nov). We scheduled Bunn Choon Dim Sum & Egg Tarts on Sunday morning (22 Nov, 7-min walk from Hotel 99) right before taking the LRT to Mid Valley!"
          },
          nodes: [
            {
              time: "08:15 – 09:45",
              category: "food",
              title: "Walk to Dim Sum & Mille-Feuille Egg Tarts at Bunn Choon Restaurant",
              desc: "Heritage dim sum house dating back to 1893, famous for flaky multi-layered egg tarts (original & black sesame), shrimp har gow, siew mai, and char siew bao.",
              from: "Hotel 99 Kuala Lumpur City (44A Jalan Pudu)",
              to: "Bunn Choon Restaurant (8, Lorong Panggung, Chinatown)",
              primaryTransit: {
                mode: "🚶 Walk (550m)",
                badgeColor: "#16a34a",
                duration: "7 mins walk",
                cost: "Free",
                steps: [
                  "Turn left out of Hotel 99 and walk 300m down Jalan Pudu.",
                  "Continue 200m along Jalan Sultan and turn left into Lorong Panggung to reach Bunn Choon."
                ]
              },
              backupTransit: "Only 550m away—easy morning stroll.",
              groupTip:
                "Arrive between 08:15 and 08:30 to snag a table upstairs in the colorful retro dining room before the Sunday morning queue builds up.",
              mapPinUrl: "https://maps.google.com/?cid=10783793124020186203",
              mapRouteUrl:
                "https://www.google.com/maps/dir/?api=1&origin=Hotel+99+Kuala+Lumpur+City+Jalan+Pudu&destination=Bunn+Choon+Restaurant+Kuala+Lumpur&travelmode=walking"
            },
            {
              time: "09:45 – 15:30",
              category: "shopping",
              title: "Take LRT to Mid Valley Megamall Shopping Spree",
              desc: "Explore over 430 stores across one of Southeast Asia's largest malls: massive Uniqlo, Padini Concept Store, Vincci, Charles & Keith, Sephora, Bath & Body Works, Aeon Big supermarket, and LG food hall.",
              from: "Bunn Choon Restaurant (Chinatown)",
              to: "Mid Valley Megamall & The Gardens Mall",
              primaryTransit: {
                mode: "🚇 LRT Kelana Jaya Line (3 Stops) + Covered Eco City Bridge",
                badgeColor: "#e31837",
                duration: "7 mins train + 5 mins covered bridge walk",
                cost: "2.00 MYR / pax",
                steps: [
                  "Step 1: Walk 250m (3 mins) from Bunn Choon to LRT Pasar Seni (KJ14).",
                  "Step 2: Board the LRT Kelana Jaya Line (towards Putra Heights) for 3 stops: Pasar Seni (KJ14) → KL Sentral (KJ15) → Bangsar (KJ16) → alight at LRT Abdullah Hukum (KJ17).",
                  "Step 3: Follow the indoor signs for 'The Gardens / Mid Valley' across the air-conditioned KL Eco City Pedestrian Bridge (5 mins walk) straight into Level 1 of The Gardens Mall & Mid Valley!"
                ]
              },
              backupTransit:
                "6km distance requires transit—taking the LRT to Abdullah Hukum is fast, frequent, and 100% sheltered.",
              groupTip:
                "Mid Valley has North, Centre, and South Courts. If the couple and the 2 girls split up to shop, set your meeting point at Oriental Kopi (LG Floor) or Centre Court.",
              mapPinUrl: "https://maps.google.com/?cid=6817294246995646399",
              mapRouteUrl:
                "https://www.google.com/maps/dir/?api=1&origin=Pasar+Seni+LRT+Station&destination=Mid+Valley+Megamall+Kuala+Lumpur&travelmode=transit"
            },
            {
              time: "15:30 – 18:30",
              category: "shopping",
              title: "Walk Across the Glass Skybridge to The Gardens Mall & Specialty Cafes",
              desc: "Upscale sister mall connected directly to Mid Valley. Browse international luxury boutiques, Isetan Japanese Department Store, and relax at specialty cafes.",
              from: "Mid Valley Megamall",
              to: "The Gardens Mall (Connected Indoors)",
              primaryTransit: {
                mode: "🚶 Indoor Glass Skybridge Walk (Level 1, Ground or LG)",
                badgeColor: "#16a34a",
                duration: "2 mins indoor walk",
                cost: "Free",
                steps: [
                  "Cross via the Level 1 Glass Skybridge or the Lower Ground (LG) food passage connecting Mid Valley and The Gardens Mall (100% air-conditioned)."
                ]
              },
              backupTransit: "Same integrated complex.",
              groupTip:
                "Best Anchor Cafe Rest Stops: % Arabica (Ground Floor, The Gardens), Tsujiri Matcha, or Oriental Kopi (famous for thick egg tarts & butter polo buns).",
              mapPinUrl: "https://maps.google.com/?cid=11145328905228581898",
              mapRouteUrl:
                "https://www.google.com/maps/dir/?api=1&origin=Mid+Valley+Megamall&destination=The+Gardens+Mall+Kuala+Lumpur&travelmode=walking"
            },
            {
              time: "18:30 – 21:30",
              category: "food",
              title: "Dinner at The Gardens / Mid Valley & LRT Ride Back to Hotel",
              desc: "Enjoy dinner at Din Tai Fung (The Gardens LG Floor - serves authentic Non-Halal Pork Xiao Long Bao!), Dragon-i, or Madam Kwan's before taking the LRT back to Hotel 99.",
              from: "The Gardens Mall / Mid Valley Megamall",
              to: "Hotel 99 Kuala Lumpur City (44A Jalan Pudu)",
              primaryTransit: {
                mode: "🚇 LRT Kelana Jaya Line (3 Stops to Pasar Seni)",
                badgeColor: "#e31837",
                duration: "7 mins train + walk",
                cost: "2.00 – 2.60 MYR / pax",
                steps: [
                  "Step 1: Walk 5 mins across the Level 1 covered bridge from The Gardens Mall to LRT Abdullah Hukum (KJ17).",
                  "Step 2: Take the LRT Kelana Jaya Line (towards Gombak) for 3 stops to LRT Pasar Seni (KJ14) and walk 600m (7 mins) to Hotel 99 (or ride 4 stops to Masjid Jamek → 1 stop to LRT Plaza Rakyat SP8 right outside Hotel 99)."
                ]
              },
              backupTransit:
                "Evening road traffic around the Mid Valley ring road gets jammed between 18:00 and 20:00—riding the LRT from Abdullah Hukum skips all traffic!",
              groupTip:
                "You can store heavy shopping bags at the automated lockers on Ground Floor before heading to dinner.",
              mapPinUrl: "https://maps.google.com/?cid=17279110726563758836",
              mapRouteUrl:
                "https://www.google.com/maps/dir/?api=1&origin=Abdullah+Hukum+LRT+Station&destination=Hotel+99+Kuala+Lumpur+City+Jalan+Pudu&travelmode=transit"
            }
          ]
        },
        {
          day: 4,
          date: "Monday, 23 Nov 2026",
          shortLabel: "Day 4 • Mon 23 Nov ✨",
          tag: "The Exchange TRX & Pavilion",
          title: "Day 4 (Mon 23 Nov): Walk to Kopitiam Breakfast – MRT to The Exchange TRX – Walk to Pavilion KL",
          alert: {
            type: "info",
            text: "Day 4 Flow: 6-min morning walk to Ho Kow Kopitiam → Underground MRT Kajang Line straight into The Exchange TRX → 9-min covered walkway stroll (or 1-stop MRT) to Pavilion KL & walk back via Jalan Alor!"
          },
          nodes: [
            {
              time: "08:15 – 09:45",
              category: "food",
              title: "Walk to Breakfast at Ho Kow Hainam Kopitiam (or Oriental Kopi Chinatown)",
              desc: "Classic 1956 Hainanese breakfast (open Mondays from 07:30): charcoal-toasted Kaya Butter Toast, half-boiled Kampung eggs, rich Hainan Cham (coffee + tea blend), and fragrant Nasi Lemak.",
              from: "Hotel 99 Kuala Lumpur City (44A Jalan Pudu)",
              to: "Ho Kow Hainam Kopitiam (1, Jalan Balai Polis, Chinatown)",
              primaryTransit: {
                mode: "🚶 Walk (500m)",
                badgeColor: "#16a34a",
                duration: "6 mins walk",
                cost: "Free",
                steps: [
                  "Turn left out of Hotel 99 and walk 500m (~6 mins) down Jalan Pudu / Jalan Sultan to Jalan Balai Polis (right next to Kwai Chai Hong)."
                ]
              },
              backupTransit:
                "If Ho Kow has a queue, Oriental Kopi Chinatown is just 50m away on Jalan Sultan with spacious air-conditioned seating!",
              groupTip:
                "Dip your crispy Kaya Butter Toast directly into the saucer of soft-boiled eggs seasoned with dark soy sauce and white pepper!",
              mapPinUrl: "https://www.google.com/maps/search/?api=1&query=Ho+Kow+Hainan+Kopitiam+Kuala+Lumpur",
              mapRouteUrl:
                "https://www.google.com/maps/dir/?api=1&origin=Hotel+99+Kuala+Lumpur+City+Jalan+Pudu&destination=Ho+Kow+Hainan+Kopitiam+Kuala+Lumpur&travelmode=walking"
            },
            {
              time: "10:00 – 15:30",
              category: "shopping",
              title: "MRT Direct to The Exchange TRX & TRX City Rooftop Park",
              desc: "Malaysia's premier lifestyle quarter: Visit Malaysia's first Apple Store (iconic glowing dome inside the 10-acre rooftop park), take photos with Merdeka 118 (world's 2nd tallest building), and explore Seibu, Gentle Monster, Bacha Coffee, and Shake Shack.",
              from: "Ho Kow Hainam Kopitiam (Chinatown)",
              to: "The Exchange TRX (Tun Razak Exchange)",
              primaryTransit: {
                mode: "🚇 MRT Kajang Line (Direct Underground Mall Link)",
                badgeColor: "#007a33",
                duration: "5 mins on train",
                cost: "1.50 MYR / pax",
                steps: [
                  "Step 1: Walk 200m (3 mins) from breakfast into MRT Pasar Seni (KG16).",
                  "Step 2: Board the MRT Kajang Line (towards Kajang) for 3 stops: Pasar Seni (KG16) → Merdeka (KG17) → Bukit Bintang (KG18) → alight at MRT Tun Razak Exchange - TRX (KG20).",
                  "Step 3: Follow the direct underground signs straight into The Exchange TRX Concourse without stepping outside!"
                ]
              },
              backupTransit: "The MRT Kajang Line connects directly inside the mall basement—fastest possible route.",
              groupTip:
                "Head up to TRX City Park (Level 3 Rooftop) to capture the Apple Store dome with Merdeka 118 rising behind it. Bacha Coffee and Shake Shack open right onto the park!",
              mapPinUrl: "https://maps.google.com/?cid=4061662819426486708",
              mapRouteUrl:
                "https://www.google.com/maps/dir/?api=1&origin=Pasar+Seni+MRT+Station&destination=The+Exchange+TRX+Kuala+Lumpur&travelmode=transit"
            },
            {
              time: "15:30 – 22:00",
              category: "shopping",
              title: "Walk or 1-Stop MRT to Pavilion Kuala Lumpur & Bukit Bintang Crossing",
              desc: "The heart of Bukit Bintang shopping: Liuli Crystal Fountain, Tokyo Street (Level 6), the giant 3D LED screen at Bukit Bintang crossing, viral Damascus Shawarma, and Lot 10 Hutong heritage food court.",
              from: "The Exchange TRX",
              to: "Pavilion Kuala Lumpur & Bukit Bintang",
              primaryTransit: {
                mode: "🚶 Covered Walkway (750m) OR 🚇 MRT Kajang Line (1 Stop)",
                badgeColor: "#16a34a",
                duration: "9 mins walk (or 2 mins MRT)",
                cost: "Free (Walk) or 1.10 MYR (MRT)",
                steps: [
                  "Option 1 (Walk - 750m): Follow the shaded TRX–Bukit Bintang Pedestrian Walkway along Jalan Bukit Bintang (~9–10 mins) straight to Pavilion KL.",
                  "Option 2 (If tired - 1 Stop MRT): From MRT Tun Razak Exchange (KG20), ride 1 stop towards Kwasa Damansara to MRT Bukit Bintang (KG18) → Exit D/E and walk 250m to Pavilion KL.",
                  "Return to Hotel 99 at 22:00: Walk 850m (~10 mins) via Jalan Alor / Jalan Tong Shin back to Hotel 99 KL City, OR take 1 stop MRT Bukit Bintang (KG18) → MRT Merdeka (KG17)!"
                ]
              },
              backupTransit:
                "Optional fun ride: Hop on the elevated KL Monorail at Bukit Bintang (MR6) for 1 stop to Imbi (MR5) to glide above the neon lights.",
              groupTip:
                "The giant 3D curved LED screen is right at the Lot 10 / Fahrenheit88 crosswalk (150m from Pavilion's main fountain).",
              mapPinUrl: "https://maps.google.com/?cid=17119990127312478132",
              mapRouteUrl:
                "https://www.google.com/maps/dir/?api=1&origin=The+Exchange+TRX+Kuala+Lumpur&destination=Pavilion+Kuala+Lumpur&travelmode=walking"
            }
          ]
        },
        {
          day: 5,
          date: "Tuesday, 24 Nov 2026",
          shortLabel: "Day 5 • Tue 24 Nov ✈️",
          tag: "Souvenirs & Fly Home",
          title: "Day 5 (Tue 24 Nov): Walk to Central Market Souvenirs – Check-out Hotel 99 – MRT + KLIA Ekspres to Airport",
          alert: {
            type: "info",
            text: "Authentic Souvenir Tip: Central Market (Pasar Seni) is an easy 7-minute (600m) walk from Hotel 99 through Petaling Street—fully air-conditioned and stocked with genuine Beryl's Chocolate, BOH Tea, and Batik gifts!"
          },
          nodes: [
            {
              time: "09:00 – 11:15",
              category: "shopping",
              title: "Walk to Central Market (Pasar Seni) & Oriental Kopi Shop for Souvenirs",
              desc: "Pick up Beryl's Chocolate (Tiramisu Almond, Matcha, Durian), BOH Teh Tarik sachets, OldTown White Coffee, pandan Kaya jam, and Oriental Kopi drip coffee packs.",
              from: "Hotel 99 Kuala Lumpur City (44A Jalan Pudu)",
              to: "Central Market (Pasar Seni) & Jalan Sultan",
              primaryTransit: {
                mode: "🚶 Walk through Chinatown (600m)",
                badgeColor: "#16a34a",
                duration: "7 mins walk",
                cost: "Free",
                steps: [
                  "Step 1: Turn left out of Hotel 99, walk 300m down Jalan Pudu, and walk 300m through Petaling Street straight to the pastel-blue Central Market (Pasar Seni) building.",
                  "Step 2: On your walk back to Hotel 99, stop by the Oriental Kopi retail store / KK Super Mart on Jalan Sultan for coffee and kaya jam."
                ]
              },
              backupTransit:
                "If carrying heavy souvenir boxes on the way back: Take MRT Pasar Seni (KG16) right next to Central Market for 1 stop to MRT Merdeka (KG17) (1.10 MYR).",
              groupTip:
                "Packing Reminder: Kaya Jam jars count as liquids/gels—pack any jars over 100ml inside your checked luggage before closing your suitcases!",
              mapPinUrl: "https://www.google.com/maps/search/?api=1&query=Central+Market+Kuala+Lumpur",
              mapRouteUrl:
                "https://www.google.com/maps/dir/?api=1&origin=Hotel+99+Kuala+Lumpur+City+Jalan+Pudu&destination=Central+Market+Kuala+Lumpur&travelmode=walking"
            },
            {
              time: "11:30 – 12:00",
              category: "hotel",
              title: "Check-out Hotel 99 Kuala Lumpur City & Collect Cash Deposit",
              desc: "Return keycards for both rooms at reception and hand in your deposit receipts to get 100–200 MYR cash back. Spend leftover Ringgit notes on lunch or airport treats.",
              from: "At Hotel 99 Kuala Lumpur City Lobby",
              to: "Hotel 99 Reception Desk",
              primaryTransit: {
                mode: "🏨 At Hotel",
                badgeColor: "#475569",
                duration: "15 mins",
                cost: "Refund +100–200 MYR deposit",
                steps: [
                  "Double-check both rooms for passports, power banks, and UK 3-pin adapters before handing in keys."
                ]
              },
              backupTransit: "Free luggage storage is available at the front desk if your flight departs late.",
              groupTip: "Settle any remaining shared cash pool or save leftover MYR for duty-free chocolates at KLIA.",
              mapPinUrl: "https://maps.google.com/?cid=17279110726563758836",
              mapRouteUrl: null
            },
            {
              time: "Afternoon (3.5 – 4h Before Flight)",
              category: "transit",
              title: "Transfer from Hotel 99 Kuala Lumpur City to KLIA (T1 / T2) & Fly Home",
              desc: "Head to the airport smoothly via MRT Kajang Line + high-speed KLIA Ekspres (zero highway traffic risk), clear departure immigration, and fly home.",
              from: "Hotel 99 Kuala Lumpur City (44A Jalan Pudu)",
              to: "KLIA Terminal 1 or Terminal 2 (klia2)",
              primaryTransit: {
                mode: "🚇 MRT Kajang Line + KLIA Ekspres High-Speed Rail",
                badgeColor: "#007a33",
                duration: "~40–45 mins total",
                cost: "1.50 MYR (MRT) + ~45–55 MYR (KLIA Ekspres)",
                steps: [
                  "Step 1: Walk 4 mins (300m) from Hotel 99 to MRT Merdeka (KG17).",
                  "Step 2: Take the MRT Kajang Line (towards Kwasa Damansara) for 2 stops to MRT Muzium Negara (KG15) (1.50 MYR, 4 mins).",
                  "Step 3: Walk 3 mins via the indoor escalator/elevator linkway directly into KL Sentral Departure Hall.",
                  "Step 4: Board the non-stop KLIA Ekspres: Arrives at KLIA Terminal 1 in 28 mins, or KLIA Terminal 2 (klia2) in 33 mins!"
                ]
              },
              backupTransit:
                "Backup with heavy shopping bags: Book a GrabCar 6-Seater from Hotel 99 (~95–120 MYR + ~12 MYR toll, ~55–65 mins).",
              groupTip:
                "Verify your departure terminal: Vietnam Airlines, Vietjet Air, Malaysia Airlines & Batik Air use KLIA Terminal 1. AirAsia uses KLIA Terminal 2 (klia2)!",
              mapPinUrl: "https://www.google.com/maps/search/?api=1&query=Kuala+Lumpur+International+Airport",
              mapRouteUrl:
                "https://www.google.com/maps/dir/?api=1&origin=Hotel+99+Kuala+Lumpur+City+Jalan+Pudu&destination=Kuala+Lumpur+International+Airport&travelmode=transit"
            }
          ]
        }
      ]
    },
    transitSection: {
      heading: "Rail Network Around Hotel 99 Kuala Lumpur City & Transit Cheat Sheet",
      subHeading:
        "Hotel 99 Kuala Lumpur City (44A–44B Jalan Pudu, Bukit Bintang) lets you walk easily to both Chinatown and Jalan Alor, while 4 major train lines (MRT, LRT, Monorail) surround the hotel.",
      hotelCardTitle: "Hotel Address Card (Show to Reception / Directions)",
      hotelName: "Hotel 99 Kuala Lumpur City (Bukit Bintang)",
      hotelAddress: "44A - 44B, Jalan Pudu, Bukit Bintang, 55100 Kuala Lumpur, Malaysia",
      hotelLandmark: "Opposite Puduraya (UTC Kuala Lumpur), 200m from LRT Plaza Rakyat & 300m from MRT Merdeka.",
      roomSetup: "2 Rooms (4 Nights: 20 Nov – 24 Nov 2026): 1 Deluxe Double Room (Couple) + 1 Deluxe Twin Room (2 Girls).",
      copyBtn: "Copy Hotel Address",
      copiedBtn: "Copied!",
      stationsTitle: "4 Rail Stations Surrounding Your Hotel (3–10 Mins Walk)",
      stations: [
        {
          name: "1. MRT Merdeka (Code: KG17) — Your Primary Metro Station",
          line: "MRT Kajang Line (Underground Metro)",
          color: "#007a33",
          walk: "300m • 4 mins walk (Via Plaza Rakyat linkway / Jalan Pudu)",
          connectsTo:
            "1 stop to Bukit Bintang (KG18 - Jalan Alor, Pavilion KL) • 2 stops to TRX (KG20 - The Exchange TRX) • 1 stop to Pasar Seni (KG16 - Chinatown) • 2 stops to Muzium Negara (KG15 - KL Sentral for KLIA Ekspres).",
          mapUrl: "https://www.google.com/maps/dir/?api=1&origin=Hotel+99+Kuala+Lumpur+City+Jalan+Pudu&destination=Merdeka+MRT+Station&travelmode=walking"
        },
        {
          name: "2. LRT Plaza Rakyat (Code: SP8 / AG8)",
          line: "LRT Ampang & Sri Petaling Line",
          color: "#80276c",
          walk: "200m • 3 mins walk (Across the pedestrian overpass outside hotel)",
          connectsTo:
            "1 stop to Masjid Jamek (SP7 - Interchange to Kelana Jaya Line for KLCC) or 1 stop to Hang Tuah (interchange with KL Monorail).",
          mapUrl: "https://www.google.com/maps/dir/?api=1&origin=Hotel+99+Kuala+Lumpur+City+Jalan+Pudu&destination=Plaza+Rakyat+LRT+Station&travelmode=walking"
        },
        {
          name: "3. MRT / LRT Pasar Seni (Code: KG16 / KJ14)",
          line: "Interchange: MRT Kajang Line + LRT Kelana Jaya Line",
          color: "#e31837",
          walk: "600m • 7 mins walk (Or 1 stop on MRT from Merdeka KG17)",
          connectsTo:
            "The Ruby-Red LRT Kelana Jaya Line goes directly to: KLCC (KJ10 - Petronas Twin Towers), Ampang Park (KJ9 - ILHAM Gallery), and Abdullah Hukum (KJ17 - Covered bridge to Mid Valley & The Gardens Mall).",
          mapUrl: "https://www.google.com/maps/dir/?api=1&origin=Hotel+99+Kuala+Lumpur+City+Jalan+Pudu&destination=Pasar+Seni+LRT+Station&travelmode=walking"
        },
        {
          name: "4. KL Monorail Imbi (MR5) & Bukit Bintang (MR6)",
          line: "KL Monorail Elevated Line",
          color: "#8cc63f",
          walk: "650m – 800m • 8–10 mins walk",
          connectsTo:
            "Elevated monorail gliding above Bukit Bintang, Berjaya Times Square, LaLaport BBCC, and Lot 10.",
          mapUrl: "https://www.google.com/maps/dir/?api=1&origin=Hotel+99+Kuala+Lumpur+City+Jalan+Pudu&destination=Imbi+Monorail+Station&travelmode=walking"
        }
      ],
      ticketGuideTitle: "How to Pay for MRT / LRT / Monorail in Kuala Lumpur",
      ticketTips: [
        {
          title: "Option 1: Single Journey Tokens at Vending Machines",
          desc: "Every station has touchscreen ticket vending machines (English supported). Select your destination station → choose quantity '4' for the group → insert small MYR notes (1, 5, 10 MYR) or coins. Tap the plastic token to enter the gate, and drop it into the slot when exiting."
        },
        {
          title: "Option 2: Touch 'n Go Card or MyCity Unlimited Rail Pass",
          desc: "Buy a Touch 'n Go card at station customer service counters (10 MYR/card) to tap in/out smoothly, or activate the RapidKL MyCity Pass (15 MYR for 1-Day or 35 MYR for 3-Day unlimited rides across MRT, LRT, Monorail & BRT)."
        },
        {
          title: "Option 3: KLIA Ekspres Airport Train",
          desc: "You can tap Visa/Mastercard contactless directly at KLIA Ekspres gates, or buy a 4-person Group Saver / Klook QR ticket online for a ~15% discount."
        }
      ],
      terminalTitle: "KLIA Terminal 1 vs. KLIA Terminal 2 (klia2) Airline Guide",
      terminals: [
        {
          name: "KLIA Terminal 1 (Main Terminal)",
          airlines: "Vietnam Airlines, Vietjet Air, Malaysia Airlines, Batik Air",
          note: "First stop on KLIA Ekspres (28 mins from KL Sentral)."
        },
        {
          name: "KLIA Terminal 2 (klia2 - Low-Cost Carrier Terminal)",
          airlines: "AirAsia (AK)",
          note: "Second stop on KLIA Ekspres (33 mins from KL Sentral). Large terminal with long walks to gates—arrive early!"
        }
      ]
    },
    budgetSection: {
      heading: "Budget Breakdown & Group Bill Splitter (4 People)",
      calcTitle: "Live MYR ↔ VNĐ Converter & Group Bill Splitter (1 Couple + 2 Girls)",
      calcSub: "Enter any bill amount in Ringgit (MYR) while dining or shopping to see the VNĐ equivalent, per-person split (÷4), and Couple (50%) vs. Individual Girl (25%) shares.",
      myrInputLabel: "Bill Amount (MYR)",
      rateInputLabel: "Exchange Rate (1 MYR = ? VNĐ)",
      totalVndLabel: "Total in VNĐ",
      perPersonLabel: "Per Person (÷ 4)",
      coupleShareLabel: "Couple's Share (2 Pax - 50%)",
      singleGirlLabel: "Each Girl's Share (1 Pax - 25%)",
      cashCardSplit: [
        {
          title: "CASH IN HAND (40%)",
          badge: "~1,200 – 1,500 MYR",
          color: "#ef4444",
          bg: "#fee2e2",
          items: [
            "Tourism Tax (TTx): 80 MYR (10 MYR × 2 rooms × 4 nights) paid in cash at Hotel 99 KL City.",
            "Room Deposit: ~100–200 MYR cash (100% refunded at check-out on 24 Nov).",
            "MRT/LRT Token Machines: Keep plenty of 1 MYR, 5 MYR, and 10 MYR small notes.",
            "Street Food & Kopitiams: Jalan Alor night market, Mansion Tea Stall, Ho Kow Kopitiam."
          ]
        },
        {
          title: "CARD / ONLINE (60%)",
          badge: "Visa / Mastercard / Klook",
          color: "#2563eb",
          bg: "#dbeafe",
          items: [
            "KLIA Ekspres Airport Train: Book 4-pax Group Saver online or tap Visa/Mastercard.",
            "Mega Malls: Mid Valley, The Gardens, The Exchange TRX, Pavilion KL, Suria KLCC.",
            "Restaurants & Museums: Din Tai Fung, Bunn Choon, Islamic Arts Museum, Central Market.",
            "Grab App (Backup): Auto-charged to your linked Visa/Mastercard."
          ]
        }
      ],
      tableHeaders: ["Expense Category", "Calculation (4 Adults)", "Payment Method", "Amount (VNĐ)"],
      totalLabel: "TOTAL ESTIMATED BUDGET (4 PEOPLE)",
      perPersonTotalLabel: "AVERAGE PER PERSON (5D4N)",
      items: [
        {
          name: "Round-trip Flights (20 Nov – 24 Nov 2026)",
          formula: "3,750,000 VNĐ × 4 people",
          cost: 15000000,
          type: "Online (Prepaid)"
        },
        {
          name: "Hotel 99 Kuala Lumpur City (Bukit Bintang)",
          formula: "500,000 VNĐ × 2 rooms (1 Double + 1 Twin) × 4 nights",
          cost: 4000000,
          type: "Online (Traveloka / Booking)"
        },
        {
          name: "Malaysia Tourism Tax (TTx)",
          formula: "10 MYR × 2 rooms × 4 nights (80 MYR)",
          cost: 460000,
          type: "Cash at Reception"
        },
        {
          name: "Rail Transit (MRT/LRT/Monorail + KLIA Ekspres)",
          formula: "5 days city rail (~20 MYR/pax) + Round-trip airport rail/transfer",
          cost: 2650000,
          type: "Small Cash + Card / Klook"
        },
        {
          name: "Food & Dining (5 Days for 4 People)",
          formula: "500,000 VNĐ / person / day × 4 people × 5 days",
          cost: 10000000,
          type: "Cash + Card"
        },
        {
          name: "Museum Tickets (Islamic Arts Museum)",
          formula: "20 MYR × 4 people (ILHAM, Merdeka & Kwai Chai Hong are free)",
          cost: 500000,
          type: "Card / Cash"
        },
        {
          name: "4G eSIM/SIM Cards & Contingency Buffer",
          formula: "4 eSIM/SIMs + bottled water & snacks",
          cost: 890000,
          type: "Online / Cash"
        }
      ]
    },
    mallsSection: {
      heading: "Mega Malls Guide & Direct MRT/LRT Station Links",
      subHeading:
        "Every mall includes its direct rail station connection and designated Anchor Cafe Rest Stops for the couple & 2 girls.",
      stationLabel: "Direct Rail / Walk Access",
      restStopLabel: "Anchor Cafe & Group Meeting Point",
      tipLabel: "Shopping & Dining Insider Tip",
      malls: [
        {
          name: "Mid Valley Megamall & The Gardens Mall",
          tag: "Day 3 (Sun 22 Nov) • Largest Mega Complex",
          station: "LRT Abdullah Hukum (KJ17 - Kelana Jaya Line) → 5 mins walk via covered glass bridge",
          highlight:
            "Two interconnected malls with 600+ stores spanning high-street favorites (Uniqlo, Padini, Vincci, Charles & Keith, Sephora) to luxury boutiques (LV, Hermes, Isetan).",
          restStop:
            "% Arabica (G Floor, The Gardens), Tsujiri Matcha, or Oriental Kopi (LG Floor, Mid Valley).",
          tip: "Want authentic Non-Halal Pork Xiao Long Bao? Head to Din Tai Fung on the LG Floor of The Gardens Mall!",
          mapUrl: "https://maps.google.com/?cid=6817294246995646399"
        },
        {
          name: "The Exchange TRX & TRX City Park",
          tag: "Day 4 (Mon 23 Nov) • Newest Luxury Quarter",
          station: "MRT Tun Razak Exchange - TRX (KG20 - Kajang Line) → Direct underground concourse access",
          highlight:
            "KL's newest landmark featuring Malaysia's first Apple Store (rooftop dome), a 10-acre rooftop park overlooking Merdeka 118, Seibu Department Store, and Gentle Monster.",
          restStop: "Bacha Coffee, Shake Shack (Rooftop Park level), or % Arabica TRX.",
          tip: "From Hotel 99, just hop on MRT Merdeka (KG17) for 2 stops straight into TRX basement!",
          mapUrl: "https://maps.google.com/?cid=4061662819426486708"
        },
        {
          name: "Pavilion Kuala Lumpur & Bukit Bintang",
          tag: "Day 4 (Mon 23 Nov) • Heart of Bukit Bintang",
          station: "Walk 750m from TRX via covered walkway OR MRT Bukit Bintang (KG18 - Exit D/E)",
          highlight:
            "Iconic Liuli Crystal Fountain, Tokyo Street Japanese precinct (Level 6), the giant 3D LED screen at Bukit Bintang crossing, and flagship fashion stores.",
          restStop: "Connection al-fresco precinct (Level 3) or EL&N London Cafe (pink Instagrammable cafe).",
          tip: "Step outside toward Lot 10 in the evening to try the viral Damascus Shawarma!",
          mapUrl: "https://maps.google.com/?cid=17119990127312478132"
        },
        {
          name: "Suria KLCC (Petronas Twin Towers Base)",
          tag: "Day 2 (Sat 21 Nov) • Iconic Landmark",
          station: "Walk 700m from ILHAM Gallery • Return via LRT KLCC (KJ10 - Kelana Jaya Line)",
          highlight:
            "Located at the base of the Petronas Twin Towers with Lake Symphony musical fountains, KLCC Park, and DIN by Din Tai Fung.",
          restStop: "Esplanade lakeside cafes overlooking the musical fountains.",
          tip: "Get your queue number at DIN by Din Tai Fung (Level 4) by 17:30 so you finish dinner right before the 20:00 fountain show.",
          mapUrl: "https://maps.google.com/?cid=1650228018688243814"
        }
      ]
    },
    checklistSection: {
      heading: "Group of 4 Pre-Trip Checklist (Auto-Saved on Device)",
      resetBtn: "Reset Checklist",
      items: [
        {
          id: 1,
          text: "Submit Malaysia Digital Arrival Card (MDAC) online for all 4 travelers within 3 days before Fri 20 Nov 2026 (17–19 Nov)",
          tag: "Mandatory"
        },
        {
          id: 2,
          text: "Verify all 4 Passports have at least 6 months validity remaining beyond 24 Nov 2026",
          tag: "Mandatory"
        },
        {
          id: 3,
          text: "Confirm with Hotel 99 Kuala Lumpur City (Bukit Bintang): 1 Deluxe Double Room (Couple) + 1 Deluxe Twin Room (2 Single Beds for the 2 Girls)",
          tag: "Hotel"
        },
        {
          id: 4,
          text: "Exchange ~1,200 – 1,500 MYR cash (request plenty of small 1, 5, 10, 20 MYR notes for MRT/LRT token machines & street food)",
          tag: "Cash"
        },
        {
          id: 5,
          text: "Set aside 80 MYR (Tourism Tax) + 200 MYR (Room Deposit) in an envelope for check-in at Hotel 99 KL City",
          tag: "Hotel"
        },
        {
          id: 6,
          text: "Pack 3–4 UK 3-pin square plug adapters (Type G) + 1 multi-port power strip for each room",
          tag: "Gear"
        },
        {
          id: 7,
          text: "Install Malaysia 4G eSIMs / book airport SIMs + pack power banks (essential for Google Maps & MRT navigation)",
          tag: "Connectivity"
        },
        {
          id: 8,
          text: "Enable international & contactless tap-to-pay on Visa/Mastercard + link card to Grab app as backup",
          tag: "Payment"
        },
        {
          id: 9,
          text: "Pack broken-in walking sneakers (12,000–15,000 steps/day across heritage walks & Mega Malls) + compact umbrella",
          tag: "Outfit"
        }
      ]
    },
    footer:
      "Kuala Lumpur 5D4N Planner (20–24 Nov 2026) • Hotel 99 Kuala Lumpur City (Bukit Bintang) • Walk When Close, MRT/LRT When Far"
  }
};
