import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { verifyToken } from "../utils/jwt-decoder";

export const LandingPage: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const existingToken = localStorage.getItem("access_token");

    if (existingToken) {
      navigate("/landing");
      return;
    }

    const extractTokens: any = () => {
      const hashFragment = window.location.hash.substring(1);
      const params = new URLSearchParams(hashFragment);
      const accessToken = params.get("access_token");
      const idToken = params.get("id_token");

      if (accessToken) localStorage.setItem("access_token", accessToken);
      if (idToken) localStorage.setItem("id_token", idToken);

      return { accessToken, idToken };
    };

    extractTokens();
    const user = verifyToken();

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/landing");
    } else {
      console.error("Invalid token");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 w-100">
      Loading...................
    </div>
  );
};
