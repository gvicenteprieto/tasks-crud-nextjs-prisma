"use client";
import { useRouter } from "next/navigation";
import NavbarAside from "@/components/NavbarAside/NavbarAside";
import HeaderPages from "@/components/HeaderPages/HeaderPages";
import { useEffect, useState } from "react";
import TaskForm from "@/components/Tasks/TaskForm";

function CreatePage({ params }) {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (params.id) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      router.push("/tasks");
    } else {
      const res = await fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      router.push("/tasks");
    }
    router.refresh();
    //router.push("/tasks");
  };

  const handleDelete = async () => {
    const res = await fetch(`/api/tasks/${params.id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    router.push("/tasks");
    router.refresh();
  };

  return (
    <main className="flex flex-col items-center justify-between p-10">
      <HeaderPages
        title={params.id == undefined ? "create task" : "edit task"}
      />
      <section className="container mx-auto flex justify-center items-center">
        <TaskForm
          handleSubmit={handleSubmit}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          params={params}
          handleDelete={handleDelete}
        />
      </section>
      <NavbarAside />
    </main>
  );
}

export default CreatePage;
