import React from "react";

const TaskStatus = ({ taskList, resolveHandle,resolveList }) => {
  return (
    <div>
      <div>
        {taskList.map((status) => (
          <div className="card card-border bg-base-100 mb-4">
            <div className="card-body">
              <h2 className="card-title">{status.title}</h2>
              <div className="card-actions justify-center">
                <button
                  onClick={() => resolveHandle(status)}
                  className="btn text-white bg-green-500 w-full"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div >
      <h1 className="text-center text-2xl">Resolve Status</h1>

      <div>
        {
            resolveList.map(resolve=>
               <div className="card card-border p-4 my-3  bg-base-100">
                      {resolve.title}
               </div>
               )
        }
      </div>
    </div>
  );
};

export default TaskStatus;
