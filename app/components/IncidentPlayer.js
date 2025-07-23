// app/components/IncidentPlayer.tsx
import ThumbnailStrip from "./ThumbnailStrip";
import TimelineWrapper from "./timelineWrapper";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function IncidentPlayer() {
  const incidents = await prisma.incident.findMany({
    orderBy: { tsStart: "asc" },
  });

  return (
    <>
      <div className="bg-gray-900 text-white rounded-xl shadow p-4">
        <h2>Camera 1</h2>
        <video className="w-full rounded-lg" controls>
          <source src="/cctv.mp4" type="video/mp4" />
        </video>

        <ThumbnailStrip image="/thumbnails/thumb1.jpg" className="z-50" />
      </div>
      <div className="text-white mt-24 rounded-lg flex justify-center items-center">
        <TimelineWrapper incidents={incidents} />
      </div>
    </>
  );
}
