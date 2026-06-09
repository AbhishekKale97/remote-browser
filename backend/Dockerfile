FROM node:18-slim

# Install OS dependencies Playwright needs
RUN apt-get update && apt-get install -y \
    wget curl gnupg \
    libglib2.0-0 libnss3 libatk1.0-0 libatk-bridge2.0-0 \
    libcups2 libdrm2 libxkbcommon0 libxcomposite1 \
    libxdamage1 libxfixes3 libxrandr2 libgbm1 libasound2 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npx playwright install chromium
RUN npx playwright install-deps chromium

COPY . .
EXPOSE 4000
CMD ["node", "index.js"]