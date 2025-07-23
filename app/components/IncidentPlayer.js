
import ThumbnailStrip from "./ThumbnailStrip";

export default async function IncidentPlayer() {
  return (
    <>
      <div className="bg-gray-900 text-white rounded-xl shadow p-4">
        <h2>Camera 1</h2>
        <video className="w-full rounded-lg" controls>
          <source src="/cctv.mp4" type="video/mp4" />
        </video>

        <ThumbnailStrip />
      </div>
    </>
  );
}
