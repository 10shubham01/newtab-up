// Task type
export type Task = {
  id: string; // Unique identifier for the task
  name: string; // Name of the task
  listId: string; // ID of the list the task belongs to
  description: string; // Detailed description of the task
  title: string; // Short title of the task
  assignees: string[]; // List of people assigned to the task
};

// List type
export type ListType = {
  id: string; // Unique identifier for the list
  name: string; // Name of the list
  tasks: Task[]; // Array of tasks in the list
};

// Props for the AddTask component
export type AddTaskProps = {
  listDropdown: string[]; // List of available list names for the dropdown
  listName: string; // Default list name for the task
  onSubmit: (task: Task) => void; // Callback to handle task submission
};

// Props for the Task component
export type TaskProps = {
  id: string; // Task ID
  index: number; // Position of the task in the list
  name: string; // Task name
  onClick: () => void; // Callback when the task is clicked
};

// Props for the List component
export type ListProps = {
  id: string; // List ID
  name: string; // List name
  tasks: Task[]; // Array of tasks in the list
  listDropdown: string[]; // List of available list names
  onTaskClick: (task: Task) => void; // Callback when a task is clicked
  onAddOrUpdateTask: (task: Task) => void; // Callback to handle adding or updating tasks
};
