# Stat

Um número de entrega com unidade e rótulo, e o fio `rule` embaixo. É a peça que mais se repete nos cases.

- `value` com o "+" quando é piso e ponto de milhar: "+ 50.000". `unit` em itálico: "dias", "meses", "palcos".
- `label` em caixa-alta, curto, sem verbo (PESSOAS, DE MONTAGEM). `note` só no tamanho xl, para o recorte de tempo (ATÉ ABRIL DE 2026).
- `size`: `"m"` (52px, grades de case), `"l"` (72px, coluna de case), `"xl"` (145px, o número-herói de uma página).
- Empilhe vários em coluna. O último também leva fio. `rule={false}` tira o fio.
- O número é `accent-number` (âmbar). Sobre névoa e cinza ele fica abaixo de 3:1: por isso o rótulo em `ink` ao lado é obrigatório e o número nunca fica abaixo de 52px.

## Big number

Quando o número é o assunto da página (um `xl`, ou um `l` sozinho ou sobre foto), ele leva um subtítulo.

- `subtitle` é uma frase em caixa normal, abaixo do rótulo, que diz o que o número significa: "em cinco dias de festival", "vista da barragem iluminada". Sem ponto final, até duas linhas.
- Corpo: `stat-subtitle` (28px, 14pt) com `xl`; `stat-subtitle-s` (24px, 12pt) com `l` e `m`. Sempre em `ink` (névoa sobre grafite ou foto), nunca em laranja ou âmbar.
- `stack` empilha o bloco: número em cima, rótulo e subtítulo embaixo, alinhados à esquerda. Use no número sobre foto e quando o big number divide a página com um título. Em coluna de estatísticas, deixe sem `stack`.
- Um big number por página. Os outros números da página voltam ao tamanho `m` ou `l`, sem subtítulo.
- Em proposta, o subtítulo não substitui a `note`: estimativa continua marcada (PÚBLICO ESTIMADO).

Props: `value`, `unit`, `label`, `note`, `subtitle`, `size`, `stack`, `rule`, `className`, `style`.
