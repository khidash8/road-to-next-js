import clsx from "clsx";
import Link from "next/link";
import React from 'react';
import {initialTickets} from "@/tickets";
import {ticketPath} from "@/utilities/path";

const ticketIcons = {
    open: 'O',
    inProgress: 'P',
    done: 'D',
    closed: '🔒'
}

const TicketsPage = () => {
    return (
        <div className={'flex flex-col gap-y-2'}>
            <div>
                <h2 className={'text-3xl font-bold tracking-tight'}>Tickets Page</h2>
                <p>All your tickets at one place</p>
            </div>

            <div className={'flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top'}>
                {initialTickets.map(ticket => (
                    <div key={ticket.id} className={'w-full max-w-[420px] p-4 border border-slate-100 rounded'}>
                        <h2 className={clsx('text-lg', {
                            'line-through': ticket.status === 'closed'
                        })}>{ticket.title}</h2>
                        <p>{ticket.description}</p>
                        <p>{ticketIcons[ticket.status]}</p>
                        <Link href={ticketPath(ticket.id)} className={'underline w-full flex justify-center'}>View
                            Ticket</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TicketsPage;