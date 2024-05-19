import Header from "@/components/Header";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="">
      <Header />
      <div className="flex  justify-between items-center  pt-24 px-4 gap-8 flex-col md:flex-row max-w-[900px] mx-auto">
        <div className="flex flex-col gap-4 flex-1 text-[#676869]">
          <h3 className="t text-4xl font-extrabold tracking-normal mb-10">
            Holla ッ
          </h3>

          <h3>
            🎨 Hello! I'm Sitra Mohammed, a passionate UI/UX designer and dedicated 4th year
            student at Addis Ababa University.  I thrive at the intersection of
            creativity and functionality, creating visually appealing and
            intuitive experiences. Balancing my academic pursuits with hands-on
            design work, I constantly seek to bring fresh perspectives to every
            project.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
