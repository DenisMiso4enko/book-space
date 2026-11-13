const FALLBACK_PATH = "/listings";

export function safeCallbackPath(
  value: string | null | undefined,
  fallback = FALLBACK_PATH,
) {
  if (!value) return fallback;
  if (!value.startsWith("/") || value.startsWith("//") || value.startsWith("/\\")) {
    return fallback;
  }
  if (value.includes("\\") || value.includes("://")) return fallback;
  if (
    value === "/login" ||
    value.startsWith("/login/") ||
    value.startsWith("/login?")
  ) {
    return fallback;
  }

  return value;
}
