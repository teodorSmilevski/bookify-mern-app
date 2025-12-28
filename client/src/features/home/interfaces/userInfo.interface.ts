export interface UserInfoSectionProps {
  name: string;
  phoneNumber: string;
  onNameChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
}
