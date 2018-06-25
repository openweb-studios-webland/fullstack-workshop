/* eslint jsx-a11y/accessible-emoji: 0 */

// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  Deck,
  ListItem,
  List,
  Image,
  Slide,
  Text,
  Heading,
  CodePane,
  Code,
  Link,
  Notes,
} from 'spectacle';

// Spectacle Theme & Layout components
import { theme, colors, size } from './theme';
import * as Layout from './layout';

// Server & client code samples
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-graphql';

import * as server from './code/server';
import * as client from './code/client';

// Preload images
import preloader from 'spectacle/lib/utils/preloader';
import images from './images';

preloader(images);

// Require CSS
require('normalize.css');

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={500}
        contentWidth={1500}
        contentHeight={800}
        controls={false}
        progress="none"
        theme={theme}
      >
        <Slide bgImage={images.apolloBkgr}>
          <Image src={images.apolloLogo} margin="0 0 0 -55px" width="800px" />
          <Text bold textColor="tertiary">
            Fullstack GraphQL Workshop
          </Text>
        </Slide>
        <Slide bgImage={images.apolloBkgr}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <Image
              src={images.peggy}
              width="300px"
              height="300px"
              style={{ borderRadius: '50%' }}
            />
            <Layout.Column>
              <Text margin="20px 0px 0px 30px" bold textColor="tertiary">
                @peggyrayzis
              </Text>
              <Text margin="20px 0px 0px 30px" textColor="primary">
                Open Source Engineer
              </Text>
            </Layout.Column>
          </div>
        </Slide>
        <Slide>
          <Heading>Peggy's 🔑s to success!</Heading>
          <List>
            {[
              'Write down any questions ✏️',
              'Help me by helping each other 👭',
              `Don't worry about taking notes 📓`,
            ].map(item => (
              <Appear key={item}>
                <ListItem>{item}</ListItem>
              </Appear>
            ))}
          </List>
        </Slide>
        <Slide bgImage={images.khaled} bgDarken={0.4}>
          <Heading textColor="primary" style={{ alignSelf: 'center' }}>
            Be curious & have fun! 🎉
          </Heading>
        </Slide>
        <Slide>
          <Heading>What's with the Post-its?! 🚦</Heading>
          <List>
            {[`✅ I'm doing great!`, `🛑 Help!! I'm totally lost.`].map(
              item => (
                <Text key={item} style={{ lineHeight: 1.5 }}>
                  {item}
                </Text>
              ),
            )}
          </List>
        </Slide>
        <Slide bgImage={images.apolloBkgr}>
          <Heading>Goal:</Heading>
          <Text textColor="primary">
            Build a fullstack React app with GraphQL powered by Apollo tools 🚀
          </Text>
        </Slide>
        <Slide>
          <Layout.Row>
            {[
              {
                time: 'Morning',
                header: 'Apollo Server',
                items: [
                  'Schema building',
                  'Resolvers',
                  `Authentication`,
                  `Caching`,
                ],
              },
              {
                time: 'Afternoon',
                header: 'Apollo Client',
                items: [
                  'Query components',
                  'Authentication',
                  `Mutation components`,
                  `Managing local state`,
                ],
              },
            ].map(({ header, items, time }) => (
              <div key={header} style={{ width: '46%' }}>
                <Text bold>{time}</Text>
                <Layout.Cell key={header} color={colors.lightGrey}>
                  <Text textColor="tertiary">{header}</Text>
                  <List>
                    {items.map(item => (
                      <ListItem key={item} textSize={size.small}>
                        {item}
                      </ListItem>
                    ))}
                  </List>
                </Layout.Cell>
              </div>
            ))}
          </Layout.Row>
        </Slide>
        <Slide>
          <Heading>Today will be a mix of:</Heading>
          <List>
            {[
              '🎤 Lectures: Introduce concepts',
              '👩🏼‍💻 Live coding: Code along with me',
              '💪 Exercises: Pair up or do individually',
              '🚦 Checkpoints: Discussion & questions',
            ].map(item => (
              <Text key={item} style={{ lineHeight: 1.5 }}>
                {item}
              </Text>
            ))}
          </List>
        </Slide>
        <Slide>
          <Heading margin="0 0 30px 0">Before we start:</Heading>
          <Text textSize={size.small}>1. Confirm you have:</Text>
          <List>
            {[
              'Apollo Engine account',
              'Glitch.com account',
              'CodeSandbox account',
              'Apollo DevTools for Chrome',
            ].map(item => (
              <ListItem
                key={item}
                textColor="tertiary"
                textSize={size.extraSmall}
              >
                {item}
              </ListItem>
            ))}
          </List>
          <Text textSize={size.small} margin="0 0 32px 0">
            2. Navigate to the{' '}
            <Link href="https://github.com/apollographql/fullstack-workshop">
              workshop README
            </Link>. If you ever get stuck, check the FAQ for answers. 😊
          </Text>
          <Text textSize={size.small}>
            3. All development will be done in the browser via{' '}
            <Link href="https://glitch.com">Glitch</Link> and{' '}
            <Link href="https://codesandbox.io">CodeSandbox</Link>. This means
            more time learning cool stuff and less time messing with build
            tools! 🎉
          </Text>
        </Slide>
        <Slide bgImage={images.apolloBkgr}>
          <Heading>Apollo Server</Heading>
        </Slide>
        <Slide>
          <Image src={images.communication} width="100%" />
        </Slide>
        <Slide>
          <Heading>What is GraphQL?</Heading>
          <Text margin="20px 0" textSize={size.extraSmall}>
            GraphQL is a typed query language for your API. It enables the
            client to express its data requirements declaratively and the server
            to send back only what the client requests.
          </Text>
          <Layout.Row align="flex-end">
            <Appear>
              <Layout.Column>
                <Image src={images.schema} margin="0px" width="550px" />
                <Text textSize={size.small}>
                  1. Define a schema for your data on the server
                </Text>
              </Layout.Column>
            </Appear>
            <Appear>
              <Layout.Column>
                <Image src={images.query} margin="0px" width="550px" />
                <Text textSize={size.small}>
                  2. Write a query on the client to get the data you need
                </Text>
              </Layout.Column>
            </Appear>
          </Layout.Row>
        </Slide>
        <Slide>
          <Heading margin="0 0 30px 0">REST vs. GraphQL 🍕</Heading>
          <Layout.Row align="flex-start">
            <Appear>
              <Layout.Column margin="0 20px 0 0">
                <Text bold textSize={size.medium}>
                  REST
                </Text>
                <CodePane
                  theme="light"
                  source={server.restExample}
                  lang="bash"
                />
                <List>
                  <ListItem textSize={size.small}>
                    Filter down the data
                  </ListItem>
                  <ListItem textSize={size.small}>
                    Perform waterfall requests for related data
                  </ListItem>
                  <ListItem textSize={size.small}>
                    Aggregate the data yourself
                  </ListItem>
                </List>
              </Layout.Column>
            </Appear>
            <Appear>
              <Layout.Column margin="0 0 0 20px">
                <Text textSize={size.medium} bold>
                  GraphQL
                </Text>
                <Layout.Row>
                  <CodePane
                    theme="light"
                    source={server.gqlExample}
                    lang="graphql"
                    style={{ minWidth: '350px' }}
                  />
                  <List margin="0px">
                    <ListItem textSize={size.small}>
                      Receive exactly what you ask for
                    </ListItem>
                    <ListItem textSize={size.small}>
                      No aggregating or filtering data
                    </ListItem>
                  </List>
                </Layout.Row>
              </Layout.Column>
            </Appear>
          </Layout.Row>
        </Slide>
        <Slide>
          <Layout.Row align="flex-start">
            <Layout.Column>
              <Heading margin="0 0 40px 0">REST</Heading>
              <Image
                src={images.uglyPizza}
                height="450px"
                style={{ borderRadius: '15px' }}
              />
              <Text>A hot mess 😞</Text>
            </Layout.Column>
            <Appear>
              <Layout.Column>
                <Heading margin="0 0 40px 0">GraphQL</Heading>
                <Image
                  src={images.pizza}
                  height="450px"
                  style={{ borderRadius: '15px' }}
                />
                <Text>Perfect every time 😍</Text>
              </Layout.Column>
            </Appear>
          </Layout.Row>
        </Slide>
        <Slide>
          <Heading>GraphQL over REST</Heading>
          <Text margin="20px 0" textSize={size.extraSmall}>
            Switching to GraphQL doesn't require an entire rewrite! You can
            migrate incrementally by building a GraphQL server over your
            existing REST endpoints and microservices.
          </Text>
          <Layout.Row align="flex-start">
            <Layout.Column>
              <Image src={images.gqlOverRest} height="550px" />
            </Layout.Column>
            <Layout.Column>
              <List>
                {[
                  'Avoid roundtrips from the client',
                  'Reuse filtering and sorting logic across platforms',
                  'Ship features faster without writing new endpoints',
                ].map(item => (
                  <ListItem key={item} textSize={size.small}>
                    {item}
                  </ListItem>
                ))}
              </List>
            </Layout.Column>
          </Layout.Row>
        </Slide>
        <Slide>
          <Heading>What is Apollo?</Heading>
          <Image src={images.platform} width="100%" margin="40px 0" />
        </Slide>
        <Slide>
          <Heading>Server checkpoint 1/5 🚦</Heading>
          <List>
            {['What is GraphQL?', 'GraphQL vs. REST', 'What is Apollo?'].map(
              item => <ListItem key={item}>{item}</ListItem>,
            )}
          </List>
        </Slide>
        <Slide>
          <Heading>Glitch.com demo 🎉</Heading>
          insert pic of Apollo team on Glitch
        </Slide>
        <Slide>
          <Heading>Apollo Engine</Heading>
          <Text margin="20px 0 50px 0" textSize={size.extraSmall}>
            Apollo Engine is a cloud service for managing GraphQL APIs. It has
            everything you need to run GraphQL in production with confidence,
            including schema management, tracing, alerts, and error tracking.
          </Text>
          <Image
            src={images.engine3}
            width="90%"
            style={{ alignSelf: 'center' }}
          />
        </Slide>
        <Slide>
          <Heading>👩🏼‍💻 Setting up Engine</Heading>
          <List ordered>
            {[
              'Visit engine.apollographql.com and login',
              'Click Add Service in the top right',
              'Edit the global ID to be fullstack-workshop',
              'Create a service, then copy the API key',
              `Now we're ready to set up our server 🎉`,
            ].map(item => (
              <ListItem textSize={size.medium} key={item}>
                {item}
              </ListItem>
            ))}
          </List>
        </Slide>
        <Slide>
          <Heading>👩🏼‍💻 Setting up Apollo Server</Heading>
          <Text margin="20px 0" textSize={size.extraSmall}>
            Today, we're setting up Apollo Server for Express, but there are
            many other integrations for Hapi, Koa, and serverless options like
            Azure Functions and AWS Lambda. Apollo Engine and graphql-tools are
            already built into Apollo Server for you.
          </Text>
        </Slide>
        <Slide>
          <Heading>Recap: Apollo Server</Heading>
          <List ordered>
            <ListItem textSize={size.small}>
              <Code>
                npm install apollo-server apollo-engine graphql --save
              </Code>
            </ListItem>
            <ListItem textSize={size.small}>
              <Code>
                {`const { ApolloServer } = require('apollo-server');`}
              </Code>
            </ListItem>
            <ListItem textSize={size.small}>
              <Code>
                {`const server = new ApolloServer({ typeDefs, resolvers });`}
              </Code>
            </ListItem>
            <ListItem textSize={size.small}>
              <Code
              >{`server.listen().then(({ url }) => console.log(url))`}</Code>
            </ListItem>
            <ListItem textSize={size.small}>
              To set up Apollo Engine, add <Code>ENGINE_API_KEY</Code> as an
              environment variable. Pass any Engine config to{' '}
              <Code>{`server.listen()`}</Code>
            </ListItem>
            <ListItem textSize={size.small}>
              Your GraphQL server is at <Code>/graphql</Code> and your GraphQL
              Playground IDE is set up at <Code>/</Code> 🎉
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading>GraphQL Playground 😍</Heading>
          <div
            className="glitch-embed-wrap"
            style={{ height: '631px', width: '100%', margin: '50px 0 0 0' }}
          >
            <iframe
              src="https://glitch.com/embed/#!/embed/fullstack-workshop-server?path=src/server.js&previewSize=100"
              alt="fullstack-workshop-server on glitch"
              style={{ height: '100%', width: '100%', border: 0 }}
            />
          </div>
        </Slide>
        <Slide>
          <Heading>Server checkpoint 2/5 🚦</Heading>
          <List>
            {[
              'What is Apollo Engine?',
              'Setting up Apollo Server',
              'Exploring in GraphQL Playground',
            ].map(item => <ListItem key={item}>{item}</ListItem>)}
          </List>
        </Slide>
        <Slide>
          <Heading>What's a schema?</Heading>
          <Text margin="20px 0" textSize={size.extraSmall}>
            You can think of a schema like a blueprint for your data. When
            migrating to GraphQL, we recommend starting with the schema first.
            Your schema will contain type information, as well as queries and
            mutations.
          </Text>
          <Layout.Row>
            <CodePane
              lang="graphql"
              theme="light"
              source={server.schemaExample}
              style={{ minWidth: '600px' }}
            />
            <List>
              {[
                'Your schema is strongly typed',
                'You can explore your schema in GraphQL Playground',
                'Pass your schema to the typeDefs property of Apollo Server',
              ].map(item => (
                <ListItem key={item} textSize={size.small}>
                  {item}
                </ListItem>
              ))}
            </List>
          </Layout.Row>
        </Slide>
        <Slide>
          <Heading>Schema driven development</Heading>
          <Text margin="20px 0 40px" textSize={size.extraSmall}>
            Design it based on the needs of your UI, but try to make it general
            purpose enough to evolve. We’ve found that teams are most successful
            when the GraphQL API is designed primarily by the frontend
            developers that will use it.
          </Text>
          <Image
            src={images.schemaDev}
            width="80%"
            style={{ alignSelf: 'center' }}
          />
        </Slide>
        <Slide>
          <Heading>👩🏼‍💻 Writing a schema</Heading>
          <Text margin="20px 0 20px" textSize={size.extraSmall}>
            The easiest way to write a schema is with Schema Definition Language
            (SDL). Today, we're going to cover object and scalar types, but you
            can view a full list of types in the{' '}
            <Link href="http://graphql.org/learn/schema/">
              graphql.org docs
            </Link>.
          </Text>
          <Layout.Row align="flex-start">
            <CodePane
              source={server.sdl}
              lang="jsx"
              theme="light"
              textSize=".8em"
            />
            <List style={{ width: '50%' }}>
              {[
                'Object type: Cast represents an object type',
                'Field: All of the properties on cast are available fields',
                'Scalar type: ID, String, Int, Float, Boolean, custom',
                'Non-nullable: Add ! after a type to indicate it is required',
                'Arguments: All fields (like photo) can have arguments',
              ].map(item => (
                <Appear key={item}>
                  <ListItem textSize={size.extraSmall}>{item}</ListItem>
                </Appear>
              ))}
            </List>
          </Layout.Row>
        </Slide>
        <Slide>
          <Heading>💪 Write the Movie type</Heading>
          <Text margin="20px 0 20px" textSize={size.extraSmall}>
            Try writing the Movie type on your own. If you get stuck, check out
            the{' '}
            <Link href="http://graphql.org/learn/schema/">
              graphql.org docs
            </Link>.
          </Text>
          <List ordered>
            {[
              'Write the Movie type in schema.js',
              'The poster field should have an argument of size',
              'The genres field is non-nullable',
              'The cast field returns an array of object types',
              'Bonus: Explore your schema in GraphQL Playground when you finish',
            ].map(item => (
              <ListItem key={item} textSize={size.small}>
                {item}
              </ListItem>
            ))}
          </List>
        </Slide>
        <Slide>
          <Heading>💪 Queries and mutations</Heading>
          <Text margin="20px 0 20px" textSize={size.extraSmall}>
            The Query and Mutation types are two special types in GraphQL.
            Queries are how you fetch data, and mutations are how you update
            data.
          </Text>
          <List ordered>
            {[
              'Write a movie query to fetch a single movie by id',
              'Write a toggleLike mutation to toggle if a movie is liked',
              'Write a likes query that fetches all the liked movies',
              'Bonus: Explore your schema in GraphQL Playground when you finish',
            ].map(item => (
              <ListItem key={item} textSize={size.small}>
                {item}
              </ListItem>
            ))}
          </List>
        </Slide>
        <Slide>
          <Heading>Server checkpoint 3/5 🚦</Heading>
          <List>
            {[
              'Schema driven development',
              'Schema Definition Language (SDL)',
              'Queries and mutations',
            ].map(item => <ListItem key={item}>{item}</ListItem>)}
          </List>
        </Slide>
        <Slide>
          <Heading>Resolver map</Heading>
          <Layout.Row style={{ marginTop: '20px' }}>
            <Image src={images.resolvers} height="650px" />
            <List margin="0px">
              {[
                'The function that implements a GraphQL field is called a resolver function',
                'Resolvers are flexible - you can call REST endpoints, query a database, or any other data source',
                'If the return value from the parent object has the same property names as the fields requested in the child object, you won’t need to specify a resolver',
              ].map(item => (
                <ListItem key={item} textSize={size.small}>
                  {item}
                </ListItem>
              ))}
            </List>
          </Layout.Row>
        </Slide>
        <Slide>
          <Heading>Resolver function signature</Heading>
          <Layout.Column style={{ marginTop: '40px' }}>
            <CodePane
              source={server.resolver}
              theme="light"
              textSize="1.2em"
              style={{ maxWidth: 'none' }}
              lang="javascript"
            />
            <List>
              {[
                'obj: The object containing the result returned from the resolver on the parent field or the ROOT_QUERY object in the case of a top-level query or mutation',
                'args: An object containing all of the arguments passed into the field',
                'context: The context object, which is shared by all resolvers in a query. Useful for authentication, config info, and abstracting away data fetching logic',
                'info: Information about the execution state of the query, including the field ASTs',
              ].map(item => (
                <ListItem key={item} margin="30px 0" textSize="1.1em">
                  {item}
                </ListItem>
              ))}
            </List>
          </Layout.Column>
        </Slide>
        <Slide>
          <Heading>👩🏼‍💻 Resolvers in action</Heading>
          insert gql playground embed
        </Slide>
        <Slide>
          <Heading>💪 Let's build our resolvers!</Heading>
          <List>
            {[
              'Navigate to the resolvers folder and implement the resolvers',
              'Start with Query and Mutation, then move onto Movie',
              'Look at the models folder for your data fetching functions',
              'Test out that your resolvers work by running queries in GraphQL Playground',
            ].map(item => (
              <ListItem key={item} margin="30px 0" textSize={size.small}>
                {item}
              </ListItem>
            ))}
          </List>
        </Slide>
        <Slide>
          <Heading>👩🏼‍💻 Running queries</Heading>
          <div
            className="glitch-embed-wrap"
            style={{ height: '631px', width: '100%', margin: '50px 0 0 0' }}
          >
            <iframe
              src="https://glitch.com/embed/#!/embed/fullstack-workshop-server?path=src/server.js&previewSize=100"
              alt="fullstack-workshop-server on glitch"
              style={{ height: '100%', width: '100%', border: 0 }}
            />
          </div>
        </Slide>
        <Slide>
          <Heading>Project structure</Heading>
          <Text margin="20px 0 20px" textSize={size.extraSmall}>
            There are many ways to organize your GraphQL project structure. We
            recommend starting small by putting your schema in one file and
            breaking it out over time.
          </Text>
          <Layout.Row align="center">
            <Image src={images.spectrum} width="400px" />
            <List style={{ width: '60%' }}>
              <ListItem textSize={size.extraSmall}>
                Group by domain or by file type
              </ListItem>
              <ListItem textSize={size.extraSmall}>
                Separate your data fetching logic into models and access them on
                the context
              </ListItem>
              <ListItem textSize={size.extraSmall}>
                Check out{' '}
                <Link href="https://github.com/withspectrum/spectrum/tree/alpha/api">
                  Spectrum
                </Link>{' '}
                for an example of an OSS Apollo app in production
              </ListItem>
              <ListItem textSize={size.extraSmall}>
                Read our{' '}
                <Link href="https://dev-blog.apollodata.com/modularizing-your-graphql-schema-code-d7f71d5ed5f2">
                  blog post
                </Link>{' '}
                to learn how to extend types and break up resolvers
              </ListItem>
            </List>
          </Layout.Row>
        </Slide>
        <Slide>
          <Heading>Analyzing performance 🚀</Heading>
          <Text margin="40px 0 40px" textSize={size.extraSmall}>
            Gaining visibility into what's happening with your schema is
            essential to optimizing performance. That's where Apollo Engine
            comes in! Engine's performance and tracing views can help you
            identify problem areas in your API by providing detailed metrics all
            the way down to the resolver level.
          </Text>
          <Image src={images.engineTracing} width="100%" />
        </Slide>
        <Slide>
          <Heading>💪 Experimenting with Engine</Heading>
          <List ordered>
            {[
              'Navigate to the fullstack-workshop service in Engine',
              'Run some queries in GraphQL Playground',
              'View the tracing and performance data for the operations you just ran by clicking on the left hand menu',
              'What resolvers are slow? What queries can we optimize? Write down your observations.',
            ].map(item => (
              <ListItem key={item} textSize={size.small}>
                {item}
              </ListItem>
            ))}
          </List>
        </Slide>
        <Slide>
          <Heading>Server checkpoint 4/5 🚦</Heading>
          <List>
            {[
              'Building resolver functions',
              'Project structure',
              'Performance analysis with Engine',
            ].map(item => <ListItem key={item}>{item}</ListItem>)}
          </List>
        </Slide>
        <Slide>
          <Heading>👩🏼‍💻 Authentication</Heading>
          <Text margin="40px 0 20px 0" textSize={size.extraSmall}>
            Each GraphQL request has a context object that's shared among its
            resolvers. The context is where we can store auth tokens that we can
            access in our resolvers to determine if the user can access private
            information.
          </Text>
          <Appear>
            <List ordered>
              {[
                'The context property on ApolloServer is a function with access to the request',
                'Check the headers on the request and pass the user to the context',
                'In the resolver function, use the context argument to authorize the user',
              ].map(item => (
                <ListItem key={item} textSize={size.small}>
                  {item}
                </ListItem>
              ))}
            </List>
          </Appear>
        </Slide>
        <Slide>
          <Heading>GraphQL caching</Heading>
          <Text margin="40px 0 40px 0" textSize={size.extraSmall}>
            Caching is important for reducing the load on your servers and
            decreasing page render times. Existing caching solutions for REST
            don't work well for GraphQL APIs. This is because GraphQL requests
            are sent to a single endpoint and responses are unpredictable.
          </Text>
          <Layout.Row>
            <Layout.Column>
              <Text textColor="tertiary">Resolver caching</Text>
              <Text textSize={size.small}>
                Reduce requests to your backends via batching
              </Text>
            </Layout.Column>
            <Layout.Column>
              <Text textColor="tertiary">Response caching</Text>
              <Text textSize={size.small}>
                Cache the entire response based on max age
              </Text>
            </Layout.Column>
          </Layout.Row>
        </Slide>
        <Slide>
          <Heading>DataLoader</Heading>
          <Text textSize={size.extraSmall} margin="20px 0">
            For cases where a single query would request the same resource
            multiple times, DataLoader can help you collapse them into one
            request by identifying the duplicates during execution.
          </Text>
          <Image src={images.dataloader} width="100%" />
          <CodePane
            source={server.loader}
            theme="light"
            style={{ maxWidth: 'none' }}
          />
        </Slide>
        <Slide>
          <Heading>💪 Refactoring to loaders</Heading>
          <Text textSize={size.extraSmall} margin="20px 0">
            I've already created your loader in loaders.js. Now, we need to use
            the loader to fetch data within our models.
          </Text>
          <List ordered>
            {[
              'Check out models/cast for an example',
              'In models/movie, refactor getMovieById and getMovies to use our loader',
              'Bonus: View tracing data in Engine to see if DataLoader improved response times',
            ].map(item => (
              <ListItem key={item} textSize={size.small}>
                {item}
              </ListItem>
            ))}
          </List>
        </Slide>
        <Slide>
          <Heading>👩🏼‍💻 Apollo Engine caching</Heading>
          <Text margin="20px 0" textSize={size.extraSmall}>
            Engine leverages the Apollo Cache Control spec to cache your GraphQL
            query responses. Engine accepts cache control hints by type via the{' '}
            <Code textSize="0.75em">@cacheControl</Code> directive and
            calculates a maxAge for the response based on the types' hints.
          </Text>
          <Layout.Row align="center" style={{ marginTop: '40px' }}>
            <CodePane
              source={server.cacheControl}
              lang="graphql"
              theme="light"
              textSize="0.8em"
              style={{ maxWidth: 'none' }}
            />
            <Image src={images.cacheHits} width="50%" />
          </Layout.Row>
        </Slide>
        <Slide>
          <Layout.Row align="center">
            <Image src={images.dataSource} width="40%" margin="0 40px 0 0" />
            <Layout.Column>
              <Heading style={{ textAlign: 'left' }} margin="0 0 50px 50px">
                Coming 🔜<br />Data Sources
              </Heading>
              <List margin="0 0 0 50px">
                {[
                  'Easiest way to wrap a REST endpoint with GraphQL',
                  'Shared cache for whole and partial query caching',
                  'Existing cache-control hints are automatically tied to the fields in your schema',
                ].map(item => (
                  <ListItem textSize={size.small} key={item}>
                    {item}
                  </ListItem>
                ))}
              </List>
            </Layout.Column>
          </Layout.Row>
        </Slide>
        <Slide>
          <Heading>Apollo Server Data Source</Heading>
          <Layout.Row style={{ margin: '40px 0' }}>
            <CodePane
              lang="js"
              theme="light"
              textSize=".8em"
              source={server.dataSource}
              style={{ minWidth: '50%' }}
            />
            <List margin="0 0 0 40px">
              {[
                'Includes data fetching primitives so you only have to supply an endpoint',
                'Allows developers to focus on business logic',
                'Coming soon: deduplication, error handling, per source tracing & metrics 🙌',
              ].map((item, idx) => (
                <ListItem bold={idx === 3} textSize={size.small} key={item}>
                  {item}
                </ListItem>
              ))}
            </List>
          </Layout.Row>
        </Slide>
        <Slide>
          <Heading>Server checkpoint 5/5 🚦</Heading>
          <List>
            {[
              'Using the context for authentication',
              'Resolver caching with DataLoader',
              'Response caching with Engine',
            ].map(item => <ListItem key={item}>{item}</ListItem>)}
          </List>
        </Slide>
        <Slide bgImage={images.apolloBkgr}>
          <Heading>Apollo Client</Heading>
        </Slide>
        <Slide>
          <Heading>What is Apollo Client?</Heading>
          <Image margin="40px 0" src={images.reduceComplexity} width="100%" />
        </Slide>
        <Slide>
          <Heading>What is Apollo Client?</Heading>
          <Text margin="20px 0" textSize={size.extraSmall}>
            Apollo Client is a data management layer for your application that's
            specifically designed to work great with GraphQL. Out of the box, it
            normalizes and caches your data for you.
          </Text>
          <Image
            src={images.dataFlow}
            margin="10px 0 0 -20px"
            width="80%"
            style={{ alignSelf: 'center' }}
          />
        </Slide>
        <Slide>
          <Heading>Apollo Client internals</Heading>
          <Layout.Row>
            {[
              {
                header: 'Apollo Cache',
                items: [
                  'Normalizes and stores GraphQL data',
                  'We recommend the InMemoryCache',
                  `Automatic updates`,
                ],
              },
              {
                header: 'Apollo Link',
                items: [
                  'Interface for managing the request cycle',
                  'Chainable and customizable',
                  `Returns an Observable`,
                ],
              },
            ].map(({ items, header }) => (
              <div key={header} style={{ width: '46%', marginTop: '40px' }}>
                <Text bold size={size.small}>
                  {header}
                </Text>
                <Layout.Cell color={colors.lightGrey}>
                  <List>
                    {items.map(item => (
                      <ListItem key={item} textSize={size.small}>
                        {item}
                      </ListItem>
                    ))}
                  </List>
                </Layout.Cell>
              </div>
            ))}
          </Layout.Row>
        </Slide>
        <Slide>
          <Heading>👩🏼‍💻 Apollo Boost</Heading>
          <Text margin="30px 0" textSize={size.extraSmall}>
            The simplest way to get started with Apollo Client is by using
            Apollo Boost, our starter kit that configures your client for you
            with our recommended settings. Apollo Boost includes packages that
            we think are essential for building an Apollo app, like our in
            memory cache, local state management, and error handling.
          </Text>
          <List ordered margin="0px">
            <ListItem textSize={size.small}>
              <Code>npm install apollo-boost graphql-tag graphql --save</Code>
            </ListItem>
            <ListItem textSize={size.small}>
              <Code>{`import ApolloClient from 'apollo-boost';`}</Code>
            </ListItem>
            <ListItem textSize={size.small}>
              <Code>
                {`const client = new ApolloClient({ uri: 'https://fullstack-workshop.glitch.me/graphql' });`}
              </Code>
            </ListItem>
            <ListItem textSize={size.small}>
              You're ready to start making queries! 🚀
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading>👩🏼‍💻 Your first query</Heading>
          <Text margin="30px 0" textSize={size.extraSmall}>
            You can use Apollo Client with React, Angular, Vue, and plain
            JavaScript. Let's try a query without a view layer integration
            first.
          </Text>
          <iframe
            src="https://codesandbox.io/embed/github/apollographql/fullstack-workshop-client/tree/01-apollo-client/"
            style={{
              width: '100%',
              height: '500px',
              border: 0,
              borderRadius: '4px',
              overflow: 'hidden',
            }}
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          />
        </Slide>
        <Slide>
          <Heading>👩🏼‍💻 What is React Apollo?</Heading>
          <Text margin="30px 0" textSize={size.extraSmall}>
            Manually firing a query isn't too bad, but what if we want to track
            loading state or execute more complicated features? React Apollo is
            Apollo Client's view layer integration for React that helps us do
            all that and more. To start using React Apollo, wrap your app in an
            ApolloProvider component.
          </Text>
          <Appear>
            <CodePane
              source={client.apolloProvider}
              style={{ maxWidth: 'none' }}
              theme="light"
              lang="jsx"
            />
          </Appear>
        </Slide>
        <Slide>
          <Heading>Client checkpoint 1/4 🚦</Heading>
          <List>
            {[
              'What is Apollo Client?',
              'Setting up Apollo Boost',
              'What is React Apollo?',
            ].map(item => <ListItem key={item}>{item}</ListItem>)}
          </List>
        </Slide>
        <Slide>
          <Heading>What is a render prop?</Heading>
          <CodePane
            margin="30px 0"
            theme="light"
            source={client.definition}
            lang="jsx"
            textSize="1em"
            style={{ maxWidth: 'none' }}
          />
        </Slide>
        <Slide>
          <Layout.Row align="center">
            <Text
              textColor="tertiary"
              margin="0px"
              bold
              textSize={size.medium}
              style={{ textAlign: 'left', flex: 1 }}
            >
              A render prop is a function that tells your component<br />what to
              render.
            </Text>
            <CodePane
              theme="light"
              source={client.click}
              lang="jsx"
              textSize="1.2em"
              style={{ flex: 1 }}
            />
          </Layout.Row>
        </Slide>
        <Slide>
          <Heading>Query components</Heading>
          <Text margin="20px 0" textSize={size.extraSmall}>
            The Query component is one of the most important building blocks of
            your Apollo application. To create a Query component, just pass a
            GraphQL query string wrapped with the <Code>gql</Code> function to
            <Code>this.props.query</Code> and provide a function to{' '}
            <Code>this.props.children</Code> that tells React what to render.
          </Text>
          <Text
            textSize={size.small}
            textColor="tertiary"
            margin="20px 0 20px 0"
          >
            1. Use the <Code>gql</Code> function to parse your query string into
            an AST
          </Text>
          <CodePane
            source={client.query}
            theme="light"
            lang="graphql"
            textSize=".8em"
          />
        </Slide>
        <Slide>
          <Heading>Query components</Heading>
          <Text margin="20px 0" textSize={size.extraSmall}>
            The Query component is one of the most important building blocks of
            your Apollo application. To create a Query component, just pass a
            GraphQL query string wrapped with the <Code>gql</Code> function to
            <Code>this.props.query</Code> and provide a function to{' '}
            <Code>this.props.children</Code> that tells React what to render.
          </Text>
          <Text
            textSize={size.small}
            textColor="tertiary"
            margin="20px 0 20px 0"
          >
            2. Create a Query component with a render prop function
          </Text>
          <CodePane
            source={client.queryComponent}
            theme="light"
            lang="jsx"
            style={{ maxWidth: 'none' }}
            textSize=".8em"
          />
        </Slide>
        <Slide>
          <Heading>Fragments</Heading>
          <Text margin="20px 0" textSize={size.extraSmall}>
            If you have two queries that share a lot of the same fields, you
            should create a fragment to share fields between them. To use a
            fragment, define the fragment at the bottom of your query document
            and use the spread operator to copy the fragment's fields into your
            query.
          </Text>
          <Layout.Row>
            <CodePane
              source={client.fragment1}
              theme="light"
              lang="graphql"
              style={{ maxWidth: 'none' }}
              textSize=".8em"
            />
            <CodePane
              source={client.fragment2}
              theme="light"
              lang="graphql"
              style={{ maxWidth: 'none' }}
              textSize=".8em"
            />
          </Layout.Row>
        </Slide>
        <Slide>
          <Heading>💪 Query components</Heading>
          <Text margin="20px 0" textSize={size.extraSmall}>
            Now it's your turn! Try building some Query components to fetch data
            from our GraphQL API. If you get stuck, you can view docs on props
            and the render prop function{' '}
            <Link href="https://www.apollographql.com/docs/react/essentials/queries.html#api">
              here
            </Link>.
          </Text>
          <List ordered>
            {[
              'Navigate to components/MovieList and read the Part 1 instructions. No need to do Part 2!',
              `Recall what we just learned about fragments to share data between the two queries`,
              `Delete the seed data when you're finished`,
            ].map(item => (
              <ListItem key={item} textSize={size.small}>
                {item}
              </ListItem>
            ))}
          </List>
        </Slide>
        <Slide>
          <Heading>💪 Pagination</Heading>
          <Text margin="20px 0" textSize={size.extraSmall}>
            The object passed into the Query component's render prop function
            contains more than just your query's data! It also has helpful
            functions for polling, refetching, pagination, and more!
          </Text>
          <CodePane
            source={client.fetchMore}
            lang="javascript"
            textSize="1.2em"
            style={{ maxWidth: 'none' }}
            theme="light"
          />
        </Slide>
        <Slide>
          <Heading>Client checkpoint 2/4 🚦</Heading>
          <List>
            {[
              'Fetching data with Query components',
              'Pagination with fetchMore',
              'Apollo DevTools debugging strategies',
            ].map(item => <ListItem key={item}>{item}</ListItem>)}
          </List>
        </Slide>
        <Slide>
          <Heading>Authentication</Heading>
          <Text margin="20px 0" textSize={size.extraSmall}>
            To send authorization headers to the GraphQL server, set them on the
            context in Apollo Boost's request function. The request function is
            called every time an operation executes and the context is shared
            among all links in your network stack.
          </Text>
          <CodePane
            style={{ maxWidth: 'none' }}
            source={client.auth}
            theme="light"
            lang="javascript"
          />
        </Slide>
        <Slide>
          <Heading>Mutation components</Heading>
          <Text margin="20px 0" textSize={size.extraSmall}>
            The Mutation component is what you’ll use to trigger mutations from
            your UI. To create a Mutation component, just pass a GraphQL query
            string wrapped with the <Code>gql</Code> function to
            <Code>this.props.mutation</Code> and provide a function to{' '}
            <Code>this.props.children</Code> that tells React what to render.
          </Text>
          <Text
            textSize={size.small}
            textColor="tertiary"
            margin="20px 0 20px 0"
          >
            1. Use the <Code>gql</Code> function to parse your query string into
            an AST
          </Text>
          <CodePane
            source={client.mutation}
            theme="light"
            lang="jsx"
            style={{ maxWidth: 'none' }}
            textSize=".8em"
          />
        </Slide>
        <Slide>
          <Heading>Mutation components</Heading>
          <Text
            textSize={size.small}
            textColor="tertiary"
            margin="20px 0 20px 0"
          >
            2. Trigger the mutation with the first argument to the render prop
            function
          </Text>
          <CodePane
            source={client.mutationComponent}
            theme="light"
            lang="jsx"
            style={{ maxWidth: 'none' }}
            textSize=".7em"
          />
        </Slide>
        <Slide>
          <Heading>💪 Mutation components</Heading>
          <Text margin="20px 0" textSize={size.extraSmall}>
            Now it's your turn! Try building some Mutation components to update
            data in our GraphQL API. If you get stuck, you can view docs on
            props and the render prop function{' '}
            <Link href="https://www.apollographql.com/docs/react/essentials/mutations.html#api">
              here
            </Link>.
          </Text>
          <List>
            {[
              'Navigate to components/Login and read the Part 1 instructions',
              `Check the Apollo docs on the props configuration`,
              `Use Apollo DevTools if you get stuck`,
            ].map(item => (
              <ListItem key={item} textSize={size.small}>
                {item}
              </ListItem>
            ))}
          </List>
        </Slide>
        <Slide>
          <Heading>Updating the Apollo cache</Heading>
          <Text margin="20px 0" textSize={size.extraSmall}>
            Sometimes there is a mismatch between our server data and what we
            see in our UI after a mutation. This especially occurs when we're
            adding or removing items from a list. We need to tell Apollo Client
            to manually update the cache instead of relying on __typename + id
            to keep everything up to date.
          </Text>
          <CodePane
            source={client.update}
            lang="jsx"
            theme="light"
            style={{ maxWidth: 'none' }}
          />
        </Slide>
        <Slide>
          <Heading>Client checkpoint 3/4 🚦</Heading>
          <List>
            {[
              'Authenticating a request',
              'Building Mutation components',
              'Updating data in the Apollo cache',
            ].map(item => <ListItem key={item}>{item}</ListItem>)}
          </List>
        </Slide>
        <Slide>
          <Heading>Unified state management</Heading>
          <Image margin="50px 0 0 0" src={images.unifiedState} width="100%" />
        </Slide>
        <Slide>
          <Heading margin="0 0 40px 0">GraphQL for local state</Heading>
          <Layout.Row>
            <CodePane
              theme="light"
              source={client.stateMgmt1}
              lang="graphql"
              style={{ minWidth: '60%' }}
            />
            <List margin="0 0 0 50px">
              {[
                'Specify local queries with @client',
                'Add virtual fields to remote data',
                'Combine local & remote data in one query',
              ].map(item => (
                <ListItem textSize={size.small} key={item}>
                  {item}
                </ListItem>
              ))}
            </List>
          </Layout.Row>
        </Slide>
        <Slide>
          <Heading>Client checkpoint 4/4 🚦</Heading>
          <List>
            {[
              'What is apollo-link-state?',
              'Writing initial state to the cache',
              'Direct writes vs. resolvers',
            ].map(item => <ListItem key={item}>{item}</ListItem>)}
          </List>
        </Slide>
        <Slide>
          <Heading>What's next 🚀</Heading>
          <List>
            {[
              'Add additional data to the movie card',
              'Convert setState calls to link-state',
              'Build out more of your schema',
              'Write tests by mocking your server',
            ].map(item => <ListItem key={item}>{item}</ListItem>)}
          </List>
        </Slide>
        <Slide bgImage={images.apolloBkgr}>
          <Heading>Learning resources 📚</Heading>
          <Text textColor="primary">apollographql.com/docs</Text>
        </Slide>
        <Slide bgImage={images.apolloBkgr}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <Image src={images.astroDaisy} height="500px" />
            <Layout.Column>
              <Heading margin="20px 0px 0px 30px" textColor="tertiary">
                Thanks Hilton! 🙌
              </Heading>
              <Text margin="0px 0px 0px 30px" textColor="primary">
                @peggyrayzis
              </Text>
            </Layout.Column>
          </div>
        </Slide>
      </Deck>
    );
  }
}
