# PODCASTER - NLw#5

## Sobre o projeto

Projeto proposto pela equipe da Rocketseat na trilha de React, para o evento Next Level Week #5.

Se trata de uma aplicação web construida em ```Next.js``` para ouvir os podcasts.

## Links relevantes

* Informações sobre a trilha ReactJs: https://www.notion.so/Trilha-ReactJS-9e6bfe82f2d047fa805935a3242e7952
* Layout da aplicação: https://www.figma.com/file/B6eGIEpiOQbvMHjdYVC8r8/Podcastr-(Copy)?node-id=160%3A2761

# Como rodar o projeto

Primeiro, abra o seu terminal, acesse o diretório do projeto e então instale as dependências com o comando abaixo:

```
# usando yarn
yarn install

# usando npm
npm install
```

Com as dependências instaladas, precisamos iniciar o json-server para que seja possível buscar os dados fakes para facilitar o desenvolvimento. Para isso, basta executar o comando abaixo no seu terminal:

> Atenção! Você não deve rodar o comando ```server``` em produção.

```
# usando yarn
yarn server

# usando npm
npm run server
```

Agora, vamos inicializar a aplicação frontend no modo de desenvolvimento! Para isso, basta você rodar o comando abaixo em seu terminal:

```
# usando yarn
yarn dev

# usando npm
npm run dev
```

Para que seja possível realizar um build e publicar em produção, rode os seguintes comandos: 

```
yarn build
yarn start
```

Caso você esteja utilizando npm, basta rodar os comandos abaixo:

```
npm run build
npm run start
```

Dessa forma, todas as páginas serão criadas de forma estática no comando ```build``` para que os usuários que forem acessar a aplicação, receba o mesmo conteúdo. Dessa forma, o carregamento da página diminui drasticamente, evitando que seja feito consultas em abundância para o backend.

A aplicação frontend está apontada para a porta **3000**, então basta acessar a página ```http://localhost:3000``` no seu ambiente de desenvolvimento. Para visualizar o **json-server**, é possível através da URL ```http://localhost:3333```.

# TODO

* Adicionar sistema de autenticação;
* Disponibilizar um backend real para que a aplicação frontend faça a comunicação;
* Criar testes para a aplicação;
* Permitir responsividade na aplicação, para acessos em dispositivos mobile e tablets;
* Transformar a aplicação web em uma PWA (next-pwa);
* Tema dark (https://github.com/getomni/omni#color-palette)
* Publicar o projeto em um ambiente de produção;
