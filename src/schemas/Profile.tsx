"use client";

import { z } from "zod";

export const profileSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Must be a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be 6 or more characters long" })
    .max(18),
});
