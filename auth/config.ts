import type { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";

export const authConfig = {
  providers: [
    GitHub({
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }

      return session;
    },
  },
} satisfies NextAuthConfig;
