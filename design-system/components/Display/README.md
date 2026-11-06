# Display

O título gigante em Acumin Pro ExtraCondensed, caixa-alta, com a regra da mistura de pesos.

- Escreva o texto como filhos e marque os pesos: texto puro = Regular; `<b>` = Bold; `<em>` = Light Italic; `<span className="li-sbi">` = Semibold Italic; `<i>` troca a palavra por PP Editorial New Italic em caixa-baixa (`serif-display`).
- Uma troca `<i>` por título. Bold no substantivo forte, Light Italic na palavra de ligação: "**IDEIAS** *QUE* GANHAM **VIDA**".
- `size` em px (padrão 180, o `display-case`). Use os corpos da escala: 403, 307, 180, 142. No mobile, a tabela do README.
- A cor é `accent` (laranja). Sobre laranja, passe `style={{ color: 'var(--on-laranja)' }}` ou âmbar com `opacity-watermark` para a assinatura de capa.
- O contêiner não pode cortar na vertical: acentos e itálicos saem da caixa da linha.

Props: `children`, `size`, `as` (padrão `h1`), `className`, `style`.
