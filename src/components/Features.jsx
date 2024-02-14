import { delay, easeInOut, motion, useAnimation } from "framer-motion";
import React, { useState } from "react";
import { Power4 } from "gsap/all";

const Features = () => {
    const cards = [useAnimation(), useAnimation()];

    const handleHover = (index) => {
        cards[index].start({ y: "0" });
    };
    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" });
    };
    return (
        <div className="w-full py-10">
            <div className="w-full px-10 border-b-[1px] border-zinc-700  ">
                <h1 className="text-7xl font-mono tracking-tight px-20 py-20">
                    Featured Projects
                </h1>
            </div>
            <div className="px-20">
                <div className="cards w-full flex gap-10 mt-10">
                    <motion.div
                        onHoverStart={() => handleHover(0)}
                        onHoverEnd={() => handleHoverEnd(0)}
                        className="cardcontainer relative w-1/2 h-[75vh]"
                    >
                        <h1 className="card text-[#CDEA68] overflow-hidden absolute flex left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl font-sans">
                            {"FYDE".split("").map((item, index) => (
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={cards[0]}
                                    transition={{
                                        ease: easeInOut,
                                        delay: index * 0.01,
                                    }}
                                    className="inline-block"
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </h1>
                        <div className="rounded-xl w-full h-full overflow-hidden">
                            <img
                                className="w-full h-full bg-cover"
                                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                                alt=""
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        onHoverStart={() => handleHover(1)}
                        onHoverEnd={() => handleHoverEnd(1)}
                        className=" relative cardcontainer w-1/2 h-[75vh]"
                    >
                        <h1 className="text-[#CDEA68] overflow-hidden flex absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl font-sans">
                            {"VISE".split("").map((item, index) => (
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={cards[1]}
                                    transition={{
                                        ease: easeInOut,
                                        delay: index * 0.01,
                                    }}
                                    className="inline-block"
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </h1>

                        <div className=" rounded-xl w-full overflow-hidden h-full ">
                            <img
                                className="w-full h-full bg-cover"
                                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                                alt=""
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Features;
