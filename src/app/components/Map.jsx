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
    position: { lat: 56.140329460259395, lng: -3.9284515332014083 },
    description: "Airthrey Rd, Stirling, Scotland FK9 5JP",
    name: "Wallace High School",
  },
  {
    position: { lat: 56.11897131396835, lng: -3.912918855291855 },
    description: "Springkerse, Stirling FK7 7UJ",
    name: "Forthbank Performance Centre",
  },
  {
    position: { lat: 55.94529376098116, lng: -4.00248839884399 },
    description: "Dowanfield Road, Cumbernauld, G67 1LA",
    name: "Ravenswood Playing Fields",
  },
  {
    position: { lat: 55.93363615653315, lng: -3.290043525850762 },
    description: "208 Broomhouse Rd, Edinburgh EH12 9AD",
    name: "St Augustines 3G",
  },
  {
    position: { lat: 55.904232545912905, lng: -3.151817160059795 },
    description: "136 Lasswade Rd, Edinburgh EH16 6TZ",
    name: "Gracemount High School",
  },
];

const Map = () => {
  const { userLocation } = useContext(UserLocationContext);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [mapRef, setMapRef] = useState(null);

  const handleMapLoad = (map) => {
    setMapRef(map);
  };

  const handleLocationClick = (location) => {
    if (mapRef) {
      mapRef.panTo(location.position);
      mapRef.setZoom(12);
    }
    setSelectedLocation(location);
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 border-0 border-black">
      <div className="flex flex-col  lg:flex-row lg:items-start">
        <div className="flex flex-col space-y-4 w-full lg:w-1/2">
          <h1 className="text-3xl font-bold mb-8">Main Training Locations</h1>

          <h2 className="font-bold text-xl">Stirling:</h2>
          <ul className="list-disc pl-5">
            <li
              className="location-item cursor-pointer"
              onClick={() => handleLocationClick(locations[0])}
            >
              Wallace High School
            </li>
            <li
              className="location-item cursor-pointer"
              onClick={() => handleLocationClick(locations[1])}
            >
              Forthbank Performance Centre
            </li>
          </ul>
          <h3 className="font-bold text-xl">Cumbernauld:</h3>
          <ul className="list-disc pl-5">
            <li
              className="location-item cursor-pointer"
              onClick={() => handleLocationClick(locations[2])}
            >
              Ravenswood Playing Fields
            </li>
          </ul>
          <h3 className="font-bold text-xl">Edinburgh:</h3>
          <ul className="list-disc pl-5">
            <li
              className="location-item cursor-pointer"
              onClick={() => handleLocationClick(locations[3])}
            >
              St Augustines 3G
            </li>
            <li
              className="location-item cursor-pointer"
              onClick={() => handleLocationClick(locations[4])}
            >
              Gracemount High School
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 border-0 border-black">
          <GoogleMap
            classname="pl-8"
            mapContainerStyle={containerStyle}
            center={center}
            zoom={8}
            onLoad={handleMapLoad}
          >
            {locations.map((location, index) => (
              <Marker
                key={index}
                position={location.position}
                onClick={() => setSelectedLocation(location)}
              >
                {selectedLocation === location && (
                  <InfoWindow onCloseClick={() => setSelectedLocation(null)}>
                    <div className="flex flex-col justify-center items-center">
                      <h1 className="font-bold text-md">{location.name}</h1>
                      <p className="line-clamp-1">{location.description}</p>
                    </div>
                  </InfoWindow>
                )}
              </Marker>
            ))}
          </GoogleMap>
        </div>
      </div>
    </div>
  );
};

export default Map;
