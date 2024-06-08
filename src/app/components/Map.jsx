"use client";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useContext } from "react";
import { UserLocationContext } from "../../../context/UserLocationContext";

const containerStyle = {
  height: "450px",
};

const center = {
  lat: 55.890524554287445,
  lng: -3.962391835527037,
};

const one = {
  lat: 55.95665298520814,
  lng: -3.1177940448619554,
};
const two = {
  lat: 55.84680856155376,
  lng: -4.2340592448675345,
};

const three = {
  lat: 56.140329460259395,
  lng: -3.9284515332014083,
};

const four = {
  lat: 56.119137471526386,
  lng: -3.9124087896610975,
};

const five = {
  lat: 55.895673380341364,
  lng: -3.5516283165493534,
};

const six = {
  lat: 55.80277664339395,
  lng: -3.9164336198084864,
};

const seven = {
  lat: 55.94529376098116,
  lng: -4.00248839884399,
};

const eight = {
  lat: 55.997646369462224,
  lng: -3.7639443804850545,
};

const nine = {
  lat: 56.39003890464395,
  lng: -3.4365260555264134,
};

const ten = {
  lat: 56.4770085347306,
  lng: -3.000057578828087,
};

const Map = () => {
  const { userLocation } = useContext(UserLocationContext);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });

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
            <Marker position={one} />
            <Marker position={two} />
            <Marker position={three} />
            <Marker position={four} />
            <Marker position={five} />
            <Marker position={six} />
            <Marker position={seven} />
            <Marker position={eight} />
            <Marker position={nine} />
            <Marker position={ten} />
          </GoogleMap>
        </div>
        <div className="flex flex-col space-y-4  w-full lg:w-1/2">
          <p>
            <span className="font-bold">1. </span>Wallace High School, Airthrey
            Rd., Stirling, Scotland FK9 5JP
          </p>
          <p>
            <span className="font-bold">2. </span>8 King's Drive, Glasgow, G40
            1HB, United Kingdom
          </p>
          <p>
            <span className="font-bold">3. </span>
            Wallace High School, Airthrey Rd., Stirling, Scotland FK9 5JP,
            United Kingdom
          </p>
          <p>
            <span className="font-bold">4. </span>FK7 7UJ, Stirling, Stirling,
            Scotland, United Kingdom
          </p>
          <p>
            <span className="font-bold">5. </span> EH54 7EE, Livingston, West
            Lothian, Scotland, United Kingdom
          </p>
          <p>
            <span className="font-bold">6. </span>
            ML1 5QN, Motherwell, North Lanarkshire, Scotland, United Kingdom
          </p>
          <p>
            <span className="font-bold">7. </span>Dowanfield Road, Cumbernauld,
            Glasgow, G67 1LA, United Kingdom
          </p>
          <p>
            <span className="font-bold">8. </span>
            Graeme High School, Callendar Rd, Falkirk, Scotland FK1 1SW, United
            Kingdom
          </p>
          <p>
            <span className="font-bold">9. </span>PH2 8EB, Perth, Perth and
            Kinross, Scotland, United Kingdom
          </p>
          <p>
            <span className="font-bold">10. </span>DD2 3PT, Dundee, Dundee City,
            Scotland, United Kingdom
          </p>
        </div>
      </div>
    </div>
  );
};

export default Map;
