import Header from "@/components/Header";
import Image from "next/image";
import React from "react";

const Sink = () => {
  const features = [
    "Services section",
    "Food recommendations",
    "Restaurant recommendations",
    "Customer reviews",
    "A call to action Button ",

  ];
  const homePage = [
    "Book Recommendations",
    "Top categories",
    "Filter by genre",
    "Latest books",
  ];
  const listing = [
    "Latest books ",
    "Book Categories",
    "Filter by language",
    "See borrowing status",
    "Different layout options",
  ];
  const profile = [
    "Update profile information",
    "View borrowing history",
    "Update password",
    "Check Shelf",
    "Check contribution to the club",
  ];
  return (
    <div>
      <Header />

      <section className=" max-w-[900px] mx-auto px-8 mt-16">
        <Image
          alt=""
          width={700}
          height={700}
          className=" object-cover justify-center  my-10 mx-auto"
          src={"/images/e8.png"}
        />

        <h3 className="t text-2xl font-extrabold my-5">Overview</h3>

        <p className="mb-10">
        This Figma design for a food delivery app prioritizes user ease. The home page features a hero section with eye-catching visuals, followed by clear sections for services, restaurant recommendations, and customer reviews.  Transitioning to the food category page,
         users can delve into detailed information about each dish and seamlessly place their orders. 
        </p>

        <h3 className="t text-2xl font-extrabold">Feature Highlights</h3>
        <div className="mt-4">
          {features?.map((f) => {
            return <li key={f}>{f}</li>;
          })}
        </div>
        <h3 className="t text-2xl font-extrabold my-5 mx-auto">Home</h3>

        <div className="my-10">
          <div className="flex flex-col">
            <div className="flex-1">
              <Image
                alt=""
                width={500}
                height={500}
                className="object-cover justify-center  my-10 mx-auto "
                src={"/images/e6.png"}
              />
            </div>
            <div className="flex-1 flex flex-col items-center md:justify-center md:items-start">
              <p className="my-10">
                To make the home page more engaging,incorporating a visually
                appealing book carousel or featured book section on the home
                page can catch the user's attention and highlight popular or
                recommended foods. This can create a sense of intrigue and
                encourage users to further explore the available food 
                category.
              </p>
              {homePage?.map((p) => {
                return (
                  <h4 key={p} className="text-sm text-gray-700 pl-3 py-1">
                    {" "}
                    <span>-</span> {p}
                  </h4>
                );
              })}
            </div>
          </div>
         
          <h3 className="text-2xl font-bold">Ordering page</h3>
          <div className="flex flex-col  px-4 py-2 mt-10 ">
            <div className="flex-1">
              <Image
                alt=""
                width={500}
                height={500}
                className="object-cover justify-center  my-10 mx-auto  "
                src={"/images/e2.png"}
              />
            </div>
            <p className="my-10">
              Users can conveniently view food category from the clear and concise menus
               available and also allows users to find what they want using search and filter options.
             
            </p>
          {/*   <div className="flex-1 flex flex-col items-center md:justify-center md:items-start">
              {profile?.map((p) => {
                return (
                  <h4 key={p} className="text-sm text-gray-700 pl-3 py-1">
                    {" "}
                    <span>-</span> {p}
                  </h4>
                );
              })}
            </div> */}
          </div>
          <h3 className="text-2xl font-bold">Food Detail </h3>
          <div className="flex flex-col  px-4 py-2 mt-10 ">
            <div className="flex-1">
              <Image
                alt=""
                width={500}
                height={500}
                className="object-cover justify-center  my-10 mx-auto "
                src={"/images/e3.png"}
              />
            </div>
            <p className="my-10">
              Users can conveniently view the food detail of their specific choice with detailed description.
              In the description there are nutritional information,price,popularity indicator.
            </p>
          {/*   <div className="flex-1 flex flex-col items-center md:justify-center md:items-start">
              {profile?.map((p) => {
                return (
                  <h4 key={p} className="text-sm text-gray-700 pl-3 py-1">
                    {" "}
                    <span>-</span> {p}
                  </h4>
                );
              })}
            </div> */}
          </div>
          <h3 className="text-2xl font-bold">Contact us</h3>
          <div className="flex flex-col  px-4 py-2 mt-10 ">
            <div className="flex-1">
              <Image
                alt=""
                width={500}
                height={500}
                className="object-cover justify-center  my-10 mx-auto "
                src={"/images/e4.png"}
              />
            </div>
          
           {/*  <div className="flex-1 flex flex-col items-center md:justify-center md:items-start">
              {profile?.map((p) => {
                return (
                  <h4 key={p} className="text-sm text-gray-700 pl-3 py-1">
                    {" "}
                    <span>-</span> {p}
                  </h4>
                );
              })}
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sink;
