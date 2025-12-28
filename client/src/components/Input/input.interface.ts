import type { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  prefix?: string;
  numbersOnly?: boolean;
}
