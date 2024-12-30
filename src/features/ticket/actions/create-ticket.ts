"use server"

import {revalidatePath} from "next/cache";
import {prisma} from "@/lib/prisma"
import {ticketsPath} from "@/utilities/path";


export const createTicket = async (formData: FormData) => {

    const data = {
        title: formData.get('title') as string,
        description: formData.get('desc') as string
    }

    await prisma.ticket.create({
        data
    });

    revalidatePath(ticketsPath())
}