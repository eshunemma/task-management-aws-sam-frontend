import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { TaskList } from "./TaskList";
import CreateTaskForm from "./CreateTaskForm";
import CreateUserForm from "./CreateUserForm";
import { getNameInitials } from "../utils/helpers";

interface User {
  name: string;
}

export const Dashboard: FC = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}") as User;

  const signOut = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("user");
    navigate("/login");
  };
  const role = "admin";

  return (
    <div className="min-h-screen bg-gray-50 w-100">
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-indigo-600">Taskify</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-sm font-medium text-indigo-600">
                    {getNameInitials(user?.name)}
                  </span>
                </span>
                <span className="text-sm font-medium text-gray-700">
                  {user?.name}
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                  Admin
                </span>
              </div>
              <button
                onClick={() => signOut()}
                className="bg-indigo-600 text-white rounded-lg px-2.5 py-0.5 hover:text-red-600"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Create New Task
            </h2>
            <div className={`card ${role != "admin" ? "hidden" : ""}`}>
              <CreateTaskForm />
            </div>
            <div className={`card ${role != "admin" ? "hidden" : ""}`}>
              <CreateUserForm />
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4"></h2>
            <TaskList />
          </div>
        </div>
      </main>
    </div>
  );
};
