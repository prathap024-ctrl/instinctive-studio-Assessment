import Image from "next/image";

export default function ThumbnailStrip({ image }) {
  if (!image) return null;

  return (
    <>
      <div className="flex gap-4 mt-4 h-18 text-white">
        <div>
          <h3>
            <span className="text-md font-semibold">Camera 2</span>
          </h3>
          <Image
            src={image}
            alt="Camera 1 thumbnail"
            width={200}
            height={120}
            className="rounded-lg object-cover"
          />
        </div>
        <div>
          <h3>
            <span className="text-md font-semibold">Camera 3</span>
          </h3>
          <Image
            src={image}
            alt="Camera 2 thumbnail"
            width={200}
            height={120}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </>
  );
}
