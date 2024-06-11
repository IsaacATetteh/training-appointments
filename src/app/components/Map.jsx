"use client";
import React, { useState, useContext } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
import { UserLocationContext } from "../../../context/UserLocationContext";

const containerStyle = {
  height: "450px",
};

const center = {
  lat: 55.890524554287445,
  lng: -3.962391835527037,
};

const locations = [
  {
    position: { lat: 55.95665298520814, lng: -3.1177940448619554 },
    description: "10 Westbank Street, Edinburgh, EH15 1DR, United Kingdom",
  },
  {
    position: { lat: 55.84680856155376, lng: -4.2340592448675345 },
    description: "8 King's Drive, Glasgow, G40 1HB, United Kingdom",
  },
  {
    position: { lat: 56.140329460259395, lng: -3.9284515332014083 },
    description:
      "Wallace High School, Airthrey Rd., Stirling, Scotland FK9 5JP, United Kingdom",
  },
  {
    position: { lat: 56.119137471526386, lng: -3.9124087896610975 },
    description: "FK7 7UJ, Stirling, Stirling, Scotland, United Kingdom",
  },
  {
    position: { lat: 55.895673380341364, lng: -3.5516283165493534 },
    description: "EH54 7EE, Livingston, West Lothian, Scotland, United Kingdom",
  },
  {
    position: { lat: 55.80277664339395, lng: -3.9164336198084864 },
    description:
      "ML1 5QN, Motherwell, North Lanarkshire, Scotland, United Kingdom",
  },
  {
    position: { lat: 55.94529376098116, lng: -4.00248839884399 },
    description:
      "Dowanfield Road, Cumbernauld, Glasgow, G67 1LA, United Kingdom",
  },
  {
    position: { lat: 55.997646369462224, lng: -3.7639443804850545 },
    description:
      "Graeme High School, Callendar Rd, Falkirk, Scotland FK1 1SW, United Kingdom",
  },
  {
    position: { lat: 56.39003890464395, lng: -3.4365260555264134 },
    description: "PH2 8EB, Perth, Perth and Kinross, Scotland, United Kingdom",
  },
  {
    position: { lat: 56.4770085347306, lng: -3.000057578828087 },
    description: "DD2 3PT, Dundee, Dundee City, Scotland, United Kingdom",
  },
];

const Map = () => {
  const { userLocation } = useContext(UserLocationContext);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });

  const [selectedLocation, setSelectedLocation] = useState(null);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 border-0 border-black">
      <h1 className="text-3xl font-semibold mb-8">
        Richard's Training Locations
      </h1>
      <div className="flex flex-col lg:flex-row lg:items-start">
        <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 border-0 border-black">
          <GoogleMap
            classname="pl-8"
            mapContainerStyle={containerStyle}
            center={center}
            zoom={8}
          >
            {locations.map((location, index) => (
              <Marker
                key={index}
                position={location.position}
                onClick={() => setSelectedLocation(location)}
              >
                {selectedLocation === location && (
                  <InfoWindow onCloseClick={() => setSelectedLocation(null)}>
                    <div>{location.description}</div>
                  </InfoWindow>
                )}
              </Marker>
            ))}
          </GoogleMap>
        </div>
        <div className="flex flex-col space-y-4 w-full lg:w-1/2">
          {locations.map((location, index) => (
            <p key={index}>
              <span className="font-bold">{index + 1}. </span>
              {location.description}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Map;
