import React, { use } from "react";
import Ticket from "./Ticket";

const Tickets = ({ ticketsPromise, addToTaskHandle,removeTicket }) => {
  const allTickets = use(ticketsPromise);
  return (
    <div>
        <h1 className="font-semibold text-2xl mb-3">Customer Tickets</h1>
      <div className="grid md:grid-cols-2 gap-4 ">
        {allTickets.map((ticket) => (
          <Ticket removeTicket={removeTicket} key={ticket.id} addToTaskHandle={addToTaskHandle} ticket={ticket}></Ticket>
        ))}
      </div>
    </div>
  );
};

export default Tickets;
