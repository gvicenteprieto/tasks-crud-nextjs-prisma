"use client";
import { useRouter } from "next/navigation";

const Tasks = ({ tasks }) => {
  const router = useRouter();
  return (
    <article className="grid sm:grid-cols-2 md:grid-cols-3 mt-10">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-slate-500 p-5 rounded-md m-5 border border-white hover:border-blue-300 hover:bg-slate-700"
          onClick={() => router.push("/tasks/edit/" + task.id)}
        >
          <h3 className="text-white pl-1 font-bold p-5">{task.title}</h3>
          <p className="mt-10 text-black hover:text-white pl-1 ">{task.description}</p>
          <p className="mt-10 pl-1 text-right b-1 text-blue-300 text-sm">
            {new Date(task.createdAt).toLocaleDateString()}
          </p>
        </div>
      ))}
    </article>
  );
};

export default Tasks;
