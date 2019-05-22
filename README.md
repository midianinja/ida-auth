# ida-auth

Esse projeto foi desenvolvido para servir como serviço de autenticação da identidade digital Ativista e api-gateway para os servidores dos diferentes projetos constituintes da rede ativista.

Voce precisará de Node.js e Mongodb instalados e rodando para utilizar esse projeto.

Para adicionar um serviço , insira o nome e a root url do seu servidor em services.config.js

Para utilizar o gateway voce tem duas opções, public e private.

 /public/*nome/outros/parametros  -> não exige token
 /private/*nome/  -> exige autenticação

![Alt text](/public/diagram.png?raw=true "diagram")


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

Signup: 
    request: 
        url: `localhost:8080/auth/signup` 
        body: 
            email: '*email'
            senha: '*senha'
        
    
    response: 
        "userId": "* id on db"
        "message": "sucessfull signup"
        "token": "*access token*"
    
  


Login: 
    request: 
        url: `localhost:8080/auth/login` 
        body: 
            email: '*email'
            senha: '*senha'
        
    
    response: 
        "userId": "* id on db"
        "message": "sucessfull signup"
        "token": "*access token*"
    
  
 







