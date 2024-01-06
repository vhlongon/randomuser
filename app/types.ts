import { z } from 'zod';
import { dataSchema } from './utils/data';

export type Data = z.infer<typeof dataSchema>;
export type User = Data['results'][number];
export type Info = Data['info'];
