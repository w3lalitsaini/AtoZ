import React from "react";
import { Title, Meta } from "react-head";

const Privacy = () => {
  return (
    <div className="px-6 py-10 max-w-5xl mx-auto text-white">
      <Title>Privacy Policy | ATOZ Movies</Title>
      <Meta
        name="description"
        content="Read the Privacy Policy of ATOZ Movies website."
      />

      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="text-gray-300 leading-relaxed mb-4">
        Your privacy is important to us. This Privacy Policy explains how ATOZ
        Movies collects, uses, and protects your personal information.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Information We Collect
      </h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        We may collect data such as cookies, IP addresses, and usage information
        to improve the website experience. We do not collect sensitive personal
        data.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Use of Information</h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        Collected information helps us optimize website performance, display
        personalized ads, and analyze traffic. We never sell your personal data
        to third parties.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Third-Party Services</h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        We use Google Analytics, AdSense, and Google Tag Manager for analytics
        and ads. These services may collect limited information for
        functionality.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Cookies</h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        Cookies help us provide a better user experience and analyze traffic.
        You can disable cookies via your browser settings, but some features may
        not work properly.
      </p>
    </div>
  );
};

export default Privacy;
