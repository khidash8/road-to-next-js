import clsx from "clsx";
import Link from "next/link";
import React from 'react';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
import {ticketIcons} from "@/features/constants";
import {Ticket} from "@/features/types";
import {ticketPath} from "@/utilities/path";
import {Button} from "@/components/ui/button";
import {LucideSquareArrowOutUpRight} from "lucide-react";

type TicketItemProp = {
    ticket: Ticket;
}

const TicketItem = ({ticket}: TicketItemProp) => {
    const detailButton = (
        <Button variant={'outline'} size={'icon'}>
            <Link href={ticketPath(ticket.id)} className={'w-full flex justify-center'}>
                <LucideSquareArrowOutUpRight/>
            </Link>
        </Button>
    )

    return (
        <div className={'w-full max-w-[420px] flex gap-2'}>
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
                    <span className={'line-clamp-3 whitespace-break-spaces'}>{ticket.description}</span>
                </CardContent>
            </Card>
            <div className={'flex flex-col gap-2'}>
                {detailButton}
            </div>

        </div>
    );
};

export default TicketItem;