import React from "react";

const Spinner = () => {
  return (
    <div className="flex h-screen items-center justify-center space-x-2">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-dashed border-gray-900"></div>
    </div>
  );
};

export default Spinner;
