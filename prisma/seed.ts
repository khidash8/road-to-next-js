import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const tickets = [
    {
        title: 'Ticket 1',
        description: 'Description 1 from seed',
        status: 'open' as const
    },
    {
        title: 'Ticket 2',
        description: 'Description 2 from seed',
        status: 'inProgress' as const
    },
    {
        title: 'Ticket 3',
        description: 'Description 3 from seed',
        status: 'done' as const
    },
]

const seed = async () => {
    const t0=performance.now();
    console.log('seed started');
    await  prisma.ticket.deleteMany()

    await prisma.ticket.createMany({
        data: tickets
    })
    console.log(`seed finished in ${performance.now() - t0}ms`);
}

seed()