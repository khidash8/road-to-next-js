import {LucideFileWarning} from "lucide-react";
import React, {cloneElement} from 'react';

type placeholderProps = {
    label: string;
    icon?: React.ReactElement;
    button?: React.ReactElement;
}

const PlaceHolder = ({
                         label,
                         icon = <LucideFileWarning/>,
                         button = <div/>
                     }: placeholderProps) => {
    return (
        <div className={'flex-1 flex flex-col items-center justify-center space-y-2'}>
            {cloneElement(icon, {
                className: 'w-16 h-16'
            })}
            <h2 className={'text-xl text-center font-bold capitalize'}>{label}</h2>
            {cloneElement(button, {
                className: 'h-10'
            })}
        </div>
    );
};

export default PlaceHolder;