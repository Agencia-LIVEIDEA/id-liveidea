# Aplicações de foto

Como a foto entra na página da apresentação. São seis composições que se repetem no deck; monte as páginas novas a partir delas, com Photo, PhotoGrid, Display, Headline e Stat.

1. **Véu denso.** A foto ocupa a página com `veu-denso`; título `headline-xl` em névoa no centro, a palavra final em serifa itálica âmbar, e uma linha de números embaixo. Para páginas de posicionamento. (Confiança construída a cada entrega)
2. **Faixa e costura.** Foto nos 60% de cima com `veu-leve`, grafite embaixo. O título começa na foto e termina no grafite, atravessando a costura; texto corrido à direita. (ARE YOU *ready?*)
3. **Meia página.** A foto sangra a metade esquerda, de cima a baixo. Na outra metade, `surface-alt` com título e o número-herói em `stat-xl`. (BPO da *maior farmacêutica*)
4. **Some no grafite.** Foto de página inteira com `fade="direita"`: a cena fica à esquerda com o título, e os números ocupam a direita já no grafite. (O Brasil de *Tarsila*)
5. **Título na borda.** Mosaico de fotos com o nome do case em Display atravessando a borda de cima (ou de baixo). Cliente em `label` ao lado, texto e números embaixo. É a página-padrão de case. (PRIMEIRA *classe*)
6. **Número sobre a foto.** Fotos lado a lado em grafite; o número em serifa itálica laranja, grande, atravessa a base de cada foto, com a frase em Aeonik ao lado e a legenda embaixo. Para prêmios e conquistas. (2x Ouro como Agência do Ano)

**Regras**
- Uma foto-herói por página. As outras são apoio e ficam menores.
- Texto sobre foto só com véu ou degradê, e sempre névoa (ou âmbar no número).
- O título que atravessa a borda fica por cima da foto (`z-index`) e nunca cobre rosto.
- Entre fotos, o vão do PhotoGrid. Entre foto e borda da página: sangrar (0) ou `stage-margin`, nunca um meio-termo.
- Páginas de foto escura levam o Chrome em névoa; páginas claras, em `ink-muted`.
