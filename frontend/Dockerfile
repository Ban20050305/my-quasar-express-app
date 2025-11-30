# Stage 1: Build Quasar SPA
FROM node:20-alpine AS builder

WORKDIR /app

# Copy all files first (รวม quasar.config.js และไฟล์สำคัญอื่นๆ)
COPY . .

# Install dependencies
RUN npm ci --legacy-peer-deps

# Build Quasar (สำหรับ SPA)
RUN npm run build

# Stage 2: Production (Nginx serve static files)
FROM nginx:1.27-alpine

# Copy build artifacts จาก stage 1
COPY --from=builder /app/dist/spa /usr/share/nginx/html

# Expose port
EXPOSE 80

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]