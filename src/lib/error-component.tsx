import type { ErrorComponentProps } from "@tanstack/react-router";

const FALLBACK_MESSAGE = "Something went wrong. Reload the page.";

function errorMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  if (typeof error === "string" && error) return error;
  return FALLBACK_MESSAGE;
}

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#03101f] px-6 text-center">
      <img src="/brand.png" alt="Wempsy Productions" className="w-[min(78vw,440px)]" />
      <p className="max-w-md text-sm break-words text-[#9ec9e8]">{errorMessage(error)}</p>
    </main>
  );
}
