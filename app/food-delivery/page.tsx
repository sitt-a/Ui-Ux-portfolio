import Header from "@/components/Header";
import Image from "next/image";
import React from "react";

const Sink = () => {
  const features = [
    "Book Borrowing System",
    "Borrowing History",
    "Due Dates and Reminders",
    "Member Ratings for Borrowed Books",
    "Admin Controls for Book Management",
    "User Profile Bookshelf",
    "Book Reservation",
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
          This design is specifically created for the 5 Killo Fellowship Book
          Club website. The website includes a feature that allows users to view
          the availability of books and submit requests to borrow them. These
          requests will then be reviewed and accepted by the administrator.
          Additionally, users have the option to contribute their own books to
          the book club. It is important to note that this design has been
          carefully planned to ensure a seamless user experience and efficient
          book management within the club.
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
                trending books. This can create a sense of intrigue and
                encourage users to further explore the available book
                collection.
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
         
          <h3 className="text-2xl font-bold">Profile </h3>
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
              Users can conveniently view their favorite books, track their
              reading progress, and contribute to the club. This page serves as
              a personalized hub where users can manage their book preferences,
              monitor their reading achievements, and actively participate in
              the club's activities.
            </p>
            <div className="flex-1 flex flex-col items-center md:justify-center md:items-start">
              {profile?.map((p) => {
                return (
                  <h4 key={p} className="text-sm text-gray-700 pl-3 py-1">
                    {" "}
                    <span>-</span> {p}
                  </h4>
                );
              })}
            </div>
          </div>
          <h3 className="text-2xl font-bold">Book Detail </h3>
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
              Users can conveniently view their favorite books, track their
              reading progress, and contribute to the club. This page serves as
              a personalized hub where users can manage their book preferences,
              monitor their reading achievements, and actively participate in
              the club's activities.
            </p>
            <div className="flex-1 flex flex-col items-center md:justify-center md:items-start">
              {profile?.map((p) => {
                return (
                  <h4 key={p} className="text-sm text-gray-700 pl-3 py-1">
                    {" "}
                    <span>-</span> {p}
                  </h4>
                );
              })}
            </div>
          </div>
          <h3 className="text-2xl font-bold">Borrow request</h3>
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
            <p className="my-10">
              Users can conveniently view their favorite books, track their
              reading progress, and contribute to the club. This page serves as
              a personalized hub where users can manage their book preferences,
              monitor their reading achievements, and actively participate in
              the club's activities.
            </p>
            <div className="flex-1 flex flex-col items-center md:justify-center md:items-start">
              {profile?.map((p) => {
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
