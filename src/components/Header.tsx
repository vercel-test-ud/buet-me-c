import React from "react";
import Image from "next/image"

export default function Header() {
    return (
        <div className="header flex justify-center custom-font h-auto px-10 py-5">
            <Image 
                className="mx-5 h-auto max-w-full"
                src="https://www.buet.ac.bd/web/assets/img/BImages/logoBIRN.png" 
                alt="BUET LOGO" 
                width={50} 
                height={50} />
            <h1>BUET ME&apos;23</h1>
        </div>
    );
}