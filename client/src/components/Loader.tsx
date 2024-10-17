import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      {/* Simple spinning loader */}
      <div className="w-6 h-6 border-4 border-t-white border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
