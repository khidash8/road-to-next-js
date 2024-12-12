import Link from "next/link";
import React from "react";
import {Header} from "@/components/header";
import {ticketsPath} from "@/utilities/path";

const HomePage = () => {
    return (
        <div className={'flex-1 flex flex-col gap-y-8'}>
            <Header title={'Home Page'} />
            <div className={'flex-1 flex flex-col gap-2 items-center'}>
                <Link href={ticketsPath()} className={'underline'}>Go to tickets</Link>
            </div>
        </div>
    );
};

export default HomePage;