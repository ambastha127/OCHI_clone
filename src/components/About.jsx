import React from "react";

const About = () => {
    return (
        <div className="w-full py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl">
            <h1 className="text-black font-sans text-[4vw] p-14 leading-[3vw] tracking-tight"> 
                Ochi is a strategic partner for fast-growing tech businesses
                that need to raise funds, sell products, explain complex
                ideas, and hire great people.  
            </h1>
            <div className="w-full flex border-t-[1px] pt-20 border-[#a2b663]">
                <div className="w-1/2">
                    <h1 className="text-black capitalize text-6xl ml-10 mb-6">our approach:</h1>
                    <button className="px-12 uppercase items-center py-6 ml-10 bg-zinc-900 rounded-full flex gap-7 font-bold text-white">Read More
                    <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
                    </button>
                </div>
                <div className="w-1/2 h-[68vh] bg-[#d7eb92] rounded-3xl mr-7">
                    <img className="object-cover rounded-2xl relative top-1 left-10" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About; 