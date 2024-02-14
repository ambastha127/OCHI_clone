import React from "react";

const Cards = () => {
    return (
        <div className="w-full h-screen bg-zinc-900 flex gap-5 items-center px-24">
            <div className="cardconatiner h-[50vh] w-1/2">
                <div className="card relative flex items-center justify-center w-full h-full rounded-2xl  bg-gray-800">
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className="text-[#CDEA68] absolute left-10 px-3 border-2 bottom-10 border-[#CDEA68] py-1 rounded-full">&copy; 2019-2024</button>
                </div>
            </div>
            <div className="cardconatiner flex gap-5 w-1/2 h-[50vh]">
                <div className="flex items-center justify-center card w-1/2 h-full rounded-2xl bg-zinc-800 relative">
                    <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className="text-white absolute left-10 px-3 border-2 bottom-10  py-1 rounded-full">RATING 5.0 ON CLUTCH</button>
                </div>
                <div className="card relative w-1/2 h-full rounded-2xl bg-zinc-800 flex items-center justify-center">
                    <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className="text-white absolute left-10 px-3 border-2 bottom-10  py-1 rounded-full">BUSINESS BOOTCAMP ALUMINI</button>
                </div>
            </div>
        </div>
    );
};

export default Cards;
