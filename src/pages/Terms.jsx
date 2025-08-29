import React from "react";
import { Title, Meta } from "react-head";

const Terms = () => {
  return (
    <div className="px-6 py-10 max-w-5xl mx-auto text-white">
      <Title>Terms of Service | ATOZ Movies</Title>
      <Meta
        name="description"
        content="Read the Terms of Service for ATOZ Movies website."
      />

      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <p className="text-gray-300 leading-relaxed mb-4">
        Welcome to ATOZ Movies. By accessing or using our website, you agree to
        comply with these Terms of Service. Please read them carefully.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Use of Content</h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        All content provided on this website is for personal entertainment
        purposes only. You may not redistribute, reproduce, or commercialize our
        content without explicit permission.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        User Responsibilities
      </h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        Users must not engage in illegal activities, upload harmful files, or
        violate copyright laws while using the website.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Limitation of Liability
      </h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        ATOZ Movies is not responsible for any damages or losses resulting from
        the use of the website. All content is provided "as is."
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Changes to Terms</h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        We may update these Terms of Service at any time without notice. Your
        continued use of the website constitutes acceptance of the updated
        terms.
      </p>
    </div>
  );
};

export default Terms;
