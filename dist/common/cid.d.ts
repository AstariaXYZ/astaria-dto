import { z } from "zod";
export declare const CidSchema: z.ZodString;
export type Cid = z.infer<typeof CidSchema>;
