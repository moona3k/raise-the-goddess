FROM node:18.19.0

WORKDIR /app

# First copy only package files to leverage Docker caching
COPY package*.json ./
RUN npm install

# Then copy the rest of the application
COPY . .

# Build the Next.js app
RUN npm run build

# Set the port environment variable
ENV PORT=3333
EXPOSE 3333

# Use the Next.js start command
CMD ["npm", "start"]