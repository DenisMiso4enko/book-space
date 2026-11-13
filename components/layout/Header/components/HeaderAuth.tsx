import { auth } from "@/auth/auth";
import GuestActions from "./GuestActions";
import UserMenu from "./UserMenu";

export default async function HeaderAuth() {
  const session = await auth();

  if (!session?.user) {
    return <GuestActions />;
  }

  return <UserMenu user={session.user} />;
}
