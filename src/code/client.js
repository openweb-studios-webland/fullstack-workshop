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

export const auth = `const client = new ApolloClient({
  uri: 'https://fullstack-workshop-server.glitch.me/graphql',
  request: operation => {
    operation.setContext(context => ({
      headers: {
        ...context.headers,
        authorization: localStorage.getItem('token'),
      },
    }));
  }
});`;

export const mutation = `import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const ADD_TODO = gql\`
  mutation addTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
\`;`;

export const mutationComponent = `const AddTodo = () => {
  let input;
  return (
    <Mutation mutation={ADD_TODO}>
      {(addTodo, { data }) => (
        <form
          onSubmit={e => {
            e.preventDefault();
            addTodo({ variables: { type: input.value } });
            input.value = "";
          }}>
          <input ref={node => { input = node }} />
          <button type="submit">Add Todo</button>
        </form>
      )}
    </Mutation>
  );
};`;

export const optimisticUI = `addTodo({
  variables: { type: input.value },
  optimisticResponse: {
    addTodo: {
      id: -1,
      type: input.value,
      __typename: 'Todo'
    }
  }
})`;

export const update = `<Mutation
  mutation={ADD_TODO}
  update={(cache, { data: { addTodo } }) => {
    const { todos } = cache.readQuery({ query: GET_TODOS });
    cache.writeQuery({
      query: GET_TODOS,
      data: { todos: todos.concat([addTodo]) }
    });
  }}
>
</Mutation>`;

export const definition = `class Click extends React.Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState(prevState => ({ clicked: !prevState.clicked }))
  }

  render = () => (
    <div onClick={this.handleClick}>
      {this.props.render(this.state.clicked)}
    </div>
  )
}`;

export const click = `const Item = () => (
  <Click
    render={clicked => {
      return clicked
        ? <p>Clicked!</p>
        : <p>Click me!</p>
    }}
  />
);`;

export const fragment1 = `CommentsPage.fragments = {
  comment: gql\`
    fragment CommentsPageComment on Comment {
      id
      postedBy {
        login
        html_url
      }
      createdAt
      content
    }
  \`,
};`;

export const fragment2 = `export const COMMENT_QUERY = gql\`
query Comment($repoName: String!) {
  entry(repoFullName: $repoName) {
    comments {
      ...CommentsPageComment
    }
  }
}
\${CommentsPage.fragments.comment}
\`;`;

export const stateMgmt1 = `const GET_DOG = gql\`
  query getDogByBreed($breed: String!) {
    dog(breed: $breed) {
      images {
        url
        id
        isLiked @client
      }
    }
  }
\`;`;
