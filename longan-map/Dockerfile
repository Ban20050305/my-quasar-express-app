# Production (Nginx serve static HTML)
FROM nginx:1.27-alpine

# Copy HTML file to nginx html directory
COPY longan_map.html /usr/share/nginx/html/index.html

# Expose port
EXPOSE 80

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]
