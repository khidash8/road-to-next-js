import React from 'react';
import TicketItem from "@/features/ticket/components/ticketItem";
import {getTickets} from "@/features/ticket/queries/get-tickets";

const TicketItemList = async () => {
    const tickets = await getTickets()

    return (
        <div className={'flex-1 flex flex-col gap-y-8 w-full animate-fade-in-from-top'}>
            {tickets.map(ticket => (
                <TicketItem ticket={ticket} key={ticket.id}/>
            ))}
        </div>
    );
};

export {TicketItemList};