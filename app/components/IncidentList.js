"use client";

import useSWR from "swr";
import IncidentItem from "./IncidentItem";
import { useState } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function IncidentList() {
  const { data: incidents, mutate } = useSWR(
    "/api/incidents?resolved=false",
    fetcher
  );

  if (!incidents) return <div className="text-white p-4">Loading...</div>;

  return (
    <div className="bg-gray-900 rounded-xl text-white shadow p-4 space-y-3 max-h-[120vh] overflow-y-auto">
      {incidents.map((incident) => (
        <IncidentItem
          key={incident.id}
          incident={incident}
          onResolved={mutate}
        />
      ))}
    </div>
  );
}
