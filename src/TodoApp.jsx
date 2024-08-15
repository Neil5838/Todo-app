// import {FaPlus} from 'react-icons/fa';
import { useState } from "react";
import { FaHouse } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";


function TodoApp() {
  const [inputData, setInputData] = useState('');
  const [tasks, setTasks] = useState([]);
  const [fav, setFav] = useState(false);

  const handleInput = (e) => {
    setInputData(e.target.value);
  };

  const handleTasks = () => {
    const trimmedInput = inputData.trim();
    if(trimmedInput) {
        setTasks([trimmedInput, ...tasks]);
    }
    setInputData("");
    document.getElementById('taskInput').focus();
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((_, index) => index !== id));
  }

  const toggleFav = () => {
    setFav(!fav);
  }


  return (
    <div className="p-3">
      <div className="max-w-4xl mx-auto mt-1 sm:mt-6 bg-gray-700  rounded-lg p-3 sm:p-12">
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <FaHouse className="text-title" />
            <h1 className="text-title font-semibold">Tasks</h1>
          </div>

          <ul>
            {tasks.map((task, index) => {
                return <li key={index} className="bg-gray-600 py-2 px-3 sm:py-3 sm:px-4 rounded-md mb-3 flex justify-between">
                    <p>{task}</p>
                    <span className="flex gap-2">
                    <button onClick={() => deleteTask(index)}><FaTrashCan className="text-[0.80rem]"/></button>
                    <button onClick={toggleFav}><FaStar className={`${fav ? 'text-orange-300' : 'text-white'} text-basis`}/></button>
                    </span>
                </li>
            })}
          </ul>

          <div className="pt-20 sm:flex items-center justify-between gap-5">
            <input
              type="text"
              id="taskInput"
              value={inputData}
              onChange={handleInput}
              placeholder="Add a task"
              className="w-full sm:basis-4/5 py-2 px-4 rounded-md border-none bg-gray-600"
            />
            <button
              onClick={handleTasks}
              className="bg-green-600 w-full sm:basis-1/5 mt-2 sm:m-0 py-2 px-4 block rounded-md hover:bg-green-700 transition duration-300 ease-in-out"
              type="button"
              aria-label="Add task"
            >
              Add task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoApp;
