'use client'

import React from 'react';
import PlaceHolder from "@/components/placeHolder";

const Error = ({error}: { error: Error }) => {
    return (
        <PlaceHolder label={error.message || 'something went wrong'}/>
    );
};

export default Error;