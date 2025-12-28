import { Link } from "react-router-dom";
import "./NotFoundPage.scss";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-page__container">
        <h1 className="not-found-page__title">404</h1>
        <p className="not-found-page__description">Page not found</p>
        <Link to="/" className="not-found-page__link">
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
