import loginRepository from './login/loginRepository';

interface repositoryObject {
  [name: string]: any;
}

const repositories: repositoryObject = {
  login: loginRepository,
};

export const RepositoryFactory = {
  get: (name: string) => repositories[name],
};

export default RepositoryFactory;
