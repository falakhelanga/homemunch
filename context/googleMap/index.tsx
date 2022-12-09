import React, { createContext, useContext, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import { MapContextType } from "../../types/googleMapTypes";

const MapContext = createContext<MapContextType | null>(null);
const libraries: any = ["places"];
const MapContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!!,
    libraries: libraries,
  });
  return (
    <MapContext.Provider value={{ isMapLoaded: isLoaded }}>
      {children}
    </MapContext.Provider>
  );
};

export default MapContextProvider;
export const useMap = () => useContext(MapContext) as MapContextType;
