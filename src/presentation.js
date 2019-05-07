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
          <Text bold textColor="tertiary" textSize={size.large}>
            Welcome!
          </Text>
          <Text bold textColor="primary" margin="30px 0 0 0" textSize="2.1em">
            Please navigate to:
          </Text>
          <Text bold textColor="tertiary" margin="10px 0 0 0" textSize="2.1em">
            github.com/apollographql/fullstack-workshop
          </Text>
          <Text bold textColor="primary" margin="10px 0 0 0" textSize="2.1em">
            and follow the instructions!
          </Text>
        </Slide>
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
                Developer Experience
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
        <Slide bgImage={images.apolloBkgr}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <Image src={images.astroDaisy} height="500px" />
            <Heading>Be curious & have fun!</Heading>
          </div>
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
            Build a fullstack GraphQL app with the Apollo platform 🚀
          </Text>
        </Slide>
        <Slide>
          <Layout.Row>
            {[
              {
                time: 'Day 1',
                header: 'Apollo Server',
                items: [
                  'Schema building',
                  'Data sources',
                  `Resolvers`,
                  `Authentication`,
                ],
              },
              {
                time: 'Day 2',
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
              'Apollo account',
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
            </Link>
            . If you ever get stuck, check the FAQ for answers. 😊
          </Text>
          <Text textSize={size.small}>
            3. All development will be done in the browser via{' '}
            <Link href="https://codesandbox.io">CodeSandbox</Link>. This means
            more time learning cool stuff and less time messing with local
            environments! 🎉
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
                  Schema: Describe the data you have
                </Text>
              </Layout.Column>
            </Appear>
            <Appear>
              <Layout.Column>
                <Image src={images.query} margin="0px" width="550px" />
                <Text textSize={size.small}>
                  Query: Describe the data you need
                </Text>
              </Layout.Column>
            </Appear>
          </Layout.Row>
        </Slide>
        <Slide>
          <Image src={images.playground} width="100%" />
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
                  'Smaller payloads',
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
          <Heading>What is the Apollo platform?</Heading>
          <Image
            src={images.platform}
            width="90%"
            style={{ alignSelf: 'center' }}
          />
        </Slide>
        <Slide>
          <Heading>Server checkpoint 1/7 🚦</Heading>
          <List>
            {[
              'What is GraphQL?',
              'GraphQL vs. REST',
              'What is the Apollo platform?',
            ].map(item => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </List>
        </Slide>
        <Slide>
          <Heading>CodeSandbox demo 🎉</Heading>
          <iframe
            src="https://codesandbox.io/embed/github/apollographql/fullstack-workshop-server/tree/master/?fontsize=14"
            title="graphql-server-workshop"
            style={{
              width: '100%',
              height: '500px',
              border: '0',
              borderRadius: '4px',
              overflow: 'hidden',
              marginTop: '50px',
            }}
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          />
        </Slide>
        <Slide>
          <Heading>👩🏼‍💻 Setting up Apollo Server</Heading>
          <List ordered>
            <ListItem textSize={size.small}>
              <Code>npm install apollo-server graphql --save</Code>
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
              <Code>{`server.listen().then(({ url }) => console.log(url))`}</Code>
            </ListItem>
            <ListItem textSize={size.small}>
              Your GraphQL server and GraphQL Playground IDE are set up at{' '}
              <Code>/</Code> 🎉
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading>GraphQL Playground</Heading>
          <iframe
            src="https://codesandbox.io/embed/github/apollographql/fullstack-workshop-server/tree/master/?fontsize=14"
            title="graphql-server-workshop"
            style={{
              width: '100%',
              height: '500px',
              border: '0',
              borderRadius: '4px',
              overflow: 'hidden',
              marginTop: '50px',
            }}
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          />
        </Slide>
        <Slide>
          <Heading>Server checkpoint 2/7 🚦</Heading>
          <List>
            {[
              'Setting up Apollo Server',
              'Exploring in GraphQL Playground',
            ].map(item => (
              <ListItem key={item}>{item}</ListItem>
            ))}
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
          <Heading>Agile schema development</Heading>
          <Text margin="20px 0 40px" textSize={size.extraSmall}>
            Check out{' '}
            <Link href="http://www.principledgraphql.com">
              principledgraphql.com
            </Link>{' '}
            for best practices distilled from our experiences with customers on
            how to architect your graph API.
          </Text>
          <Image
            src={images.principled}
            width="80%"
            style={{ alignSelf: 'center' }}
          />
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
        <Slide bgImage={images.cheatsheet} />
        <Slide>
          <Heading>👩🏼‍💻 Queries and mutations</Heading>
          <Text margin="20px 0 20px" textSize={size.extraSmall}>
            The Query and Mutation types are two special types in GraphQL.
            Queries are how you fetch data, and mutations are how you update
            data. They're the root of your graph API.
          </Text>
          <List ordered>
            {[
              'Write a movie query to fetch a single movie by id',
              'Write a toggleLike mutation to toggle if a movie is liked',
              'Write a likes query that fetches all the liked movies',
            ].map(item => (
              <ListItem key={item} textSize={size.small}>
                {item}
              </ListItem>
            ))}
          </List>
        </Slide>
        <Slide>
          <Heading>👩🏼‍💻 Writing a schema</Heading>
          <Text margin="20px 0 20px" textSize={size.extraSmall}>
            We recommend writing a schema in Schema Definition Language (SDL).
            Today, we're going to cover object and scalar types, but you can
            view a full list of types in the{' '}
            <Link href="http://graphql.org/learn/schema/">
              graphql.org docs
            </Link>
            .
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
            Try writing the Movie type on your own by navigating to{' '}
            <Code>src/schema.js</Code> and following the instructions. If you
            get stuck, check out the{' '}
            <Link href="http://graphql.org/learn/schema/">
              graphql.org docs
            </Link>{' '}
            or the <Link href="http://devhints.io/graphql">cheatsheet</Link>.
          </Text>
          <List ordered>
            {[
              'Write the Movie type in schema.js',
              'The poster field should have an argument that is the Size type',
              'The genres field is non-nullable',
              'The cast field returns an array of Cast types',
              'Bonus: Explore your schema in GraphQL Playground when you finish',
            ].map(item => (
              <ListItem key={item} textSize={size.small}>
                {item}
              </ListItem>
            ))}
          </List>
        </Slide>
        <Slide>
          <Heading>Schema directives</Heading>
          <Text margin="20px 0" textSize={size.extraSmall}>
            GraphQL comes with several default schema directives that can be
            added to fields in your schema. You can also create{' '}
            <Link href="https://www.apollographql.com/docs/apollo-server/features/creating-directives">
              custom schema directives
            </Link>{' '}
            for use cases like authentication, formatting dates,
            internationalization, and more.
          </Text>
          <Layout.Row>
            <List>
              {[
                '@deprecated(reason: String): Deprecates field with a message ',
                `@skip(if: Boolean): Skips calling this field's resolver if true`,
                '@include(if: Boolean): Calls resolver for this field if true',
              ].map(item => (
                <ListItem key={item} textSize={size.small}>
                  {item}
                </ListItem>
              ))}
            </List>
          </Layout.Row>
        </Slide>
        <Slide>
          <Heading>Server checkpoint 3/7 🚦</Heading>
          <List>
            {[
              'Schema driven development',
              'Schema Definition Language (SDL)',
              'Queries and mutations',
            ].map(item => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </List>
        </Slide>
        <Slide>
          <Heading>Apollo Data Sources</Heading>
          <Layout.Row style={{ marginTop: '60px', alignItems: 'center' }}>
            <Image src={images.dataSource} height="650px" />
            <List margin="0px 0px 0px 100px">
              {[
                'Apollo Data Sources encapsulate data fetching for a particular service',
                'The REST data source automatically sets up a resource cache for you',
                'Data sources allow you to safely refactor data fetching logic while keeping resolvers thin',
              ].map(item => (
                <ListItem key={item} textSize={size.small}>
                  {item}
                </ListItem>
              ))}
            </List>
          </Layout.Row>
        </Slide>
        <Slide>
          <Heading>💪 Build a REST data source</Heading>
          <Text margin="20px 0 20px" textSize={size.extraSmall}>
            Now it's your turn to fill in some of the data fetching methods for
            our data source. Navigate to <Code>src/data-sources/movie.js</Code>{' '}
            to get started. Remember to check out the schema if you're unsure of
            what a data fetching method should return.
          </Text>
          <List ordered margin="0px">
            {[
              'Write a getMovieById method for the data source',
              'Write a getCastByMovie method for the data source',
              `If you\'re done, check out src/data-sources/likes.js for an example of a data source that wraps a database`,
            ].map(item => (
              <ListItem key={item} textSize={size.small}>
                {item}
              </ListItem>
            ))}
          </List>
        </Slide>
        <Slide>
          <Heading>👩🏼‍💻 Add data sources to Apollo</Heading>
          <Text margin="20px 0 20px" textSize={size.extraSmall}>
            Add our data sources to Apollo Server by specifying a function for
            the <Code>dataSources</Code> property on the constructor.
            Instantiate your data sources in the object returned from the
            function. This will ensure your data sources are properly placed on
            the GraphQL context for every request.
          </Text>
          <CodePane
            source={server.dataSource}
            lang="js"
            theme="light"
            style={{ maxWidth: 'none' }}
          />
        </Slide>
        <Slide>
          <Heading>Partial query caching</Heading>
          <Text margin="20px 0 20px" textSize={size.extraSmall}>
            The REST data source automatically sets up a resource cache for you,
            which is in-memory by default. It can be persisted via Memcached,
            Redis, or any other library of your choice. This resource cache
            solves the n+1 query problem (pictured below) and nearly eliminates
            the need for using DataLoader.
          </Text>
          <Image src={images.dataloader} width="100%" />
        </Slide>
        <Slide>
          <Heading>Server checkpoint 4/7 🚦</Heading>
          <List>
            {['REST Data Source', 'Partial query caching'].map(item => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </List>
        </Slide>
        <Slide>
          <Heading>GraphQL context</Heading>
          <Text margin="40px 0 20px 0" textSize={size.extraSmall}>
            All GraphQL requests share the same context object. The{' '}
            <Code>ApolloServer</Code> constructor has a context property that is
            a function with access to the request itself.
          </Text>
          <Appear>
            <List>
              {[
                'Useful for passing authentication scope, database connections, and custom fetch functions',
                'Resolvers should never modify the context',
                'The context property on ApolloServer is a function with access to the request',
              ].map(item => (
                <ListItem key={item} textSize={size.small}>
                  {item}
                </ListItem>
              ))}
            </List>
          </Appear>
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
          <Heading>Server checkpoint 5/7 🚦</Heading>
          <List>
            {['Authentication', 'GraphQL context'].map(item => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </List>
        </Slide>
        <Slide>
          <Heading>What is a resolver?</Heading>
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
          <Heading>💪 Let's build our resolvers!</Heading>
          <CodePane
            source={server.resolver}
            theme="light"
            textSize="1.2em"
            style={{ maxWidth: 'none' }}
            margin="30px 0"
            lang="javascript"
          />
          <List>
            {[
              'Navigate to the resolvers folder and implement the resolvers',
              'Start with Query and Mutation, then move onto Movie',
              'Look at your data sources for your data fetching functions',
              'Bonus: Test that your resolvers work by running queries in GraphQL Playground',
            ].map(item => (
              <ListItem key={item} textSize={size.small}>
                {item}
              </ListItem>
            ))}
          </List>
        </Slide>
        <Slide>
          <Heading>👩🏼‍💻 Running queries</Heading>
          <Image src={images.playground} width="95%" margin="20px" />
        </Slide>
        <Slide>
          <Heading>Project structure</Heading>
          <Text margin="20px 0 20px" textSize={size.extraSmall}>
            There are many ways to organize your graph API's project structure.
            We recommend starting small by putting your schema in one file and
            breaking it out over time. For teams who want to compose multiple
            schemas into one graph, we recommend the Apollo Gateway.
          </Text>
          <Layout.Row align="center">
            <Image src={images.spectrum} width="400px" />
            <List style={{ width: '60%' }}>
              <ListItem textSize={size.extraSmall}>
                Group by domain or by file type
              </ListItem>
              <ListItem textSize={size.extraSmall}>
                Separate your data fetching logic into data sources and access
                them on the context
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
          <Heading>Server checkpoint 6/7 🚦</Heading>
          <List>
            {[
              'Resolver functions',
              'Running queries & mutations',
              'Project structure',
            ].map(item => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </List>
        </Slide>
        <Slide>
          <Heading>Running in production</Heading>
          <Text margin="20px 0 50px 0" textSize={size.extraSmall}>
            The Apollo platform helps you run GraphQL in production with
            confidence. Our cloud services include a schema registry for
            validating changes, a client registry for client awareness, and a
            trace warehouse for capturing detailed information about your graph
            API.
          </Text>
          <Layout.Row>
            <Image
              src={images.platform}
              width="55%"
              margin="0 50px 0 0"
              style={{ alignSelf: 'center' }}
            />
            <List>
              {[
                'What clients are accessing my API?',
                'How do I safely make changes to my schema?',
                'When was a field deprecated?',
              ].map(item => (
                <ListItem textSize={size.small} key={item}>
                  {item}
                </ListItem>
              ))}
            </List>
          </Layout.Row>
        </Slide>
        <Slide>
          <Heading>👩🏼‍💻 Schema registry</Heading>
          <Text margin="20px 0 50px 0" textSize={size.extraSmall}>
            In production, we recommend integrating the apollo service:push
            command into your CI/CD workflow. You also have the ability to set
            schema tags for different versions (staging vs. prod).
          </Text>
          <List ordered>
            {[
              'Visit engine.apollographql.com and login',
              'Click Add Service in the top right',
              'Edit the global ID to be workshop-server',
              'Create a service, then copy the API key',
              'Run npx apollo service:push key="YOUR_KEY"',
            ].map(item => (
              <ListItem textSize={size.small} key={item}>
                {item}
              </ListItem>
            ))}
          </List>
        </Slide>
        <Slide>
          <Image
            src={images.validation}
            width="90%"
            style={{ alignSelf: 'center' }}
          />
        </Slide>
        <Slide>
          <Heading>Securing your graph API</Heading>
          <List>
            {[
              'Register all operations with the Apollo CLI',
              'Permit only registered operations in production',
              'Eliminate the risk of arbitrary operations',
            ].map(item => (
              <ListItem textSize={size.small} key={item}>
                {item}
              </ListItem>
            ))}
          </List>
          <Image src={images.security} width="100%" />
        </Slide>

        <Slide>
          <Heading>Server checkpoint 7/7 🚦</Heading>
          <List>
            {[
              'Pushing to the schema registry',
              'Validating schema changes',
              'Securing your graph API',
            ].map(item => (
              <ListItem key={item}>{item}</ListItem>
            ))}
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
                {`const client = new ApolloClient({ uri: 'https://fullstack-workshop-server.glitch.me/graphql' });`}
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
            ].map(item => (
              <ListItem key={item}>{item}</ListItem>
            ))}
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
              A render prop is a function that tells your component
              <br />
              what to render.
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
            </Link>
            .
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
            ].map(item => (
              <ListItem key={item}>{item}</ListItem>
            ))}
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
            2. Call the mutation with the first arg to the render prop function
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
          <Heading>💪 Mutation components (pt. 1)</Heading>
          <Text margin="20px 0" textSize={size.extraSmall}>
            Now it's your turn! Try building some Mutation components to update
            data in our GraphQL API. If you get stuck, you can view docs on
            props and the render prop function{' '}
            <Link href="https://www.apollographql.com/docs/react/essentials/mutations.html#api">
              here
            </Link>
            .
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
          <Heading>Optimistic mutations</Heading>
          <Text margin="20px 0" textSize={size.extraSmall}>
            Often, we know what the result of a mutation will be before it
            returns from the server. When we already know how our UI is supposed
            to respond after a mutation, we can create an optimistic mutation.
            Just pass your desired optimisticResponse to the mutate function and
            Apollo Client will take care of the rest.
          </Text>
          <Layout.Row>
            <CodePane
              source={client.optimisticUI}
              lang="jsx"
              theme="light"
              style={{ maxWidth: 'none', minWidth: '60%' }}
            />
            <List>
              {[
                'Optimistic UI will rollback if there is an error',
                'Add __typename to prevent warnings from the Apollo cache',
              ].map(item => (
                <ListItem textSize={size.small} key={item}>
                  {item}
                </ListItem>
              ))}
            </List>
          </Layout.Row>
        </Slide>
        <Slide>
          <Heading>💪 Mutation components (pt. 2)</Heading>
          <Text margin="20px 0" textSize={size.extraSmall}>
            Let's build a Mutation component with optimistic UI. If you get
            stuck, you can view docs on props and the render prop function{' '}
            <Link href="https://www.apollographql.com/docs/react/essentials/mutations.html#api">
              here
            </Link>
            .
          </Text>
          <List>
            {[
              'Navigate to components/MovieTile and read the Part 2 instructions',
              `Try to add an optimistic update to the toggleLike mutation`,
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
            ].map(item => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </List>
        </Slide>
        <Slide>
          <Image
            margin="50px 0 0 0"
            src={images.singleSource}
            width="80%"
            style={{ alignSelf: 'center' }}
          />
        </Slide>
        <Slide>
          <Image
            src={images.unifiedInterface}
            width="80%"
            style={{ alignSelf: 'center' }}
          />
        </Slide>
        <Slide>
          <Heading>Client checkpoint 4/4 🚦</Heading>
          <List>
            {[
              'What is apollo-link-state?',
              'Writing initial state to the cache',
              'Direct writes vs. resolvers',
            ].map(item => (
              <ListItem key={item}>{item}</ListItem>
            ))}
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
            ].map(item => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </List>
        </Slide>
        <Slide bgImage={images.apolloBkgr}>
          <Heading>Survey time! ⏰</Heading>
          <Text textColor="primary">
            Check the workshop README for the link.
          </Text>
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
                Thank you! 🙌
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
