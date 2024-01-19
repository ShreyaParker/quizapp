import React from 'react';
import {GoHome} from "react-icons/go";
import {IoIosArrowForward} from "react-icons/io";

const PageRoute = () => {
    return (
        <div className="flex flex-row items-center gap-2 p-4">
            <GoHome/>
            <IoIosArrowForward />
            FlashCard
            <IoIosArrowForward />
            Mathematics
            <IoIosArrowForward />
            <h1 className="text-blue-900 font-bold">
                Relation and Functions
            </h1>
        </div>
    );
};

export default PageRoute;