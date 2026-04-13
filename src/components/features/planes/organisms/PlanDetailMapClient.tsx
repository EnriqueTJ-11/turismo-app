"use client";

import React from "react";

type ReactLeafletModule = typeof import("react-leaflet");

type LeafletModule = typeof import("leaflet");

interface PlanDetailMapClientProps {
  position: [number, number];
  label: string;
}

const PlanDetailMapClient: React.FC<PlanDetailMapClientProps> = ({
  position,
  label,
}) => {
  const [leafletModule, setLeafletModule] = React.useState<
    ReactLeafletModule | null
  >(null);

  React.useEffect(() => {
    let isMounted = true;

    import("react-leaflet")
      .then((module) => {
        if (isMounted) {
          setLeafletModule(module);
        }
      })
      .catch(() => {
        if (isMounted) {
          setLeafletModule(null);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  React.useEffect(() => {
    let isMounted = true;

    import("leaflet").then((L: LeafletModule) => {
      if (!isMounted) return;

      const icon = L.icon({
        iconUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });

      L.Marker.prototype.options.icon = icon;
    });

    return () => {
      isMounted = false;
    };
  }, []);

  if (!leafletModule) {
    return (
      <div className="h-full w-full bg-slate-100" aria-label="Mapa en carga" />
    );
  }

  const { MapContainer, TileLayer, Marker, Popup } = leafletModule;

  return (
    <MapContainer
      center={position}
      zoom={11}
      scrollWheelZoom={false}
      className="h-full w-full z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright" title="OpenStreetMap">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>{label}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default PlanDetailMapClient;
