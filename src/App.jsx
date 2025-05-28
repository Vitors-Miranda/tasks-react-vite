import Tasks from "./componets/Tasks";
import AddTask from "./componets/AddTask";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  let [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  //A função do UseEffect é alterada sempre que os valores da lista forem modificados
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //Essa função é executada somente na primeira vez que o usuário interagir
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setTasks(data);
    };
  fetchTasks()
  }, []);
  function OnTaskClick(taskId) {
    let newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        //change task
        //... para retornar tudo igual estava antes
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }
  function DeleteTask(taskId) {
    let newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }
  function OnAddTask(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center  p-6">
      <div className="w-[500px] space-y-4">
        {/* 30px */}
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <AddTask onAddTask={OnAddTask} />
        <Tasks
          tasks={tasks}
          onTaskClick={OnTaskClick}
          deleteTask={DeleteTask}
        />
      </div>
    </div>
  );
}
export default App;
