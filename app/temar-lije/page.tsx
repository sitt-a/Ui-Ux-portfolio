
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";

const Sink = () => {
  const features = [
    "A welcome page",
    "signin and signup page",
    " Free and paid courses",
    "Shows course progress",
  ];
  const homePage = [" Social Media Sign-In", "Log in option", "sign up information"];
  const listing = [
    "The number of hours  ",
    "The number of courses",
    "The course content for each chapter",
    
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
          This ongoing design is an E-learning mobile app designed for Ethiopian students and named after a famous song about education.
           The primary feature is to provide user freindly mobile app E-learning app for Ethiopian students.
         
        </p>
        <h3 className="t text-2xl font-extrabold">Feature Highlights</h3>
        <div className="mt-4">
          {features?.map((f) => {
            return <li key={f}>{f}</li>;
          })}
        </div>

        <div className="my-10">
          <h3 className="t text-2xl font-extrabold my-5 mx-auto">Sign up page</h3>
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
                On the sign up page, users can sign up using their email and user name or through
                 their google,apple or facebook account.
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

          <h3 className="t text-2xl font-extrabold my-5 mx-auto">Home page</h3>
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
               This page is where users are redirected after signing up using tone of the options available.
               On this page,they can see the refeatures courses ,their profile,favourite courses and all courses avilable.
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

          <h3 className="t text-2xl font-extrabold my-5 mx-auto">Course detail</h3>
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
            
              {listing?.map((p) => {
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
