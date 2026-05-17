import { z } from 'zod'

const serverEnvSchema = z.object({
  // Required at runtime — optional during build (Cloudflare Pages sets these via dashboard)
  NEXT_PUBLIC_SANITY_PROJECT_ID: z.string().default(''),
  NEXT_PUBLIC_SANITY_DATASET: z.string().default('production'),
  SANITY_API_TOKEN: z.string().optional(),
  RESEND_API_KEY: z.string().optional(),
  CONTACT_EMAIL: z.string().email().default('grow@exagrowth.com'),
  NEXT_PUBLIC_CF_BEACON_TOKEN: z.string().optional(),
})

const clientEnvSchema = z.object({
  NEXT_PUBLIC_SANITY_PROJECT_ID: z.string().default(''),
  NEXT_PUBLIC_SANITY_DATASET: z.string().default('production'),
  NEXT_PUBLIC_CF_BEACON_TOKEN: z.string().optional(),
})

function parseEnv() {
  const result = serverEnvSchema.safeParse({
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
    SANITY_API_TOKEN: process.env.SANITY_API_TOKEN,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    CONTACT_EMAIL: process.env.CONTACT_EMAIL,
    NEXT_PUBLIC_CF_BEACON_TOKEN: process.env.NEXT_PUBLIC_CF_BEACON_TOKEN,
  })

  if (!result.success) {
    const formatted = result.error.issues
      .map((issue) => `  • ${issue.path.join('.')}: ${issue.message}`)
      .join('\n')
    throw new Error(`Environment variable validation failed:\n${formatted}`)
  }

  return result.data
}

export const env = parseEnv()

export const clientEnv = clientEnvSchema.parse({
  NEXT_PUBLIC_SANITY_PROJECT_ID: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  NEXT_PUBLIC_SANITY_DATASET: env.NEXT_PUBLIC_SANITY_DATASET,
  NEXT_PUBLIC_CF_BEACON_TOKEN: env.NEXT_PUBLIC_CF_BEACON_TOKEN,
})
