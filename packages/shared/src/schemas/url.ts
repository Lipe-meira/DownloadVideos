import { z } from "zod";

export const analyzeUrlSchema = z.object({
  url: z
    .string()
    .trim()
    .min(1, "Informe uma URL.")
    .max(2048, "A URL é muito longa.")
    .url("Informe uma URL válida.")
});

export type AnalyzeUrlInput = z.infer<typeof analyzeUrlSchema>;