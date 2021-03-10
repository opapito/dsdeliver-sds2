# Ds Delivery

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/opapito/dsdeliver-sds2/blob/main/LICENSE)

## About the project

The [DS Delivery project](https://sds2-opapito.netlify.app/ "DsDelivery") is a pizza delivery app composed of a front-end web application in React hosted on Netlify with a Spring Data Java Persistence API (JPA) with Hibernate Object-Relational Mapping (ORM) working as back-end serving data through a PostgreSQL database hosted on Heroku. The pizza delivery guy can access the orders made in the front-end through the front-end-mobile version written in React Native and then mark the delivered orders. The app was developed during dev superior week.

## Web layout

![Web 1](img/DsDeliveryWeb1.png)

![Web 2](img/DsDeliveryWeb2.png)

![Web 3](img/DsDeliveryWeb3.png)

## Mobile layout

![alt text](img/FrontMob.gif "Title Text")

## Project Design

![Project Design](img/ds_delivery.png)

## Concept model

![Concept model](img/DsconceptModel.png)

## Data access layer

![Data access layer](img/DsDeliveryDAL.png)

## Technologies

### Backend

- Java
- Spring Boot
- JPA / Hibernate
- Maven

### Frontend

- HTML / CSS / JS / TypeScript
- ReactJS
- React Native
- Apex Charts
- Expo

### Deployment in production

- Back end: Heroku
- Front end web: Netlify
- Database: Postgresql

## Installing

### Backend

Prerequisites: Java 11

```bash
# The first step is to clone the project
git clone https://github.com/opapito/dsdeliver-sds2

# Enter the project directory
cd backend

# Run
./mvnw spring-boot:run
```

### Frontend web

Prerequisites: npm / yarn

```bash
# The first step is to clone the project
git clone https://github.com/devsuperior/sds1-wmazoni

# Enter the project directory
cd front-web

# Install dependencies
yarn install

# Run
yarn start
```
