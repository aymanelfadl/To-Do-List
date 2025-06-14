import { AppDispatch, RootState } from "@/store";
import { addTask, Task } from "@/store/features/tasksSlice";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

let id = 99;

const Home = () => {
  const title = useRef<HTMLInputElement>(null);
  const des = useRef<HTMLInputElement>(null);

  const tasks = useSelector((state: RootState) => state.tasks.value);
  const dispatch = useDispatch<AppDispatch>();

  const onAddingTask = () => {
    const titleValue: string | undefined = title.current?.value;
    const descValue: string | undefined = des.current?.value;

    if (!titleValue || !descValue) {
      alert("Please fill in both fields.");
      return;
    }

    const task: Task = {
      id: id++,
      title: titleValue,
      desc: descValue,
      createdAt: new Date(),
    };

    dispatch(addTask(task));

    if (title.current) title.current.value = "";
    if (des.current) des.current.value = "";
  };

  const onDeleteTask = () => {
    // TODO: romeve thinigi
    console.log("delete logic here");
  };

  return (
    <div className="m-4">
      <div className="flex flex-row justify-center gap-5 mb-6">
        <input
          type="text"
          placeholder="Title"
          className="border p-2 rounded"
          ref={title}
        />
        <input
          type="text"
          placeholder="Description"
          className="border p-2 rounded"
          ref={des}
        />
        <button
          className="bg-green-500 text-white px-6 py-3 rounded cursor-pointer"
          onClick={onAddingTask}
        >
          Add Task
        </button>
        <button
          className="bg-red-500 text-white px-6 py-3 rounded cursor-pointer"
          onClick={onDeleteTask}
        >
          Delete Task
        </button>
      </div>

      <div className="grid grid-cols-4 p-4 w-full gap-3">
        {tasks.map((task) => (
          <div
            className="border-2 border-gray-300 bg-gray-300 rounded-md p-4"
            key={task.id}
          >
            <h1 className="text-xl font-extrabold my-4 text-black">
              {task.title}
            </h1>
            <p className="my-4 text-black">{task.desc}</p>
            <small className="my-4 text-red-400">
              {task.createdAt.toString()}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
