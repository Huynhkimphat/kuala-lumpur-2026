import React, { useState } from 'react';
import { 
  Plane, Hotel, DollarSign, CheckSquare, MapPin, 
  CreditCard, Compass, ExternalLink, Calendar, Users, 
  ShoppingBag, Utensils, AlertCircle, CheckCircle2, Menu, X
} from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState('itinerary');
  const [selectedDay, setSelectedDay] = useState(1);
  const [checklist, setChecklist] = useState([
    { id: 1, text: "Khai online tờ khai nhập cảnh Malaysia (MDAC) trong vòng 3 ngày trước bay", done: false, tag: "Bắt buộc" },
    { id: 2, text: "Hộ chiếu (Passport) cả 4 người còn hạn trên 6 tháng tính đến ngày về", done: false, tag: "Bắt buộc" },
    { id: 3, text: "Đổi sẵn ~1.200 - 1.500 MYR tiền mặt (ưu tiên các tờ 10, 20, 50 MYR lẻ)", done: false, tag: "Tiền mặt" },
    { id: 4, text: "Chuẩn bị 2-3 củ chuyển đổi chân cắm 3 chấu vuông (Type G - chuẩn UK)", done: false, tag: "Thiết bị" },
    { id: 5, text: "Cài app Grab & liên kết thẻ ngân hàng quốc tế (Visa/Mastercard) từ Việt Nam", done: false, tag: "Di chuyển" },
    { id: 6, text: "Cài đặt eSIM hoặc đặt trước SIM 4G nhận tại quầy sân bay KLIA", done: false, tag: "Kết nối" }
  ]);

  const toggleCheck = (id) => {
    setChecklist(checklist.map(item => item.id === id ? { ...item, done: !item.done } : item));
  };

  const completedCount = checklist.filter(c => c.done).length;
  const progressPercent = Math.round((completedCount / checklist.length) * 100);

  const budgetItems = [
    { name: "Vé máy bay khứ hồi (4 người)", formula: "3.750.000đ × 4 người", cost: 15000000, type: "Online (Prepaid)", note: "Vé cố định" },
    { name: "Khách sạn Hotel 99 Chinatown", formula: "500.000đ × 2 phòng × 4 đêm", cost: 4000000, type: "Online (Traveloka)", note: "4 đêm lưu trú" },
    { name: "Thuế Du Lịch Malaysia (TTx)", formula: "10 MYR × 2 phòng × 4 đêm (80 MYR)", cost: 460000, type: "Tiền mặt tại lễ tân", note: "Bắt buộc tại quầy" },
    { name: "Đi lại (Grab Car 4-6 chỗ + MRT)", formula: "Khứ hồi sân bay + Grab nội đô chia 4", cost: 3150000, type: "Thẻ / Grab App", note: "Tiện & rẻ hơn tàu" },
    { name: "Ăn uống 5 ngày (4 người)", formula: "500.000đ / người / ngày × 5 ngày", cost: 10000000, type: "Tiền mặt + Thẻ", note: "Thả ga street food & mall" },
    { name: "Vé tham quan bảo tàng", formula: "Bảo tàng Hồi Giáo (~20 MYR/người)", cost: 500000, type: "Thẻ / Tiền mặt", note: "ILHAM & Merdeka miễn phí" },
    { name: "Dự phòng & Sim 4G", formula: "4 SIM + nước uống, phát sinh", cost: 890000, type: "Tiền mặt", note: "Khoản phòng hờ" },
  ];

  const totalBudget = budgetItems.reduce((acc, curr) => acc + curr.cost, 0);

  const itineraryData = {
    1: {
      title: "Ngày 1: Check-in Hotel 99 – REXKL – Mee Tarik – Phố Đêm Jalan Alor",
      nodes: [
        { time: "Chiều", title: "Hạ cánh KLIA & Nhận phòng Hotel 99 Chinatown", desc: "Bắt Grab về khách sạn. Nộp 80 MYR thuế du lịch TTx + ~100-200 MYR cọc phòng (deposit) bằng tiền mặt tại lễ tân.", map: "https://maps.google.com/?cid=17279110726563758836" },
        { time: "16:00 – 17:30", title: "Tổ hợp nghệ thuật sáng tạo REXKL", desc: "Rạp hát cổ cải tạo thành không gian nghệ thuật, chụp ảnh mê cung sách BookXcess cao chạm trần.", map: "https://maps.google.com/?cid=8318395919362480651" },
        { time: "17:30 – 19:30", title: "Petaling Street Chinatown & Mee Tarik Jalan Sultan", desc: "Thưởng thức mì bò kéo tay thảo quả cay nóng kèm đĩa há cảo chiên giòn rụm chấm dầu ớt.", map: "https://maps.google.com/?cid=534351893711703046" },
        { time: "20:00 – Khuya", title: "Thiên đường ẩm thực đêm Jalan Alor", desc: "Cánh gà nướng than hoa Wong Ah Wah, lẩu xiên Lok Lok chấm sốt đậu phộng, nước ép trái cây mát lạnh.", map: "https://maps.google.com/?cid=13050949940542192959" }
      ]
    },
    2: {
      title: "Ngày 2: Roti Canai – Merdeka – Bảo Tàng Hồi Giáo – Din Tai Fung Suria KLCC",
      nodes: [
        { time: "08:30 – 10:00", title: "Bữa sáng Roti Banjir Special tại Mansion Tea Stall", desc: "Roti canai chan ngập sốt cà ri dhal, 2 lòng đào béo ngậy kèm ly trà sữa sủi bọt Teh Tarik trứ danh.", map: "https://maps.google.com/?cid=7937314599155281025" },
        { time: "10:15 – 12:00", title: "Quảng trường Merdeka & Tòa nhà Sultan Abdul Samad", desc: "Chiêm ngưỡng kiến trúc Moorish cổ kính với tháp đồng hồ 41m và các mái vòm đồng biểu tượng.", map: "https://maps.google.com/?cid=3750364922043052889" },
        { time: "12:30 – 15:00", title: "Bảo tàng Nghệ thuật Hồi giáo (Islamic Arts Museum)", desc: "Chiêm ngưỡng không gian vòm kính ngọc bích tinh xảo, cổ vật và mô hình thánh đường thế giới.", map: "https://maps.google.com/?cid=8999738247126300043" },
        { time: "15:30 – 17:30", title: "Triển lãm đương đại ILHAM Gallery", desc: "Tọa lạc tại tầng 3 & 5 tòa tháp Ilham Tower, trưng bày nghệ thuật đương đại Đông Nam Á (vào cửa miễn phí).", map: "https://maps.google.com/?cid=13503462404486618185" },
        { time: "18:00 – 21:30", title: "Ăn tối Din Tai Fung & Nhạc nước Tháp đôi Petronas", desc: "Thưởng thức tiểu long bao tại DIN by Din Tai Fung (Suria KLCC), ra công viên xem biểu diễn nhạc nước Lake Symphony.", map: "https://maps.google.com/?cid=1650228018688243814" }
      ]
    },
    3: {
      title: "Ngày 3: Oanh Tạc Đại Trung Tâm Thương Mại Mid Valley Megamall & The Gardens",
      nodes: [
        { time: "09:30 – 10:30", title: "Bắt Grab sang Mid Valley Megamall", desc: "Đi Grab 4 chỗ từ Chinatown sang Mid Valley chỉ mất ~10-15 phút (~10-15 MYR), cực kỳ nhanh và tiết kiệm.", map: "https://maps.google.com/?cid=6817294246995646399" },
        { time: "10:30 – 15:30", title: "Khám phá siêu mua sắm Mid Valley Megamall", desc: "Hơn 430 cửa hàng với đầy đủ thương hiệu thời trang quốc tế, Uniqlo cực lớn, siêu thị Aeon Big và phố ẩm thực tầng LG.", map: "https://maps.google.com/?cid=6817294246995646399" },
        { time: "15:30 – 18:30", title: "Dạo The Gardens Mall (nối liền Mid Valley)", desc: "Đi qua cầu kính sang The Gardens Mall thưởng ngoạn không gian cao cấp, nghỉ chân tại các quán specialty cafe.", map: "https://maps.google.com/?cid=11145328905228581898" },
        { time: "19:00 – 21:30", title: "Ăn tối tại food court / Dragon-i & Nghỉ ngơi", desc: "Thưởng thức mì kéo sườn sụn, dimsum Dragon-i hoặc các món địa phương phong phú tại food court trước khi về khách sạn." }
      ]
    },
    4: {
      title: "Ngày 4: Dim Sum Bunn Choon – Siêu Dự Án The Exchange TRX – Pavilion KL",
      nodes: [
        { time: "08:30 – 10:00", title: "Dim sum & Bánh tart trứng nghìn lớp Bunn Choon", desc: "Điểm tâm lâu đời từ năm 1893: bánh tart trứng nướng giòn rụm, há cảo tôm tươi, bánh bao xá xíu nóng sốt.", map: "https://maps.google.com/?cid=10783793124020186203" },
        { time: "10:30 – 15:30", title: "The Exchange TRX & Công viên trên mái TRX City Park", desc: "Khu phức hợp bán lẻ đẳng cấp nhất KL. Lên công viên trên nóc ngắm tháp Merdeka 118, mua sắm các thương hiệu flagship.", map: "https://maps.google.com/?cid=4061662819426486708" },
        { time: "16:00 – Khuya", title: "Pavilion Kuala Lumpur & Ngã tư Bukit Bintang", desc: "Shopping, ngắm đài phun nước pha lê Liuli, ăn tối phố ẩm thực Tokyo Street và ngắm giao lộ Bukit Bintang sôi động.", map: "https://maps.google.com/?cid=17119990127312478132" }
      ]
    },
    5: {
      title: "Ngày 5: Săn Đặc Sản Chinatown – Check-out Khách Sạn – Bay Về Việt Nam",
      nodes: [
        { time: "09:00 – 11:00", title: "Dạo Chinatown săn đặc sản làm quà", desc: "Mua bánh đậu xanh, trà sữa Teh Tarik gói BOH, cà phê trắng OldTown White Coffee và socola sầu riêng.", map: null },
        { time: "11:30 – 12:00", title: "Check-out Hotel 99 Chinatown & Nhận lại cọc", desc: "Làm thủ tục trả phòng, nhận lại 100% tiền mặt cọc phòng (deposit) để chi trả ăn trưa nhẹ.", map: null },
        { time: "Chiều", title: "Đón Grab ra sân bay KLIA/KLIA2 & Bay về", desc: "Gọi Grab Car 4-6 chỗ ra sân bay (khoảng 65-75 MYR + phí cầu đường, chia 4 rất tiết kiệm), làm thủ tục bay về Việt Nam.", map: null }
      ]
    }
  };

  const mallsInfo = [
    {
      name: "Mid Valley Megamall & The Gardens",
      tag: "Mua Sắm Bình Dân Tới Cao Cấp",
      highlight: "Quy mô khổng lồ hơn 430 cửa hàng, siêu thị Aeon Big, cầu nối kính sang The Gardens Mall sang trọng.",
      tip: "Nên dành trọn ít nhất 4–5 tiếng. Đừng bỏ qua tầng LG vì có cả một thế giới đồ ăn vặt và bánh ngọt."
    },
    {
      name: "The Exchange TRX",
      tag: "Tổ Hợp Hiện Đại Nhất",
      highlight: "Công viên trên mái TRX City Park ngắm tháp Merdeka 118, quy tụ các thương hiệu flagship đẳng cấp.",
      tip: "Buổi chiều tầm 16:30 lên công viên trên mái gió mát và chụp ảnh kiến trúc đẹp nhất."
    },
    {
      name: "Pavilion Kuala Lumpur",
      tag: "Trái Tim Mua Sắm Bukit Bintang",
      highlight: "Đài phun nước pha lê Liuli biểu tượng, khu phố ẩm thực Tokyo Street tầng 6 và hàng trăm shop thời trang.",
      tip: "Bước ra ngay trước cổng chính để check-in màn hình LED 3D khổng lồ tại giao lộ sầm uất nhất KL."
    },
    {
      name: "Suria KLCC (Khối Đế Tháp Đôi)",
      tag: "Điểm Đến Biểu Tượng",
      highlight: "Tọa lạc ngay khối đế của Tháp Đôi Petronas, nhà hàng Din Tai Fung, công viên hồ nước Symphony.",
      tip: "Nên ghé nhà hàng Din Tai Fung lấy số sớm từ 17:30 để tránh phải xếp hàng lâu."
    }
  ];

  return (
    <div className="app-wrapper">
      
      {/* STYLES & MEDIA QUERIES EMBEDDED */}
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #0f172a; }
        .app-wrapper { min-height: 100vh; display: flex; flex-direction: column; }
        .container { width: 100%; max-width: 1040px; margin: 0 auto; padding: 0 16px; }

        /* Nav Header */
        .navbar { position: sticky; top: 0; z-index: 100; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); border-bottom: 1px solid #e2e8f0; }
        .nav-inner { display: flex; justify-content: space-between; align-items: center; height: 60px; }
        .nav-logo { display: flex; align-items: center; gap: 8px; font-weight: 800; font-size: 1.1rem; color: #1e3a8a; }
        .nav-tabs { display: flex; gap: 6px; overflow-x: auto; -webkit-overflow-scrolling: touch; }
        .nav-tab-btn { display: flex; align-items: center; gap: 6px; padding: 8px 12px; border-radius: 999px; border: none; background: transparent; color: #64748b; font-weight: 600; font-size: 0.85rem; cursor: pointer; white-space: nowrap; transition: all 0.2s; }
        .nav-tab-btn.active { background: #1e3a8a; color: #ffffff; }

        /* Hero */
        .hero { background: linear-gradient(135deg, #090d16 0%, #1e3a8a 100%); color: white; padding: 40px 16px 36px; border-radius: 0 0 24px 24px; margin-bottom: 24px; text-align: center; }
        .hero-pill { display: inline-block; background: rgba(249, 115, 22, 0.2); border: 1px solid #f97316; color: #fb923c; padding: 4px 12px; border-radius: 999px; font-size: 0.75rem; font-weight: 700; margin-bottom: 12px; }
        .hero-title { font-size: 1.8rem; font-weight: 800; line-height: 1.2; margin-bottom: 10px; }
        .hero-desc { font-size: 0.95rem; opacity: 0.9; max-width: 600px; margin: 0 auto 20px; line-height: 1.5; }
        .stats-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; max-width: 700px; margin: 0 auto; }
        .stat-card { background: rgba(255,255,255,0.08); backdrop-filter: blur(8px); padding: 10px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.12); }
        .stat-label { font-size: 0.7rem; opacity: 0.8; text-transform: uppercase; }
        .stat-val { font-size: 1rem; font-weight: 800; margin-top: 2px; }

        /* Section Headings */
        .section-header { margin-bottom: 16px; }
        .section-title { font-size: 1.2rem; font-weight: 700; display: flex; align-items: center; gap: 8px; }

        /* Grid Cards */
        .grid-cards { display: grid; grid-template-columns: 1fr; gap: 16px; margin-bottom: 24px; }
        .card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.02); }

        /* Timeline */
        .day-scroller { display: flex; gap: 8px; overflow-x: auto; padding-bottom: 10px; margin-bottom: 16px; -webkit-overflow-scrolling: touch; }
        .day-pill { padding: 8px 14px; border-radius: 999px; border: 1px solid #cbd5e1; background: #ffffff; color: #334155; font-weight: 600; font-size: 0.85rem; cursor: pointer; white-space: nowrap; flex-shrink: 0; }
        .day-pill.active { background: #f97316; border-color: #f97316; color: #ffffff; box-shadow: 0 4px 10px rgba(249, 115, 22, 0.25); }
        .timeline { border-left: 2px solid #fdba74; padding-left: 18px; margin-left: 6px; }
        .timeline-item { position: relative; margin-bottom: 24px; }
        .timeline-dot { position: absolute; left: -25px; top: 4px; width: 12px; height: 12px; border-radius: 50%; background: #ffffff; border: 3px solid #f97316; }
        .time-badge { font-size: 0.75rem; font-weight: 800; color: #ea580c; text-transform: uppercase; margin-bottom: 2px; }
        .place-title { font-size: 1rem; font-weight: 700; margin-bottom: 4px; }
        .place-desc { font-size: 0.88rem; color: #64748b; line-height: 1.5; }
        .map-link { display: inline-flex; align-items: center; gap: 4px; margin-top: 8px; font-size: 0.78rem; color: #1e3a8a; background: #eff6ff; padding: 4px 10px; border-radius: 6px; text-decoration: none; font-weight: 600; border: 1px solid #bfdbfe; }

        /* Budget Responsive Table / Cards */
        .desktop-table { display: none; width: 100%; border-collapse: collapse; font-size: 0.9rem; }
        .desktop-table th, .desktop-table td { padding: 12px 14px; border-bottom: 1px solid #f1f5f9; text-align: left; }
        .desktop-table th { background: #f8fafc; color: #64748b; font-size: 0.8rem; text-transform: uppercase; }
        .mobile-budget-list { display: flex; flex-direction: column; gap: 10px; }
        .budget-card-item { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 14px; display: flex; justify-content: space-between; align-items: flex-start; }
        .budget-card-info { flex: 1; padding-right: 12px; }
        .budget-card-name { font-weight: 600; font-size: 0.9rem; margin-bottom: 2px; }
        .budget-card-sub { font-size: 0.8rem; color: #64748b; }
        .budget-card-val { text-align: right; }
        .budget-card-cost { font-weight: 700; font-size: 0.95rem; color: #0f172a; }
        .budget-card-type { font-size: 0.72rem; color: #1e3a8a; background: #e0f2fe; padding: 2px 6px; border-radius: 4px; display: inline-block; margin-top: 4px; }

        /* Checklist */
        .check-row { display: flex; align-items: center; gap: 10px; padding: 12px 0; border-bottom: 1px dashed #e2e8f0; cursor: pointer; }
        .check-text { flex: 1; font-size: 0.9rem; line-height: 1.4; }
        .check-tag { font-size: 0.7rem; font-weight: 700; padding: 2px 6px; border-radius: 4px; }

        /* Responsive Breakpoints */
        @media (min-width: 640px) {
          .stats-grid { grid-template-columns: repeat(4, 1fr); }
          .hero-title { font-size: 2.3rem; }
        }
        @media (min-width: 768px) {
          .grid-cards { grid-template-columns: 1fr 1fr; }
          .desktop-table { display: table; }
          .mobile-budget-list { display: none; }
        }
      `}</style>

      {/* STICKY NAVBAR */}
      <nav className="navbar">
        <div className="container nav-inner">
          <div className="nav-logo">
            <Compass size={20} color="#f97316" /> KL 5N4Đ
          </div>
          
          <div className="nav-tabs">
            {[
              { key: 'itinerary', label: 'Lịch Trình', icon: <Calendar size={15} /> },
              { key: 'budget', label: 'Ngân Sách', icon: <DollarSign size={15} /> },
              { key: 'checklist', label: 'Checklist', icon: <CheckSquare size={15} /> },
              { key: 'malls', label: 'Mega Malls', icon: <ShoppingBag size={15} /> }
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setCurrentTab(tab.key)}
                className={`nav-tab-btn ${currentTab === tab.key ? 'active' : ''}`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="hero">
        <div className="container">
          <div className="hero-pill">KẾ HOẠCH DU LỊCH 2026</div>
          <h1 className="hero-title">Kuala Lumpur 5N4Đ</h1>
          <p className="hero-desc">
            Trải nghiệm mua sắm Mega Malls (Mid Valley, TRX, Pavilion), chợ đêm Chinatown & di sản văn hóa cho nhóm 4 người.
          </p>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-label">ĐOÀN</div>
              <div className="stat-val">👥 4 Người</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">NGÂN SÁCH</div>
              <div className="stat-val" style={{ color: '#fb923c' }}>💰 34 Triệu</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">LƯU TRÚ</div>
              <div className="stat-val">🏨 Hotel 99 (4Đ)</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">VÉ BAY KHỨ HỒI</div>
              <div className="stat-val">✈️ 15 Triệu</div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="container" style={{ flex: 1, paddingBottom: '40px' }}>

        {/* TAB 1: ITINERARY */}
        {currentTab === 'itinerary' && (
          <div>
            <div className="section-header">
              <h2 className="section-title"><Calendar size={20} color="#f97316" /> Lịch Trình Từng Ngày</h2>
            </div>

            <div className="day-scroller">
              {[1, 2, 3, 4, 5].map(day => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`day-pill ${selectedDay === day ? 'active' : ''}`}
                >
                  Ngày {day} {day === 3 ? '🔥 Mid Valley' : ''}
                </button>
              ))}
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.1rem', color: '#1e3a8a', marginBottom: '20px', fontWeight: 700 }}>
                {itineraryData[selectedDay].title}
              </h3>

              <div className="timeline">
                {itineraryData[selectedDay].nodes.map((node, idx) => (
                  <div key={idx} className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="time-badge">{node.time}</div>
                    <div className="place-title">{node.title}</div>
                    <div className="place-desc">{node.desc}</div>
                    {node.map && (
                      <a href={node.map} target="_blank" rel="noreferrer" className="map-link">
                        <MapPin size={12} /> Google Maps <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: BUDGET & PAYMENT */}
        {currentTab === 'budget' && (
          <div>
            <div className="section-header">
              <h2 className="section-title"><DollarSign size={20} color="#f97316" /> Chi Tiêu & Thanh Toán</h2>
            </div>

            <div className="grid-cards">
              <div className="card" style={{ borderLeft: '4px solid #ef4444' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <strong style={{ fontSize: '0.95rem' }}>TIỀN MẶT (CASH - 40%)</strong>
                  <span style={{ background: '#fee2e2', color: '#b91c1c', padding: '2px 8px', borderRadius: '999px', fontSize: '0.72rem', fontWeight: 700 }}>~1.200 - 1.500 MYR</span>
                </div>
                <ul style={{ fontSize: '0.85rem', color: '#475569', paddingLeft: '18px', lineHeight: 1.5 }}>
                  <li><strong>Thuế TTx:</strong> 80 MYR (10 MYR × 2 phòng × 4 đêm) nộp tại Hotel 99.</li>
                  <li><strong>Cọc phòng:</strong> ~100–200 MYR tiền mặt (hoàn 100% khi check-out).</li>
                  <li><strong>Ẩm thực vỉa hè:</strong> Đồ ăn vặt Jalan Alor, roti Mansion Tea Stall, Chinatown.</li>
                  <li><strong>Nạp thẻ tàu MRT:</strong> Máy tự động chỉ nhận tiền giấy Ringgit mệnh giá nhỏ.</li>
                </ul>
              </div>

              <div className="card" style={{ borderLeft: '4px solid #2563eb' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <strong style={{ fontSize: '0.95rem' }}>QUẸT THẺ / APP (60%)</strong>
                  <span style={{ background: '#dbeafe', color: '#1d4ed8', padding: '2px 8px', borderRadius: '999px', fontSize: '0.72rem', fontWeight: 700 }}>Visa / Master / Grab</span>
                </div>
                <ul style={{ fontSize: '0.85rem', color: '#475569', paddingLeft: '18px', lineHeight: 1.5 }}>
                  <li><strong>Grab Car:</strong> Gọi xe 4 chỗ tự động trừ qua thẻ ngân hàng.</li>
                  <li><strong>Mega Malls:</strong> Mid Valley Megamall, The Gardens, TRX, Pavilion.</li>
                  <li><strong>Nhà hàng & Cafe:</strong> Din Tai Fung Suria KLCC, contactless không phụ phí.</li>
                  <li><strong>Siêu thị tiện lợi:</strong> 7-Eleven, FamilyMart quẹt thẻ mọi đơn hàng.</li>
                </ul>
              </div>
            </div>

            {/* Desktop Table View */}
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <table className="desktop-table">
                <thead>
                  <tr>
                    <th>Khoản mục</th>
                    <th>Chi tiết tính</th>
                    <th>Hình thức</th>
                    <th style={{ textAlign: 'right' }}>Số tiền (VNĐ)</th>
                  </tr>
                </thead>
                <tbody>
                  {budgetItems.map((b, idx) => (
                    <tr key={idx}>
                      <td style={{ fontWeight: 600 }}>{b.name}</td>
                      <td style={{ color: '#64748b' }}>{b.formula}</td>
                      <td style={{ fontSize: '0.8rem', color: '#1e3a8a' }}>{b.type}</td>
                      <td style={{ textAlign: 'right', fontWeight: 600 }}>{b.cost.toLocaleString('vi-VN')} đ</td>
                    </tr>
                  ))}
                  <tr style={{ background: '#eff6ff', color: '#1e3a8a', fontWeight: 800 }}>
                    <td>TỔNG CỘNG</td>
                    <td colSpan={2} style={{ fontSize: '0.85rem' }}>Khớp trọn vẹn ngân sách 5N4Đ</td>
                    <td style={{ textAlign: 'right' }}>{totalBudget.toLocaleString('vi-VN')} đ</td>
                  </tr>
                </tbody>
              </table>

              {/* Mobile Card View (Tự chuyển đổi trên điện thoại) */}
              <div className="mobile-budget-list" style={{ padding: '12px' }}>
                {budgetItems.map((b, idx) => (
                  <div key={idx} className="budget-card-item">
                    <div className="budget-card-info">
                      <div className="budget-card-name">{b.name}</div>
                      <div className="budget-card-sub">{b.formula}</div>
                      <span className="budget-card-type">{b.type}</span>
                    </div>
                    <div className="budget-card-val">
                      <div className="budget-card-cost">{b.cost.toLocaleString('vi-VN')} đ</div>
                    </div>
                  </div>
                ))}
                <div style={{ background: '#eff6ff', borderRadius: '12px', padding: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px' }}>
                  <strong style={{ color: '#1e3a8a', fontSize: '0.95rem' }}>TỔNG DỰ TOÁN:</strong>
                  <strong style={{ color: '#1e3a8a', fontSize: '1.05rem' }}>{totalBudget.toLocaleString('vi-VN')} đ</strong>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CHECKLIST */}
        {currentTab === 'checklist' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <h2 className="section-title"><CheckSquare size={20} color="#f97316" /> Checklist Cần Làm</h2>
              <div style={{ fontWeight: 700, color: progressPercent === 100 ? '#16a34a' : '#ea580c', fontSize: '0.85rem' }}>
                {completedCount}/{checklist.length} ({progressPercent}%)
              </div>
            </div>

            <div style={{ width: '100%', height: '8px', backgroundColor: '#e2e8f0', borderRadius: '999px', overflow: 'hidden', marginBottom: '18px' }}>
              <div style={{ width: `${progressPercent}%`, height: '100%', backgroundColor: progressPercent === 100 ? '#16a34a' : '#f97316', transition: 'width 0.3s ease' }}></div>
            </div>

            <div className="card">
              {checklist.map(item => (
                <div key={item.id} onClick={() => toggleCheck(item.id)} className="check-row">
                  <input type="checkbox" checked={item.done} onChange={() => {}} style={{ width: '18px', height: '18px', accentColor: '#f97316', cursor: 'pointer' }} />
                  <span className="check-text" style={{ textDecoration: item.done ? 'line-through' : 'none', color: item.done ? '#94a3b8' : '#0f172a' }}>
                    {item.text}
                  </span>
                  <span className="check-tag" style={{ background: item.tag === 'Bắt buộc' ? '#fee2e2' : '#f1f5f9', color: item.tag === 'Bắt buộc' ? '#991b1b' : '#475569' }}>
                    {item.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: MEGA MALLS & FOOD */}
        {currentTab === 'malls' && (
          <div>
            <div className="section-header">
              <h2 className="section-title"><ShoppingBag size={20} color="#f97316" /> Hướng Dẫn Oanh Tạc Mega Malls</h2>
            </div>

            <div className="grid-cards">
              {mallsInfo.map((mall, idx) => (
                <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ display: 'inline-block', backgroundColor: '#e0f2fe', color: '#0369a1', fontSize: '0.72rem', fontWeight: 700, padding: '2px 8px', borderRadius: '6px', marginBottom: '8px' }}>
                      {mall.tag}
                    </span>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '6px', color: '#1e3a8a' }}>{mall.name}</h3>
                    <p style={{ fontSize: '0.88rem', color: '#475569', marginBottom: '12px', lineHeight: 1.5 }}>{mall.highlight}</p>
                  </div>
                  <div style={{ background: '#f8fafc', padding: '10px 12px', borderRadius: '8px', borderLeft: '3px solid #f97316', fontSize: '0.82rem', color: '#64748b' }}>
                    <strong>Mẹo:</strong> {mall.tip}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.8rem', borderTop: '1px solid #e2e8f0', padding: '20px 16px' }}>
        Kuala Lumpur 5N4Đ Travel Landing Page • Thiết kế chuẩn Mobile Responsive
      </footer>

    </div>
  );
}