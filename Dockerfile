# release
FROM nginx:1.17.2-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY build /build
EXPOSE 8000
