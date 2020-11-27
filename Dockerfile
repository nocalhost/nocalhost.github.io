FROM squidfunk/mkdocs-material as build
WORKDIR /app
COPY . ./
RUN mkdocs build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/site /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
EXPOSE 80
CMD ["/bin/sh", "-c", "nginx -g \"daemon off;\""]