import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Tickets from "./components/Tickects/Tickets";
import TaskStatus from "./components/TaskStatus/TaskStatus";

const loadTickets = async () => {
  const res = await fetch("/tickets.json");
  const data = res.json();
  return data;
};

function App() {
  const [taskList, setTaskList] = useState([]);

  const addToTaskHandle = (task) => {
    console.log("add task", task);
    const newTask = [...taskList, task];
    setTaskList(newTask);
  };

  const ticketsPromise = loadTickets();

  return (
    <>
      <div className=" bg-gray-100">
        <Navbar ></Navbar>

        <div className=" mx-auto max-w-[1200px]">
          <Banner taskList={taskList}></Banner>
          <div className="flex justify-between my-5 text-2xl font-semibold">
            <h1>Customer Tickets</h1>
            <h1>Task Status</h1>
          </div>
          <div className="flex gap-4">
            <Suspense
              fallback={
                <span className="loading loading-spinner text-error"></span>
              }
            >
              <Tickets
                addToTaskHandle={addToTaskHandle}
                ticketsPromise={ticketsPromise}
              ></Tickets>
            </Suspense>
            <TaskStatus></TaskStatus>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
