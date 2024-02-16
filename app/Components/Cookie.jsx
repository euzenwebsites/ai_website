import React from "react";

const Cookie = () => (
  <div className="absolute bottom-0 shadow-2xl z-50">
    <div className="flex justify-between items-center bg-white w-screen">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, illum
        est, illo esse voluptas
      </p>
      <div className="flex justify-between items-center gap-2">
        <button className="bg-black text-white px-3 py-2 rounded-xl">
          Cookie settings
        </button>
        <button className="bg-indigo-500 text-white px-3 py-2 rounded-xl">
          Accept all Cookies{" "}
        </button>
      </div>
    </div>
  </div>
);

export default Cookie;
