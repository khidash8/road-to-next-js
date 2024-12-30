import React, {Suspense} from 'react';
import {Header} from "@/components/header";
import {Spinner} from "@/components/spinner";
import {TicketItemList} from "@/features/ticket/components/ticketItemList";

const TicketsPage = async () => {


    return (
        <div className={'flex-1 flex flex-col self-center w-full max-w-[420px] gap-y-2 items-center'}>
            <Header title={'Tickets Page'} description={'All your tickets at one place'}/>

            <Suspense fallback={<Spinner/>}>
                <TicketItemList/>
            </Suspense>
        </div>
    );
};

export default TicketsPage;