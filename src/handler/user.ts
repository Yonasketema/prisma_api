import prisma from "../db";
import { comparePasswords, createJWT, hashPassword } from "../modules/auth";

export const createUser = async (req, res) => {
  const user = await prisma.user.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      password: await hashPassword(req.body.password),
    },
  });

  const token = createJWT(user);
  res.status(201).json({ token });
};

export const signin = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      email: req.body.email,
    },
  });

  const isValid = await comparePasswords(req.body.password, user.password);

  if (!isValid) {
    return res.status(404).json({ message: "incorrect password or email" });
  }

  const token = createJWT(user);
  res.status(201).json({ token });
};
