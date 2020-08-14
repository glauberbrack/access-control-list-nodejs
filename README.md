<h1 align="center">
    <img alt="Node.js ACL" title="#acl-nodejs" src=".github/logo.svg" width="250px" />
</h1>

## 💻 Project
An API with Access Controler List (ACL), where we work with roles and permissions for users

## :rocket: Techs

- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/)
- [Postgres](https://www.postgresql.org/)

## API DOCUMENTATION

:rocket: API developed using Node.js and Typescript.

## Getting started

- Clone this repo
- \$ Run `npm install` in the root folder
- \$ Run `npm start` in the root folder and your server will run on port 3333.


## USERS

`POST /users`: Create a new user

#### Body example:

```json
{
    "name": "Glauber",
    "username": "glauberbrack",
    "password": "secret-pass"
}
```

## AUTHENTICATION

`POST /sessions`

#### Body example:

```json
{
    "username": "glauberbrack",
    "password": "secret-pass",
    "roles": [":roles-id", ":roles-id"]
}
```

## PERMISSIONS

`POST /permissions`

#### Body example:

```json
{
    "name": "create-post",
    "description": "Allows user to create a new post"
}
```

## ROLES

`POST /roles`

#### Body example:

```json
{
    "name": "admin",
    "description": "System administrator",
    "permissions": [":permission-id", ":permission-id"]
}
```

## PRODUCTS

`GET /products`

#### :warning: To use the next routes, the user MUST be authenticated

`POST /products`

#### Body example:

```json
{
    "name": "Computer",
    "description": "An incredible new computer"
}
```

`GET /products/:id`


---

Glauber Brack - <a href="mailto:glauber@brack.com.br?Subject=Hello%20you">Talk to me!</a> ☕