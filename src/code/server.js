export const restExample = `GET /api/sandwich/bread
GET /api/sandwich/meat
GET /api/sandwich/toppings`;

export const gqlExample = `query {
  sandwich {
    bread {
      baguette
    }
    meat {
      turkey
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
