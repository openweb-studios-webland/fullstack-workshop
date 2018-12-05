export const restExample = `GET /api/pizza/cheese
GET /api/pizza/supreme
GET /api/pizza/margherita`;

export const gqlExample = `query {
  pizza {
    cheese {
      mozzarella
    }
    toppings {
      basil
      mushrooms
    }
  }
}`;

export const schemaExample = `type Movie {
  id: ID!
  title: String!
  overview: String!
  posterPath: String!
}

type Query {
  movie(id: ID!): Movie
}`;

export const sdl = `const CastMembers = ({ cast }) => {
  return cast.map(member => (
    <Cast
      key={member.id}
      id={member.id}
      name={member.name}
      photo={member.photo}
      gender={member.gender}
      character={member.character}
    />
  ));
};`;

export const resolver = `fieldName: (obj, args, context, info) => result;`;

export const loader = `const loader = new DataLoader((keys: []string) => Promise<[]any>);`;

export const cacheControl = `type Cast @cacheControl(maxAge: 600) {
  id: ID
  name: String!
  photo(size: Int): String
  gender: String
  character: String
}`;

export const dataSource = `const MovieDataSource = require('./data-sources/movie');
const LikesDataSource = require('./data-sources/likes');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    moviesAPI: new MovieDataSource(),
    likesAPI: new LikesDataSource(),
  })
});`;
