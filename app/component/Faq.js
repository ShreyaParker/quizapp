import React from 'react';
import {IoIosArrowDown} from "react-icons/io";

const Faq = () => {
    return (
        <div className="flex  flex-col gap-3 mt-7">
            <h1 className="font-extrabold text-4xl text-blue-900  ">
                FAQ
            </h1>
            <div className="flex flex-col py-5 w-7/12 gap-5">
                <div className="border-blue-400  border flex flex-row p-3 items-center justify-between rounded-2xl ">
                    <h1>
                        Can education flashcards be used for all age groups?
                    </h1>
                    <IoIosArrowDown/>

                </div>
                <div className="border-blue-400 border flex flex-row p-3 items-center justify-between rounded-2xl ">
                    <h1>
                        How do education flashcards work?   </h1>
                    <IoIosArrowDown/>

                </div>
                <div className="border-blue-400 border flex flex-row p-3 items-center justify-between rounded-2xl ">
                    <h1>
                        Can education flashcards be used for test preparation?            </h1>
                    <IoIosArrowDown/>

                </div>
            </div>
        </div>
    );
};

export default Faq;