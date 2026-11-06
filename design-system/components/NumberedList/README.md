# NumberedList

Lista numerada com fio entre os itens. É a anatomia do KV ("cada elemento brinda junto"), mas serve a qualquer lista curta em que cada item tem nome e uma linha de explicação: elementos de cenografia, entregáveis, momentos da jornada.

- Número em PP Editorial New 52px (`stat-m`) em `accent`. Título em Aeonik Bold 24px caixa-alta, explicação em 24px `ink-muted`.
- De 3 a 6 itens, uma linha de explicação cada (até 12 palavras). Mais que isso vira página de texto.
- Ao lado de uma imagem: a imagem à esquerda a partir de 108px e a lista à direita com cerca de 620px, as duas alinhadas no topo.
- Fio `rule` só entre os itens, sem fio no topo nem na base.
- `start` muda o primeiro número quando a lista continua de uma página para outra.
- É diferente da PillarList: a PillarList é interativa e tem texto longo; a NumberedList é estática e curta.

Props: `items` (`{ title, text }`), `start`, `className`, `style`.
