// Placeholder: Apply form Zod schema
import { z } from 'zod';

export const applySchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  programme: z.string().min(1),
  message: z.string().min(1),
});

export type ApplyInput = z.infer<typeof applySchema>;
