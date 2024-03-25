"use client";

import { useRouter } from "next/navigation";

import { api } from "@/trpc/react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { createTaskSchema } from "@/schemas/createTaskSchema";
import { toast } from "sonner";

export function CreateTaskForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof createTaskSchema>>({
    resolver: zodResolver(createTaskSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const createTask = api.task.create.useMutation({
    onSuccess: () => {
      toast.success("You have successfuly created a task");
      router.refresh();
    },
    onError: () => {
      toast.error("Error. Please try again");
    },
  });

  const onSubmit = (values: z.infer<typeof createTaskSchema>) => {
    form.reset();
    createTask.mutate({ title: values.title, description: values.description });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[300px] space-y-4"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Clean my room" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Firstly, i need to..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-center">
          <Button
            disabled={createTask.isPending}
            type="submit"
            className="w-[150px] rounded-full bg-white/10 px-10 py-6 text-base font-semibold no-underline transition duration-200 hover:bg-white hover:bg-white/20"
          >
            {createTask.isPending ? "Creating..." : "Create"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
