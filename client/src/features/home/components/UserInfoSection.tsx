import Input from "../../../components/Input/Input";
import type { UserInfoSectionProps } from "../interfaces/userInfo.interface";

const UserInfoSection = ({
  name,
  phoneNumber,
  onNameChange,
  onPhoneChange,
}: UserInfoSectionProps) => {
  return (
    <div className="home-page__section">
      <h2 className="home-page__section-title">Your Information</h2>
      <div className="home-page__fields">
        <Input
          label="Name"
          id="home-name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
        />
        <Input
          label="Phone Number"
          id="home-phone"
          type="tel"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(e) => onPhoneChange(e.target.value)}
          prefix="+389"
          numbersOnly
        />
      </div>
    </div>
  );
};

export default UserInfoSection;
