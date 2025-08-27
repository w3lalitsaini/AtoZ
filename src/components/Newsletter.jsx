import React, { useState } from "react";
import emailjs from "emailjs-com";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setStatus("Please enter your email.");
      return;
    }

    // EmailJS config (replace with your IDs from EmailJS dashboard)
    const serviceID = "service_ga2blcb";
    const templateID = "template_nb10fgs";
    const userID = "F4ictXTnHhFd_OerL";

    emailjs.send(serviceID, templateID, { email }, userID).then(
      (response) => {
        setStatus("✅ Thank you for subscribing!");
        setEmail("");
      },
      (error) => {
        setStatus("❌ Something went wrong. Try again.");
      }
    );
  };

  return (
    <div className="bg-gray-900 text-white py-10 px-5 text-center">
      <h2 className="text-3xl font-bold mb-3 text-green-500">
        Subscribe to our Newsletter
      </h2>
      <p className="text-gray-400 mb-6">
        Get the latest updates, movies, and news delivered to your inbox.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 justify-center"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-3 rounded-lg outline-none w-full sm:w-72 bg-slate-600"
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-400 cursor-pointer text-black font-semibold px-6 py-1 rounded-lg transition duration-300"
        >
          Subscribe
        </button>
      </form>

      {status && <p className="mt-4 text-sm">{status}</p>}
    </div>
  );
};

export default Newsletter;
