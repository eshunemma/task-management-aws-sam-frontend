export interface User {
  id: string;
  fullName: string;
  email: string;
  role: "admin" | "team_member";
}

export interface Task {
  id: string;
  title: string;
  description: string;
  responsibility: string;
  status: "pending" | "in_progress" | "completed";
  deadline: string;
  assigneeId: string;
}

export interface TaskFormData {
  title: string;
  description: string;
  responsibility: string;
  deadline: string;
  assigned_to: string;
}
