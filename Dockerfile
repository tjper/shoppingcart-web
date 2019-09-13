FROM node:8.16 as builder
WORKDIR /app
COPY . ./
RUN npm run build

FROM nginx:1.16-alpine
# COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
