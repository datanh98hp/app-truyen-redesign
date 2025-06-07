import { executeAction } from "@/lib/executeAction";

const signUpAction = async (formData: FormData) => {
  return executeAction({
    actionFn: async () => {
      const email = formData.get("email");
      const password = formData.get("password");
      if (typeof email !== "string" || typeof password !== "string") {
        throw new Error("Invalid form data");
      }
      console.log("Form data received from action:", { email, password });

      ///  call api register
    },
    successMessage: "Signed up successfully",
  });
};

export { signUpAction };
