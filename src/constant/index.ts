export const TASK = [
  {
    name: "Backlog",
    id: "backlog",
    tasks: [
      {
        name: "Set up project repository",
        listId: "backlog",
        id: "task_1",
        description:
          "Initialize the GitHub repository for the project. Add a README and set up initial branch structure.",
        title: "Project Repository Setup",
        tags: ["setup", "enhancement","Urgent"],
      },
      {
        name: "Research task management libraries",
        listId: "backlog",
        id: "task_2",
        description:
          "Evaluate libraries like React DnD, react-beautiful-dnd, and others for implementing drag-and-drop functionality.",
        title: "Library Research",
        tags: ["research"],
      },
      {
        name: "Design wireframe for task board",
        listId: "backlog",
        id: "task_3",
        description:
          "Design the wireframe for the task board layout, including task cards, drag-and-drop areas, and filters.",
        title: "Wireframe Design",
        tags: ["UI", "design"],
      },
      {
        name: "Review task board requirements",
        listId: "backlog",
        id: "task_4",
        description:
          "Review project requirements and user stories for task management features, prioritizing MVP tasks.",
        title: "Requirements Review",
        tags: ["critical"],
      },
    ],
  },
  {
    name: "Todo",
    id: "to_do",
    tasks: [
      {
        name: "Create task card component",
        listId: "to_do",
        id: "task_5",
        description:
          "Design and implement a reusable card component to display individual tasks. Include title, tags, and description preview.",
        title: "Task Card Component",
        tags: ["UI", "component"],
      },
      {
        name: "Setup Tailwind CSS",
        listId: "to_do",
        id: "task_6",
        description:
          "Integrate Tailwind CSS into the project for rapid and consistent UI development.",
        title: "Tailwind Setup",
        tags: ["setup", "UI"],
      },
      {
        name: "Setup initial routing",
        listId: "to_do",
        id: "task_7",
        description:
          "Configure React Router for basic routing of task boards, task detail pages, and user profiles.",
        title: "Routing Setup",
        tags: ["setup", "enhancement"],
      },
      {
        name: "Create reusable button component",
        listId: "to_do",
        id: "task_8",
        description:
          "Build a reusable button component using Tailwind CSS. It should support various states (hover, active, disabled).",
        title: "Button Component",
        tags: ["UI", "component"],
      },
    ],
  },
  {
    name: "In Progress",
    id: "in_progress",
    tasks: [
      {
        name: "Implement drag-and-drop",
        listId: "in_progress",
        id: "task_9",
        description:
          "Use React DnD to allow tasks to be dragged between lists. Ensure smooth animations and state updates.",
        title: "Drag and Drop",
        tags: ["UI", "feature"],
      },
      {
        name: "Develop list components",
        listId: "in_progress",
        id: "task_10",
        description:
          "Create a component for task lists that supports adding, editing, and deleting tasks.",
        title: "List Component",
        tags: ["UI", "component"],
      },
      {
        name: "Implement task filtering",
        listId: "in_progress",
        id: "task_11",
        description:
          "Add filtering functionality to sort tasks by priority, due date, or assignee.",
        title: "Task Filtering",
        tags: ["feature", "enhancement"],
      },
    ],
  },
  {
    name: "Review",
    id: "review",
    tasks: [
      {
        name: "Code review for task card component",
        listId: "review",
        id: "task_12",
        description:
          "Review the code for the task card component for consistency, performance, and adherence to coding standards.",
        title: "Task Card Review",
        tags: ["code review"],
      },
      {
        name: "Review drag-and-drop implementation",
        listId: "review",
        id: "task_13",
        description:
          "Ensure the drag-and-drop functionality is bug-free and has smooth animations.",
        title: "Drag and Drop Review",
        tags: ["bug", "UI"],
      },
    ],
  },
  {
    name: "Done",
    id: "done",
    tasks: [
      {
        name: "Setup project environment",
        listId: "done",
        id: "task_14",
        description:
          "Configured the project with TypeScript, React, and Tailwind CSS. Verified that the initial setup works as expected.",
        title: "Project Setup Complete",
        tags: ["setup"],
      },
      {
        name: "Install project dependencies",
        listId: "done",
        id: "task_15",
        description:
          "Installed the necessary dependencies including React, React DOM, TypeScript, Tailwind CSS, and React Router.",
        title: "Dependencies Installed",
        tags: ["setup"],
      },
      {
        name: "Initial deployment to Vercel",
        listId: "done",
        id: "task_16",
        description:
          "Deployed the project to Vercel for preview and testing. Set up basic build and deploy configurations.",
        title: "Vercel Deployment",
        tags: ["deployment"],
      },
    ],
  },
];
