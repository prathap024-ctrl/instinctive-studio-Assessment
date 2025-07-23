import { useState } from "react";
import Image from "next/image";

export default function IncidentItem({ incident, onResolved }) {
  const [resolving, setResolving] = useState(false);

  const handleResolve = async () => {
    setResolving(true);
    await fetch(`/api/incidents/${incident.id}/resolve`, { method: "PATCH" });
    await onResolved();
  };

  return (
    <div
      className={`p-3 rounded-lg border ${
        resolving ? "opacity-50" : ""
      } flex gap-3 items-center`}
    >
      <Image
        src={incident.thumbnailUrl || "/placeholder.jpg"}
        alt="Thumbnail"
        className="w-16 h-16 rounded object-cover"
        width={200}
        height={120}
      />
      <div className="flex-1 text-white">
        <div className="font-medium text-sm">{incident.type}</div>
        <div className="font-medium text-sm">Camera: {incident.cameraId}</div>
        <div className="text-xs">
          {incident.tsStart} - {incident.tsEnd}
        </div>
      </div>
      <button
        onClick={handleResolve}
        disabled={resolving}
        className="bg-green-600 text-white text-sm px-3 py-1 rounded hover:bg-green-700"
      >
        Resolve
      </button>
    </div>
  );
}
