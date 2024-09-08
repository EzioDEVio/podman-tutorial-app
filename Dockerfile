# Step 1: Use a slim base image to reduce attack surface
FROM node:14-slim

# Step 2: Set a non-root user for security reasons
RUN useradd -m -s /bin/bash podmanuser

# Step 3: Set the working directory and change ownership to non-root user
WORKDIR /app
RUN chown podmanuser:podmanuser /app

# Step 4: Copy package.json and package-lock.json separately to leverage Docker layer caching
COPY package*.json ./

# Step 5: Install only production dependencies to minimize the final image size
RUN npm install --production

# Step 6: Copy the rest of the application code
COPY --chown=podmanuser:podmanuser . .

# Step 7: Expose the port the app will run on
EXPOSE 3000

# Step 8: Switch to the non-root user
USER podmanuser

# Step 9: Use a more secure start command
CMD ["node", "app.js"]
