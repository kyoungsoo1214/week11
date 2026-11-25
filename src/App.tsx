import { useState } from 'react'
import './App.css'

const menuItems = [
  {
    name: '플랫 화이트',
    english: 'FLAT WHITE',
    description: '고소한 에스프레소와 부드러운 밀크의 균형',
    price: '5,000',
    image:
      'https://images.unsplash.com/photo-1517256673644-36ad11246d21?auto=format&fit=crop&w=900&q=85',
    alt: '부드러운 라테 아트가 담긴 커피 잔',
  },
  {
    name: '바닐라 빈 라테',
    english: 'VANILLA BEAN LATTE',
    description: '마다가스카르 바닐라로 천천히 만든 시그니처',
    price: '6,000',
    image:
      'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85',
    alt: '얼음과 우유가 어우러진 아이스 커피',
  },
  {
    name: '오늘의 필터',
    english: 'DAILY FILTER',
    description: '산지의 개성이 또렷한 오늘의 싱글 오리진',
    price: '5,500',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85',
    alt: '정성스럽게 내리는 핸드드립 커피',
  },
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833" />
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="슬로우 폼 홈">
          <span className="wordmark-mark" aria-hidden="true">
            sf.
          </span>
          <span className="wordmark-name">SLOW FORM</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? '닫기' : '메뉴'}</span>
          <span className={`menu-toggle-icon${menuOpen ? ' is-open' : ''}`}>
            <span />
            <span />
          </span>
        </button>

        <nav
          className={`site-nav${menuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
          aria-label="주요 메뉴"
        >
          <a href="#about" onClick={closeMenu}>
            우리의 방식
          </a>
          <a href="#menu" onClick={closeMenu}>
            메뉴
          </a>
          <a href="#visit" onClick={closeMenu}>
            찾아오는 길
          </a>
          <a className="nav-cta" href="#visit" onClick={closeMenu}>
            매장 안내 <ArrowIcon />
          </a>
        </nav>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-image" role="img" aria-label="햇살이 드는 카페의 커피" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">A LITTLE SLOWER, A LITTLE BETTER</p>
          <h1 id="hero-title">
            좋은 하루는,
            <br />
            좋은 한 잔에서.
          </h1>
          <p className="hero-description">
            서두르지 않아도 괜찮은 곳.
            <br />
            오늘의 커피와 당신의 순간을 준비했어요.
          </p>
          <a className="hero-link" href="#menu">
            우리의 커피 만나보기 <ArrowIcon />
          </a>
        </div>
        <div className="hero-caption">
          <span>매일, 천천히 내리는 커피</span>
          <span>SEOUL · EST. 2021</span>
        </div>
        <a className="scroll-cue" href="#about" aria-label="아래로 이동">
          <span />
        </a>
      </section>

      <section className="intro section-wrap" id="about">
        <div className="section-kicker">
          <span>01</span>
          <span>OUR PHILOSOPHY</span>
        </div>
        <div className="intro-copy">
          <p className="eyebrow">GOOD COFFEE, NO RUSH</p>
          <h2>
            조금 느리게,
            <br />
            더 깊게.
          </h2>
          <p className="body-copy">
            좋은 커피 한 잔에는 기다림이 필요하니까요.
            <br className="desktop-break" />
            정직한 재료와 다정한 마음으로, 매일의 작은 여백을 만듭니다.
          </p>
          <a className="text-link" href="#visit">
            슬로우 폼 이야기 <ArrowIcon />
          </a>
        </div>
        <div className="intro-photo">
          <img
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=85"
            alt="따뜻한 빛이 내려앉은 커피와 테이블"
            loading="lazy"
          />
          <span className="photo-note">TAKE YOUR TIME.</span>
        </div>
        <p className="intro-aside">YOUR EVERYDAY, MADE A LITTLE BETTER.</p>
      </section>

      <section className="menu-section" id="menu">
        <div className="section-wrap menu-inner">
          <div className="section-kicker">
            <span>02</span>
            <span>FROM OUR BAR</span>
          </div>
          <div className="menu-heading">
            <div>
              <p className="eyebrow">MADE WITH CARE</p>
              <h2>오늘의 한 잔</h2>
            </div>
            <p className="menu-heading-note">
              좋은 재료의 맛이 가장 잘 느껴지도록
              <br />
              필요한 것만 담백하게 담았습니다.
            </p>
          </div>
          <div className="menu-grid">
            {menuItems.map((item, index) => (
              <article className="menu-card" key={item.name}>
                <div className="menu-card-image">
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <span className="menu-number">0{index + 1}</span>
                </div>
                <div className="menu-card-heading">
                  <div>
                    <p className="menu-english">{item.english}</p>
                    <h3>{item.name}</h3>
                  </div>
                  <span className="menu-price">{item.price}</span>
                </div>
                <p className="menu-description">{item.description}</p>
              </article>
            ))}
          </div>
          <p className="menu-footnote">
            계절에 따라 메뉴가 변경될 수 있습니다. · 모든 가격은 원화 기준입니다.
          </p>
        </div>
      </section>

      <section className="visit-section" id="visit">
        <div className="visit-image" role="img" aria-label="편안한 분위기의 카페 공간" />
        <div className="visit-card">
          <p className="eyebrow">COME AS YOU ARE</p>
          <h2>
            잠시 쉬어가도
            <br />
            좋은 자리.
          </h2>
          <p className="visit-copy">
            좋아하는 책 한 권, 나누고 싶은 이야기,
            <br />
            혹은 아무것도 하지 않는 시간까지.
          </p>
          <div className="visit-details">
            <div>
              <span>OPEN</span>
              <p>매일 10:00 — 21:00</p>
            </div>
            <div>
              <span>FIND US</span>
              <p>서울시 성동구 서울숲길 24</p>
            </div>
          </div>
          <a
            className="visit-link"
            href="https://map.naver.com/v5/search/서울숲길%2024"
            target="_blank"
            rel="noreferrer"
          >
            지도에서 보기 <ArrowIcon />
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <a className="footer-wordmark" href="#home">
          SLOW FORM<span>.</span>
        </a>
        <p>일상의 속도를 낮추는 커피.</p>
        <div className="footer-bottom">
          <span>© 2025 SLOW FORM COFFEE. ALL RIGHTS RESERVED.</span>
          <a href="mailto:hello@slowform.coffee">HELLO@SLOWFORM.COFFEE</a>
          <a href="#home" className="back-to-top">
            BACK TO TOP ↑
          </a>
        </div>
      </footer>
    </main>
  )
}

export default App
