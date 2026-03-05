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
  const [resolveList,setResolveList]=useState([])

  const addToTaskHandle = (task) => {
    
    const newTask = [...taskList, task];
    setTaskList(newTask);
  };
   
  const resolveHandle=(resolve)=>{
   const newResolveList=[...resolveList,resolve]
   setResolveList(newResolveList)
  }

  const ticketsPromise = loadTickets();
  return (
    <>
      <div className=" bg-gray-100">
        <Navbar></Navbar>

        <div className=" mx-auto max-w-[1200px]">
          <Banner resolveList={resolveList} taskList={taskList}></Banner>
          <div className="flex justify-between my-5 text-2xl font-semibold">
            <h1>Customer Tickets</h1>
            <h1>Task Status</h1>
          </div>
          <div className="flex gap-4  justify-between">
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
            <TaskStatus  resolveList={resolveList} resolveHandle={resolveHandle} taskList={taskList}></TaskStatus>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
