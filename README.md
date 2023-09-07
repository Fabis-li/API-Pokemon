# API-Pokemon
desafio backend modulo 2

## 🛠 Tecnologias Usadas
NodeJs 
Javascript

### Bibliotecas utilizadas
- Express
- utils-playground

### Para rodar o projeto:
abra o terminal onde deseja criar a pasta

```git
clone o repositório - digite o seguinte comando
$ git clone https://github.com/Fabis-li/API-Pokemon.git
```
Abra o projeto e digite no terminal 
```bash
npm install  
```
Digite o comando para iniciar o servidor
```bash
npm run dev 
```
## Documentação da API

#### A API tem 2 rotas para pesquisa

##### Retorna uma lista com os 10 primeiros pokemons

```http
  http://localhost:8000/pokemon
```
##### Mostra os detalhes de um pokemon

```http
  http://localhost:8000/pokemon/idOuNome
```

| Parâmetro   |  Descrição                                   |
| :---------- | :------------------------------------------ |
| `idOuNome`      |**Obrigatório**. Número ou Nome do pokemon |

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

