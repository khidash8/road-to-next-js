import React from 'react';
import {Separator} from "@/components/ui/separator";

type HeaderProps = {
    title: string;
    description?: string;
};

const Header = ({title, description}: HeaderProps) => {
    return (
        <>
            <div className={'px-8'}>
                <h2 className={'text-3xl font-bold tracking-tight'}>{title}</h2>
                {description && <p>{description}</p>}
            </div>

            <Separator />
        </>
    );
};

export {Header};