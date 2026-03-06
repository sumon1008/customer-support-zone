import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Tickets from "./components/Tickects/Tickets";
import TaskStatus from "./components/TaskStatus/TaskStatus";
import Footer from "./components/Footer/Footer";

const loadTickets = async () => {
  const res = await fetch("/tickets.json");
  const data = res.json();
  return data;
};
const ticketsPromise = loadTickets();
function App() {
  const [taskList, setTaskList] = useState([]);
  const [resolveList, setResolveList] = useState([]);

  const addToTaskHandle = (task) => {
    const newTask = [...taskList, task];
    setTaskList(newTask);
  };

  const resolveHandle = (resolve) => {
    const newResolveList = [...resolveList, resolve];
    setResolveList(newResolveList);
  };

  const handleRemoveTicket = (t) => {
    const filterTask = taskList.filter((task) => task !== t);
    console.log(filterTask);
    setTaskList(filterTask);
  };

  return (
    <>
      <div className=" bg-gray-100">
        <Navbar></Navbar>

        <div className=" mx-auto max-w-[1200px]">
          <Banner resolveList={resolveList} taskList={taskList}></Banner>
          <div className="flex justify-between ">
            <div className="md:flex-2">
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
            </div>

            <div className="md:flex-1 ms-5">
              <TaskStatus
                handleRemoveTicket={handleRemoveTicket}
                resolveList={resolveList}
                resolveHandle={resolveHandle}
                taskList={taskList}
              ></TaskStatus>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
