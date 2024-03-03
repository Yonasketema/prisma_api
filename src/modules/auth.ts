import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const comparePasswords = (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};
export const hashPassword = (password: string) => {
  return bcrypt.hash(password, 12);
};

export const createJWT = (user) => {
  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    process.env.JWT_SECRET
  );

  return token;
};

export const protect = (req, res, next) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    res.status(401).json({ message: "not authorized" });
    return;
  }

  const [, token] = bearer.split(" ");

  if (!token) {
    res.status(401).json({ message: "not valid token" });
    return;
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "not valid token" });
    return;
  }
};
