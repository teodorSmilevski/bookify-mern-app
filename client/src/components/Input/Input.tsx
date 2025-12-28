import type { InputProps } from "./input.interface";
import "./Input.scss";

const Input = ({
  label,
  id,
  prefix,
  numbersOnly,
  value,
  onChange,
  ...props
}: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;

    if (prefix && !newValue.startsWith(prefix)) {
      newValue = prefix;
    }

    if (numbersOnly && prefix) {
      const afterPrefix = newValue.slice(prefix.length);
      const digitsOnly = afterPrefix.replace(/\D/g, "");
      newValue = prefix + " " + digitsOnly;
    }

    const syntheticEvent = {
      ...e,
      target: { ...e.target, value: newValue },
    } as React.ChangeEvent<HTMLInputElement>;

    onChange?.(syntheticEvent);
  };

  const inputClass = `input__field ${
    prefix ? "input__field--with-prefix" : ""
  }`;

  return (
    <div className="input">
      <label className="input__label" htmlFor={id}>
        {label}
      </label>

      <input
        className={inputClass}
        id={id}
        value={value}
        onChange={handleChange}
        {...props}
        maxLength={prefix ? 14 : 30}
      />
    </div>
  );
};

export default Input;
