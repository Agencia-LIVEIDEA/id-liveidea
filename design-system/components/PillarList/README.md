# PillarList

A lista numerada dos pilares da agência, com o marcador grafite atrás do pilar ativo. A numeração é real: é a ordem em que a agência apresenta os pilares.

- `items`: `[{ title, accent, text }]`. `title` é a primeira linha (Aeonik Bold), `accent` a segunda (PP Editorial New Ultrabold Italic), `text` a descrição de três ou quatro linhas.
- Sem `active`, a lista guarda o pilar ativo sozinha e troca no clique. Com `active` + `onSelect`, quem controla é você (ex.: avançar com o slide).
- O ativo inverte para `surface-inverse` com `ink-inverse`; os outros mostram a descrição em `ink-muted`.
- Fundo da seção: `surface-alt` (cinza). Fios `rule-strong`.
- Cada linha é um botão com foco visível (`focus`).

Props: `items`, `active`, `defaultActive`, `onSelect`, `className`, `style`.
