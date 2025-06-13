// src/env.ts
import { config } from 'dotenv'
import { z } from 'zod'

config()

const schema = z.object({
  NODE_ENV: z.enum(['development', 'production']),
  API_KEY: z.string(),
})

export const env = schema.parse(process.env)
