"use client";
import React, { useState } from "react";

const Pricing = () => {
  const [price, setPrice] = useState(25); // Default price for regular sessions
  const [specialPrice, setSpecialPrice] = useState(90); // Default price for special offers

  const [sessionType, setSessionType] = useState("1to1"); // Default session type for regular sessions
  const [specialType, setSpecialType] = useState("special1"); // Default session type for special offers

  const handleDurationChange = (event) => {
    const selectedDuration = event.target.value;
    updatePrice(sessionType, selectedDuration);
  };

  const handleSessionTypeChange = (event) => {
    const selectedSessionType = event.target.value;
    setSessionType(selectedSessionType);
    const duration = document.getElementById("duration").value; // Consider using state instead
    updatePrice(selectedSessionType, duration);
  };

  const handleSpecialChange = (event) => {
    const selectedSpecialType = event.target.value;
    setSpecialType(selectedSpecialType);
    updateSpecialPrice(selectedSpecialType);
  };

  const updatePrice = (sessionType, duration) => {
    let newPrice;
    // Regular session pricing logic
    if (sessionType === "1to1") {
      newPrice = duration === "60" ? 40 : 25;
    } else if (sessionType === "2to1") {
      newPrice = duration === "60" ? 50 : 30;
    } else if (sessionType === "3to1") {
      newPrice = duration === "60" ? 60 : 35;
    } else if (sessionType === "4to1") {
      newPrice = duration === "60" ? 70 : 40;
    }
    setPrice(newPrice);
  };

  const updateSpecialPrice = (specialType) => {
    // Special offer pricing logic
    let newSpecialPrice;
    if (specialType === "special1") {
      newSpecialPrice = 90; // Price for special1
    } else if (specialType === "special2") {
      newSpecialPrice = 110; // Price for special2
    }
    setSpecialPrice(newSpecialPrice);
  };

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-4 lg:px-8 mt-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex  items-center justify-center   border-gray-200 border rounded-md   py-8 border-[#4d5baaa6]">
            <div className="flex  flex-col w-3/4">
              <h1 className="text-3xl font-bold mb-4">Book A Session:</h1>
              <p className="font-semibold text-lg mb-4">£{price}.00</p>
              <form className="flex flex-col">
                <label htmlFor="sessionType" className="mb-2 font-medium">
                  Session Type
                </label>
                <select
                  id="sessionType"
                  name="sessionType"
                  className="mb-4 border border-gray-300 p-2 rounded"
                  onChange={handleSessionTypeChange}
                >
                  <option value="1to1">1 to 1</option>
                  <option value="2to1">2 to 1</option>
                  <option value="3to1">3 to 1</option>
                  <option value="4to1">4 to 1</option>
                </select>
                <label htmlFor="duration" className="mb-2 font-medium">
                  Duration
                </label>
                <select
                  id="duration"
                  name="duration"
                  className="mb-4 border border-gray-300 p-2 rounded"
                  onChange={handleDurationChange}
                >
                  <option value="30">1 hour</option>
                  <option value="60">2 hours</option>
                </select>
                <button
                  type="button"
                  className="w-full self-start px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={() => {}}
                >
                  Select
                </button>
              </form>
              <h2 className="font-semibold text-center mt-6">
                Location: Specify in "location section" in request form
              </h2>
            </div>
          </div>
          <div className="flex  justify-center py-8  border-gray-200 border rounded-md">
            <div className="flex flex-col w-3/4">
              <h1 className="text-3xl font-bold mb-4">Special Offers</h1>
              <p className="font-semibold text-lg mb-4">£{specialPrice}.00</p>
              <form className="flex flex-col">
                <label htmlFor="specialType" className="mb-2 font-medium">
                  Bundles
                </label>
                <select
                  id="specialType"
                  name="specialType"
                  className="mb-4 border border-gray-300 p-2 rounded"
                  onChange={handleSpecialChange}
                >
                  <option value="special1">
                    4 x (1 to 1 sessions, 1 hour each)
                  </option>
                  <option value="special2">
                    4 x (2 to 1 sessions, 1 hour each)
                  </option>
                </select>

                <button
                  type="button"
                  className="w-full self-start px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={() => {}}
                >
                  Select
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
