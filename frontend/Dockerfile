# Stage 1: Build Quasar SPA
FROM node:20-alpine AS builder

WORKDIR /app

<<<<<<< HEAD
# Copy all files first (รวม quasar.config.js และไฟล์สำคัญอื่นๆ)
=======
# Copy source code
>>>>>>> 75f83eecc9e9613579c37fd632041528d553a53d
COPY . .

# Install dependencies
RUN npm ci --legacy-peer-deps

<<<<<<< HEAD
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
=======
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
>>>>>>> 75f83eecc9e9613579c37fd632041528d553a53d
