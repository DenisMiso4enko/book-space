import { signIn } from "@/auth/auth";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { Button } from "../button";

type LoginFormProps = {
  redirectTo?: string;
};

export default function LoginForm({ redirectTo = "/listings" }: LoginFormProps) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", { redirectTo });
      }}
      className="w-full"
    >
      <Button
        type="submit"
        variant="dark"
        size="lg"
        className="w-full"
        leadingIcon={<GitHubIcon className="size-5" />}
      >
        Continue with GitHub
      </Button>
    </form>
  );
}
