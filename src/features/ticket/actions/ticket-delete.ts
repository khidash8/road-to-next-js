"use server"

import {redirect} from "next/navigation";
import {prisma} from "@/lib/prisma";
import {ticketsPath} from "@/utilities/path";

export const deleteTicket = async (ticketId: string) => {

    await prisma.ticket.delete({
        where: {
            id: ticketId
        }
    })

    redirect(ticketsPath())
}