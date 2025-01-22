// Mock data for development
export const users = [
  {
    id: 1,
    email: 'admin@example.com',
    fullName: 'Admin User',
    role: 'admin',
  },
  {
    id: 2,
    email: 'john@example.com',
    fullName: 'John Doe',
    role: 'team_member',
  },
  {
    id: 3,
    email: 'jane@example.com',
    fullName: 'Jane Smith',
    role: 'team_member',
  },
];

export const tasks = [
  {
    id: 1,
    title: 'Site Inspection',
    description: 'Conduct safety inspection at construction site A',
    status: 'pending',
    priority: 'high',
    deadline: '2024-02-01T10:00:00Z',
    assigneeId: 2,
    createdBy: 1,
    createdAt: '2024-01-19T08:00:00Z',
  },
  {
    id: 2,
    title: 'Equipment Maintenance',
    description: 'Perform routine maintenance on heavy machinery',
    status: 'in_progress',
    priority: 'medium',
    deadline: '2024-01-25T16:00:00Z',
    assigneeId: 3,
    createdBy: 1,
    createdAt: '2024-01-19T09:00:00Z',
  },
  {
    id: 3,
    title: 'Training Session',
    description: 'Conduct safety training for new team members',
    status: 'completed',
    priority: 'low',
    deadline: '2024-01-20T14:00:00Z',
    assigneeId: 2,
    createdBy: 1,
    createdAt: '2024-01-18T10:00:00Z',
  },
];