export const apolloProvider = `import { ApolloProvider } from 'react-apollo';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);`;

export const query = `import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_DOG_PHOTO = gql\`
  query dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
\`;

`;

export const queryComponent = `const DogPhoto = ({ breed }) => (
  <Query query={GET_DOG_PHOTO} variables={{ breed }}>
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return 'Error!';

      return (
        <img src={data.dog.displayImage} style={{ width: 100 }} />
      );
    }}
  </Query>
);`;

export const fetchMore = `fetchMore({
  variables: { /* new query variables */ },
  updateQuery: (previous, { fetchMoreResult }) => {
    /* return next query result */
  }
})`;
