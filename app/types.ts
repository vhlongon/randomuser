import { z } from 'zod';
import { infoSchema, userSchema } from './utils/data';

export type User = z.infer<typeof userSchema>;
export type Info = z.infer<typeof infoSchema>;
