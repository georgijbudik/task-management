"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/trpc/react";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const DeleteTaskBtn = ({ id }: { id: number }) => {
  const router = useRouter();

  const deleteTask = api.task.deleteTask.useMutation({
    onSuccess: () => {
      toast.success("You have successfuly deleted a task");
      router.refresh();
    },
    onError: () => {
      toast.error("Error. Please try again");
    },
  });

  const onDeleteTask = () => {
    deleteTask.mutate({ id });
  };

  return (
    <Button
      type="button"
      className="flex items-center justify-center"
      onClick={onDeleteTask}
      disabled={deleteTask.isPending}
    >
      <Trash2 size={18} />
    </Button>
  );
};

export default DeleteTaskBtn;
