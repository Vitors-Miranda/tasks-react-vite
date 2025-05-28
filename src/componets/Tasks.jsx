import { ChevronsRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./button";

function Tasks({ tasks, onTaskClick, deleteTask }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow max-h-[500px]  overflow-auto">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            className={`bg-slate-400 text-white p-2 rounded-md w-full text-left 
                    ${task.isCompleted && "line-through"}`}
            onClick={() => onTaskClick(task.id)}
          >
            {task.title}
          </button>
          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronsRightIcon />
          </Button>
          <Button onClick={() => deleteTask(task.id)}>
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
