# MEUIFC
## App de localização no IFC

Este é o repositório principal do projeto de app de localização MEU IFC, nele está a API principal no app, modelos e useCases do Bando de dados MongoDB, além de abrigar todo o Front End do aplicativo.

### Outros módulos do app
Os Módulos abaixo são essenciais para que este repositório funcione.

[Mbtiles Server](https://github.com/Lucas-Vicenzzo/mbtiles-server): Responsável por disponibilizar os mapas para o front-end.

[Web Scrapping dos horários](https://github.com/IgorJLR/peppeteer-render): Feito usando a biblioteca Puppetter para fazer o webscrapping do site que a instuição usa para disponibilizar os horários aos estudandes (sendo a principal fonte de dados do App).



## Descrição

Este repositório contém um script que utiliza a biblioteca Puppeteer para extrair informações úteis, como turma, horário de aula, disciplina, professor, sala e dia da semana, a partir do site de horários do [Instituto](https://ifc-camboriu.edupage.org/timetable/?). O script é projetado para facilitar a obtenção de dados atualizados de forma automatizada.

## Pré-requisitos

Antes de executar o script, certifique-se de ter as seguintes dependências instaladas em sua máquina:

- Node.js: [Download Node.js](https://nodejs.org/)
- npm: Instruções de [Download](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (Geralmente é instalado automaticamente com o Node.js)

## Instalação

1. Clone o repositório para a sua máquina local. É importante que seja na máquina local:

```bash
git clone https://github.com/IgorJLR/peppeteer-render.git
```

2. Navegue até o diretório do projeto:

```bash
cd peppeteer-render
```

3. Instale as dependências necessárias:

```bash
npm install
```

## Uso

1. Execute o script utilizando o seguinte comando:

```bash
npm run start
```

2. Acesse o endpoint `/scrap` para iniciar o processo de busca de informações atualizadas no site de horários do Instituto.

```bash
http://localhost:3000/scrap
```

## Contribuição

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novos recursos. Abra uma _issue_ para discutir suas ideias ou envie um _pull request_.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para mais detalhes.
