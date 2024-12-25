import {Ticket} from "@/features/types";
import {initialTickets} from "@/tickets";

export const getTickets = async (): Promise<Ticket[]> => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    return new Promise(resolve => resolve(initialTickets))
}