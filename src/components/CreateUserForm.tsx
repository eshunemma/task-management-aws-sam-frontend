import { useState, ChangeEvent, FormEvent } from "react";
import { UserFormData } from "../types";
import { createUser } from "../utils/api-calls";

export default function CreateUserForm({ bright }: { bright: () => void }) {
  const [formData, setFormData] = useState<UserFormData>({
    name: "",
    role: "",
    email: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Create task:", formData);
    await createUser(formData);
    setFormData({
      name: "",
      email: "",
      role: "",
    });
    bright();
    location.reload();
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const teamMembers = users.filter((user) => user.role === "team_member");

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Enter Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Enter Email
          </label>
          <input
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700"
            >
              Role
            </label>
            <select
              name="role"
              id="role"
              required
              value={formData.role}
              onChange={handleChange}
              className="mt-1 block w-full"
            >
              <option value="">Select Role</option>
              <option key={"admin"} value={"admin"}>
                Admin
              </option>
              <option key={"team_member"} value={"team_member"}>
                Team Member
              </option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="btn-primary w-full sm:w-auto bg-blue-500 rounded-lg p-1 text-white"
        >
          Register User
        </button>
      </div>
    </form>
  );
}
