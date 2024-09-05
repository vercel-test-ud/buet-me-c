import React from "react";
import Link from "next/link";
import Button from '@mui/material/Button';

interface OptionProps {
    page: string;
}

export default function Option({ page }: OptionProps) {
    return (
        <div className="option-buttons">
            <Link href={`/../${page}`} passHref ><Button variant="contained">{`${page}`}</Button></Link>
        </div>
    );
}