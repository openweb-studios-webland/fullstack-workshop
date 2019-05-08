# Fullstack GraphQL Workshop

Welcome! Today, we're going to learn how to build a fullstack GraphQL app using the Apollo platform. Let's get started! 🚀

## Setup instructions

Since we have a lot of material to cover, we're going to complete all the exercises within the browser. This ensures that we minimize our time spent on environment setup and maximize our time learning cool stuff about GraphQL.

Here are the accounts you'll need for today:
- [Apollo Engine](https://engine.apollographql.com/)
- [CodeSandbox](https://codesandbox.io/)

You'll also need to install [Apollo DevTools for Chrome](https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm). If you have all 4 of these things, then we're ready to begin!

## Slides

If you need to reference the slides, you can view them [here](https://fullstack-workshop-apollo.surge.sh).

## Survey

Please take the post-workshop survey!! Your honesty is important to helping me improve for next time: https://forms.gle/17ktSPBNo82VwuPFA

## Apollo Server (Day 1)

Welcome to the server portion of the workshop! We will be building a GraphQL server based on the [Movie DB REST API](https://developers.themoviedb.org/3/getting-started/introduction).

### File Structure (in order of importance):
- `server.js`: Where all the magic happens to set up Apollo Server
- `schema.js`: Your GraphQL schema goes here
- `resolvers/`: Write your resolvers for each type in this folder
- `data-sources/`: Your data sources separate out the data fetching logic from your resolvers

### Running on CodeSandbox

[![Edit graphql-server-workshop](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/apollographql/fullstack-workshop-server/tree/00-start/?fontsize=14)

1. Click the button above to navigate to the CodeSandbox. Fork it to your account by clicking Fork in the top menu.
2. That's it! CodeSandbox features HMR, a console, and a test runner. It's pretty awesome. 😍 If you see an error message, don't worry - it's because we haven't built our server yet.

### Sandboxes

If you get stuck at any time, click the sandbox for the exercise you want and fork it.

- [`00-start`](https://codesandbox.io/s/github/apollographql/fullstack-workshop-server/tree/00-start): Your starting point
- [`01-apollo-server`](https://codesandbox.io/s/github/apollographql/fullstack-workshop-server/tree/01-apollo-server): Setting up Apollo Server
- [`02-schema`](https://codesandbox.io/s/github/apollographql/fullstack-workshop-server/tree/02-schema): Writing your schema
- [`03-data-sources`](https://codesandbox.io/s/github/apollographql/fullstack-workshop-server/tree/03-data-sources): Building data sources
- [`04-authentication`](https://codesandbox.io/s/github/apollographql/fullstack-workshop-server/tree/04-authentication): Implementing authentication
- [`05-final`](https://codesandbox.io/s/github/apollographql/fullstack-workshop-server): Hooking everything up to resolvers

### Helpful links
- [Apollo platform docs](https://www.apollographql.com/docs/)
- [Writing a schema](https://www.apollographql.com/docs/apollo-server/essentials/schema.html)
- [Learn about resolvers here](https://www.apollographql.com/docs/graphql-tools/resolvers.html)
- [Data sources docs](https://www.apollographql.com/docs/apollo-server/features/data-sources.html)

### Running locally

1. Clone the repo: `git clone https://github.com/apollographql/fullstack-workshop-server`
2. Then, make a `.env` file with an `ENGINE_API_KEY` environment variable. You can get one [here](https://engine.apollographql.com/) by creating your own Engine service.
3. Install the dependencies: `npm i`
4. Start the server: `npm start`. Your server will be running on port 3000. Your GraphQL server is available at `localhost:3000/graphql` and your GraphQL Playground is available at `localhost:3000/graphql`.

## Apollo Client (Day 2)

Welcome to the client portion of the workshop! We will be building a React app that pulls a list of movies, filters them by type, and allows you to favorite them after you've been logged in. The app is backed by Create React App and Apollo Client.

### File Structure (in order of importance):
- `index.js`: Where we set up Apollo Client
- `components/`: All of the React components that you will connect to Apollo
- `data.js`: Seed data powering the components before we switch to GraphQL
- `App.js`: The top-level App component. You won't need to modify this file.
- `index.css`: Some random CSS. You won't need to modify this file.

### Running on CodeSandbox

[![Edit fullstack-workshop-client](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/apollographql/fullstack-workshop-client/tree/00-start/)

1. Click the button above to navigate to the CodeSandbox. Fork it to your account by clicking Fork in the top menu.
2. That's it! CodeSandbox features HMR, a console, and a test runner. It's pretty awesome. 😍

### Sandboxes
- [`00-start`](https://codesandbox.io/s/github/apollographql/fullstack-workshop-client/tree/00-start): Your starting point
- [`01-apollo-client`](https://codesandbox.io/s/github/apollographql/fullstack-workshop-client/tree/01-apollo-client): Setting up Apollo Boost and React Apollo
- [`02-queries`](https://codesandbox.io/s/github/apollographql/fullstack-workshop-client/tree/02-queries): Writing Query components and pagination
- [`03-adv-queries`](https://codesandbox.io/s/github/apollographql/fullstack-workshop-client/tree/03-adv-queries): Writing Query components with fragments and fetchPolicy
- [`04-login`](https://codesandbox.io/s/github/apollographql/fullstack-workshop-client/tree/04-login): Writing Mutation components for login & authentication
- [`05-local-state`](https://github.com/apollographql/fullstack-workshop-client/tree/05-local-state): Local state management with Apollo Client
- [`06-final`](https://codesandbox.io/s/github/apollographql/fullstack-workshop-client): Writing Mutation components that update the cache & use optimistic UI

### FAQ
- **I didn't complete the last exercise and want to catch up**: No worries! Each branch is its own CodeSandbox so everyone can go at their own pace. To check out the completed solution for your exercise, just click the CodeSandbox links above.

### Running locally

1. Clone the repo: `git clone https://github.com/apollographql/fullstack-workshop-client`
2. Install the dependencies: `npm i`
3. Start the server: `npm start`
