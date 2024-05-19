import Header from "@/components/Header";
import Image from "next/image";
import React from "react";

const Resume = () => {
  return (
    <div className="">
      <Header />
      <iframe className="w-[100%] h-[975px] mx-auto" src="SitraMohammedCV.pdf" ></iframe>
    </div>
  );
};

export default Resume;
