import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "yonas",
      email: "yon@gmail.com",
      age: 31,
    },
  });
  // const users = await prisma.user.findMany();
  // await prisma.user.deleteMany();
  console.log(user);
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
