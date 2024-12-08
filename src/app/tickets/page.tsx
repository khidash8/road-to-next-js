import Link from "next/link";
import React from 'react';
import {initialTickets} from "@/tickets";
import {ticketPath} from "@/utilities/path";

const TicketsPage = () => {
    return (
        <div className={'flex flex-col gap-2 items-center justify-center'}>
            <h1 className={'text-2xl'}>All the tickets</h1>
            {initialTickets.map(ticket => (
                <div key={ticket.id} className={'border p-2 w-full mx-3'}>
                    <h2 className={'text-lg'}>{ticket.title}</h2>
                    <p>{ticket.description}</p>
                    <p>{ticket.status}</p>
                    <Link href={ticketPath(ticket.id)} className={'underline w-full flex justify-center'}>View
                        Ticket</Link>
                </div>
            ))}
        </div>
    );
};

export default TicketsPage;