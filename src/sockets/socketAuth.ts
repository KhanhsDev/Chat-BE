import type { ExtendedError } from "socket.io";
import { AuthSocket } from "../types/socket";
import jwt from "jsonwebtoken";

export async function socketAuth(
  socket: AuthSocket,
  next: (err?: ExtendedError) => void,
) {
  try {
    const token = socket.handshake.auth.token;

    if (!token) {
      throw new Error("Unauthorized");
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET!) as any;

    socket.user = {
      id: payload.id,
      email: payload.email,
    };

    next();
  } catch {
    next(new Error("Unauthorized"));
  }
}
