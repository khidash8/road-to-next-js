import React from 'react';
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {createTicket} from "@/features/ticket/actions/create-ticket";

const TicketCreateForm = () => {
    return (
        <form action={createTicket} className="flex flex-col gap-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" placeholder="Click to add ticket"/>
            <Label htmlFor="desc">Description</Label>
            <Textarea id="desc" name="desc" placeholder="Click to add description"/>
            <Button className={'w-full'}>Submit</Button>
        </form>
    );
};

export default TicketCreateForm;