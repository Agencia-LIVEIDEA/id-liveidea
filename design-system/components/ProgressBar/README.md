# ProgressBar

A barra fina que mostra onde a pessoa está na apresentação: 2px em laranja no rodapé do player, 3px em âmbar no topo da versão mobile.

- `value` de 0 a 1 (página atual ÷ última página, ou rolagem ÷ altura).
- `tone`: `"laranja"` (padrão, player) ou `"ambar"` (mobile). `height` em px: 2 no player, 3 no mobile.
- O trilho é `progress-track` (névoa a 14%): use sobre grafite ou foto. Encoste na borda da tela, sem margem.
- A largura anima em 0,52s quando o valor muda.

Props: `value`, `tone`, `height`, `label`, `className`, `style`.
