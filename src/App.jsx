/** @format */

import Task from "./components/Task";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className='App'>
      <div className='bg-base-300'>
        <div className='flex flex-col justify-center px-4 py-16 bg-base-200'>
          <Task />
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
