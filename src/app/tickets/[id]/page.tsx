import {notFound} from "next/navigation";
import TicketItem from "@/features/ticket/components/ticketItem";
import {getTicket} from "@/features/ticket/queries/get-ticket";

interface TicketProps {
    params: Promise<{ id: string; }>
}

const TicketPage = async ({params}: TicketProps) => {

    const {id} =await params

    const ticket = await getTicket(id)

    if (!ticket) {
        notFound()
    }

    return (
        <div className={'flex-1 flex flex-col gap-y-8 items-center self-center w-full max-w-[420px] animate-fade-in-from-top'}>
            <TicketItem ticket={ticket} isDetail/>
        </div>
    );
};

export default TicketPage;