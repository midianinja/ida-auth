# Identidade Ativista (IDA) API

Guia e exemples para incentivar a consistência, a capacidade de manutenção e as manter melhores práticas de todo o projeto.

Esse projeto foi desenvolvido para servir como serviço de autenticação da identidade digital Ativista e api-gateway para os servidores dos diferentes projetos constituintes da rede ativista.

## Prerequisites

* [Download and install NodeJS](https://nodejs.org)
* [Download and install Yarn](https://yarnpkg.com)
* [Download and install MongoDB](https://docs.mongodb.com/manual/installation/)
* Download and install Code editor that you prefer

## Running Locally

First clone the project: 

```
git clone git@github.com:midianinja/ida-auth.git
```

Or via https: 

```
https://github.com/midianinja/ida-auth.git
```

Go to the project root folder:

```
cd ida-auth
```

In root directory install the dependecies:

```
yarn install
```

Run the mongoDB:

```
sudo service mongod start
```

Start the server locally:

```
yarn dev
```

The default port is 8080


## Running the tests

[...]

## Deployment

[...]

## Built With

* [Yarn](https://yarnpkg.com) - Dependency Management
* [ESLint](https://eslint.org/) - Source analyze Tool. [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) 
* [JSDOC](http://usejsdoc.org) - JavaScript Documentation
* [Express](https://expressjs.com) - NodeJS Framework

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/midianinja/ida-auth/tags). 
