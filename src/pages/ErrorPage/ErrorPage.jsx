import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="flex h-screen items-center bg-gray-900 p-16 text-gray-400">
      <div className="container mx-auto my-8 flex flex-col items-center justify-center px-5">
        <div className="max-w-md text-center">
          <div className="container mx-auto my-8 flex flex-col items-center justify-center space-y-8 px-5 text-center sm:max-w-md">
            <img
              src="https://i.ibb.co/c1Wwv23/41j6b-Ocbyk-L.png"
              alt=""
              className="h-48 w-48 rounded-full"
            />
          </div>

          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 text-gray-400">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link
            to="/"
            className="rounded bg-violet-400 px-8 py-3 font-semibold text-gray-900"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
