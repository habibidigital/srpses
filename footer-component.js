
(function () {
 
  const CONFIG = {
    phone: "9997658330",
    phoneDisplay: "+91 9997658330",
    email: "srpses@gmail.com",
    address: "Karahi, Fatehpur Sikri, Agra — 283110",
    whatsapp: "https://wa.me/919997658330",
    regNo: "UP-AGR-2024-EDUC-1042",
    year: new Date().getFullYear(),
    socials: {
      twitter: "#",
      instagram: "#",
      facebook: "#",
    },
  };
  
  const CSS = `
    <style id="footer-component-styles">
      /* Footer CSS Variables — fallback if not already defined */
      :root {
        --sr-saffron: #FF6B00;
        --sr-saffron-light: #FF8C33;
        --sr-navy: #0D2B5E;
        --sr-navy-light: #1A3F80;
        --sr-gray-50: #F8F9FA;
        --sr-gray-100: #F0F2F5;
        --sr-gray-200: #E2E6EA;
        --sr-gray-400: #9AA3AE;
        --sr-gray-600: #555F6B;
        --sr-white: #FFFFFF;
        --sr-shadow-md: 0 8px 32px rgba(13,43,94,0.12);
        --sr-text-xs: clamp(10px, 2vw, 12px);
        --sr-text-sm: clamp(12px, 2.5vw, 14px);
        --sr-text-base: clamp(14px, 3vw, 16px);
        --sr-space-xl: clamp(48px, 7vw, 80px);
      }

      #site-footer footer {
        background: var(--sr-navy, var(--navy, #0D2B5E));
        color: white;
        font-family: 'Inter', sans-serif;
      }

      .sr-footer-main {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr;
        gap: clamp(28px, 5vw, 48px);
        max-width: 1200px;
        margin: 0 auto;
        padding: clamp(40px, 7vw, 64px) clamp(16px, 4vw, 24px) clamp(28px, 5vw, 40px);
      }

      .sr-footer-brand .sr-footer-logo {
        display: flex;
        align-items: center;
        gap: clamp(10px, 2vw, 14px);
      }

      .sr-footer-emblem {
        width: clamp(44px, 8vw, 56px);
        height: clamp(44px, 8vw, 56px);
        border-radius: 50%;
        flex-shrink: 0;
        background: linear-gradient(135deg, var(--sr-saffron, #FF6B00), rgba(255,107,0,0.5));
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Playfair Display', serif;
        font-size: clamp(16px, 3vw, 22px);
        font-weight: 700;
        color: white;
      }

      .sr-footer-brand-name {
        line-height: 1.2;
      }

      .sr-footer-brand-name h3 {
        font-family: 'Playfair Display', serif;
        font-size: clamp(13px, 2.5vw, 15px);
        color: white;
        font-weight: 700;
        margin: 0 0 2px 0;
      }

      .sr-footer-brand-name span {
        font-size: var(--sr-text-xs);
        color: rgba(255,255,255,0.6);
        font-family: 'Inter', sans-serif;
        font-weight: 400;
      }

      .sr-footer-desc {
        font-size: var(--sr-text-sm);
        line-height: 1.8;
        margin: 14px 0 18px;
        color: rgba(255,255,255,0.7);
      }

      .sr-footer-social {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
        margin-top: 4px;
      }

      .sr-footer-social a {
        width: 44px;
        height: 44px;
        border-radius: 10px;
        border: 1px solid rgba(255,255,255,0.15);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        transition: all 0.25s ease;
        color: rgba(255,255,255,0.7);
        background: rgba(255,255,255,0.06);
        text-decoration: none;
      }

      .sr-footer-social a:hover {
        background: var(--sr-saffron, #FF6B00);
        border-color: var(--sr-saffron, #FF6B00);
        color: white;
      }

      .sr-footer-col h4 {
        font-size: var(--sr-text-xs);
        font-weight: 700;
        color: white;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        margin-bottom: clamp(14px, 3vw, 20px);
        font-family: 'Inter', sans-serif;
      }

      .sr-footer-col ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: clamp(8px, 1.5vw, 10px);
      }

      .sr-footer-col ul li a {
        font-size: var(--sr-text-sm);
        color: rgba(255,255,255,0.65);
        transition: color 0.2s;
        text-decoration: none;
      }

      .sr-footer-col ul li a:hover {
        color: var(--sr-saffron-light, #FF8C33);
      }

      .sr-footer-divider {
        border: none;
        border-top: 1px solid rgba(255,255,255,0.1);
        margin: 0;
      }

      .sr-footer-bottom {
        max-width: 1200px;
        margin: 0 auto;
        padding: clamp(16px, 3vw, 20px) clamp(16px, 4vw, 24px);
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;
      }

      .sr-footer-bottom p {
        font-size: var(--sr-text-xs);
        color: rgba(255,255,255,0.5);
        margin: 0;
        font-family: 'Inter', sans-serif;
      }

      .sr-footer-bottom a {
        color: rgba(255, 107, 0, 0.7);
        text-decoration: none;
      }

      .sr-footer-bottom a:hover {
        color: var(--sr-saffron-light, #FF8C33);
      }

      /* WhatsApp Float Button */
      .sr-whatsapp-float {
        position: fixed;
        bottom: clamp(20px, 4vw, 28px);
        right: clamp(20px, 4vw, 28px);
        z-index: 999;
        width: clamp(48px, 8vw, 56px);
        height: clamp(48px, 8vw, 56px);
        border-radius: 50%;
        background: #25D366;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: clamp(22px, 4vw, 26px);
        box-shadow: 0 6px 24px rgba(37,211,102,0.4);
        text-decoration: none;
        transition: transform 0.3s ease;
        animation: sr-pulse 2.5s infinite;
      }

      .sr-whatsapp-float:hover { transform: scale(1.1); }

      /* Scroll to Top Button */
      .sr-scroll-top {
        position: fixed;
        bottom: clamp(20px, 4vw, 28px);
        left: clamp(20px, 4vw, 28px);
        z-index: 999;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: var(--sr-navy, #0D2B5E);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        box-shadow: 0 8px 32px rgba(13,43,94,0.12);
        cursor: pointer;
        opacity: 0;
        transition: all 0.3s ease;
        border: none;
        font-family: sans-serif;
        pointer-events: none;
      }

      .sr-scroll-top.sr-visible {
        opacity: 1;
        pointer-events: all;
      }

      .sr-scroll-top:hover {
        background: var(--sr-saffron, #FF6B00);
        transform: translateY(-2px);
      }

      @keyframes sr-pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.07); }
      }

      /* Responsive */
      @media (max-width: 1024px) {
        .sr-footer-main { grid-template-columns: 1fr 1fr; }
      }

      @media (max-width: 480px) {
        .sr-footer-main { grid-template-columns: 1fr 1fr; gap: clamp(16px, 4vw, 24px); }
        .sr-footer-bottom { flex-direction: column; text-align: center; }
      }

      @media (max-width: 360px) {
        .sr-footer-main { grid-template-columns: 1fr; }
      }
    </style>
  `;

  const HTML = `
    <footer>
      <div class="sr-footer-main">

        <!-- Brand Column -->
        <div class="sr-footer-brand">
          <div class="sr-footer-logo">
            <div class="sr-footer-emblem">
            <img src="images/logo.png" alt="Shri Ram Public School Shiksha Samiti Logo" width="56" height="56" onerror="this.parentElement.textContent='SR'">
            </div>
            <div class="sr-footer-brand-name">
              <h3>Shri Ram Public School</h3>
              <span>Shiksha Samiti - Karahi</span>
            </div>
          </div>
          <p class="sr-footer-desc">
            A registered non-profit educational society in Karahi, Fatehpur Sikri, Agra, U.P.
            Committed to quality education since 2012.
          </p>
          <div class="sr-footer-social">
            <a href="${CONFIG.socials.twitter}" title="Twitter/X" target="_blank" rel="noopener">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a href="${CONFIG.socials.instagram}" title="Instagram" target="_blank" rel="noopener">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="${CONFIG.whatsapp}" title="WhatsApp" target="_blank" rel="noopener">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
            <a href="${CONFIG.socials.facebook}" title="Facebook" target="_blank" rel="noopener">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="sr-footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="index.html#about">About Society</a></li>
            <li><a href="infrastructure.html">Infrastructure</a></li>
            <li><a href="index.html#committee">Committee</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </div>

        <!-- Information -->
        <div class="sr-footer-col">
          <h4>Information</h4>
          <ul>
            <li><a href="index.html#news">News &amp; Notices</a></li>
            <li><a href="index.html#gallery">Photo Gallery</a></li>
            <li><a href="apply-now.html">Admissions</a></li>
            <li><a href="donate.html">Donate</a></li>
            <li><a href="apply-now.html">Apply Now</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="sr-footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:${CONFIG.phone}">Phone: ${CONFIG.phoneDisplay}</a></li>
            <li><a href="mailto:${CONFIG.email}">Email: ${CONFIG.email}</a></li>
            <li><a href="contact.html">Address: ${CONFIG.address}</a></li>
            <li><a href="${CONFIG.whatsapp}" target="_blank" rel="noopener">
              
            </a></li>
          </ul>
        </div>

      </div>

      <hr class="sr-footer-divider">

      <div class="sr-footer-bottom">
        <p> ${CONFIG.year} Shri Ram Public School Shiksha Samiti.</p>
        
      </div>
    </footer>

    <!-- WhatsApp Float -->
    <a href="${CONFIG.whatsapp}" class="sr-whatsapp-float" target="_blank" rel="noopener" title="Chat on WhatsApp">
      <i class="fa-brands fa-whatsapp"></i>
    </a>

    <!-- Scroll to Top -->
    <button class="sr-scroll-top" id="srScrollTop" aria-label="Back to top">↑</button>
  `;

  
  if (!document.getElementById('footer-component-styles')) {
    document.head.insertAdjacentHTML('beforeend', CSS);
  }

  
  const target = document.getElementById('site-footer');
  if (target) {
    target.innerHTML = HTML;
  } else {
 
    document.body.insertAdjacentHTML('beforeend', `<div id="site-footer">${HTML}</div>`);
  }

  
  const scrollBtn = document.getElementById('srScrollTop');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('sr-visible', window.scrollY > 400);
    }, { passive: true });
  }

})();
