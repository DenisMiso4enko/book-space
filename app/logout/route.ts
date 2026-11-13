import { safeCallbackPath } from "@/auth/callback-path";
import { auth, signOut } from "@/auth/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const callbackUrl = new URL(request.url).searchParams.get("callbackUrl");
  const nextPath = safeCallbackPath(callbackUrl);
  const session = await auth();
  const user = session?.user?.id
    ? await prisma.user.findUnique({ where: { id: session.user.id } })
    : null;

  if (user) {
    redirect(nextPath);
  }

  await signOut({
    redirectTo: `/login?callbackUrl=${encodeURIComponent(nextPath)}`,
  });
}
