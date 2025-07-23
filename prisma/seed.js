import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const cameras = await prisma.camera.createMany({
    data: [
      { name: "Shop Floor A", location: "Ground Floor" },
      { name: "Vault", location: "Back Room" },
      { name: "Entrance", location: "Main Gate" },
    ],
  });

  const now = new Date();
  const fmt = (d) => {
    const day = d.getDate().toString().padStart(2, "0");
    const month = d.toLocaleString("en-US", { month: "long" }).toLowerCase();
    const year = d.getFullYear();
    const time = d.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    return `${time} - ${day}/${month}/${year}`;
  };

  for (let i = 0; i < 12; i++) {
    const start = new Date(now.getTime() - i * 60 * 60 * 10000);
    const end = new Date(start.getTime() + 5 * 60000);

    await prisma.incident.create({
      data: {
        cameraId: (i % 3) + 1,
        type: ["Unauthorized Access", "Gun Threat", "Face Recognized"][i % 3],
        tsStart: fmt(start),
        tsEnd: fmt(end),
        thumbnailUrl: `/thumbnails/thumb${(i % 5) + 1}.jpg`,
        resolved: false,
      },
    });
  }
}

main()
  .then(() => console.log("Seed complete!"))
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
