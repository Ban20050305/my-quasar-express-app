// backend/prisma.config.ts
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    // อ่านจาก ENV (ใน Docker) หรือ .env (ใน local)
    url: env('DATABASE_URL'),
    // @ts-expect-error: directUrl is not yet in the types for Prisma 7
    directUrl: env('DIRECT_URL'),
  },
});