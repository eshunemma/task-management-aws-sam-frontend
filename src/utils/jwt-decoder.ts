import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  sub: string;
  email: string;
  name: string;
  [key: string]: any;
}

export const verifyToken = (): DecodedToken | null => {
  const token = localStorage.getItem("id_token");
  if (token) {
    const decoded = jwtDecode<DecodedToken>(token);
    return decoded;
  }
  return null;
};
