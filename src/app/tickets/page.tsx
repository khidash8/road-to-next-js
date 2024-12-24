import React from 'react';
import {Header} from "@/components/header";
import TicketItem from "@/features/ticket/components/ticketItem";
import {initialTickets} from "@/tickets";

const TicketsPage = () => {
    return (
        <div className={'flex-1 flex flex-col gap-y-2 items-center'}>
            <Header title={'Tickets Page'} description={'All your tickets at one place'}/>

            <div className={'flex-1 flex flex-col gap-y-8 w-1/2 animate-fade-in-from-top'}>
                {initialTickets.map(ticket => (
                    <TicketItem ticket={ticket} key={ticket.id}/>
                ))}
            </div>
        </div>
    );
};

export default TicketsPage;