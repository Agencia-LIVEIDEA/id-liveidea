# Ghost

O título display translúcido que sangra a base da página. É a assinatura IDEIAS *QUE* GANHAM VIDA da capa padrão, aplicada também à capa do projeto (com o nome do conceito), às aberturas de capítulo (com a frase do capítulo) e ao fechamento.

- Acumin em `display-manifesto` (307px) ou maior, âmbar a 50% (`opacity-watermark`), uma linha só, encostado na lateral esquerda e cortado pela base.
- Siga a regra da mistura: `<b>` Bold, `<em>` Light Italic, texto puro Regular. `<i>` deixa a palavra em Light Italic caixa-baixa ("DO KV À *experiência*").
- O contêiner da página precisa de `position: relative` e `overflow: hidden`. O Ghost fica atrás do conteúdo e é decorativo (`aria-hidden`): o texto real da página vem no título.
- Só sobre fundo `laranja`. Um por página.
- No PowerPoint, exporte o Ghost como PNG transparente, como no deck EMS. Assim a página não depende da Acumin instalada na máquina.

Props: `children`, `size`, `className`, `style`.
