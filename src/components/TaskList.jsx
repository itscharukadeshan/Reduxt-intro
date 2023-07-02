/** @format */

import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../actions";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className='tasklist'>
      <div className='display-tasks'>
        <h3 className='mt-4 pl-4 font-serif text-2xl'>Your tasks</h3>
        <ul className='flex flex-col gap-2'>
          {tasks.map((task) => (
            <li className='task ml-4 text-xl font-mono mt-4' key={task.id}>
              {task.text}
              <button
                className='ml-4 btn btn-outline btn-warning btn-sm'
                onClick={() => handleDelete(task.id)}>
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
