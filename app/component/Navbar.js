import React from 'react';
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="flex flex-row my-5 mx-4">
            <Image
                src="/logo.png"
                width={123}
                height={39}
            />
            <div className="ml-auto flex flex-row items-center gap-4">
                <h1>
                    Home
                </h1>
                <h1>
                    FlashCard
                </h1>
                <h1>
                    Contact
                </h1>
                <h1>
                    FAQ
                </h1>
                <button className="rounded-2xl text-white px-5 p-1 bg-gradient-to-tl from-[rgba(34,132,241,1)] to-[rgba(5,26,145,1)]">
                    Login
                </button>

            </div>


        </div>
    );
};

export default Navbar;