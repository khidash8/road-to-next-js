import clsx from "clsx";
import {LucideCircleCheck, LucideFileText, LucidePencil} from "lucide-react";
import Link from "next/link";
import React from 'react';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {initialTickets} from "@/tickets";
import {ticketPath} from "@/utilities/path";

const ticketIcons = {
    open: <LucideFileText />,
    inProgress: <LucidePencil />,
    done: <LucideCircleCheck />,
}

const TicketsPage = () => {
    return (
        <div className={'flex flex-col gap-y-2'}>
            <div>
                <h2 className={'text-3xl font-bold tracking-tight'}>Tickets Page</h2>
                <p>All your tickets at one place</p>
            </div>

            <Separator className={'my-5'}/>

            <div className={'flex-1 flex flex-col items-center gap-y-4 animate-fade-in-from-top'}>
                {initialTickets.map(ticket => (
                    <Card key={ticket.id} className={'w-full max-w-[420px] p-4'}>
                        <CardHeader>
                            <CardTitle className={'flex gap-x-2'}>
                                <span>{ticketIcons[ticket.status]}</span>
                                <span className={clsx('text-lg', {
                                    'line-through': ticket.status === 'done'
                                })}>{ticket.title}</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <span className={'line-clamp-3 whitespace-break-spaces'}>{ticket.description}</span>
                        </CardContent>
                        <CardFooter>
                            <Link href={ticketPath(ticket.id)} className={'underline w-full flex justify-center'}>View
                                Ticket</Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default TicketsPage;