import Link from "next/link";
import {ticketsPath} from "@/utilities/path";

const HomePage = () => {
    return (
        <div className={'flex flex-col gap-2 items-center justify-center h-screen'}>
            <h1 className={'text-3xl'}>Home Page</h1>
            <Link href={ticketsPath()} className={'underline'}>Go to tickets</Link>
        </div>
    );
};

export default HomePage;