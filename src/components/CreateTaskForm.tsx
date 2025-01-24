import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { TaskFormData } from "../types";
import { createTask, getAllUsers } from "../utils/api-calls";

export default function CreateTaskForm() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState<TaskFormData>({
    title: "",
    description: "",
    responsibility: "",
    deadline: "",
    assigned_to: "",
  });

  useEffect(() => {
    const allData = async () => {
      const data = await getAllUsers();
      setUsers(data.tasks);
    };
    allData();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Create task:", formData);
    setFormData({
      title: "",
      description: "",
      responsibility: "medium",
      deadline: "",
      assigned_to: "",
    });
    await createTask(formData);
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
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            required
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            name="description"
            id="description"
            rows={3}
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full"
          />
        </div>
        <div>
          <label
            htmlFor="responsibility"
            className="block text-sm font-medium text-gray-700"
          >
            Responsibility
          </label>
          <textarea
            name="responsibility"
            id="responsibility"
            rows={3}
            value={formData.responsibility}
            onChange={handleChange}
            className="mt-1 block w-full"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div>
            <label
              htmlFor="deadline"
              className="block text-sm font-medium text-gray-700"
            >
              Deadline
            </label>
            <input
              type="datetime-local"
              name="deadline"
              id="deadline"
              required
              value={formData.deadline}
              onChange={handleChange}
              className="mt-1 block w-full"
            />
          </div>

          <div>
            <label
              htmlFor="assigneeId"
              className="block text-sm font-medium text-gray-700"
            >
              Assign To
            </label>
            <select
              name="assigned_to"
              id="assigned_to"
              required
              value={formData.assigned_to}
              onChange={handleChange}
              className="mt-1 block w-full"
            >
              <option value="">Select team member</option>
              {users.map((user) => (
                <option key={user.email} value={user.email}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="btn-primary w-full sm:w-auto bg-blue-500 rounded-lg p-1 text-white"
        >
          Create Task
        </button>
      </div>
    </form>
  );
}
