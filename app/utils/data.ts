import { z } from 'zod';
import { config } from '../config';

const userSchema = z.object({
  gender: z.union([z.literal('female'), z.literal('male')]),
  name: z.object({
    title: z.string(),
    first: z.string(),
    last: z.string(),
  }),
  location: z.object({
    street: z.object({
      number: z.number(),
      name: z.string(),
    }),
    city: z.string(),
    state: z.string(),
    country: z.string(),
    postcode: z.string().or(z.number()).transform(String),
    coordinates: z.object({
      latitude: z.string(),
      longitude: z.string(),
    }),
    timezone: z.object({
      offset: z.string(),
      description: z.string(),
    }),
  }),
  email: z.string().email(),
  login: z.object({
    uuid: z.string(),
    username: z.string(),
    password: z.string(),
    salt: z.string(),
    md5: z.string(),
    sha1: z.string(),
    sha256: z.string(),
  }),
  dob: z.object({
    date: z.string().datetime(),
    age: z.number().positive(),
  }),
  registered: z.object({
    date: z.string().datetime(),
    age: z.number().positive(),
  }),
  phone: z.string(),
  cell: z.string(),
  id: z.object({
    name: z.string(),
    value: z.string().nullable(),
  }),
  picture: z.object({
    large: z.string().url(),
    medium: z.string().url(),
    thumbnail: z.string().url(),
  }),
  nat: z.string(),
});

const infoSchema = z.object({
  seed: z.string(),
  results: z.number().positive(),
  page: z.number().positive(),
  version: z.string(),
});

export const dataSchema = z.object({
  results: z.array(userSchema),
  info: infoSchema,
});

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const validateData = (data: unknown) => {
  const validatedData = dataSchema.safeParse(data);

  if (!validatedData.success) {
    const errors = validatedData.error.issues
      .map(issue => `${issue.message} in ${issue.path.join('.')}`)
      .join('\n');
    throw new Error(errors);
  }

  const { results, info } = validatedData.data;

  return { user: results[0], info };
};

export const fetchData = async (delay = 0) => {
  // simulate more network latency
  await sleep(delay);
  const res = await fetch(config.apiUrl, {
    cache: 'no-cache',
  });

  /* when throwing an error next will load the error component */
  /* istanbul ignore next */
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return validateData(data);
};
