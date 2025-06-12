import React from "react";

const BetaLandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400 text-white flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Join the Sportsloc Beta Testers
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Are you tired of struggling to find a football pitch, basketball or
          tennis court, (any sporting activity) and or players? We’re fixing
          that. Be a beta tester for Sportsloc today (where you help test our
          app before we ship publicly) — Sportsloc is the platform that brings
          local and international sports and players to your fingertips. Note:
          You get a free verification badge when you join our beta tester list
          and give an honest feedback after. Enter your email and we’ll notify
          you when the beta app is ready.
        </p>
        <form
          action="https://gmail.us1.list-manage.com/subscribe/post?u=c3236fede7b5c8e6e0417e4b4&amp;id=1fab91e900&amp;f_id=00c0aae1f0"
          method="post"
          target="_blank"
          noValidate
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <input
            type="email"
            name="EMAIL"
            id="mce-EMAIL"
            required
            placeholder="Enter your email"
            className="px-4 py-3 rounded-md text-white w-full sm:w-[300px] focus:outline-none ring-2 focus:ring-blue-400"
          />
          <input type="hidden" name="tags" value="3094188" />
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_c3236fede7b5c8e6e0417e4b4_1fab91e900"
              tabIndex="-1"
              defaultValue=""
            />
          </div>
          <button
            type="submit"
            name="subscribe"
            id="mc-embedded-subscribe"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition-all rounded-md font-semibold"
          >
            Notify Me
          </button>
        </form>
      </div>
      <footer className="mt-12 text-sm text-gray-300">
        Built with ❤️ by the Sportsloc Team
      </footer>
    </div>
  );
};

export default BetaLandingPage;
