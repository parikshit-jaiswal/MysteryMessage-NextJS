import { z } from "zod";

export const messageSchema = z.object({
    content: z.string().min(1, { message: "Message can't be empty" })
        .max(300, { message: "Message can't be more than 300 characters" })
})