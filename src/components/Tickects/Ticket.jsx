import React from "react";




const Ticket = ({ ticket,addToTaskHandle}) => {
  console.log(ticket);
  return (
    <div className=" ">
      
      <div
        onClick={() => addToTaskHandle(ticket)}
        className="hover:shadow-xl cursor-pointer transition card  bg-base-100 card-xs shadow-sm"
      >
        <div className="card-body">
          <div className="flex justify-between">
            <h1 className="card-title">{ticket.title}</h1>
            <button
              className={
                ticket.status == "Open"
                  ? "bg-green-300 rounded-2xl px-2"
                  : "bg-yellow-300 rounded-2xl px-2"
              }
            >
              <div>
                <span>
                  <i class="fa-solid fa-circle"></i>
                </span>
                <span> {ticket.status}</span>
              </div>
            </button>
          </div>
          <p className="text-gray-500">{ticket.description}</p>

          <div className="flex justify-between text-gray-500">
            <div className="flex gap-x-2 justify-around">
              <span>#{ticket.id}</span>
              <span
                className={ 
                  ticket.priority === "HIGH"
                    ? "text-red-500 font-semibold"
                    : ticket.priority === "MEDIUM"
                      ? "text-yellow-400 font-semibold"
                      : "text-green-500 font-semibold"
                } 
              >
                {ticket.priority}
              </span>
            </div>
            <div className="flex gap-x-2 justify-around">
              <span>{ticket.customer}</span>
              <span>{ticket.createdAt}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
