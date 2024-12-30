import React, {Suspense} from 'react';
import CardCompact from "@/components/cardCompact";
import {Header} from "@/components/header";
import {Spinner} from "@/components/spinner";
import TicketCreateForm from "@/features/ticket/components/ticket-create-form";
import {TicketItemList} from "@/features/ticket/components/ticketItemList";

const TicketsPage = async () => {


    return (
        <div className={'flex-1 flex flex-col self-center w-full max-w-[420px] gap-y-5 items-center'}>
            <Header title={'Tickets Page'} description={'All your tickets at one place'}/>

            <CardCompact
                title={'Create Ticket'}
                description={'Add new ticket.'}
                content={<TicketCreateForm/>}
                className="w-full max-w-[420px] animate-fade-in-from-top"
            />

            <Suspense fallback={<Spinner/>}>
                <TicketItemList/>
            </Suspense>
        </div>
    );
};

export default TicketsPage;