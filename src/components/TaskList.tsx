import { format } from "date-fns";
import { tasks } from "../data/mockData";
import {
  getAllTasks,
  getUserTasks,
  updateTasksStatus,
} from "../utils/api-calls";
import { useEffect, useState } from "react";
import { User } from "./Dashboard";

const statusColors: Record<string, string> = {
  expired: "bg-gray-100 text-gray-800",
  open: "bg-purple-100 text-purple-800",
  completed: "bg-green-100 text-green-800",
};
export const TaskList = () => {
  const [Tasks, SetTasks] = useState([]);
  const user = JSON.parse(localStorage.getItem("user") || "{}") as User;
  const role = user["custom:role"];
  useEffect(() => {
    const allData = async () => {
      if (role === "admin") {
        const data = await getAllTasks();
        SetTasks(data.tasks);
      } else {
        const userTasks = await getUserTasks(user.email);
        SetTasks(userTasks.tasks);
      }
    };
    allData();
  }, []);

  return (
    <div className="card">
      <div className="divide-y divide-gray-200">
        {Tasks.map((task: any) => (
          <div key={task.task_id} className="py-4 first:pt-0 last:pb-0">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 truncate">
                  {task.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{task.description}</p>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span>{task.responsibility || "Null"}</span>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      statusColors[task.status]
                    }`}
                  >
                    {task.status.replace("_", " ")}
                  </span>
                  <span className="text-sm text-gray-500">
                    Due: {format(new Date(task.deadline), "MMM d, yyyy")}
                  </span>
                  <span className="text-sm text-gray-500">
                    Assigned To: {task.assigned_to}
                  </span>
                </div>
              </div>

              <div className="ml-4">
                <select
                  disabled={
                    task.status === "expired" && role === "admin" ? false : true
                  }
                  id={task.task_id}
                  defaultValue={"expired"}
                  className="block w-full sm:w-auto"
                  value={task.status}
                  onChange={async (e) => {
                    await updateTasksStatus(task.task_id, e.target.value);
                    location.reload();
                  }}
                >
                  <option value="open">Open</option>
                  <option value="completed">Completed</option>
                  <option value="expired">Expired</option>
                </select>
              </div>
            </div>
          </div>
        ))}
        {tasks.length === 0 && (
          <div className="py-4 text-center text-gray-500">No tasks found</div>
        )}
      </div>
    </div>
  );
};
