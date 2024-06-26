"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="min-h-[450px] ">
      <div className=" max-w-[900px] mx-auto">
        <div className="flex  justify-between items-center  pt-24 px-4 gap-8 flex-col md:flex-row">
          <div className="flex flex-col gap-4 flex-1 upAnimate">
            <h3 className="t text-4xl font-extrabold tracking-normal">
              Hello, I'm Sitra ッ
            </h3>
           
            <h4>
            I am a web developer and <b>UI/UX designer</b> who crafts intuitive
             interfaces and user experiences that 
            bridge the gap between beautiful and functional.
            With a comprehensive grasp of the end-to-end product design
              process.
            </h4>
          </div>
          <div className="flex-1">
            <Image
              width={400}
              className="w-full aspect-square object-contain"
              height={400}
              src={"/images/about.png"}
              alt=""
            />
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Hero;
