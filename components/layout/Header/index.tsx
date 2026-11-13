import Logo from "@/components/ui/logo";
import HeaderNav from "./components/HeaderNav";
import HeaderNavFallback from "./components/HeaderNavFallback";
import HeaderAuth from "./components/HeaderAuth";
import HeaderAuthFallback from "./components/HeaderAuthFallback";
import { Suspense } from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-b-outline-variant bg-on-primary px-10 py-4">
      <div className="flex items-center gap-8">
        <Logo />
        <Suspense fallback={<HeaderNavFallback />}>
          <HeaderNav />
        </Suspense>
      </div>
      <Suspense fallback={<HeaderAuthFallback />}>
        <HeaderAuth />
      </Suspense>
    </header>
  );
}
