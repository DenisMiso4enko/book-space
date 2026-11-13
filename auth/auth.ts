import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { prisma } from "@/lib/prisma";
import { authConfig } from "./config";

function githubProfileFields(profile: unknown) {
  if (!profile || typeof profile !== "object") return {};

  const value = profile as {
    avatar_url?: unknown;
    name?: unknown;
    login?: unknown;
  };

  return {
    image: typeof value.avatar_url === "string" ? value.avatar_url : undefined,
    name:
      typeof value.name === "string"
        ? value.name
        : typeof value.login === "string"
          ? value.login
          : undefined,
  };
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  callbacks: {
    ...authConfig.callbacks,
    signIn({ user }) {
      return Boolean(user.email);
    },
  },
  events: {
    async signIn({ user, profile }) {
      if (!user.id) return;

      const fields = githubProfileFields(profile);
      const image = fields.image ?? user.image ?? undefined;
      const name = fields.name ?? user.name ?? undefined;

      if (!image && !name) return;

      await prisma.user.update({
        where: { id: user.id },
        data: {
          ...(name ? { name } : {}),
          ...(image ? { image, avatarUrl: image } : {}),
        },
      });
    },
  },
});
