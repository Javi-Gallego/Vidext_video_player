import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.video.createMany({
    data: [
      {
        name: "Drone Footage",
        path: "/videos/Drone.mp4",
        views: 100,
        likes: 10,
      },
      {
        name: "Futuristic HUD",
        path: "/videos/HUD.mp4",
        views: 200,
        likes: 20,
      },
      {
        name: "THX Trailer",
        path: "/videos/Genesis.mp4",
        views: 300,
        likes: 30,
      },
      {
        name: "Howling wolf",
        path: "/videos/Wolf.mp4",
        views: 400,
        likes: 40,
      },
      {
        name: "Relaxin rain",
        path: "/videos/Rain.mp4",
        views: 500,
        likes: 50,
      },
    ],
  });

  console.log("Seed data created successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });