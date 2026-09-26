import { useState, useEffect } from 'react';
import {
  Train,
  DollarSign,
  CheckSquare,
  MapPin,
  Navigation,
  ExternalLink,
  Calendar,
  ShoppingBag,
  AlertCircle,
  Copy,
  Check,
  RotateCcw,
  Clock,
  ChevronDown,
  ChevronUp,
  Footprints
} from 'lucide-react';
import { tripData } from './data/tripData';

export default function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('kl_planner_lang') || 'vi';
  });
  const [currentTab, setCurrentTab] = useState('itinerary');
  const [selectedDay, setSelectedDay] = useState(1);
  const [copiedAddress, setCopiedAddress] = useState(false);

  // Track which itinerary nodes have their detailed directions expanded (default: all collapsed {})
  const [expandedNodes, setExpandedNodes] = useState({});

  // Persistent checklist state (stores array of completed item IDs)
  const [doneIds, setDoneIds] = useState(() => {
    try {
      const saved = localStorage.getItem('kl_planner_done_ids');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Live MYR <-> VND Converter & Bill Splitter state
  const [myrAmount, setMyrAmount] = useState('100');
  const [exchangeRate, setExchangeRate] = useState('5800');

  useEffect(() => {
    localStorage.setItem('kl_planner_lang', lang);
  }, [lang]);

  useEffect(() => {
    try {
      localStorage.setItem('kl_planner_done_ids', JSON.stringify(doneIds));
    } catch {
      // ignore storage errors
    }
  }, [doneIds]);

  const t = tripData[lang];

  const toggleNodeExpand = (day, idx) => {
    const key = `${day}-${idx}`;
    setExpandedNodes((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const currentDayObj =
    t.itinerarySection.days.find((d) => d.day === selectedDay) ||
    t.itinerarySection.days[0];

  const areAllCurrentDayExpanded = currentDayObj.nodes.every(
    (_, idx) => !!expandedNodes[`${selectedDay}-${idx}`]
  );

  const toggleAllCurrentDay = () => {
    const nextState = !areAllCurrentDayExpanded;
    const updated = { ...expandedNodes };
    currentDayObj.nodes.forEach((_, idx) => {
      updated[`${selectedDay}-${idx}`] = nextState;
    });
    setExpandedNodes(updated);
  };

  const toggleCheck = (id) => {
    setDoneIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const resetChecklist = () => {
    setDoneIds([]);
  };

  const copyHotelAddress = () => {
    const textToCopy = `${t.transitSection.hotelName} - ${t.transitSection.hotelAddress}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy);
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2500);
    }
  };

  const totalChecklist = t.checklistSection.items.length;
  const completedCount = doneIds.length;
  const progressPercent = Math.round((completedCount / totalChecklist) * 100);

  const totalBudget = t.budgetSection.items.reduce((acc, curr) => acc + curr.cost, 0);
  const perPersonBudget = Math.round(totalBudget / 4);

  const numericMyr = parseFloat(myrAmount) || 0;
  const numericRate = parseFloat(exchangeRate) || 5800;
  const totalBillVnd = Math.round(numericMyr * numericRate);
  const perPersonMyr = numericMyr / 4;
  const perPersonVnd = Math.round(totalBillVnd / 4);
  const coupleMyr = numericMyr / 2;
  const coupleVnd = Math.round(totalBillVnd / 2);

  const tabIcons = {
    itinerary: <Calendar size={15} />,
    transit: <Train size={15} />,
    budget: <DollarSign size={15} />,
    malls: <ShoppingBag size={15} />,
    checklist: <CheckSquare size={15} />
  };

  return (
    <div className="app-wrapper">
      <style>{`
        .app-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background-color: #f1f5f9;
          color: #0f172a;
        }
        .container {
          width: 100%;
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 16px;
        }

        /* Sticky Navbar - Fixed so nothing gets clipped or covered */
        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid #cbd5e1;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
        }
        .nav-inner {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 10px 0;
        }
        .nav-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          gap: 12px;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 800;
          font-size: 1.05rem;
          color: #0f172a;
          white-space: nowrap;
        }
        .lang-switch {
          display: inline-flex;
          align-items: center;
          background: #f1f5f9;
          padding: 3px;
          border-radius: 999px;
          border: 1px solid #cbd5e1;
          flex-shrink: 0;
        }
        .lang-btn {
          border: none;
          background: transparent;
          padding: 4px 10px;
          border-radius: 999px;
          font-size: 0.76rem;
          font-weight: 700;
          cursor: pointer;
          color: #475569;
          transition: all 0.2s;
        }
        .lang-btn.active {
          background: #1e3a8a;
          color: #ffffff;
          box-shadow: 0 1px 4px rgba(30, 58, 138, 0.3);
        }

        .nav-tabs {
          display: flex;
          gap: 6px;
          overflow-x: auto;
          width: 100%;
          padding: 2px 2px 4px;
          -webkit-overflow-scrolling: touch;
        }
        .nav-tab-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: 999px;
          border: 1px solid #e2e8f0;
          background: #f8fafc;
          color: #475569;
          font-weight: 700;
          font-size: 0.84rem;
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
          transition: all 0.2s;
        }
        .nav-tab-btn:hover {
          background: #e2e8f0;
          color: #0f172a;
        }
        .nav-tab-btn.active {
          background: #1e3a8a;
          border-color: #1e3a8a;
          color: #ffffff;
          box-shadow: 0 2px 6px rgba(30, 58, 138, 0.25);
        }

        /* Hero Banner */
        .hero {
          background: linear-gradient(135deg, #090d16 0%, #1e3a8a 60%, #0f766e 100%);
          color: white;
          padding: 28px 16px 26px;
          border-radius: 0 0 24px 24px;
          margin-bottom: 24px;
          text-align: center;
        }
        .hero-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(249, 115, 22, 0.2);
          border: 1px solid #f97316;
          color: #fdba74;
          padding: 5px 14px;
          border-radius: 999px;
          font-size: 0.74rem;
          font-weight: 800;
          margin-bottom: 12px;
          letter-spacing: 0.3px;
        }
        .hero-title {
          font-size: 1.85rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 10px;
          color: #ffffff;
        }
        .hero-desc {
          font-size: 0.92rem;
          color: #e2e8f0;
          max-width: 720px;
          margin: 0 auto 20px;
          line-height: 1.55;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          max-width: 880px;
          margin: 0 auto;
        }
        .stat-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(8px);
          padding: 12px 10px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          text-align: left;
        }
        .stat-label {
          font-size: 0.68rem;
          color: #cbd5e1;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.4px;
        }
        .stat-val {
          font-size: 0.98rem;
          font-weight: 800;
          margin-top: 3px;
          color: #ffffff;
        }
        .stat-sub {
          font-size: 0.74rem;
          color: #fed7aa;
          margin-top: 2px;
          font-weight: 500;
        }

        /* Section Headings */
        .section-header {
          margin-bottom: 16px;
        }
        .section-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: #0f172a;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
        }
        .section-sub {
          font-size: 0.88rem;
          color: #475569;
        }

        /* Day Selector Pills */
        .day-scroller {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 10px;
          margin-bottom: 16px;
          -webkit-overflow-scrolling: touch;
        }
        .day-pill {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 10px 16px;
          border-radius: 14px;
          border: 1px solid #cbd5e1;
          background: #ffffff;
          color: #334155;
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
          transition: all 0.2s;
        }
        .day-pill:hover {
          border-color: #94a3b8;
        }
        .day-pill-top {
          font-weight: 800;
          font-size: 0.86rem;
        }
        .day-pill-sub {
          font-size: 0.72rem;
          opacity: 0.8;
          margin-top: 2px;
        }
        .day-pill.active {
          background: linear-gradient(135deg, #ea580c 0%, #f97316 100%);
          border-color: #ea580c;
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(234, 88, 12, 0.28);
        }

        /* Cards & Alerts */
        .card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 20px;
          box-shadow: 0 2px 12px rgba(15, 23, 42, 0.03);
          margin-bottom: 18px;
        }
        .grid-cards {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-bottom: 20px;
        }
        .alert-banner {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 14px;
          border-radius: 12px;
          font-size: 0.86rem;
          line-height: 1.45;
          margin-bottom: 20px;
          font-weight: 500;
        }
        .alert-banner.info {
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          color: #1e3a8a;
        }
        .alert-banner.warning {
          background: #fff7ed;
          border: 1px solid #fed7aa;
          color: #9a3412;
        }
        .alert-banner.success {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          color: #166534;
        }

        /* Detailed Itinerary Timeline */
        .timeline {
          border-left: 3px solid #cbd5e1;
          padding-left: 20px;
          margin-left: 8px;
        }
        .timeline-item {
          position: relative;
          margin-bottom: 24px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 16px;
        }
        .timeline-item:last-child {
          margin-bottom: 0;
        }
        .timeline-dot {
          position: absolute;
          left: -29px;
          top: 20px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #ffffff;
          border: 3.5px solid #f97316;
        }
        .time-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.76rem;
          font-weight: 800;
          color: #c2410c;
          background: #ffedd5;
          padding: 3px 10px;
          border-radius: 999px;
          margin-bottom: 8px;
        }
        .place-title {
          font-size: 1.06rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 6px;
        }
        .place-desc {
          font-size: 0.88rem;
          color: #475569;
          line-height: 1.55;
          margin-bottom: 12px;
        }

        /* From -> To Box */
        .from-to-box {
          display: grid;
          grid-template-columns: 1fr;
          gap: 8px;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 12px;
          padding: 10px 12px;
          margin-bottom: 10px;
        }
        .endpoint-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }
        .endpoint-label {
          font-size: 0.68rem;
          font-weight: 800;
          text-transform: uppercase;
          color: #64748b;
          display: block;
        }
        .endpoint-val {
          font-size: 0.84rem;
          font-weight: 700;
          color: #0f172a;
        }

        /* Collapsible Primary Route Summary + Details Box */
        .rail-box {
          background: #ffffff;
          border-radius: 12px;
          border: 1px solid #cbd5e1;
          border-left-width: 5px;
          overflow: hidden;
          margin-bottom: 12px;
        }
        .rail-summary-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          padding: 11px 14px;
          cursor: pointer;
          user-select: none;
          transition: background 0.15s;
        }
        .rail-summary-bar:hover {
          background: #f8fafc;
        }
        .rail-summary-left {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }
        .rail-mode-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #ffffff;
          font-size: 0.76rem;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 6px;
        }
        .rail-meta {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          font-size: 0.76rem;
          font-weight: 700;
          color: #1e293b;
        }
        .rail-meta span {
          background: #f1f5f9;
          padding: 3px 8px;
          border-radius: 6px;
          border: 1px solid #e2e8f0;
        }
        .toggle-dir-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.76rem;
          font-weight: 800;
          color: #1e3a8a;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          padding: 4px 10px;
          border-radius: 999px;
          cursor: pointer;
        }
        .rail-expanded-body {
          padding: 12px 14px 14px;
          border-top: 1px dashed #e2e8f0;
          background: #fcfdff;
        }
        .rail-steps {
          list-style: none;
          padding: 0;
          margin: 0 0 12px 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .rail-steps li {
          font-size: 0.85rem;
          color: #1e293b;
          line-height: 1.5;
          padding-left: 14px;
          position: relative;
        }
        .rail-steps li::before {
          content: "•";
          position: absolute;
          left: 2px;
          color: #f97316;
          font-weight: 900;
        }

        /* Backup & Group Tip */
        .sub-info-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 8px;
        }
        .backup-box {
          background: #f1f5f9;
          border-radius: 10px;
          padding: 9px 12px;
          font-size: 0.81rem;
          color: #475569;
          line-height: 1.45;
        }
        .tip-box {
          background: #fffbeb;
          border: 1px solid #fde68a;
          border-radius: 10px;
          padding: 9px 12px;
          font-size: 0.82rem;
          color: #92400e;
          line-height: 1.45;
        }

        /* Action Map Links */
        .map-actions {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .map-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.78rem;
          color: #1e3a8a;
          background: #eff6ff;
          padding: 6px 12px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 700;
          border: 1px solid #bfdbfe;
          transition: all 0.15s;
        }
        .map-link:hover {
          background: #dbeafe;
        }
        .map-link.route {
          background: #0f766e;
          color: #ffffff;
          border-color: #0f766e;
        }
        .map-link.route:hover {
          background: #115e59;
        }

        /* Bill Splitter Widget */
        .calc-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          margin-top: 14px;
        }
        .calc-inputs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .input-group label {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          color: #475569;
          margin-bottom: 4px;
        }
        .input-group input {
          width: 100%;
          padding: 10px 12px;
          border-radius: 10px;
          border: 1px solid #cbd5e1;
          font-size: 1rem;
          font-weight: 700;
          color: #0f172a;
        }
        .preset-pills {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          margin-top: 8px;
        }
        .preset-btn {
          border: 1px solid #cbd5e1;
          background: #f8fafc;
          border-radius: 6px;
          padding: 4px 8px;
          font-size: 0.75rem;
          font-weight: 700;
          color: #334155;
          cursor: pointer;
        }
        .preset-btn:hover {
          background: #e2e8f0;
        }
        .split-results {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }
        .split-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 10px 12px;
        }
        .split-box-label {
          font-size: 0.72rem;
          color: #64748b;
          font-weight: 700;
        }
        .split-box-val {
          font-size: 1rem;
          font-weight: 800;
          color: #0f172a;
          margin-top: 2px;
        }
        .split-box-sub {
          font-size: 0.78rem;
          color: #0f766e;
          font-weight: 700;
        }

        /* Budget Table & Mobile List */
        .desktop-table {
          display: none;
          width: 100%;
          border-collapse: collapse;
          font-size: 0.9rem;
        }
        .desktop-table th,
        .desktop-table td {
          padding: 13px 16px;
          border-bottom: 1px solid #f1f5f9;
          text-align: left;
        }
        .desktop-table th {
          background: #f8fafc;
          color: #475569;
          font-size: 0.78rem;
          text-transform: uppercase;
          font-weight: 800;
        }
        .mobile-budget-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .budget-card-item {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 14px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        /* Checklist */
        .check-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px 0;
          border-bottom: 1px dashed #e2e8f0;
          cursor: pointer;
        }
        .check-row:last-child {
          border-bottom: none;
        }
        .check-text {
          flex: 1;
          font-size: 0.9rem;
          line-height: 1.45;
        }
        .check-tag {
          font-size: 0.72rem;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 6px;
          white-space: nowrap;
        }

        @media (min-width: 640px) {
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }
          .hero-title {
            font-size: 2.3rem;
          }
          .from-to-box {
            grid-template-columns: 1fr 1fr;
          }
          .split-results {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (min-width: 768px) {
          .nav-inner {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 12px 0;
          }
          .nav-top-row {
            width: auto;
            gap: 14px;
          }
          .nav-tabs {
            width: auto;
            overflow-x: visible;
            flex-wrap: wrap;
            justify-content: flex-end;
            padding: 0;
          }
          .grid-cards {
            grid-template-columns: 1fr 1fr;
          }
          .sub-info-grid {
            grid-template-columns: 1fr 1fr;
          }
          .desktop-table {
            display: table;
          }
          .mobile-budget-list {
            display: none;
          }
        }
      `}</style>

      {/* STICKY NAVBAR WITH BILINGUAL SWITCHER */}
      <nav className="navbar">
        <div className="container nav-inner">
          <div className="nav-top-row">
            <div className="nav-logo">
              <Train size={20} color="#f97316" />
              <span>{t.nav.brand}</span>
            </div>

            <div className="lang-switch" role="group" aria-label="Language Switcher">
              <button
                type="button"
                onClick={() => setLang('vi')}
                className={`lang-btn ${lang === 'vi' ? 'active' : ''}`}
              >
                🇻🇳 VI
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              >
                🇬🇧 EN
              </button>
            </div>
          </div>

          <div className="nav-tabs">
            {t.nav.tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setCurrentTab(tab.key)}
                className={`nav-tab-btn ${currentTab === tab.key ? 'active' : ''}`}
              >
                {tabIcons[tab.key]} {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO BANNER */}
      <header className="hero">
        <div className="container">
          <div className="hero-pill">
            <Footprints size={14} /> {t.hero.pill}
          </div>
          <h1 className="hero-title">{t.hero.title}</h1>
          <p className="hero-desc">{t.hero.subtitle}</p>

          <div className="stats-grid">
            {t.hero.stats.map((st, i) => (
              <div key={i} className="stat-card">
                <div className="stat-label">{st.label}</div>
                <div className="stat-val">{st.val}</div>
                <div className="stat-sub">{st.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="container" style={{ flex: 1, paddingBottom: '44px' }}>
        {/* TAB 1: DETAILED ITINERARY & COLLAPSIBLE DIRECTIONS */}
        {currentTab === 'itinerary' && (
          <div>
            <div className="section-header">
              <h2 className="section-title">
                <Calendar size={22} color="#f97316" /> {t.itinerarySection.heading}
              </h2>
              <p className="section-sub">{t.itinerarySection.subHeading}</p>
            </div>

            <div className="day-scroller">
              {t.itinerarySection.days.map((d) => (
                <button
                  key={d.day}
                  type="button"
                  onClick={() => setSelectedDay(d.day)}
                  className={`day-pill ${selectedDay === d.day ? 'active' : ''}`}
                >
                  <span className="day-pill-top">{d.shortLabel}</span>
                  <span className="day-pill-sub">{d.tag}</span>
                </button>
              ))}
            </div>

            <div className="card">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '10px',
                  marginBottom: '14px'
                }}
              >
                <h3 style={{ fontSize: '1.12rem', color: '#1e3a8a', fontWeight: 800, flex: 1 }}>
                  {currentDayObj.title}
                </h3>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      background: '#e0f2fe',
                      color: '#0369a1',
                      fontWeight: 700,
                      fontSize: '0.76rem',
                      padding: '4px 10px',
                      borderRadius: '999px'
                    }}
                  >
                    📅 {currentDayObj.date}
                  </span>

                  <button
                    type="button"
                    onClick={toggleAllCurrentDay}
                    className="toggle-dir-btn"
                  >
                    {areAllCurrentDayExpanded ? (
                      <>
                        <ChevronUp size={14} /> {t.itinerarySection.collapseAllBtn}
                      </>
                    ) : (
                      <>
                        <ChevronDown size={14} /> {t.itinerarySection.expandAllBtn}
                      </>
                    )}
                  </button>
                </div>
              </div>

              {currentDayObj.alert && (
                <div className={`alert-banner ${currentDayObj.alert.type}`}>
                  <AlertCircle size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>{currentDayObj.alert.text}</div>
                </div>
              )}

              <div className="timeline">
                {currentDayObj.nodes.map((node, idx) => {
                  const isExpanded = !!expandedNodes[`${selectedDay}-${idx}`];
                  return (
                    <div key={idx} className="timeline-item">
                      <div className="timeline-dot"></div>

                      <div className="time-badge">
                        <Clock size={12} /> {node.time}
                      </div>
                      <div className="place-title">{node.title}</div>
                      <div className="place-desc">{node.desc}</div>

                      {/* Explicit From -> To Endpoints */}
                      <div className="from-to-box">
                        <div className="endpoint-item">
                          <MapPin
                            size={15}
                            color="#64748b"
                            style={{ flexShrink: 0, marginTop: '2px' }}
                          />
                          <div>
                            <span className="endpoint-label">{t.itinerarySection.fromLabel}</span>
                            <span className="endpoint-val">{node.from}</span>
                          </div>
                        </div>
                        <div className="endpoint-item">
                          <Navigation
                            size={15}
                            color="#ea580c"
                            style={{ flexShrink: 0, marginTop: '2px' }}
                          />
                          <div>
                            <span className="endpoint-label">{t.itinerarySection.toLabel}</span>
                            <span className="endpoint-val">{node.to}</span>
                          </div>
                        </div>
                      </div>

                      {/* Collapsible Primary Route Box (Default = Collapsed) */}
                      <div
                        className="rail-box"
                        style={{ borderLeftColor: node.primaryTransit.badgeColor }}
                      >
                        <div
                          className="rail-summary-bar"
                          onClick={() => toggleNodeExpand(selectedDay, idx)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              toggleNodeExpand(selectedDay, idx);
                            }
                          }}
                        >
                          <div className="rail-summary-left">
                            <span
                              className="rail-mode-badge"
                              style={{ backgroundColor: node.primaryTransit.badgeColor }}
                            >
                              {node.primaryTransit.mode}
                            </span>
                            <div className="rail-meta">
                              <span>⏱️ {node.primaryTransit.duration}</span>
                              <span>🎫 {node.primaryTransit.cost}</span>
                            </div>
                          </div>

                          <span className="toggle-dir-btn">
                            {isExpanded ? (
                              <>
                                {t.itinerarySection.collapseBtn} <ChevronUp size={14} />
                              </>
                            ) : (
                              <>
                                {t.itinerarySection.expandBtn} <ChevronDown size={14} />
                              </>
                            )}
                          </span>
                        </div>

                        {isExpanded && (
                          <div className="rail-expanded-body">
                            <ul className="rail-steps">
                              {node.primaryTransit.steps.map((step, sIdx) => (
                                <li key={sIdx}>{step}</li>
                              ))}
                            </ul>

                            <div className="sub-info-grid">
                              <div className="backup-box">
                                <strong>🔄 {t.itinerarySection.backupLabel}:</strong>{' '}
                                {node.backupTransit}
                              </div>
                              <div className="tip-box">
                                <strong>💡 {t.itinerarySection.groupTipLabel}:</strong>{' '}
                                {node.groupTip}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Map Action Links */}
                      <div className="map-actions">
                        {node.mapPinUrl && (
                          <a
                            href={node.mapPinUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="map-link"
                          >
                            <MapPin size={13} /> {t.itinerarySection.openPinBtn}{' '}
                            <ExternalLink size={12} />
                          </a>
                        )}
                        {node.mapRouteUrl && (
                          <a
                            href={node.mapRouteUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="map-link route"
                          >
                            <Navigation size={13} /> {t.itinerarySection.openRouteBtn}{' '}
                            <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: MRT / LRT STATION RADAR AROUND HOTEL 99 KL CITY */}
        {currentTab === 'transit' && (
          <div>
            <div className="section-header">
              <h2 className="section-title">
                <Train size={22} color="#f97316" /> {t.transitSection.heading}
              </h2>
              <p className="section-sub">{t.transitSection.subHeading}</p>
            </div>

            {/* Hotel 99 Kuala Lumpur City Address & Room Card */}
            <div
              className="card"
              style={{
                borderLeft: '5px solid #1e3a8a',
                background: 'linear-gradient(to right, #ffffff, #f8fafc)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}
              >
                <div>
                  <span
                    style={{
                      display: 'inline-block',
                      background: '#dbeafe',
                      color: '#1e3a8a',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      padding: '3px 10px',
                      borderRadius: '999px',
                      marginBottom: '6px'
                    }}
                  >
                    🏨 {t.transitSection.hotelCardTitle}
                  </span>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a' }}>
                    {t.transitSection.hotelName}
                  </h3>
                  <p style={{ fontSize: '0.92rem', fontWeight: 700, color: '#1e3a8a', marginTop: '4px' }}>
                    📍 {t.transitSection.hotelAddress}
                  </p>
                  <p style={{ fontSize: '0.84rem', color: '#475569', marginTop: '4px' }}>
                    🧭 {t.transitSection.hotelLandmark}
                  </p>
                  <p
                    style={{
                      fontSize: '0.84rem',
                      color: '#9a3412',
                      background: '#ffedd5',
                      display: 'inline-block',
                      padding: '4px 10px',
                      borderRadius: '8px',
                      fontWeight: 700,
                      marginTop: '8px'
                    }}
                  >
                    🛏️ {t.transitSection.roomSetup}
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    onClick={copyHotelAddress}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '8px 14px',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      background: copiedAddress ? '#16a34a' : '#ffffff',
                      color: copiedAddress ? '#ffffff' : '#0f172a',
                      fontWeight: 700,
                      fontSize: '0.82rem',
                      cursor: 'pointer'
                    }}
                  >
                    {copiedAddress ? <Check size={15} /> : <Copy size={15} />}
                    {copiedAddress ? t.transitSection.copiedBtn : t.transitSection.copyBtn}
                  </button>
                  <a
                    href="https://maps.google.com/?cid=17279110726563758836"
                    target="_blank"
                    rel="noreferrer"
                    className="map-link route"
                  >
                    <MapPin size={14} /> Google Maps <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>

            {/* 4 Surrounding Rail Stations */}
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '12px' }}>
              🚇 {t.transitSection.stationsTitle}
            </h3>
            <div className="grid-cards">
              {t.transitSection.stations.map((st, idx) => (
                <div
                  key={idx}
                  className="card"
                  style={{
                    marginBottom: 0,
                    borderTop: `4px solid ${st.color}`,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <span
                      style={{
                        display: 'inline-block',
                        background: st.color,
                        color: '#ffffff',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        padding: '3px 8px',
                        borderRadius: '6px',
                        marginBottom: '8px'
                      }}
                    >
                      {st.line}
                    </span>
                    <h4 style={{ fontSize: '1.02rem', fontWeight: 800, marginBottom: '4px' }}>
                      {st.name}
                    </h4>
                    <p
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: '#ea580c',
                        marginBottom: '8px'
                      }}
                    >
                      🚶 {st.walk}
                    </p>
                    <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}>
                      {st.connectsTo}
                    </p>
                  </div>
                  <div style={{ marginTop: '12px' }}>
                    <a
                      href={st.mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="map-link"
                    >
                      <Navigation size={13} />{' '}
                      {lang === 'vi' ? 'Chỉ đường đi bộ từ KS' : 'Walking Route from Hotel'}{' '}
                      <ExternalLink size={11} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* How to Buy Tickets & KLIA Terminal Guide */}
            <div className="grid-cards">
              <div className="card" style={{ marginBottom: 0 }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '12px', color: '#1e3a8a' }}>
                  🎫 {t.transitSection.ticketGuideTitle}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {t.transitSection.ticketTips.map((tip, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: '#f8fafc',
                        padding: '10px 12px',
                        borderRadius: '10px',
                        border: '1px solid #e2e8f0'
                      }}
                    >
                      <div style={{ fontWeight: 700, fontSize: '0.86rem', marginBottom: '3px' }}>
                        {tip.title}
                      </div>
                      <div style={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.45 }}>
                        {tip.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card" style={{ marginBottom: 0 }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '12px', color: '#1e3a8a' }}>
                  ✈️ {t.transitSection.terminalTitle}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {t.transitSection.terminals.map((term, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: '#f8fafc',
                        padding: '12px',
                        borderRadius: '10px',
                        borderLeft: idx === 0 ? '4px solid #2563eb' : '4px solid #ef4444'
                      }}
                    >
                      <div style={{ fontWeight: 800, fontSize: '0.9rem', marginBottom: '4px' }}>
                        {term.name}
                      </div>
                      <div style={{ fontSize: '0.83rem', fontWeight: 700, color: '#0f172a' }}>
                        🛫 {term.airlines}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: '#475569', marginTop: '4px' }}>
                        {term.note}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: BUDGET & LIVE BILL SPLITTER */}
        {currentTab === 'budget' && (
          <div>
            <div className="section-header">
              <h2 className="section-title">
                <DollarSign size={22} color="#f97316" /> {t.budgetSection.heading}
              </h2>
            </div>

            {/* Interactive MYR <-> VND Converter & Group Splitter */}
            <div
              className="card"
              style={{
                borderTop: '4px solid #0f766e',
                background: 'linear-gradient(to bottom, #ffffff, #f0fdfa)'
              }}
            >
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f766e' }}>
                🧮 {t.budgetSection.calcTitle}
              </h3>
              <p style={{ fontSize: '0.84rem', color: '#475569', marginTop: '2px' }}>
                {t.budgetSection.calcSub}
              </p>

              <div className="calc-grid">
                <div>
                  <div className="calc-inputs">
                    <div className="input-group">
                      <label>{t.budgetSection.myrInputLabel}</label>
                      <input
                        type="number"
                        min="0"
                        step="any"
                        value={myrAmount}
                        onChange={(e) => setMyrAmount(e.target.value)}
                      />
                    </div>
                    <div className="input-group">
                      <label>{t.budgetSection.rateInputLabel}</label>
                      <input
                        type="number"
                        min="1000"
                        step="50"
                        value={exchangeRate}
                        onChange={(e) => setExchangeRate(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="preset-pills">
                    {[10, 25, 60, 100, 180, 300].map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setMyrAmount(String(val))}
                        className="preset-btn"
                      >
                        {val} MYR
                      </button>
                    ))}
                  </div>
                </div>

                <div className="split-results">
                  <div className="split-box">
                    <div className="split-box-label">{t.budgetSection.totalVndLabel}</div>
                    <div className="split-box-val">{totalBillVnd.toLocaleString('vi-VN')} đ</div>
                    <div className="split-box-sub">{numericMyr.toFixed(2)} MYR</div>
                  </div>
                  <div className="split-box">
                    <div className="split-box-label">{t.budgetSection.perPersonLabel}</div>
                    <div className="split-box-val">{perPersonVnd.toLocaleString('vi-VN')} đ</div>
                    <div className="split-box-sub">{perPersonMyr.toFixed(2)} MYR</div>
                  </div>
                  <div className="split-box" style={{ borderColor: '#fdba74', background: '#fff7ed' }}>
                    <div className="split-box-label">{t.budgetSection.coupleShareLabel}</div>
                    <div className="split-box-val">{coupleVnd.toLocaleString('vi-VN')} đ</div>
                    <div className="split-box-sub">{coupleMyr.toFixed(2)} MYR</div>
                  </div>
                  <div className="split-box" style={{ borderColor: '#bfdbfe', background: '#eff6ff' }}>
                    <div className="split-box-label">{t.budgetSection.singleGirlLabel}</div>
                    <div className="split-box-val">{perPersonVnd.toLocaleString('vi-VN')} đ</div>
                    <div className="split-box-sub">{perPersonMyr.toFixed(2)} MYR</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cash vs Card Split */}
            <div className="grid-cards">
              {t.budgetSection.cashCardSplit.map((box, idx) => (
                <div
                  key={idx}
                  className="card"
                  style={{ borderLeft: `4px solid ${box.color}`, marginBottom: 0 }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '10px'
                    }}
                  >
                    <strong style={{ fontSize: '0.95rem' }}>{box.title}</strong>
                    <span
                      style={{
                        background: box.bg,
                        color: box.color,
                        padding: '3px 9px',
                        borderRadius: '999px',
                        fontSize: '0.73rem',
                        fontWeight: 800
                      }}
                    >
                      {box.badge}
                    </span>
                  </div>
                  <ul
                    style={{
                      fontSize: '0.85rem',
                      color: '#475569',
                      paddingLeft: '18px',
                      lineHeight: 1.55
                    }}
                  >
                    {box.items.map((line, lIdx) => (
                      <li key={lIdx} style={{ marginBottom: '4px' }}>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Budget Table / Mobile Cards */}
            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <table className="desktop-table">
                <thead>
                  <tr>
                    <th>{t.budgetSection.tableHeaders[0]}</th>
                    <th>{t.budgetSection.tableHeaders[1]}</th>
                    <th>{t.budgetSection.tableHeaders[2]}</th>
                    <th style={{ textAlign: 'right' }}>{t.budgetSection.tableHeaders[3]}</th>
                  </tr>
                </thead>
                <tbody>
                  {t.budgetSection.items.map((b, idx) => (
                    <tr key={idx}>
                      <td style={{ fontWeight: 700 }}>{b.name}</td>
                      <td style={{ color: '#475569' }}>{b.formula}</td>
                      <td>
                        <span
                          style={{
                            fontSize: '0.76rem',
                            color: '#1e3a8a',
                            background: '#eff6ff',
                            padding: '3px 8px',
                            borderRadius: '6px',
                            fontWeight: 700
                          }}
                        >
                          {b.type}
                        </span>
                      </td>
                      <td style={{ textAlign: 'right', fontWeight: 700 }}>
                        {b.cost.toLocaleString('vi-VN')} đ
                      </td>
                    </tr>
                  ))}
                  <tr style={{ background: '#eff6ff', color: '#1e3a8a', fontWeight: 800 }}>
                    <td colSpan={3}>{t.budgetSection.totalLabel}</td>
                    <td style={{ textAlign: 'right', fontSize: '1.05rem' }}>
                      {totalBudget.toLocaleString('vi-VN')} đ
                    </td>
                  </tr>
                  <tr style={{ background: '#fff7ed', color: '#c2410c', fontWeight: 800 }}>
                    <td colSpan={3}>{t.budgetSection.perPersonTotalLabel}</td>
                    <td style={{ textAlign: 'right', fontSize: '1rem' }}>
                      {perPersonBudget.toLocaleString('vi-VN')} đ / pax
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="mobile-budget-list" style={{ padding: '12px' }}>
                {t.budgetSection.items.map((b, idx) => (
                  <div key={idx} className="budget-card-item">
                    <div style={{ flex: 1, paddingRight: '10px' }}>
                      <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{b.name}</div>
                      <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '2px' }}>
                        {b.formula}
                      </div>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          color: '#1e3a8a',
                          background: '#e0f2fe',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          display: 'inline-block',
                          marginTop: '6px',
                          fontWeight: 700
                        }}
                      >
                        {b.type}
                      </span>
                    </div>
                    <div style={{ fontWeight: 800, fontSize: '0.95rem', whiteSpace: 'nowrap' }}>
                      {b.cost.toLocaleString('vi-VN')} đ
                    </div>
                  </div>
                ))}
                <div
                  style={{
                    background: '#eff6ff',
                    borderRadius: '12px',
                    padding: '14px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <strong style={{ color: '#1e3a8a', fontSize: '0.88rem' }}>
                    {t.budgetSection.totalLabel}:
                  </strong>
                  <strong style={{ color: '#1e3a8a', fontSize: '1.02rem' }}>
                    {totalBudget.toLocaleString('vi-VN')} đ
                  </strong>
                </div>
                <div
                  style={{
                    background: '#fff7ed',
                    borderRadius: '12px',
                    padding: '12px 14px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <strong style={{ color: '#c2410c', fontSize: '0.85rem' }}>
                    {t.budgetSection.perPersonTotalLabel}:
                  </strong>
                  <strong style={{ color: '#c2410c', fontSize: '0.98rem' }}>
                    {perPersonBudget.toLocaleString('vi-VN')} đ
                  </strong>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: MEGA MALLS & REST STOPS */}
        {currentTab === 'malls' && (
          <div>
            <div className="section-header">
              <h2 className="section-title">
                <ShoppingBag size={22} color="#f97316" /> {t.mallsSection.heading}
              </h2>
              <p className="section-sub">{t.mallsSection.subHeading}</p>
            </div>

            <div className="grid-cards">
              {t.mallsSection.malls.map((mall, idx) => (
                <div
                  key={idx}
                  className="card"
                  style={{
                    marginBottom: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <span
                      style={{
                        display: 'inline-block',
                        backgroundColor: '#e0f2fe',
                        color: '#0369a1',
                        fontSize: '0.73rem',
                        fontWeight: 800,
                        padding: '3px 9px',
                        borderRadius: '6px',
                        marginBottom: '8px'
                      }}
                    >
                      {mall.tag}
                    </span>
                    <h3
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: 800,
                        marginBottom: '8px',
                        color: '#1e3a8a'
                      }}
                    >
                      {mall.name}
                    </h3>

                    <div
                      style={{
                        background: '#f0fdf4',
                        border: '1px solid #bbf7d0',
                        color: '#166534',
                        padding: '8px 10px',
                        borderRadius: '8px',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        marginBottom: '10px'
                      }}
                    >
                      🚇 <strong>{t.mallsSection.stationLabel}:</strong> {mall.station}
                    </div>

                    <p
                      style={{
                        fontSize: '0.88rem',
                        color: '#475569',
                        marginBottom: '10px',
                        lineHeight: 1.5
                      }}
                    >
                      {mall.highlight}
                    </p>

                    <div
                      style={{
                        background: '#fff7ed',
                        padding: '9px 12px',
                        borderRadius: '8px',
                        fontSize: '0.82rem',
                        color: '#9a3412',
                        marginBottom: '10px'
                      }}
                    >
                      ☕ <strong>{t.mallsSection.restStopLabel}:</strong> {mall.restStop}
                    </div>
                  </div>

                  <div>
                    <div
                      style={{
                        background: '#f8fafc',
                        padding: '10px 12px',
                        borderRadius: '8px',
                        borderLeft: '3px solid #f97316',
                        fontSize: '0.82rem',
                        color: '#334155',
                        marginBottom: '12px'
                      }}
                    >
                      💡 <strong>{t.mallsSection.tipLabel}:</strong> {mall.tip}
                    </div>
                    <a
                      href={mall.mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="map-link"
                    >
                      <MapPin size={13} /> Google Maps <ExternalLink size={11} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: PERSISTENT CHECKLIST */}
        {currentTab === 'checklist' && (
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '10px',
                marginBottom: '14px'
              }}
            >
              <h2 className="section-title">
                <CheckSquare size={22} color="#f97316" /> {t.checklistSection.heading}
              </h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span
                  style={{
                    fontWeight: 800,
                    color: progressPercent === 100 ? '#16a34a' : '#ea580c',
                    fontSize: '0.9rem'
                  }}
                >
                  {completedCount}/{totalChecklist} ({progressPercent}%)
                </span>
                <button
                  type="button"
                  onClick={resetChecklist}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '5px 10px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    background: '#ffffff',
                    fontSize: '0.76rem',
                    fontWeight: 700,
                    color: '#475569',
                    cursor: 'pointer'
                  }}
                >
                  <RotateCcw size={13} /> {t.checklistSection.resetBtn}
                </button>
              </div>
            </div>

            <div
              style={{
                width: '100%',
                height: '10px',
                backgroundColor: '#e2e8f0',
                borderRadius: '999px',
                overflow: 'hidden',
                marginBottom: '18px'
              }}
            >
              <div
                style={{
                  width: `${progressPercent}%`,
                  height: '100%',
                  backgroundColor: progressPercent === 100 ? '#16a34a' : '#f97316',
                  transition: 'width 0.3s ease'
                }}
              ></div>
            </div>

            <div className="card">
              {t.checklistSection.items.map((item) => {
                const isDone = doneIds.includes(item.id);
                const isMandatory = item.tag === 'Bắt buộc' || item.tag === 'Mandatory';
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleCheck(item.id)}
                    className="check-row"
                  >
                    <input
                      type="checkbox"
                      checked={isDone}
                      onChange={() => {}}
                      style={{
                        width: '19px',
                        height: '19px',
                        marginTop: '2px',
                        accentColor: '#f97316',
                        cursor: 'pointer'
                      }}
                    />
                    <span
                      className="check-text"
                      style={{
                        textDecoration: isDone ? 'line-through' : 'none',
                        color: isDone ? '#94a3b8' : '#0f172a',
                        fontWeight: isDone ? 400 : 600
                      }}
                    >
                      {item.text}
                    </span>
                    <span
                      className="check-tag"
                      style={{
                        background: isMandatory ? '#fee2e2' : '#f1f5f9',
                        color: isMandatory ? '#991b1b' : '#334155'
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>
                );
              })}

              <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid #e2e8f0' }}>
                <a
                  href="https://imigresen-online.imi.gov.my/mdac/main"
                  target="_blank"
                  rel="noreferrer"
                  className="map-link route"
                >
                  🌐 {lang === 'vi' ? 'Mở trang khai MDAC Chính thức của Malaysia' : 'Open Official Malaysia MDAC Portal'}{' '}
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: 'center',
          color: '#64748b',
          fontSize: '0.8rem',
          borderTop: '1px solid #e2e8f0',
          background: '#ffffff',
          padding: '20px 16px',
          fontWeight: 600
        }}
      >
        {t.footer}
      </footer>
    </div>
  );
}