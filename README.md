# Download Videos

Aplicação web para baixar conteúdos do YouTube e de outras plataformas de maneira simples e rápida. Basta informar o link do vídeo e escolher entre fazer o download completo em **MP4**, com áudio e vídeo em alta qualidade, ou baixar **somente o áudio**.

## Funcionalidades

- Download de vídeos por meio da URL;
- Vídeo em MP4 com áudio e imagem em alta qualidade;
- Opção para baixar somente o áudio;
- Validação dos links enviados pelo usuário;
- Bloqueio de URLs locais, privadas ou potencialmente inseguras;
- API rápida e estruturada para análise e processamento das URLs;
- Mensagens de erro claras para links inválidos.

## Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Fastify](https://fastify.dev/)
- [Zod](https://zod.dev/)
- npm workspaces

## Estrutura do projeto

O projeto utiliza uma arquitetura de monorepositório, separando a API dos módulos compartilhados:

```text
DownloadYoutubeVideos/
├── apps/
│   └── api/                 # API Fastify
│       └── src/
│           └── server.ts
├── packages/
│   └── shared/              # Schemas, validações e código compartilhado
│       └── src/
│           └── schemas/
├── package.json
└── README.md
```

## Pré-requisitos

Antes de começar, instale:

- [Node.js](https://nodejs.org/) 22 ou superior;
- npm, incluído na instalação do Node.js;
- Git.

## Instalação

Clone o repositório:

```bash
git clone https://github.com/Lipe-meira/DownloadYoutubeVideos.git
```

Entre na pasta do projeto:

```bash
cd DownloadYoutubeVideos
```

Instale as dependências:

```bash
npm install
```

## Executando o projeto

Para iniciar a API em modo de desenvolvimento:

```bash
npm run dev:api
```

Por padrão, ela estará disponível em:

```text
http://localhost:3333
```

Também é possível iniciar todos os workspaces que tenham um script de desenvolvimento:

```bash
npm run dev
```

## Endpoints da API

### Verificar o funcionamento da API

```http
GET /api/health
```

Exemplo de resposta:

```json
{
  "ok": true,
  "message": "API funcionando!"
}
```

### Analisar uma URL

```http
POST /api/analyze
Content-Type: application/json
```

Corpo da requisição:

```json
{
  "url": "https://www.youtube.com/watch?v=ID_DO_VIDEO"
}
```

Exemplo de resposta para uma URL válida:

```json
{
  "ok": true,
  "url": "https://www.youtube.com/watch?v=ID_DO_VIDEO"
}
```

URLs inválidas, endereços privados, `localhost` e links contendo usuário ou senha são rejeitados pela API.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia os workspaces em modo de desenvolvimento |
| `npm run dev:api` | Inicia apenas a API com recarregamento automático |
| `npm run build` | Compila os workspaces disponíveis |
| `npm run typecheck` | Verifica os tipos TypeScript |
| `npm test` | Executa os testes configurados nos workspaces |

## Segurança e uso responsável

O projeto valida as URLs recebidas e bloqueia endereços locais ou privados para reduzir o risco de requisições inseguras.

Use a aplicação somente para baixar conteúdos próprios, materiais em domínio público ou vídeos cuja utilização e download tenham sido autorizados pelo titular. O usuário é responsável por respeitar os direitos autorais e os termos da plataforma.

## Autor

Desenvolvido por [Lipe Meira](https://github.com/Lipe-meira).

## Licença

Este repositório ainda não possui uma licença definida. Para permitir que outras pessoas utilizem, modifiquem ou distribuam o projeto, adicione um arquivo `LICENSE` com os termos desejados.
