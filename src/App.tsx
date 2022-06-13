import React from "react";
import { Home } from "./components/Home";


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import Navbar from "./components/Navbar";


const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache()
});

const App: React.FC = () => (
  <>
    <Navbar />
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  </>
);

export default App;
