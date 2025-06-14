import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export type Task = {
  id: number;
  title: string;
  desc: string;
  createdAt: Date;
};

type InitialTask = {
  value: Task[];
};

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Learn Redux Toolkit",
    desc: "Understand how to create slices and use createAsyncThunk",
    createdAt: new Date("2024-12-01"),
  },
  {
    id: 2,
    title: "Build a Todo App",
    desc: "Use Next.js with Redux to manage tasks",
    createdAt: new Date("2024-12-05"),
  },
  {
    id: 3,
    title: "Study TypeScript",
    desc: "Focus on types, interfaces, and generics",
    createdAt: new Date("2024-12-10"),
  },
];

const initialState: InitialTask = {
  value: initialTasks,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.value.push(action.payload);
    },
    // TODO: delete action
  },
});

export const { addTask } = tasksSlice.actions;
export default tasksSlice;

