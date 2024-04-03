import { prisma } from "@/libs/prisma";
import NavbarAside from "@/components/NavbarAside/NavbarAside";
import HeaderPages from "@/components/HeaderPages/HeaderPages";
import Tasks from "@/components/Tasks/Tasks";

async function getTasks() {
  return await prisma.task.findMany();
}
export const dynamic = "force-dynamic";
async function TaskPage() {
  const tasks = await getTasks();
  return (
    <main className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-between p-10">
      <HeaderPages title={"tasks"} />
      <section className="container mx-auto flex justify-center items-center">
        {tasks.length === 0 ? (
          <div>
            <h2 className="text-3xl font-bold"> No Tasks Records</h2>
          </div>
        ) : (
          <Tasks tasks={tasks} />
        )}
      </section>
      <NavbarAside />
    </main>
  );
}

export default TaskPage;
