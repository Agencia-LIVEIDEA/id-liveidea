# Button

O botão da LIVEIDEA: pílula em Space Grotesk Bold, sempre com `radius-pill`. Vem de dois lugares do deck: a pílula LEIA dos cartões de imprensa e os controles do player (Início, Voltar, Avançar, Tela cheia).

**Variantes**
- `primary`: laranja com texto `on-laranja`, a pílula LEIA. Para a ação que a página existe para levar (VER O CASE, LEIA). Uma por tela. Com `href`, o texto vem sublinhado, como o LEIA.
- `glass`: grafite a 52% com desfoque e contorno `glass-border`, texto névoa. Só sobre foto, vídeo ou palco escuro: são os controles da apresentação.
- `inverse` (adição intencional): grafite sobre fundo claro, névoa sobre o tema Grafite. Existe porque o texto névoa no laranja dá 2,5:1; quando a ação precisa ser lida por qualquer pessoa em fundo claro, use este (16,8:1).
- `outline` (adição intencional): contorno `rule-strong` e texto `ink`. É o glass adaptado para fundo claro, para ações secundárias ao lado de um primary.

**Tamanhos**
- `sm`: 12px, 8px × 14px, espaçamento 0,04em. Controles de navegação.
- `md`: 14px, 38px de altura. O padrão; é a medida da pílula LEIA.
- `lg` (adição intencional): 16px, 52px de altura. Só para a CTA única de uma página de fechamento ou landing.

**Texto e ícone**
- CTAs em caixa-alta, curtas, verbo primeiro: LEIA, VER O CASE, FALE COM A GENTE. Controles em caixa normal: Início, Voltar, Avançar.
- `icon="next"` / `"prev"` põe › ou ‹ (como "Avançar ›"). `icon="out"` põe a seta diagonal para links que saem da peça.
- `disabled` deixa a 30%, como os controles na primeira e na última página.

Props: `children`, `variant`, `size`, `href`, `icon`, `disabled`, `onClick`, `type`, `pressed`, `className`, `style`.
