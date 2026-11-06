# Photo

Uma foto (ou vídeo) aplicada do jeito da apresentação: quadro reto, foto em `cover`, e os tratamentos que o deck usa para pôr texto, número ou logo por cima.

**O consumidor fornece** `src` e `alt` (ou `video` + `poster`), e o tamanho: `ratio` ("16/9", "4/5", um número) ou `fill` para cobrir o pai inteiro (o pai precisa de `position: relative` e altura).

**Tratamentos**
- `veil="leve"` (`veu-leve`, preto a 30%): escurece a foto da faixa superior sem apagar a cena.
- `veil="denso"` (`veu-denso`, preto a 78%): a foto vira textura para um título grande e números (página "Confiança construída a cada entrega").
- `fade="base"`: degradê de cima para baixo até `shade`. Para legenda e número na base da foto.
- `fade="baixo"` / `"direita"` / `"esquerda"`: a foto some no grafite da página. Use quando a foto ocupa a página inteira e o conteúdo fica de um lado (Tarsila: números à direita).
- `logo`: o logotipo névoa centralizado (foto de montagem do World Tour BT400). `logo={60}` muda a altura.
- `reveal`: a entrada do deck, recorte de baixo para cima em 1,0s com a imagem descendo de 120% para 100% em 1,4s. Desliga com `prefers-reduced-motion`.
- `lazy`: só carrega a foto quando ela chega perto da tela. Ligue em páginas longas com muitas fotos (landing mobile).
- `focus`: ponto que fica no centro do recorte (`"50% 30%"`), para não cortar cabeças.

**Texto sobre a foto** (`children` + `place`)
- `"base"` (padrão) e `"centro"`: dentro da foto. O bloco recebe o tema Grafite, então `ink` vira névoa sozinho. Sempre com `veil` ou `fade`.
- `"borda-base"` e `"borda-topo"`: o título atravessa a borda da foto, metade dentro e metade fora. É a assinatura dos cases (WORLD BT400 *tour*, PRIMEIRA *classe*). O texto segue o tema da página.

Nunca: canto arredondado, moldura, sombra, filtro de cor, texto sobre foto sem véu ou degradê.

Props: `src`, `alt`, `video`, `poster`, `ratio`, `fill`, `focus`, `veil`, `fade`, `logo`, `reveal`, `place`, `children`, `lazy`, `className`, `style`.
