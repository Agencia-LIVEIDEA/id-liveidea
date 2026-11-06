# Icon

Os ícones da LIVEIDEA no estilo da apresentação comercial: traço bold, pontas chatas, cantos vivos, sem preenchimento, numa cor só (herdada do texto).

**Desenho**
- Grid de 24px. Traço de 2,5px (cerca de 10% do tamanho), `stroke-linecap: butt` e `stroke-linejoin: miter`. Nada de ponta ou canto arredondado; só círculos e arcos quando a forma pede (relógio, busca, local).
- Uma cor: o ícone herda o `color` do pai. `ink` sobre névoa e cinza, `nevoa` sobre grafite, laranja e foto. Laranja só quando o ícone acompanha um número em âmbar ou um título em laranja.

**Uso**
- `name`: um dos nomes da lista (`Icon.names`).
- `size` em px: 24 (padrão, ao lado de texto 14–20px), 32 (rótulos de seção), 48 (destaque numa página de proposta). O traço escala junto. Nunca abaixo de 16px.
- Sempre ao lado de uma palavra: localização, data, público, horário. O ícone não substitui o rótulo e não vira enfeite.
- Alinhe o ícone à primeira linha do texto, com vão de `space-1` (10px).
- `title` só quando o ícone está sozinho e precisa ser lido por leitor de tela; com rótulo ao lado, deixe sem.

**Ícones**
seta-direita, seta-esquerda, seta-diagonal, chevron-direita, chevron-esquerda, chevron-baixo, mais, fechar, check, menu, play, busca, link-externo, download, local, calendario, relogio, pessoas, email, camera, musica, microfone, talheres, hospedagem, carro, aviao.

Faltou um? Desenhe no mesmo grid e traço e registre aqui e no grupo Ícones. Não misture com bibliotecas de ícones prontas.

Props: `name`, `size`, `title`, `className`, `style`.
