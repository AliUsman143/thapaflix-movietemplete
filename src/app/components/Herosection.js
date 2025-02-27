import React from "react";
import Link from "next/link"; // Import Link from Next.js

const Herosection = ({ title, imgurl }) => {
  return (
    <div>
      <section className="bggradient body-font">
        <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col h-[540px] items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
              {title}
            </h1>
            <p className="mb-8 leading-relaxed">
              From award-winning dramas to blockbuster action movies, we&apos;ve
              got you covered. Browse our selection of the latest and greatest
              movies, and find your new favorite today.
            </p>

            <Link href="/movie">
              <button className="p-2  px-6 py-3 rounded-3xl border-[1px] bg-black text-white hover:bg-white hover:text-black hover:border-black hover:font-semibold">
                Explore Movies
              </button>
            </Link>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
            <img
              className="object-cover object-center rounded overflow-hidden "
              alt="hero"
              src={imgurl}
            />
          </div>
        </div>
       
      </section>
      <div class="custom-shape-divider-bottom-1723987923">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
    </div>
  );
};

export default Herosection;
