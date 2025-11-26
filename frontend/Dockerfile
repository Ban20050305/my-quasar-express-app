# Stage 1: Build Quasar SPA
FROM node:20-alpine AS builder

WORKDIR /app

# Copy source code
COPY . .

# Install dependencies
RUN npm ci --legacy-peer-deps

# Build SPA
RUN npm run build

# Stage 2: Production using Nginx
FROM nginx:1.27-alpine

# Copy build output จาก Stage 1
COPY --from=builder /app/dist/spa /usr/share/nginx/html

# SPA routing สำหรับ Quasar
RUN echo 'server { \
    listen 80; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
