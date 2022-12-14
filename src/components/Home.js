import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative flex flex-col-reverse py-16 mb-6  lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200619211856/7-Best-Learning-Methods-for-Self-Taught-Developers.png"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Self
            <br className="hidden md:block" />
            Taught{" "}
            <span className="inline-block text-deep-purple-accent-400 text-violet-700">
              Programmer
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            Learn Programming and Be a Programmer. Explore yourself the depth of
            the Programming
          </p>
          <div className="flex items-center">
            <Link
              to={"/register"}
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide font-bold transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
            >
              Register
            </Link>
            <Link
              to={"/login"}
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 bg-sky-400 hover:bg-sky-700 px-6 py-3 rounded transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Log In
            </Link>
          </div>
          <div>
            <label
              for="Toggle3"
              className="inline-flex items-center p-2 rounded-md cursor-pointer text-gray-800"
            >
              <input id="Toggle3" type="checkbox" className="hidden peer" />
              <span className="px-4 py-2 rounded-l-md bg-violet-400 peer-checked:bg-gray-300">
                Dark
              </span>
              <span className="px-4 py-2 rounded-r-md bg-gray-300 peer-checked:bg-violet-400">
                Light
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
