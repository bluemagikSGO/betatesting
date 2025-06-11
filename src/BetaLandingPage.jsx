import React, { useState } from "react";

const BetaLandingPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission - replace with real backend or formsubmit later
    console.log("Email submitted:", email);
    setSubmitted(true);
    setEmail("");
  };

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
          and give an honest feedback after. Enter your email and you notify you
          when the beta app is ready
        </p>
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-md text-white w-full sm:w-[300px] focus:outline-none ring-2 focus:ring-blue-300"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition-all rounded-md font-semibold"
            >
              Notify Me
            </button>
          </form>
        ) : (
          <div className="mt-4 text-green-300 font-medium">
            🎉 Thank you! You'll be notified when Sportsloc goes live.
          </div>
        )}
      </div>
      <footer className="mt-12 text-sm text-gray-300">
        Built with ❤️ by the Sportsloc Team
      </footer>
    </div>
  );
};

export default BetaLandingPage;
