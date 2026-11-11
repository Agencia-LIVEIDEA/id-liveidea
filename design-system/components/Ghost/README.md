# Ghost

O título display translúcido que sangra a base da página. É a assinatura IDEIAS *QUE* GANHAM VIDA da capa padrão, aplicada também à capa do projeto (com o nome do conceito), às aberturas de capítulo (com a frase do capítulo) e ao fechamento.

- Acumin em `display-manifesto` (307px) ou maior, âmbar a 50% (`opacity-watermark`), uma linha só, **centralizado na largura da página** e cortado pela base.
- **Sempre em caixa-alta**, inclusive a palavra em itálico. Siga a regra da mistura: `<b>` Bold, `<em>` Light Italic, texto puro Regular. `<i>` também sai em Light Italic caixa-alta ("DO KV À *EXPERIÊNCIA*").
- A frase aparece inteira, nunca cortada nas laterais. Se ela passar da largura da página, reduza o `size` até caber, com respiro de 60px de cada lado (no palco 1920, largura útil de 1800px). Frases de três ou quatro palavras ficam perto dos 307–400px. A assinatura IDEIAS *QUE* GANHAM VIDA cabe em 280px.
- O contêiner da página precisa de `position: relative` e `overflow: hidden`. O Ghost fica atrás do conteúdo e é decorativo (`aria-hidden`): o texto real da página vem no título.
- Só sobre fundo `laranja`. Um por página.
- No PowerPoint, exporte o Ghost como PNG transparente do tamanho do slide, já centralizado, como no deck EMS e no briefing APAS 2027 Ypê. Assim a página não depende da Acumin instalada na máquina.

Props: `children`, `size`, `className`, `style`.
