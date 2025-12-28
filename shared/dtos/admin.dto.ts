// Admin authentication DTO
export interface AdminLoginRequest {
  password: string;
}

export interface AdminLoginResponse {
  message: string;
  token: string;
}

export interface AdminAuthErrorResponse {
  error: string;
  message: string;
}
