import { getRepositories, getRepositoryDetails } from '../controllers/githubController';

export const resolvers = {
  Query: {
    repositories: () => getRepositories(),
    repositoryDetails: (_, { owner, name }) => getRepositoryDetails(owner, name),
  },
};
