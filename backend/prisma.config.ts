// backend/prisma.config.ts
import { defineConfig, env } from 'prisma/config';

// ❌ ลบบรรทัดนี้ออก (ทำให้ Docker build พัง)
// import { config } from 'dotenv';
// config();

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    // อ่านจาก process.env โดยตรง (ได้จาก ENV ใน Dockerfile หรือ env_file ใน compose)
    url: env('DATABASE_URL'),
    directUrl: env('DIRECT_URL'),
  },
});