import Image from "next/image";
import image1 from "@/public/thumbnails/thumb1.jpg";
import image2 from "@/public/thumbnails/thumb2.jpg";

const image ={
  image1 : image1,
  image2 : image2
}

export default function ThumbnailStrip() {

  return (
    <>
      <div className="flex gap-4 mt-4 h-18 text-white">
        <div>
          <h3>
            <span className="text-md font-semibold">Camera 2</span>
          </h3>
          <Image
            src={image.image1}
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
            src={image.image2}
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
