import { FC, useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export const Login: FC = () => {
  const navigate = useNavigate();

  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    navigate(
      "https://eu-central-1gyd08cruk.auth.eu-central-1.amazoncognito.com/login?client_id=6r1ss73g31giunk4qa93unkqdk&response_type=token&scope=email+openid+profile&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fdashboard"
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="card space-y-8">
          <div>
            <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">
              Task Management System
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Sign in to your account
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="rounded-md bg-red-50 p-4">
                <div className="text-sm text-red-700">{error}</div>
              </div>
            )}
            <div>
              <button
                type="submit"
                className="btn-primary w-full bg-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
