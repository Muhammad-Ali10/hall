import { z } from "zod";

export const signupSchema = z.object({
  fullname: z
    .string()
    .min(5, "Full name must be at least 5 characters."),

  phone: z
    .string()
    .regex(/^\+?\d{7,15}$/, "Invalid phone number format."),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters."),
});


export const loginSchema = z.object({
  phone: z
    .string()
  
})
