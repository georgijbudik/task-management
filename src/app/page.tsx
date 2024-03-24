import { getServerAuthSession } from "@/server/auth";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { CreateTaskForm } from "./_components/create-task-form";
import ProfileInfo from "./_components/profile-info";
import AuthLink from "./_components/auth-link";
import Title from "@/components/ui/title";
import TasksList from "./_components/tasks-list";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col text-white">
      <div className="relative flex min-h-screen w-full flex-col items-center rounded-md bg-neutral-950 pt-[250px] antialiased">
        <div className="z-10 mx-auto w-3/5 p-4">
          {session ? (
            <>
              <div className="absolute right-[50%] top-16 translate-x-[50%]">
                <Title>Your Tasks</Title>
              </div>
              <div className="flex justify-between">
                <CreateTaskForm />
                <TasksList />
              </div>
              <ProfileInfo />
            </>
          ) : (
            <>
              <Title>Welcome to Todo App!</Title>
              <p className="relative z-10 mx-auto mb-10 mt-5 max-w-lg text-center text-sm text-neutral-500">
                Sign in to manage your tasks
              </p>
              <div className="relative z-20 flex justify-center">
                <AuthLink />
              </div>
            </>
          )}
        </div>
        <BackgroundBeams />
      </div>
    </main>
  );
}
