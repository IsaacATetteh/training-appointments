"use client";
import React, { useState, useContext } from "react";
import Pricing from "./Pricing";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
import { UserLocationContext } from "../../context/UserLocationContext";

const containerStyle = {
  height: "600px",
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
    <section className="bg-[#09090B] text-white">
      <div className="items-center md:grid md:grid-cols-2 md:grid-rows-2 mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 border-0 border-green-400 ">
        <div className="col-span-2 h-[600px] border-2">
          <GoogleMap
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
                    <div className="flex flex-col justify-center items-center text-black">
                      <h1 className="font-bold text-md">{location.name}</h1>
                      <p className="line-clamp-1">{location.description}</p>
                    </div>
                  </InfoWindow>
                )}
              </Marker>
            ))}
          </GoogleMap>
        </div>
        <div className="flex justify-center">
          <Pricing />
        </div>
        <div className="flex justify-center">
          <Pricing />
        </div>
      </div>
    </section>
  );
};

export default Map;
