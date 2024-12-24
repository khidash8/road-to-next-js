import Link from "next/link";
import PlaceHolder from "@/components/placeHolder";
import {Button} from "@/components/ui/button";
import TicketItem from "@/features/ticket/components/ticketItem";
import {initialTickets} from "@/tickets";
import {ticketsPath} from "@/utilities/path";

interface TicketProps {
    params: {
        id: string;
    };
}

const TicketPage = ({params}: TicketProps) => {
    const ticket =
        initialTickets.find(ticket => ticket.id === params.id);

    if (!ticket) {
        return <PlaceHolder
            label={'ticket not found'}
            button={<Button variant={'default'}>
                <Link href={ticketsPath()}>
                    Go to tickets
                </Link>
            </Button>}
        />;
    }

    return (
        <div>
            <TicketItem ticket={ticket} isDetail/>
        </div>
    );
};

export default TicketPage;