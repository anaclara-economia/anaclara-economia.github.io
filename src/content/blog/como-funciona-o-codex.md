---
title: "Como funciona o Codex? Modelos, tokens e instruções em AGENTS.md"
pubDate: 2026-09-23
summary: "Um guia introdutório sobre modelos, tokens e organização de instruções em AGENTS.md, com um exemplo para projetos de análise de dados."
category: "IA e automação"
tags: ["Codex", "AGENTS.md", "Agentes de IA", "Tutorial"]
draft: false
preview: false
---

*Ana Clara Cabral · Atualizado em 23 de setembro de 2026*

Para trabalhar com o Codex, vale compreender quatro elementos: o modelo escolhido, as instruções, o contexto do projeto e as ferramentas disponíveis. Neste guia, apresento esses conceitos e um exemplo de como organizar instruções para um projeto de análise de dados.

## O que é o Codex?

O <a href="https://learn.chatgpt.com/docs/codex/cli" target="_blank" rel="noopener noreferrer">Codex</a> é o agente de IA da OpenAI voltado ao trabalho com código e projetos. Você descreve uma tarefa, e ele pode examinar arquivos, editar códigos e executar verificações, conforme as ferramentas e permissões disponíveis. É possível utilizá-lo no aplicativo para computador, no terminal e em editores de código.

Como funciona? O modelo interpreta a solicitação; as instruções orientam o trabalho; o contexto reúne as informações pertinentes; e as ferramentas permitem realizar ações. Para começar, indique o objetivo, os arquivos relevantes e o resultado esperado.

## Quais são os modelos atuais?

Em setembro de 2026, a <a href="https://learn.chatgpt.com/docs/models" target="_blank" rel="noopener noreferrer">documentação de modelos do Codex</a> apresenta três opções da família GPT-6: Astra, Sol e Luna. Astra é indicado para trabalhos complexos, com várias etapas e ferramentas. Sol atende à programação e às tarefas cotidianas que exigem análise. Luna é voltado a atividades mais delimitadas e repetíveis.

A disponibilidade dos modelos no Codex depende da conta, do ambiente utilizado e da etapa de liberação. No aplicativo, o seletor permite escolher entre as opções disponíveis e ajustar o esforço de raciocínio. Esforços maiores podem ajudar em tarefas complexas, com aumento do tempo de processamento e do uso de tokens.

Na gravação abaixo, veja onde consultar os modelos disponíveis e como ajustar o esforço de raciocínio.

<figure class="blog-media">
  <video controls playsinline preload="metadata" poster="/media/blog/codex/seletor-modelos.jpg" aria-label="Demonstração do seletor de modelos e do ajuste de raciocínio no Codex" aria-describedby="seletor-codex-legenda">
    <source src="/media/blog/codex/seletor-modelos-raciocinio.mp4" type="video/mp4" />
    Seu navegador não reproduz este vídeo. <a href="/media/blog/codex/seletor-modelos-raciocinio.mp4">Abrir a gravação em MP4</a>.
  </video>
  <figcaption id="seletor-codex-legenda">Seleção de modelos e ajuste de raciocínio no Codex, em setembro de 2026. As opções podem variar conforme a conta e a versão do aplicativo.</figcaption>
</figure>

## O que são tokens?

<a href="https://developers.openai.com/api/docs/concepts#tokens" target="_blank" rel="noopener noreferrer">Tokens</a> são unidades usadas pelo modelo para processar conteúdo. Uma palavra pode corresponder a um ou vários tokens. Instruções, mensagens, trechos de arquivos incorporados ao contexto e respostas geradas participam desse processamento.

A janela de contexto é a capacidade de conteúdo que o modelo considera em uma solicitação. As <a href="https://developers.openai.com/api/docs/models" target="_blank" rel="noopener noreferrer">fichas dos modelos na API</a> informam uma janela de 1,05 milhão de tokens para Astra, Sol e Luna. No Codex, a capacidade efetivamente utilizada e os limites de uso dependem das condições do produto e da conta.

Na prática, vale selecionar materiais pertinentes e escrever instruções claras. Isso ajuda a manter o trabalho concentrado no objetivo.

## Como criar um `AGENTS.md`?

O arquivo <a href="https://learn.chatgpt.com/docs/agent-configuration/agents-md" target="_blank" rel="noopener noreferrer"><code>AGENTS.md</code></a> reúne orientações que o Codex consulta ao trabalhar no projeto. Ele utiliza Markdown, um formato de texto simples que permite organizar títulos, parágrafos e listas.

Você pode criá-lo no Bloco de Notas, no VS Code ou pedir ao Codex que prepare um rascunho. Salve com o nome exato `AGENTS.md`, conferindo se o editor acrescentou a extensão `.txt`.

Comece com orientações sobre os arquivos do projeto, os cuidados ao editar e as verificações esperadas.

## Um exemplo para análise de dados

O exemplo abaixo é um ponto de partida para adaptar à organização de cada projeto:

```markdown
# Orientações do projeto

## Dados e arquivos
- Preserve os dados originais e salve transformações em arquivos separados.
- Registre a fonte, o período e o significado das variáveis utilizadas.

## Análise
- Confira valores ausentes, duplicidades e chaves antes de unir bases.
- Escolha os métodos conforme a pergunta e as características dos dados.
- Informe as limitações que afetam a interpretação dos resultados.

## Entrega
- Preserve os códigos necessários para reproduzir a análise.
- Descreva as verificações executadas e as pendências.
- Peça autorização antes de publicar arquivos ou compartilhar dados.
```

## Como organizar as instruções?

Preferências gerais, como idioma e cuidados com arquivos, podem ficar em `~/.codex/AGENTS.md`, na configuração padrão. O símbolo `~` representa a pasta pessoal do usuário.

Na raiz de cada projeto, outro `AGENTS.md` pode reunir suas regras próprias. Pastas internas podem receber orientações específicas. O Codex combina as instruções do nível geral até o diretório de trabalho; em conflitos entre esses arquivos, as orientações mais próximas desse diretório prevalecem.

Depois de criar ou atualizar os arquivos, inicie uma nova sessão e peça ao Codex que identifique as instruções carregadas. Uma tarefa pequena ajuda a observar se as orientações estão claras e quais ajustes ainda são necessários.

## Documentação consultada

Este guia utiliza a documentação oficial da OpenAI sobre <a href="https://learn.chatgpt.com/docs/codex/cli" target="_blank" rel="noopener noreferrer">Codex</a>, <a href="https://learn.chatgpt.com/docs/models" target="_blank" rel="noopener noreferrer">modelos disponíveis</a>, <a href="https://developers.openai.com/api/docs/concepts#tokens" target="_blank" rel="noopener noreferrer">tokens</a>, <a href="https://developers.openai.com/api/docs/models" target="_blank" rel="noopener noreferrer">capacidades dos modelos na API</a> e <a href="https://learn.chatgpt.com/docs/agent-configuration/agents-md" target="_blank" rel="noopener noreferrer">instruções em <code>AGENTS.md</code></a>. As informações sobre modelos e disponibilidade correspondem à data de atualização do texto.
