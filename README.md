# Learning Prisma ORM

I'm learning Prisma ORM, so to train I created this rest API that I had seen in this video by [Full-Cycle](https://www.youtube.com/watch?v=C8Oc31uk2Hw)

## Technologies 

Here are the technologies used in this project.

* Node.js
* TypeScript
* Express.js
* Prisma
* PostgreSQL
* ts-node-dev

## Services Used

* Github

## Getting started

* Clone the repository
```bash
  git clone https://github.com/Artur-Poffo/Learning-Prisma-ORM.git
```

* Install PostgreSQL in your machine
  - Follow the steps in the [documentation](https://www.postgresql.org/) for your operating system and install
  
* Connect your database to the application
  - Create a `.env` file on root directory
  - insert one environment variable:
    ```.env
      DATABASE_URL="postgresql://<YOUR USER>:<YOUR PASSWORD>@localhost:5432/postgres?schema=public"
    ```
  - That's it, in the Prisma schema it calls this environment variable to connect the DB, just replace it with your PostgreSQL user information
  
* install dependencies.
  - `npm install` on root directory (you need installed node and npm for this)
  -  Run on root directory: `npx prisma migrate dev`
* To run the project.
  - `npm run dev` on root directory

## How to use

**Obs: you will need a program to test the Endpoints, like [Insomnia](https://insomnia.rest/products/insomnia) but i recommended the [Thunder Client](https://www.thunderclient.com/) VScode extension**

### Routes and Features

* **_/_**
  * **GET**
    * Show a `Welcome!` message

* **_/students_**
  * **POST**
    * Adds a new `Student` to DB

* **_/trails_**
  * **POST**
    * Adds a new `Trail` to DB

* **_/courses_**
  * **POST**
    * Adds a new `Course` to DB

* **_/lessons_**
  * **POST**
    * Adds a new `lesson` to DB

* **_/enrollments_**
  * **POST**
    * Adds a new `enrollment` to DB

## Links
  - Repository: https://github.com/Artur-Poffo/Learning-Prisma-ORM

## Versioning

1.0.0

## Authors

> **_Artur Poffo_** 

Please follow github and join us!
Thanks to visiting me and good coding!
