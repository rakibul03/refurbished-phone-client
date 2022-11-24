import React from "react";

const Spinner = () => {
  return (
    <div className="flex h-screen items-center justify-center space-x-2">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-dotted border-primary"></div>
    </div>
  );
};

export default Spinner;
