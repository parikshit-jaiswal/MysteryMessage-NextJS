import { z } from "zod";

export const acceptMesageSchema = z.object({
    acceptMessages: z.boolean()
})