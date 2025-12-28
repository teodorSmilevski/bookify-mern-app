import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          &copy; {new Date().getFullYear()} Bookify
        </p>
      </div>
    </footer>
  );
};

export default Footer;
