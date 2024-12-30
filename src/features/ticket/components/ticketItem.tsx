import {Ticket} from "@prisma/client";
import clsx from "clsx";
import {LucideSquareArrowOutUpRight, LucideTrash2} from "lucide-react";
import Link from "next/link";
import React from 'react';
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {ticketIcons} from "@/features/constants";
import {deleteTicket} from "@/features/ticket/actions/ticket-delete";
import {ticketPath} from "@/utilities/path";

type TicketItemProp = {
    ticket: Ticket;
    isDetail?: boolean;
}

const TicketItem = ({ticket, isDetail}: TicketItemProp) => {
    const detailButton = (
        <Button variant={'outline'} size={'icon'}>
            <Link href={ticketPath(ticket.id)} className={'w-full flex justify-center'}>
                <LucideSquareArrowOutUpRight/>
            </Link>
        </Button>
    )

    const deleteButton = (
        <form action={deleteTicket.bind(null, ticket.id)}>
            <Button variant={'destructive'} size={'icon'}>
                <LucideTrash2/>
            </Button>
        </form>
    )

    return (
        <div className={'flex gap-2 justify-center w-full max-w-[420px] bg-green-700'}>
            <Card className={'w-full'}>
                <CardHeader>
                    <CardTitle className={'flex gap-x-2'}>
                        <span>{ticketIcons[ticket.status]}</span>
                        <span className={clsx('text-lg', {
                            'line-through': ticket.status === 'done'
                        })}>{ticket.title}</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <span className={clsx('whitespace-break-spaces', {
                        'line-clamp-3': !isDetail
                    })}>{ticket.description}</span>
                </CardContent>
            </Card>
            <div className={'flex flex-col gap-2'}>
                {isDetail ? deleteButton : detailButton}
            </div>

        </div>
    );
};

export default TicketItem;