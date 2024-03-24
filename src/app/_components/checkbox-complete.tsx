"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";

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
      router.refresh();
    },
  });

  const updateCompleted = () => {
    updateTask.mutate({ id, completed: !completed });
  };

  return <Checkbox onClick={updateCompleted} defaultChecked={completed} />;
};

export default CheckboxComplete;
