import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';

export const spaceshipPassengersVar = makeVar([]);
export const myTestVar = makeVar(['yes', 'no', 'sometimes']);

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        spaceshipPassengers: {
          read() {
            return spaceshipPassengersVar();
          },
        },
        myTestArray: {
          read() {
            return myTestVar();
          },
        },
      },
    },
    Character: {
      fields: {
        isSpaceshipPassenger: {
          read(_, { readField }) {
            const characterId = readField('id');
            const spaceshipPassengers = spaceshipPassengersVar();
            return spaceshipPassengers.includes(characterId);
          },
        },
        myVar: () => myTestVar(),
      },
    },
  },
});

export const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache,
});
