import Header from "@/components/Header";
import Image from "next/image";
import React from "react";

const Sink = () => {
  const features = [
    "Featured Destinations",
    "Travel Deals or Packages",
    " Destination Guides",
    "Travel Tips and Advice",
  ];
  const homePage = ["trip Recommendations", "Top trips", "Filter by price"];
  const listing = [
    "Latest TRips ",
    "Trip Categories",
    "Filter by price",
    "See trip status",
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
          src={"/images/t5.png"}
        />

        <h3 className="t text-2xl font-extrabold my-5">Overview</h3>

        <p className="mb-10">
          This ongoing design is focused on creating a comprehensive tour
          package booking platform for exploring Ethiopia. The primary feature
          of this design is to enable users to easily book their desired tour
          packages within Ethiopia.
        </p>
        <h3 className="t text-2xl font-extrabold">Feature Highlights</h3>
        <div className="mt-4">
          {features?.map((f) => {
            return <li key={f}>{f}</li>;
          })}
        </div>

        <div className="my-10">
          <h3 className="t text-2xl font-extrabold my-5 mx-auto">Home</h3>
          <div className="flex flex-col">
            <div className="flex-1">
              <Image
                alt=""
                width={230}
                height={230}
                className="object-cover justify-center  my-10 mx-auto "
                src={"/images/t2.png"}
              />
            </div>
            <div className="flex-1 flex flex-col items-center md:justify-center md:items-start">
              <p className="my-10">
                On the home page, users can access a comprehensive overview of
                the entire website. This page serves as the main landing point
                where users can find essential information and navigate to
                various sections of the website.
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

          <h3 className="t text-2xl font-extrabold my-5 mx-auto">Package</h3>
          <div className="flex flex-col">
            <div className="flex-1">
              <Image
                alt=""
                width={230}
                height={230}
                className="object-cover justify-center  my-10 mx-auto "
                src={"/images/t1.png"}
              />
            </div>
            <div className="flex-1 flex flex-col items-center md:justify-center md:items-start">
              <p className="my-10">
                On the package page, users can discover a diverse range of
                available tour packages. This page presents users with a
                comprehensive list of various packages that they can explore and
                choose from for their travel needs.
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

          <h3 className="t text-2xl font-extrabold my-5 mx-auto">Package</h3>
          <div className="flex flex-col">
            <div className="flex-1">
              <Image
                alt=""
                width={230}
                height={230}
                className="object-cover justify-center  my-10 mx-auto "
                src={"/images/t3.png"}
              />
            </div>
            <div className="flex-1 flex flex-col items-center md:justify-center md:items-start">
              <p className="my-10">
                On the package page, users can discover a diverse range of
                available tour packages. This page presents users with a
                comprehensive list of various packages that they can explore and
                choose from for their travel needs.
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
