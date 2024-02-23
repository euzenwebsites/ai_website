"use client"

import React from "react";
import { useState } from "react";

const Cookie = () => {
  const [show, setShow] = useState(true)
  return (
    <>
      {
        show && <div className="bottom-0 fixed bg-white z-50 w-screen px-4 py-2">
          <div className="flex justify-between items-center text-gray-500">
            <p>
              We use cookies to ensure you have the best experience on our site, to analyze traffic, and enhance our marketing activities. <a className="text-gray-600 underline">Learn more</a>
            </p>
            <div className="flex justify-between items-center gap-2">
              <button className="bg-black text-white p-2 rounded-xl">
                Cookie settings
              </button>
              <button className="bg-indigo-500 text-white p-2 rounded-xl" onClick={() => setShow(false)}>
                Accept all Cookies
              </button>
            </div>
          </div>
        </div>
      }

    </>
  )
};

export default Cookie;