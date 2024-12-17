import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

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
  })

  await prisma.user.createMany({
    data: [
      {
        name: "Admin",
        password: "$2a$10$CT2KQa0v1HOKIxWX5BzNou4p6agj69W3tp9yt3KYU32QKoJnqDL9S",
      },
      {
        name: "Vidext",
        password: "$2a$10$CT2KQa0v1HOKIxWX5BzNou4p6agj69W3tp9yt3KYU32QKoJnqDL9S",
      },
    ],
  })

  await prisma.videoLikes.createMany({
    data: [
      {
        userId: 1,
        videoId: 1,
      },
      {
        userId: 1,
        videoId: 2,
      },
      {
        userId: 2,
        videoId: 3,
      },
      {
        userId: 2,
        videoId: 4,
      },
    ],
  })

  console.log("Seed data created successfully!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })