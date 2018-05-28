export default [
  {
    type: 'title',
    content: {
      title: 'GraphQL: A Primer',
      names: ['@chopmann', '@jacobtheevans'],
      image: 'https://i.imgur.com/x8nLLVt.jpg',
      color: 'white',
      background: 'rgba(0,0,0,0.7)'
    }
  },
  {
    type: 'text',
    content: {
      title: 'Who we are',
      text: `Jacob Evans and Cornelio Hopmann are NodeJS developers in an OpenSource group 
      [br]
      called HamburgChimps currently working in Cybus on Industrial IoT topics.
      [br]
      Enthusiast of GraphQL who want to share their recently aquired knowledge with the community.
      [br]
      Jacob: Lived in Hamburg for a few months, enjoys getting mad while playing board games, and learning new things.
      [br]
      https://github.com/jacobtheevans
      [br]
      Cor: Lived in Hamburg almost two years, grew up playing Tropico and likes thinking about systems.
      [br]
      https://github.com/chopmann
      `,
      image: 'https://i.imgur.com/x8nLLVt.jpg',
      color: 'white',
      background: 'rgba(0,0,0,0.7)'
    }
  },
  {
    type: 'text',
    content: {
      title: 'What is GraphQL?',
      text: `
      - Not an implementation
      [br]
      - Not owned by Facebook
      [br]
      - A Query Language
      [br]
      - A Specification
      [br]
      - Has multiple Implementations
      [br]
      `,
      image: 'https://i.imgur.com/x8nLLVt.jpg',
      color: 'white',
      background: 'rgba(0,0,0,0.7)'
    }
  },
  {
    type: 'code',
    content: {
      title: 'GraphQL Types',
      text: `
      - Scalars
      [br]
        Int
      [br]
        Float
      [br]
        String
      [br]
        Boolean
      [br]
        ID: 
        [br]
          refetch an object
          [br]
          key for a cache
          [br]
          serializable to String
          [br]
    - Objects
    [br]
    - Input Objects
    [br]
      Why? Objects can contain fields that express circular references or other complex types.
    [br]
    - Lists
    `,
      code: `
      type City {
        id: ID
        discovered: Boolean!
        country: Country!
        name: String!
        population: Int!
        costFactor: Float
        districts: [District]
      }



      input CreateCity {
        countryCode: String!
        name: String!
        population: Int
      } 
      `,
      image: 'https://i.imgur.com/x8nLLVt.jpg',
      color: 'white',
      background: 'rgba(0,0,0,0.7)'
    }
  },
  {
    type: 'code',
    content: {
      title: 'GraphQL Queries',
      text: `
      are read‐only fetch
      [br]
      can have arguments
      [br]
      has selection set
      `,
      code: `
      type Query {
        allCities: [City]
        city(id: ID): City
      }

      query {
        allCities {
          discovered
          name
          country {
            code
          }
        }
      }
      `,
      image: 'https://i.imgur.com/x8nLLVt.jpg',
      color: 'white',
      background: 'rgba(0,0,0,0.7)'
    }
  },
  {
    type: 'code',
    content: {
      title: 'GraphQL Mutations',
      text: `
      - a write followed by a fetch
      [br]
      - same as a query
      `,
      code: `
      input discoverCityInput {
        countryCode: String!
        name: String!
      }

      type Mutation {
        discoverCity(input: discoverCityInput): Boolean
      }
      `,
      image: 'https://i.imgur.com/x8nLLVt.jpg',
      color: 'white',
      background: 'rgba(0,0,0,0.7)'
    }
  },
  {
    type: 'text',
    content: {
      title: 'GraphiQL - GraphQL Tooling',
      text: 'rem ipsum dolor[br] amet pour-over organic mustache butcher prism github.com/jacobtheevans stumptown occupy kogi direct trade sustainable. Crucifix irony banh mi, tofu humblebrag poutine vape fanny pack thundercats actually. Meggings DIY listicle cronut. Umami mustache shabby chic microdosing salvia selfies poke. Kombucha pitchfork iceland four dollar toast man bun polaroid tousled health goth subway tile kogi tofu bushwick vape post-ironic. Pabst cred synth scenester. Asymmetrical affogato banjo, roof party chicharrones williamsburg man braid brooklyn fanny pack.',
      image: 'https://i.imgur.com/x8nLLVt.jpg',
      color: 'white',
      background: 'rgba(0,0,0,0.7)'
    }
  },
  {
    type: 'text',
    content: {
      title: 'Text Definition vs JavaScript',
      text: 'rem ipsum dolor[br] amet pour-over organic mustache butcher prism github.com/jacobtheevans stumptown occupy kogi direct trade sustainable. Crucifix irony banh mi, tofu humblebrag poutine vape fanny pack thundercats actually. Meggings DIY listicle cronut. Umami mustache shabby chic microdosing salvia selfies poke. Kombucha pitchfork iceland four dollar toast man bun polaroid tousled health goth subway tile kogi tofu bushwick vape post-ironic. Pabst cred synth scenester. Asymmetrical affogato banjo, roof party chicharrones williamsburg man braid brooklyn fanny pack.',
      image: 'https://i.imgur.com/x8nLLVt.jpg',
      color: 'white',
      background: 'rgba(0,0,0,0.7)'
    }
  },
  {
    type: 'text',
    content: {
      title: 'REST VS GraphQL Overview',
      text: `
      REST is not different from GraphQL. [br]
      GraphQL is just an extension built on the REST interface. [br]
      They both allow us to do CRUD operations on ressources. [br]

      The difference REST is an architectural concept for network based software, [br]
      but has no official tools or specification, it is just designed to decouple [br]
      an API from a client. [br]

      GraphlQL is query language, specification and collection of tools designed [br]
      to oparate over a single endpoint.
      `,
      image: 'https://i.imgur.com/x8nLLVt.jpg',
      color: 'white',
      background: 'rgba(0,0,0,0.7)'
    }
  },
  {
    type: 'text',
    content: {
      title: 'HTTP Verbs VS Queries/Mutations',
      text: `
      GET /city/{id}
      `,
      image: 'https://i.imgur.com/x8nLLVt.jpg',
      color: 'white',
      background: 'rgba(0,0,0,0.7)'
    }
  },
  {
    type: 'text',
    content: {
      title: 'Differences in Frontend Architecture',
      text: ``,
      image: 'https://i.imgur.com/x8nLLVt.jpg',
      color: 'white',
      background: 'rgba(0,0,0,0.7)'
    }
  },
  {
    type: 'text',
    content: {
      title: 'Is it more react-y?',
      text: ``,
      image: 'https://i.imgur.com/x8nLLVt.jpg',
      color: 'white',
      background: 'rgba(0,0,0,0.7)'
    }
  },
  {
    type: 'code',
    content: {
      title: 'Some thoughs on code organization',
      text: ``,
      code: `
├── connectors                                                                                                                                                                                                                                                                  
│   ├── Auth                                                                                                                                                                                                                                                                    
│   ├── Grant                                                                                                                                                                                                                                                                   
│   ├── Group                                                                                                                                                                                                                                                                   
│   ├── index.js                                                                                                                                                                                                                                                                
│   ├── Token                                                                                                                                                                                                                                                                   
│   ├── User                                                                                                                                                                                                                                                                    
│   └── utils                                                                                                                                                                                                                                                                   
├── resolvers                                                                                                                                                                                                                                                                   
│   ├── Grant.js                                                                                                                                                                                                                                                                
│   ├── Group.js                                                                                                                                                                                                                                                                
│   ├── index.js                                                                                                                                                                                                                                                                
│   ├── Mutation.js                                                                                                                                                                                                                                                             
│   ├── Query.js                                                                                                                                                                                                                                                                
│   ├── Token.js                                                                                                                                                                                                                                                                
│   └── User.js                                                                                                                                                                                                                                                                 
├── schema.js                                                                                                                                                                                                                                                                   
├── Server.js                                                                                                                                                                                                                                                                   
└── types                                                                                                                                                                                                                                                                       
    ├── index.js
    ├── inputs.gql
    ├── mutations.gql
    ├── query.gql
    └── schema.gql
      `,
      image: 'https://i.imgur.com/x8nLLVt.jpg',
      color: 'white',
      background: 'rgba(0,0,0,0.7)'
    }
  },
  {
    type: 'code',
    content: {
      title: 'Moving Forward with Graphql',
      text: `
      - authorization
      Multiple authorization strategies
      connectors
    - load balancing
    - advanced queries
     fragments
      `,
      code: `
      function test () {
        return 'test'
      }`,
      image: 'https://i.imgur.com/x8nLLVt.jpg',
      color: 'white',
      background: 'rgba(0,0,0,0.7)'
    }
  }
]
