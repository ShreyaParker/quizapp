import React from 'react';
import {AiOutlineBulb} from "react-icons/ai";
import {MdOutlineFullscreen, MdOutlineRefresh, MdVolumeUp} from "react-icons/md";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

const QuizCard = () => {
    return (
        <div className=" flex w-full  flex-col justify-center items-center  ">
            <div
                className="h-72 w-4/12 text-white p-2 m-2 rounded-2xl bg-gradient-to-bl from-[rgba(5,26,145,1)] via-[rgba(6,28,147,1)] to-[rgba(34,132,241,1)]">

                <div className="flex p-2 flex-row justify-between">
                    <AiOutlineBulb/>
                    <MdVolumeUp />
                </div>
                <div className="flex justify-center text-3xl font-extrabold items-center h-4/5">
                    9.34.23+243-2
                </div>
            </div>

            <div className="flex flex-row justify-between p-2 text-xl  w-2/6 items-center">
                <MdOutlineRefresh/>

                <div className="flex flex-row gap-5">
                    <button className="rounded-2xl text-white bg-blue-950 p-1  ">
                        <IoIosArrowBack/>
                    </button>
                    <h1>
                        01/10
                    </h1>
                    <button className="rounded-2xl text-white bg-blue-950 p-1">
                        <IoIosArrowForward/>
                    </button>

                </div>
                <MdOutlineFullscreen />
            </div>
        </div>
    );
};

export default QuizCard;