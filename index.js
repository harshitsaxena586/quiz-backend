const { ApolloServer, gql } = require('apollo-server');

const typeDefs =gql`
type Book {
    title: String
    author:String   
}
type Quiz {
    name:String
}
# The "Query" type is special: it lists all of the available queries that
# clients can execute, along with the return type for each. In this
# case, the "books" query returns an array of zero or more Books (defined above).

type Query{
    books: [Book]
    quiz:[Quiz]
}
`
const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];

  const quiz = [
    {
      name:"Marvel",
    },
    {
     name:"Tech",
    },
  ];
  
const resolvers={
    Query:{
      books:()=> books,
      quiz:()=> quiz
    }
}

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers});

// The `listen` method launches a web server.
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
