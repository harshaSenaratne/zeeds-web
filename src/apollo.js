import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
const GRAPHQL_ENDPOINT = `https://zeeds-api.hasura.app/v1/graphql`;
const HASURA_SECRET = `AyEWnVrMNnTjT3WR0a1OwaCZZaip8rD6yQ5fyE19sap6ny9T69zEQ6NYoLhGmb8j`

const createApolloClient = (Token) => {
  const link = new HttpLink({
    uri: GRAPHQL_ENDPOINT,
    headers: {
      'Authorization': `Bearer ${Token}`,
      'x-hasura-admin-secret': HASURA_SECRET
    }
  });
  return new ApolloClient({
    link,
    cache: new InMemoryCache()
  })
}
export default createApolloClient;