import { Button } from "@/components/ui/button";

export default function GuestActions() {
  return (
    <div className="flex items-center gap-4">
      <Button variant="ghost" href="/login">
        Sign in
      </Button>
      <Button variant="primary" href="/login">
        Get started
      </Button>
    </div>
  );
}
