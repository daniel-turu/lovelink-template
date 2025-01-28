import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="animate-pulse">
        <img
          src="/lovelink.png"
          alt="Loading"
          className="w-20 h-20"
        />
        <p className="text-lg font-semibold text-gray-700">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
