import React from "react";

const TaskStatus = ({
  taskList,
  resolveHandle,
  resolveList,
  handleRemoveTicket,
}) => {
  
  return (
    <div>
      <h1 className="font-semibold text-2xl mb-3">Task Status</h1>
      <div>
        {taskList.map((status) => (
          <div key={status.id} className="card card-border bg-base-100 mb-4 ">
            <div className="card-body">
              <h2 className="card-title">{status.title}</h2>
              <div className="card-actions justify-center">
                <button
                  onClick={() => {
                    resolveHandle(status);
                    handleRemoveTicket(status);
                    
                  }}
                  className="btn text-white bg-green-500 w-full"
                >
                  Complete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-star text-2xl font-semibold  ">Resolve Status</h1>

      <div>
        {resolveList.map((resolve) => (
          <div className="card card-border p-4 my-3  bg-gray-300">
            {resolve.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskStatus;
