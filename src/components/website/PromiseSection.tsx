import React from "react";

const PromiseSection: React.FC = () => {
  return (
    <section className="bg-blue-500 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-6 mb-4">
          {/* Logo Icon */}
          <img src="./jl-insurance-logo.svg" alt="" />
          <div className="">
            {/* Title */}
            <h2 className="text-white text-start text-3xl font-semibold">
              The Justlife Promise - Excellence in Every Home
            </h2>
            {/* Content */}
            <p className="text-white text-xl text-start max-w-3xl mx-auto">
              At Justlife, we commit to the highest standards of home care. Our
              trained professionals deliver a superior service experience,
              ensuring your home is in expert hands. Your peace of mind is our
              promise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
