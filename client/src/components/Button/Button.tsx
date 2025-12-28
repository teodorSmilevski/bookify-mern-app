import type { ButtonProps } from "./button.interface";
import "./Button.scss";

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
};

export default Button;
