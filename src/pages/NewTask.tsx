import { useState } from "react";

type Task = {
  id: string;
  title: string;
  done: boolean;
};

const InitialState: Task = {
  id: "",
  title: "",
  done: false,
};

function NewTask() {
  const [task, setTask] = useState<Task>(InitialState);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!task.title.trim()) return;

    let errorFormulario = false;
    const regNombre = /^[a-zA-Z\s]{3,16}$/;

    if (!regNombre.test(task.title)) {
      errorFormulario = true;
      console.log("error en formulario");
    } else {
      console.log("formulario enviado");
    }

    // si hay error, salir y no crear la tarea
    if (errorFormulario) return;


    const stored = localStorage.getItem("task");
    const tasks: Task[] = stored ? JSON.parse(stored) : [];

    const newTask: Task = {
      ...task,
      id: Date.now().toString(),
      title: task.title.trim(),
      done: false,
    };

    tasks.push(newTask);
    localStorage.setItem("task", JSON.stringify(tasks));

    setTask(InitialState);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, title: e.target.value });
  };

  return (
    <>
      <h1>New Task</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nueva-tarea">Título</label>
        <input
          id="nueva-tarea"
          name="title"
          value={task.title}
          onChange={handleChange}
          type="text"
        />
        <button type="submit">Crear Tarea</button>
      </form>
    </>
  );
}

export { NewTask };