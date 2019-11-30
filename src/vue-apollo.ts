import {ApolloClient} from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
    uri: 'http://localhost:4399/graphql',
});

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
});
