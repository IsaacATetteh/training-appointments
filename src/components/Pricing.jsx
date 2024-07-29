"use client";
import React, { useState } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
import { UserLocationContext } from "../../context/UserLocationContext";

const Pricing = () => {
  return (
    <div className="bg-[#181616] p-10 md:p-8 rounded-lg shadow-lg w-full max-w-[450px] border border-gray-700">
      <h1 className="text-center text-4xl font-bold mb-8">SERVICES</h1>

      {/* 1 to 1 Section */}
      <div className="mb-6">
        <div className="bg-blue-500 text-white text-center py-2 rounded-lg">
          <h2 className="text-xl font-bold">1 TO 1</h2>
        </div>
        <div className=" border-blue-500">
          <div className="flex justify-between items-center py-3 px-4 border-b">
            <span className="font-semibold">1 hour</span>
            <span className="font-bold">£25</span>
          </div>
          <div className="flex justify-between items-center py-3 px-4">
            <span className="font-semibold">2 hours</span>
            <span className="font-bold">£50</span>
          </div>
        </div>
      </div>

      {/* 2 to 1 Section */}
      <div className="mb-6">
        <div className="bg-blue-500 text-white text-center py-2 rounded-lg">
          <h2 className="text-xl font-bold">2 TO 1</h2>
        </div>
        <div className=" border-blue-500">
          <div className="flex justify-between items-center py-3 px-4 border-b">
            <span className="font-semibold">1 hour</span>
            <span className="font-bold">£15 EACH</span>
          </div>
          <div className="flex justify-between items-center py-3 px-4">
            <span className="font-semibold">2 hours</span>
            <span className="font-bold">£30 EACH</span>
          </div>
        </div>
      </div>

      {/* Savings Bundles Section */}
      <div className="mb-6">
        <div className="bg-green-500 text-white text-center py-2 rounded-lg">
          <h2 className="text-xl font-bold">SAVINGS BUNDLES</h2>
        </div>
        <div className=" border-green-500">
          <div className="flex justify-between items-center py-3 px-4 border-b">
            <span className="font-semibold">4 x 1 hour (1 to 1)</span>
            <div>
              <span className="font-bold text-red-500">£90</span>
              <span className="line-through ml-2">£100</span>
            </div>
          </div>
          <div className="flex justify-between items-center py-3 px-4">
            <span className="font-semibold">4 x 1 hour (2 to 1)</span>
            <div>
              <span className="font-bold text-red-500">£55 EACH</span>
              <span className="line-through ml-2">£60 EACH</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600">
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default Pricing;
