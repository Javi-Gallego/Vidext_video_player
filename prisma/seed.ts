import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  await prisma.video.createMany({
    data: [
      {
        name: "Drone Footage",
        path: "/videos/Drone.mp4",
        views: 100,
      },
      {
        name: "Futuristic HUD",
        path: "/videos/HUD.mp4",
        views: 50,
      },
      {
        name: "THX Trailer",
        path: "/videos/Genesis.mp4",
        views: 80,
      },
      {
        name: "Howling wolf",
        path: "/videos/Wolf.mp4",
        views: 120,
      },
      {
        name: "Relaxin rain",
        path: "/videos/Rain.mp4",
        views: 60,
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
      {
        name: "User1",
        password: "$2a$10$CT2KQa0v1HOKIxWX5BzNou4p6agj69W3tp9yt3KYU32QKoJnqDL9S",
      },
      {
        name: "User2",
        password: "$2a$10$CT2KQa0v1HOKIxWX5BzNou4p6agj69W3tp9yt3KYU32QKoJnqDL9S",
      },
      {
        name: "User3",
        password: "$2a$10$CT2KQa0v1HOKIxWX5BzNou4p6agj69W3tp9yt3KYU32QKoJnqDL9S",
      },
      {
        name: "User4",
        password: "$2a$10$CT2KQa0v1HOKIxWX5BzNou4p6agj69W3tp9yt3KYU32QKoJnqDL9S",
      },
      {
        name: "User5",
        password: "$2a$10$CT2KQa0v1HOKIxWX5BzNou4p6agj69W3tp9yt3KYU32QKoJnqDL9S",
      },
      {
        name: "User6",
        password: "$2a$10$CT2KQa0v1HOKIxWX5BzNou4p6agj69W3tp9yt3KYU32QKoJnqDL9S",
      },
      {
        name: "User7",
        password: "$2a$10$CT2KQa0v1HOKIxWX5BzNou4p6agj69W3tp9yt3KYU32QKoJnqDL9S",
      },
      {
        name: "User8",
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
      {
        userId: 3,
        videoId: 1,
      },
      {
        userId: 3,
        videoId: 2,
      },
      {
        userId: 3,
        videoId: 3,
      },
      {
        userId: 3,
        videoId: 4,
      },
      {
        userId: 3,
        videoId: 5,
      },
      {
        userId: 4,
        videoId: 1,
      },
      {
        userId: 4,
        videoId: 3,
      },
      {
        userId: 5,
        videoId: 1,
      },
      {
        userId: 5,
        videoId: 4,
      },
      {
        userId: 6,
        videoId: 1,
      },
      {
        userId: 7,
        videoId: 1,
      },
      {
        userId: 7,
        videoId: 3,
      },
      {
        userId: 7,
        videoId: 4,
      },
      {
        userId: 8,
        videoId: 1,
      },
      {
        userId: 9,
        videoId: 1,
      },
      {
        userId: 10,
        videoId: 1,
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