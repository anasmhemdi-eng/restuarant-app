import './mainpage.css';

export default function MainPage() {
  return (
    <div className="landing-page">
      <header className="navbar">
        <div className="nav-left">
          <div className="logo">TDF</div>
          
          <nav className="nav-links">
            <a href="#carte">NOTRE CARTE</a>
            <a href="#about">A PROPOS DE NOUS</a>
          </nav>
        </div>

        <button className="order-btn">
          COMMANDER <span>›</span>
        </button>
      </header>
    </div>
  );
}