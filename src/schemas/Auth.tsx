"use client";

import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Must be a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be 6 or more characters long" })
    .max(18),
});
