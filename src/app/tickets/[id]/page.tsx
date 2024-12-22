import Link from "next/link";
import PlaceHolder from "@/components/placeHolder";
import {Button} from "@/components/ui/button";
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
            <h1>ticket {params.id} page</h1>
            <h2>{ticket.title}</h2>
            <p>{ticket.description}</p>
            <p>{ticket.status}</p>
            <Link href={ticketsPath()} className={'underline uppercase'}>Go to tickets</Link>
        </div>
    );
};

export default TicketPage;