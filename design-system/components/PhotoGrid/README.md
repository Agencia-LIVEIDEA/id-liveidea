# PhotoGrid

Os mosaicos de foto dos cases, com as proporções tiradas dos slides. Cada layout tem nome e uma origem no deck; escolha pelo número de fotos e pelo que vem junto.

| layout | fotos | de onde vem | quando usar |
|---|---|---|---|
| `dupla` | 2 | Reinventando o Futuro | Dois ambientes do mesmo evento, a maior à esquerda (55/45). |
| `trio` | 3 | Primeira Classe (AAK) | Detalhe, ambiente, detalhe: a do meio é a larga. Título atravessando a borda de cima. |
| `destaque` | 3 | E-commerce Day (DHL) | Uma foto-herói e duas de apoio empilhadas à direita. |
| `mosaico` | 4 | World Tour BT400 | Uma vertical alta (bastidor) + duas pequenas + uma larga (palco). |
| `vitrine` | 3 + conteúdo | Convenção GX | Duas horizontais em cima, uma vertical alta à direita; texto e números embaixo, no `children`. |
| `laterais` | 2 + conteúdo | Verão NC | Duas verticais nas pontas e o conteúdo no meio, no `children`. |
| `faixa` | 1 | vídeos dos cases | Panorama largo (2,84:1) para vídeo ou plenária. |
| `capas` | 4 a 12 | Key visuals | Grade de capas 16:9, quatro por linha. |

- `photos`: `[{ src, alt, focus?, video?, poster?, veil?, logo?, children? }]`, na ordem das áreas (a, b, c, d). O `children` de uma foto vai por cima dela, como no Photo.
- `gap`: `"xs"` (10px), `"s"` (16px), `"m"` (24px, padrão), `"l"` (30px). No palco de 1920 o deck usa de 9 a 36px; prefira `m` e use `l` em `capas`.
- `columns` troca as colunas (ex.: `"868fr 391fr 345fr"` para o trio com a larga na esquerda, como nos prêmios).
- O grid se adapta à própria largura: abaixo de 640px vira duas colunas com a primeira foto inteira em cima, vão de 10px, como o mobile.
- O grid não tem fundo, moldura nem canto arredondado. Para o título atravessar a borda, posicione o Display com margem negativa sobre o grid (ver Aplicações de foto).

Props: `layout`, `photos`, `gap`, `columns`, `children`, `lazy`, `className`, `style`.
