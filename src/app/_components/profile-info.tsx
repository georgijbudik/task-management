import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getServerAuthSession } from "@/server/auth";
import AuthLink from "./auth-link";

const ProfileInfo = async () => {
  const session = await getServerAuthSession();

  const nameFirstLetter = session?.user.name?.slice(0, 1).toUpperCase();

  return (
    <div className="absolute right-16 top-16 flex items-center gap-4">
      <h2 className="text-lg font-semibold">{session?.user.name}</h2>
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
          <Avatar>
            <AvatarImage src={session?.user?.image!} />
            <AvatarFallback>{nameFirstLetter}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>
            <AuthLink />
          </DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfileInfo;
