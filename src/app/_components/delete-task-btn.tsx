"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/trpc/react";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

const DeleteTaskBtn = ({ id }: { id: number }) => {
  const router = useRouter();

  const deleteTask = api.task.deleteTask.useMutation({
    onSuccess: () => {
      router.refresh();
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
    >
      <Trash2 size={18} />
    </Button>
  );
};

export default DeleteTaskBtn;
