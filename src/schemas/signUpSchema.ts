import { z } from "zod";

export const usernameValidation = z.string()
    .min(2, { message: "Username should be at least 2 characters" })
    .max(20, { message: "Username should not be more than 20 characters" })
    .regex(/^[a-zA-Z0-9]+$/, { message: "Username should not contain any special characters" });

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Username must contain atleast 8 characters" })
})


