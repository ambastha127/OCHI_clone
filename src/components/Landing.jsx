import { easeInOut, motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";


const Landing = () => {

    return (
        <div data-scroll data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
            <div className="textstructure px-20 mt-44">
                {["We Create", "Eye-opening", "presentations"].map(
                    (item, index) => {
                        return (
                            <div className="masker">
                                <div className="w-fit flex">
                                    {index===1&&(<motion.div transition={{ease:[0.76,0,0.24,1], duration:1}} initial={{width:0}} animate={{width:"7vw"}} className="w-[7vw] h-[5vw] rounded-md relative top-4  bg-green-500"></motion.div>)}
                                <h1 className="text-[7vw] tracking-tighter uppercase font-sans leading-[6vw] font-semibold ">
                                    {item}
                                </h1>
                                </div>
                            </div>
                        );
                    }
                )}
            </div>
            <div className="flex justify-between py-5 px-10 capitalize items-center mt-20 w-full border-t-[1px] border-zinc-800">
                {[
                    "for public and private companies",
                    "from the first pitch to IPO",
                ].map((item, index) => (
                    <p className="text-lg font-light tracking-tight leading-none">{item}</p>
                ))}
                <div className="start flex items-center">
                    <div className="px-5 uppercase py-2 border-[2px] border-zinc-500 font-light text-sm rounded-full">start the project</div>
                    <div className="w-10 h-10 rounded-full">
                        <span><FaArrowUpLong  className="h-10 ml-4 rotate-45"/></span> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
