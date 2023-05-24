interface repositoryObject {
  [name: string]: any;
}

const repositories: repositoryObject = {};

export const RepositoryFactory = {
  get: (name: string) => repositories[name],
};

export default RepositoryFactory;
