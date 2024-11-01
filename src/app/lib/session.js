"use server";
import { redirect } from "next/navigation";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const key = new TextEncoder().encode(process.env.SECRET);

const cookie = {
  name: "session",
  options: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
  },
  duration: 1000 * 60 * 60 * 24 * 7, // 1 semaine
};

export default async function encrypt(payload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1day")
    .sign(key);
}

export async function decrypt(session) {
  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.error("errir", error);
    return null;
  }
}

export async function createSession(userId) {
  const expires = new Date(Date.now() + cookie.duration);
  const session = await encrypt({ userId, expires });
  cookies().set(cookie.name, session, { ...cookie.options, expires });
  redirect("/backoffice");
}

export async function verifySession() {
  try {
    const cookieStore = await cookies();
    const cookie = cookieStore.get("session")?.value;

    if (!cookie) {
      throw new Error("Session cookie not found");
    }

    const session = await decrypt(cookie);

    if (!session || !session.userId || session.expires < Date.now()) {
      throw new Error("Invalid session");
    }

    return { userId: session.userId };
  } catch (error) {
    console.error("Error verifying session:", error);
    return false;
  }
}

export async function deleteSession() {
  cookies().delete(cookie.name);
  redirect("/signin");
}
