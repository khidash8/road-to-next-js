import Link from "next/link";
import React from 'react';
import PlaceHolder from "@/components/placeHolder";
import {Button} from "@/components/ui/button";
import {ticketsPath} from "@/utilities/path";

const NotFound = () => {

    return <PlaceHolder
        label={'ticket not found'}
        button={<Button variant={'default'}>
            <Link href={ticketsPath()}>
                Go to tickets
            </Link>
        </Button>}
    />;

};

export default NotFound;