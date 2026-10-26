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

      {/*hero section*/}
      <section className='hero-sec'>
        <div className='hero-info'>
          <h1>delicious food delevered to your home</h1>
          <p>Hot, golden perfection—straight from our kitchen to your couch</p>
          <button className='hero-btn'>
            EXPLORE MENU <span>›</span>
          </button>
        </div>
        <div className='hero-img'>
          <div className="image-placeholder">🍔</div>
        </div>
      </section>

    </div>
  );
}