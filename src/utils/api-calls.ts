import axios from "axios";
const url = `https://41zyffsk54.execute-api.eu-central-1.amazonaws.com/Prod`;

export const getAllTasks = async () => {
  try {
    const response = await axios.get(`${url}/tasks`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
export const createTask = async (taskData: any) => {
  try {
    const response = await axios.post(`${url}/tasks`, taskData);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
  }
};
export const getUserTasks = async (email: string) => {
  try {
    const response = await axios.get(`${url}/user-tasks/${email}`);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
  }
};
export const updateTasksStatus = async (taskId: string, status: string) => {
  try {
    const response = await axios.put(
      `${url}/update-status
`,
      {
        task_id: taskId,
        status,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
  }
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${url}/users`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};