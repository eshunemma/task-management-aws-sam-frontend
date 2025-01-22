import { useState, ChangeEvent, FormEvent } from "react";
import { TaskFormData } from "../types";
import { users } from "../data/mockData";

export default function CreateTaskForm() {
  const [formData, setFormData] = useState<TaskFormData>({
    title: "",
    description: "",
    priority: "medium",
    deadline: "",
    assigneeId: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Create task:", formData);
    setFormData({
      title: "",
      description: "",
      priority: "medium",
      deadline: "",
      assigneeId: "",
    });
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

  const teamMembers = users.filter((user) => user.role === "team_member");

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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div>
            <label
              htmlFor="priority"
              className="block text-sm font-medium text-gray-700"
            >
              Priority
            </label>
            <select
              name="priority"
              id="priority"
              required
              value={formData.priority}
              onChange={handleChange}
              className="mt-1 block w-full"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

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
              name="assigneeId"
              id="assigneeId"
              required
              value={formData.assigneeId}
              onChange={handleChange}
              className="mt-1 block w-full"
            >
              <option value="">Select team member</option>
              {teamMembers.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.fullName}
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
