import { useState } from "react";
import { FaHouse } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

function Todo() {
    const [inputTask, setInputTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [isFav, setFav] = useState(false);

    const handleInput = (e) => {
        setInputTask(e.target.value);
    }

    const handleTasks = () => {
        const trimmedInputTask = inputTask.trim();
        if(trimmedInputTask) {
            setTasks([trimmedInputTask, ...tasks]);
        }

        document.getElementById('task').focus();

        setInputTask('');
    }

    const removeTask = (id) => {
        setTasks(tasks.filter((_, index) => index !== id))
    }

    const handleFav = (id) => {
      const favTasks = tasks[id];
      const remainingTasks = (tasks.filter((_, index) => index !== id))      
      setTasks([favTasks, ...remainingTasks]);

      setFav(!isFav);
    }

    

    const formattedDate = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
  return (
    <div className="px-3 sm:px-8 py-3 sm:py-8">
      <div className="min-h-screen max-w-6xl mx-auto">
        <div>
          <div className="fixed top-0 left-0 right-0 px-3 sm:px-4 py-3 sm:py-4 bg-[#262626]">
            <span className="flex flex-col sm:flex-row sm:items-center justify-start sm:justify-between max-w-6xl mx-auto">
                <div className="flex items-center space-x-3">
                    <FaHouse className="text-fluid-title" />
                    <p className="text-fluid-title">Tasks</p>
                </div>
                <span className="flex items-center space-x-2 ml-0.5">
                  <FaCalendarDays/>
                  <p>{new Date().toLocaleString('en-US', formattedDate)}</p>
                </span>
            </span>
          </div>
          <ul className="pt-[78px] pb-14">
            {tasks.map((task, index) => {
                return <div key={index} className="bg-gray-600 py-2 px-3 rounded-md text-fluid-body mb-4 flex justify-between items-center">
                    <p>{task}</p>
                    <span className="flex items-center space-x-3 sm:space-x-4">
                      <button className="hover:text-red-500" onClick={() => removeTask(index)}><FaTrashCan/></button>
                      <button onClick={() => handleFav(index)} className={`${isFav ? 'text-orange-500' : 'text-white'} text-xl`}><FaStar/></button>  
                    </span>
                </div>
            })}
          </ul>
         <div className="fixed bottom-0 left-0 right-0 px-3 sm:px-4 py-3 sm:py-6 bg-[#262626]">
            <div className="sm:flex justify-between gap-5 items-center max-w-6xl mx-auto">
                <input
                className="w-full mb-3 sm:mb-0 sm:basis-4/5 text-fluid-body rounded-md py-2 px-3 transition duration-300 hover:bg-neutral-700 bg-neutral-700"
                type="text"
                name="task"
                id="task"
                placeholder="Try typing 'Pay utilities bill by Friday 6pm'"
                value={inputTask}
                onChange={handleInput}

                />
                <button onClick={handleTasks} className="w-full sm:basis-1/5 bg-neutral-500 text-fluid-body rounded-md py-2 px-3 transition duration-300 hover:bg-green-700">
                Add task
                </button>
            </div>
         </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
