export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export const validatePhoneNumber = (phoneNumber: string): ValidationResult => {
  if (!phoneNumber || phoneNumber.trim() === "") {
    return {
      isValid: false,
      error: "Phone number is required",
    };
  }

  const trimmed = phoneNumber.trim();
  const length = trimmed.length;

  if (length < 13 || length > 14) {
    return {
      isValid: false,
      error: "Phone number must be 13-14 characters (including +389)",
    };
  }

  if (!trimmed.startsWith("+389")) {
    return {
      isValid: false,
      error: "Phone number must start with +389",
    };
  }

  const afterPrefix = trimmed.substring(4);
  const digitsOnly = afterPrefix.replace(/\s/g, "");

  if (!/^\d+$/.test(digitsOnly)) {
    return {
      isValid: false,
      error: "Phone number must contain only digits after +389",
    };
  }

  if (digitsOnly.length < 8 || digitsOnly.length > 9) {
    return {
      isValid: false,
      error: "Phone number must have 8-9 digits after +389",
    };
  }

  return { isValid: true };
};

export const validateName = (name: string): ValidationResult => {
  if (!name || name.trim() === "") {
    return {
      isValid: false,
      error: "Name is required",
    };
  }

  const trimmed = name.trim();
  const length = trimmed.length;

  if (length < 2) {
    return {
      isValid: false,
      error: "Name must be at least 2 characters",
    };
  }

  if (length > 30) {
    return {
      isValid: false,
      error: "Name must be maximum 30 characters",
    };
  }

  if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(trimmed)) {
    return {
      isValid: false,
      error: "Name must contain only letters, spaces, hyphens, and apostrophes",
    };
  }

  return { isValid: true };
};
