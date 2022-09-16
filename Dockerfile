# Use node version 15
FROM node:15

# Set an environment variable PORT with a default value of 8000
ARG PORT=8000
ENV PORT=$PORT

# Copy everything (index.js and package.json) from local working dir in to the docker image
COPY . .

# Run npm install within the image to download node dependencies
RUN npm install

# On startup, run npm start
CMD npm run start