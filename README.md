# JSON Placeholder Feed

## What is the use of this Repo

This Project is a Simple ReactJS Project which demonstrates the following
1. Creating a Component in React with Typescript
2. Making HTTP calls to consume an API
3. Writing Clean Code
4. Writing Unit Tests

## Prerequisites

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs
The version used for this project is v16

## Cloning and Running the Application in local

Clone the project into local

Install all the packages. Go into the project folder and type the following command to install all yarn packages

```bash
yarn install
or
yarn
```

In order to run the application Type the following command

```bash
yarn dev
```

The Application Runs on **http://localhost:5173/**

In order to run the tests Type the following command

```bash
yarn test
```

## Application design

#### Principal Components

1. **Posts** Component : This Component displays a list of posts. This Component gets the data from jsonplaceholder APIs.

2. **SinglePost** Component : This Component Displays the details of the selected Post. This Component gets its data from jsonplaceholder APIs as well.

3. **ErrorBoundary** Component : This Component Displays a custom error page whenever an unhandled exception that corrupt the state of the React app occurs in the application.

#### URL

The application has one url / which ties to *Posts* Component and another url /post/:postId which ties to a Post details

## Resources

**Vite** : Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.
https://vitejs.dev/guide/

**Fuse.js** : Powerful, lightweight fuzzy-search library, with zero dependencies.
https://www.fusejs.io/

**React Router** : Client Side routing
https://reactrouter.com/en/main/start/overview
