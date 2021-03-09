FROM cypress/base:12.1.0
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install --save-dev cypress
RUN npm install
RUN $(npm bin)/cypress verify
CMD ["node_modules/.bin/cypress-tags ","run"]