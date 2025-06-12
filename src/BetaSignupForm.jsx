import React from "react";

const BetaSignupForm = () => {
  return (
    <form
      action="https://gmail.us1.list-manage.com/subscribe/post?u=c3236fede7b5c8e6e0417e4b4&amp;id=1fab91e900&amp;f_id=00c0aae1f0"
      method="post"
      target="_blank"
      noValidate
      className="flex flex-col items-center gap-4 w-full max-w-lg"
    >
      <h2 className="text-2xl font-bold text-white">Join the Beta</h2>
      <input
        type="email"
        name="EMAIL"
        id="mce-EMAIL"
        required
        placeholder="Enter your email"
        className="w-full px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input type="hidden" name="tags" value="3094188" />
      <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
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
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-md transition duration-300"
      >
        Notify Me
      </button>
    </form>
  );
};

export default BetaSignupForm;
