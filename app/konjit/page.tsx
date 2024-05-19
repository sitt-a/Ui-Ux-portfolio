import Header from "@/components/Header";
import Image from "next/image";
import React from "react";

const Sink = () => {
  const features = [
    "Recipe Listings",
    "Search Functionality",
    "Filtering and Sorting",
    "Recipe Details",
    "Recipe Collections",
    "Nutritional Information",
    "Video Tutorials",
    "Ingredient Substitution Suggestions",
    "Adaptive Recommendations",
  ];
  const homePage = [
    "Search and Filter Options",
    "Recipe Categories",
    "Video Recipes",
  ];
  const listing = ["latest recipes ", "Recipe Categories", "Tradishinal foods"];
  return (
    <div>
      <Header />
      <section className=" max-w-[900px] mx-auto px-8 mt-16">
      <Image
          alt=""
          width={700}
          height={700}
          className=" object-cover justify-center  my-10 mx-auto"
          src={"/images/k6.png"}
        />

        <h3 className="t text-2xl font-extrabold my-5">Overview</h3>

        <p className="mb-10">
          Users can browse through a collection of recipes, view detailed
          instructions, and even watch videos demonstrating the cooking process.
        </p>
        <h3 className="t text-2xl font-extrabold">Feature Highlights</h3>
        <div className="mt-4">
          {features?.map((f) => {
            return <li key={f}>{f}</li>;
          })}
        </div>

        <div className="my-10">
          <h3 className="t text-2xl font-extrabold my-5 mx-auto">Recipe</h3>
          <div className="flex flex-col">
            <div className="flex-1">
              <Image
                alt=""
                width={500}
                height={500}
                className="object-cover justify-center  my-10 mx-auto "
                src={"/images/k1.png"}
              />
            </div>
            <div className="flex-1 flex flex-col items-center md:justify-center md:items-start">
              <p className="my-10">
                Users can discover a wide range of dishes from various cuisines
                and categories
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
         
          <h3 className="t text-2xl font-extrabold my-5 mx-auto">Contact</h3>
          <div className="flex flex-col">
            <div className="flex-1">
              <Image
                alt=""
                width={500}
                height={500}
                className="object-cover justify-center  my-10 mx-auto "
                src={"/images/k3.png"}
              />
            </div>
            <div className="flex-1 flex flex-col items-center md:justify-center md:items-start">
              <p className="my-10">
                On the contact page, users have the opportunity to send their
                reviews or testimonials. This feature allows users to share
                their feedback, experiences, and thoughts about the website,
                recipes, or any other relevant aspect.
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

          <h3 className="t text-2xl font-extrabold my-5 mx-auto">Detail</h3>
          <div className="flex flex-col">
            <div className="flex-1">
              <Image
                alt=""
                width={500}
                height={500}
                className="object-cover justify-center  my-10 mx-auto "
                src={"/images/k2.png"}
              />
            </div>
            <div className="flex-1 flex flex-col items-center md:justify-center md:items-start">
              <p className="my-10">
                On the recipe's detail page, users can access the detailed
                step-by-step instructions for preparing the food. Additionally,
                they have the option to watch a video that demonstrates the
                cooking process.
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
         
          
        </div>
      </section>
    </div>
  );
};

export default Sink;
