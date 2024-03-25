import { cn } from "@/lib/utils";
import { getServerAuthSession } from "@/server/auth";
import Link from "next/link";

const AuthLink = async () => {
  const session = await getServerAuthSession();
  return (
    <Link
      href={session ? "/api/auth/signout" : "/api/auth/signin"}
      className={cn(
        "rounded-full bg-white/10 px-10 py-4 text-lg font-semibold no-underline transition hover:bg-white/20",
        session && "py-3 text-sm",
      )}
    >
      {session ? "Sign out" : "Sign in"}
    </Link>
  );
};

export default AuthLink;
