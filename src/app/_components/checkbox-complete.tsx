"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const CheckboxComplete = ({
  id,
  completed,
}: {
  id: number;
  completed: boolean;
}) => {
  const router = useRouter();

  const updateTask = api.task.updateStatus.useMutation({
    onSuccess: () => {
      if (!completed) {
        toast.success("Your task is completed now");
      }
      router.refresh();
    },
    onError: () => {
      toast.error("Error. Please try again");
    },
  });

  const updateCompleted = () => {
    updateTask.mutate({ id, completed: !completed });
  };

  return <Checkbox onClick={updateCompleted} defaultChecked={completed} />;
};

export default CheckboxComplete;
