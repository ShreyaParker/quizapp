import React from 'react';
import QuizCard from "@/app/component/QuizCard";
import Image from "next/image";
import {FaPlus} from "react-icons/fa";
import Faq from "@/app/component/Faq";

const TopicPage = () => {
    return (
        <div className="flex flex-col  gap-2 p-4">
            <h2 className="font-extrabold text-blue-900   text-4xl">
                Relation And Functions
                (Mathematics)
            </h2>

            <div className="flex font-bold text-gray-500 flex-row p-3 justify-center gap-9">
                <h1 className=" border-b-4 border-blue-950 text-blue-950 py-3 ">Study</h1>
                <h1 className="py-3">Quiz</h1>
                <h1 className="py-3">Test</h1>
                <h1 className="py-3">Game</h1>
                <h1 className="py-3">Others</h1>

            </div>
            <div>
                <QuizCard/>
            </div>

            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center">
                    <Image
                        src="/filledlogo.png"
                        width={130}
                        height={100}
                    />

                    <div>
                <span>
                Published By
            </span>
                        <Image
                            src="/namelogo.png"
                            width={110}
                            height={34}
                        />
                    </div>


                </div>

                <div className="flex flex-row items-center gap-1">
                   <button className="rounded-2xl bg-gradient-to-r from-[rgba(34,132,241,1)] to-[rgba(5,26,145,1)] p-1 bg-blue-950 text-white">
                       <FaPlus />
                   </button>
                    <h1>
                        Create FlashCard
                    </h1>
                </div>


            </div>

            <Faq/>

        </div>
    );
};

export default TopicPage;