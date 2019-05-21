# ida-auth

Esse projeto foi desenvolvido para realizar a autenticação da identidade digital Ativista e servirá como gateway de acesso para o servidor das redes constituintes da rede ativista.

Voce precisará de Node.js e Mongodb instalados e rodando para rodar esse projeto.



# Clonar Projeto

## Instalar Dependências:
```bash
git clone git@github.com:midianinja/ida-auth.git
cd ida-auth
yarn install
```

# Run 

## DEV
```bash
yarn run dev 
```

## Run PROD
```bash
yarn start
```

Signup: {
    request: {
        url: `localhost:8080/auth/signup` ,
        body: {
            email: '*email',
            senha: '*senha'
        }
    },
    response: {
        "userId": "* id on db",
        "message": "sucessfull signup",
        "token": "*access token*"
    }
  
} 

Login: {
    request: {
        url: `localhost:8080/auth/login` ,
        body: {
            email: '*email',
            senha: '*senha'
        }
    },
    response: {
        "userId": "* id on db",
        "message": "sucessfull signup",
        "token": "*access token*"
    }
  
} 







