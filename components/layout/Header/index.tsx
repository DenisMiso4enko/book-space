import Logo from "@/components/ui/logo";
import HeaderNav from "./components/HeaderNav";
import HeaderNavFallback from "./components/HeaderNavFallback";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";

export default function Header() {
  return (
    <header className="py-4 px-10 border border-b-outline-variant flex justify-between items-center">
      <div className="flex gap-8 items-center">
        <Logo />
        <Suspense fallback={<HeaderNavFallback />}>
          <HeaderNav />
        </Suspense>
      </div>
      <div className="flex gap-4 items-center">
        <Button variant="ghost">Sign in</Button>
        <Button variant="primary">Sign up</Button>
      </div>
    </header>
  );
}
