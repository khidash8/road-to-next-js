import {Ticket} from "@/features/types";
import {initialTickets} from "@/tickets";

export const getTicket = async (ticketId: string):Promise<Ticket | null> => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    const maybeTicket = initialTickets.find(ticket => ticket.id === ticketId);

    return new Promise(resolve => resolve(maybeTicket || null))
}