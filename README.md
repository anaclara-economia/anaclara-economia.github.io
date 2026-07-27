# Ana Clara Cabral — Economia Aplicada

Site acadêmico pessoal desenvolvido com [Astro](https://astro.build/).

## Desenvolvimento local

```sh
npm install
npm run dev
```

O servidor local informa no terminal o endereço de visualização. Para validar a versão de produção:

```sh
npm run build
npm run preview
```

## Conteúdo

O conteúdo público é organizado por coleções Markdown em `src/content/`:

- `paginas`: textos institucionais;
- `blog`: notas e artigos;
- `pesquisas`: agenda de pesquisa;
- `projetos`: projetos e códigos;
- `tutoriais`: materiais técnicos.

Itens com `draft: true` não são exibidos nem geram páginas públicas.

## Publicação

O fluxo `deploy-pages.yml` compila e publica automaticamente a branch `main` no GitHub Pages:

<https://anaclara-economia.github.io/>
