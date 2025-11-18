import { useEffect, useState } from "react";
import type { Task } from "../types/task";

function TaskPage() {
  const [taskList, setTaskList] = useState<Task[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("task");
    const parsed: Task[] = stored ? JSON.parse(stored) : [];
    setTaskList(parsed);
  }, []);

  function handlerDelete(id: string) {
    const stored = localStorage.getItem("task");
    const tasks: Task[] = stored ? JSON.parse(stored) : [];

    const newTasks = tasks.filter((t) => t.id !== id);

    localStorage.setItem("task", JSON.stringify(newTasks));
    setTaskList(newTasks);
  }

  function handlerComplete(id: string) {
    const stored = localStorage.getItem("task");
    const tasks: Task[] = stored ? JSON.parse(stored) : [];

    const newTasks = tasks.map((t) =>
      t.id === id ? { ...t, done: !t.done } : t
    );

    localStorage.setItem("task", JSON.stringify(newTasks));
    setTaskList(newTasks);
  }

  return (
    <>
      <h1>Task</h1>
      <table>
        <thead>
          <tr>
            <th>Tarea</th>
            <th>Estado</th>
            <th>Acción</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {taskList.length === 0 ? (
            <tr>
              <td colSpan={4}>Sin tareas</td>
            </tr>
          ) : (
            taskList.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.done ? "Completada" : "Pendiente"}</td>
                <td>
                  <button onClick={() => handlerComplete(task.id)}>
                    completar
                  </button>
                </td>
                <td>
                  <button onClick={() => handlerDelete(task.id)}>Borrar</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
}

export { TaskPage as Task };
