"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
const formSchema = z.object({
  currentPass: z
    .string()
    .min(3, { message: "Username ít nhất có 2 kí tự" })
    .max(20, { message: "Username không quá 20 kí tự" }),
  newPass: z
    .string()
    .min(3, { message: "Username ít nhất có 2 kí tự" })
    .max(20, { message: "Username không quá 20 kí tự" }),
  re_newPass: z
    .string()
    .min(3, { message: "Mật khẩu nhập lại ít nhất có 3 kí tự" })
    .max(20, { message: "Mật khẩu nhập lại không quá 20 kí tự" }),
}).refine((data) => data.newPass === data.re_newPass, {
  message: "Mật khẩu không trùng khớp",
  path: ["re_newPass"],
});

export function ChangePasswordForm() {
  //define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentPass: "",
      newPass: "",
      re_newPass: "",
    },
  });
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="w-md font-quicksand flex flex-col">
      <p className="font-semibold my-5 text-3xl text-center">Đổi mật khẩu</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="currentPass"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mật khẩu hiện tại</FormLabel>
                <FormControl>
                  <Input placeholder="Mật khẩu hiện tại" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="newPass"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mật khẩu mới</FormLabel>
                <FormControl>
                  <Input placeholder="Mật khẩu mới" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="re_newPass"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Xác nhận lại mật khẩu</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Level"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">Cập nhật mật khẩu</Button>
        </form>
      </Form>
    </div>
  );
}
