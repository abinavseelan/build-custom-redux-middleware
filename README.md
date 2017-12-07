# Redux Middleware - A DIY Guide

This is a companion repository for the [talk given at ReactJS bangalore](https://www.meetup.com/ReactJS-Bangalore/events/244815606/)

## What are we building

We'll be building a simple error logging redux middleware. Any action that carries
  - a payload with `error: true`
  - contains the string `_ERROR`
will be handled by this middleware and the error will be logged!

## Getting Started

### Setting up the project

- Clone the repository
- The `master` branch is the branch with just the boilerplate code. The view the the final version checkout the `final` branch.
- Run `npm install` to install all the dependencies. The project was built with node 8 and npm 5. It should run with node 4+ but if there are any issues, do raise a issue on this repo. :smile:
- Run `npm start` and visit `localhost:3000`. :rocket:
