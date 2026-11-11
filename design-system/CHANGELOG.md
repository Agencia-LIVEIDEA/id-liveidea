# Histórico de versões

O design system segue versionamento semântico (MAJOR.MINOR.PATCH). A versão vale para o repositório `id-liveidea` e para o design system publicado no claude.ai: os dois só mudam juntos.

- **MAJOR** quando quem usa o sistema precisa mudar o próprio trabalho: token renomeado ou removido, prop de componente removida, componente retirado.
- **MINOR** quando o sistema ganha ou muda uma regra sem quebrar nada: componente novo, regra nova no brand book, mudança visual de um componente existente (anotada em "Alterado").
- **PATCH** para correção de texto, de exemplo ou de prévia, sem mudar regra.

Cada versão leva uma tag `vX.Y.Z` no commit da `main` e uma linha no `lastChange` do design system publicado.

## 1.2.0 · 11, novembro, 2026

**Alterado**
- Ghost sempre em caixa-alta, inclusive a palavra em itálico (`<i>` passa a sair em caixa-alta).
- Ghost centralizado na largura da página, em vez de encostado na lateral esquerda. A frase aparece inteira: se for mais larga que a página, o corpo diminui até caber, com 60px de respiro de cada lado. Só a base continua cortada.
- Capa padrão: a assinatura IDEIAS *QUE* GANHAM VIDA vai centralizada, em 280px no palco de 1920 (140pt no PowerPoint), para caber inteira.

**Adicionado**
- Regra do Ghost no brand book (Apresentações de projeto e Proposta criativa) e no README do componente, com a exportação para PowerPoint como PNG do tamanho do slide.
- Este histórico de versões.

**Prévias**
- Capa, Ghost e Proposta criativa nos corpos que cabem centralizados (IDEIAS QUE GANHAM VIDA em 280px, DO KV À EXPERIÊNCIA em 361px).

Origem: briefing consolidado APAS 2027 Ypê. Atenção: decks em andamento que usam o Ghost alinhado à esquerda continuam válidos até a próxima revisão. Os novos seguem esta versão.

## 1.1.0 · 6, novembro, 2026

**Adicionado**
- Proposta criativa a partir do deck Verão Grupo EMS: roteiro de páginas da capa padrão ao fechamento.
- Componentes Eyebrow, NumberedList, Steps e Ghost.
- Estilos `headline-statement` e `body-3xl`.

## 1.0.0 · 4, novembro, 2026

**Adicionado**
- Primeira versão do design system, extraída da apresentação comercial 2027: brand book, tokens (temas Claro e Grafite), fontes, logos, ícones, fotografia, capas e componentes React (`window.LiveIdea`).
