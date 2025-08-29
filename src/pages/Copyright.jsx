import React from "react";
import { Title, Meta } from "react-head";

const Copyright = () => {
  return (
    <div className="px-6 py-10 max-w-5xl mx-auto text-white">
      <Title>Copyright Notice | ATOZ Movies</Title>
      <Meta
        name="description"
        content="Copyright information for ATOZ Movies website."
      />

      <h1 className="text-3xl font-bold mb-6">Copyright Notice</h1>

      <p className="text-gray-300 leading-relaxed mb-4">
        All content on ATOZ Movies is provided for educational and informational
        purposes only. We do not claim ownership of any copyrighted material.
        All rights belong to their respective owners.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">DMCA Compliance</h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        If you believe your copyrighted work has been used without permission,
        please contact us immediately at <strong>contact@atozmovies.in</strong>.
        We will respond according to the DMCA guidelines.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Content Removal Requests
      </h2>
      <p className="text-gray-300 leading-relaxed mb-4">
        Upon receiving a valid notice, we will review the claim and take
        appropriate action, which may include removal of infringing content.
      </p>
    </div>
  );
};

export default Copyright;
