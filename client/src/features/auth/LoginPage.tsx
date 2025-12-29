import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import "./LoginPage.scss";

const LoginPage = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const [name, setName] = useState(user?.name || "");
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || "+389");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!name || phoneNumber === "+389") {
      alert("Please fill in all fields");
      return;
    }

    setUser({ name, phoneNumber });
    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="login-page__container">
        <h1 className="login-page__title">Save your information</h1>
        <form className="login-page__form" onSubmit={handleSubmit}>
          <Input
            label="Name"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Phone Number"
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            prefix="+389"
            numbersOnly
          />
          <Button type="submit">Save</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
