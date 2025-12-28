import { useNavigate } from "react-router-dom";

const LoginPrompt = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page__login-prompt">
      <p>
        Already have an account?
        <button
          className="home-page__login-link"
          onClick={() => navigate("/login")}
        >
          Login here
        </button>
      </p>
    </div>
  );
};

export default LoginPrompt;
