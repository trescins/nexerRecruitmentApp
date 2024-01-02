# nexerRecruitmentApp
Simple search and check details of the movie or actor from TMDB API application which I made for recruitment process for Nexer company

---

# Technology stack

These are the main components of the UI application. For more details about tooling - please go to package.json file 

-React,
-Typescript,
-CSS Modules,
-MUI UI library,
-React Query,
-Vite

---

# Project setup

## Clone this repo

To install this project, first clone repo to your machine, install packages and run!

## Install packages

Execute this command in your terminal:

```
npm install
```

## Setup .env file

Please, followe the `.env.example` file and check which variables you should define


### THE MOVIE DATABASE API (TMDB)

You need to followe guide for register and getting API key for Authentication: 

https://developer.themoviedb.org/docs

## Run development server

Execute this command in your terminal:

```
npm run dev
```

Your app is now up and running at http://127.0.0.1:5173

---

# Structure

## Structure - files

    .
    |-- public
    |__ src
        |--components
        |--const
        |--hooks
        |--pages
        |--services
        |--providers
        |--router
        |--types
        |--utils
            

- **`public`**: This directory contains static files like icons.
- **`src`**: This directory is a parent for other domain-scoped libraries.

# Development process, conventions and patterns

- Please use specific prefixes for boolean values e.g `isActor`,
- Name functions in a way that they indicate what they do (use verb) and what they use to do it e.g

```ts
const fetchMovie = movie => {...}
```

```ts
const calculateActorAge = age => {...}
```

- If the name is composed of multiple words, it is good to place the main phrase at the beginning, even if gramatically it sounds awkard

- Use `SNAKE_CASE_WITH_ALL_CAPS` for names of the consts storing strings which are frequently reused 

- General advice: do not try to wrie as short names as possible, longer and more meaningful name is usually better.

