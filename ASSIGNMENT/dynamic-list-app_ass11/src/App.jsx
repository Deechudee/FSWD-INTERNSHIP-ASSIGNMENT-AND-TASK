import { useState } from "react";
import "./App.css";
function App() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  

  return (
  <div className="container">

    <h1>Task List</h1>

    <div className="input-section">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task..."
      />
      <button onClick={addTask}>Add</button>
    </div>

    <ul className="task-list">
      {tasks.map((t, index) => (
        <li key={index} className="task-item">
          <span>{t}</span>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>

  </div>
  );
}
export default App;