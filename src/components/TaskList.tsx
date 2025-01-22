import { format } from "date-fns";
import { tasks } from "../data/mockData";

const priorityColors: Record<string, string> = {
  low: "bg-blue-100 text-blue-800",
  medium: "bg-yellow-100 text-yellow-800",
  high: "bg-red-100 text-red-800",
};

const statusColors: Record<string, string> = {
  pending: "bg-gray-100 text-gray-800",
  in_progress: "bg-purple-100 text-purple-800",
  completed: "bg-green-100 text-green-800",
};

export const TaskList = () => {
  return (
    <div className="card">
      <div className="divide-y divide-gray-200">
        {tasks.map((task) => (
          <div key={task.id} className="py-4 first:pt-0 last:pb-0">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 truncate">
                  {task.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{task.description}</p>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      priorityColors[task.priority]
                    }`}
                  >
                    {task.priority}
                  </span>
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
                </div>
              </div>

              <div className="ml-4">
                <select
                  className="block w-full sm:w-auto"
                  value={task.status}
                  onChange={(e) => {
                    console.log("Update task status:", task.id, e.target.value);
                  }}
                >
                  <option value="pending">Pending</option>
                  <option value="in_progress">In Progress</option>
                  <option value="completed">Completed</option>
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
