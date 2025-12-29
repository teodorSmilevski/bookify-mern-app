import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h3 className="footer__title">📅 Bookify</h3>
          <p className="footer__text">
            Your simple appointment booking solution
          </p>
        </div>
        
        <div className="footer__section">
          <h4 className="footer__subtitle">Working Hours</h4>
          <p className="footer__text">Monday - Saturday</p>
          <p className="footer__text">10:00 AM - 6:00 PM</p>
          <p className="footer__text footer__text--closed">⚠️ Closed on Sundays</p>
        </div>
        
        <div className="footer__section">
          <h4 className="footer__subtitle">Quick Links</h4>
          <p className="footer__text">📌 Book Appointment</p>
          <p className="footer__text">📞 Contact Support</p>
          <p className="footer__text">ℹ️ How It Works</p>
        </div>
      </div>
      
      <div className="footer__bottom">
        <p className="footer__copyright">
          © {new Date().getFullYear()} Bookify. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
