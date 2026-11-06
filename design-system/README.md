A LIVEIDEA é uma agência de live marketing de Campinas: eventos corporativos, ativações, festivais e projetos proprietários. A assinatura é **Ideias que ganham vida**. Este sistema sai da apresentação comercial 2027 e vale para tudo o que a agência comunica em nome próprio: a apresentação institucional, as apresentações de projetos para clientes, o site, documentos e redes. Peças de eventos de clientes não usam este sistema: cada evento segue o design system do próprio cliente.

A marca tem dois laranjas, um grafite e um branco quente. A força está na tipografia: um condensado gigante, uma serifa itálica que corta o título no meio e uma sans limpa para o resto.

## Princípios

- **Bastidor impecável, palco inesquecível.** A marca fala de operação com o mesmo orgulho com que fala de criação. Números de entrega (pessoas, dias de montagem, profissionais mobilizados) são conteúdo, não rodapé.
- **Contraste de vozes no mesmo título.** Toda frase importante junta duas vozes: uma reta e firme (`display-case`, `headline-m`) e uma itálica e humana (`serif-display`, PP Editorial New Italic). Ex.: "REINVENTANDO O *futuro*", "BPO da *maior farmacêutica* da América Latina".
- **Escala sem medo.** Um título pode sangrar a página. O texto corrido fica pequeno e calmo do lado.
- **Reto por padrão.** Fotos e blocos não têm canto arredondado. As exceções são a pílula LEIA, a cápsula dos retratos, o cartão de imprensa e a folha de fechamento.

## Conteúdo e tom

- Escreva em português, na primeira pessoa do plural: "Traduzimos objetivos de negócio...", "Cuidamos de cada detalhe...". O cliente é tratado pela marca dele, nunca por "você".
- Ganchos em inglês são parte da voz, curtos e em caixa-alta com uma palavra em itálico: **ARE YOU *ready?***, **READY *TO* SHOW**. No máximo um por capítulo.
- Títulos de case usam o nome do projeto (World *BT400 tour*, *verão* NC). Acima dele, o cliente em `label` e `ink-muted` (GRUPO EMS, EMS).
- Rótulos de número em caixa-alta, curtos, sem verbo: PESSOAS, DE MONTAGEM, ESTAÇÕES OPERACIONAIS DE BBQ.
- Números seguem o padrão brasileiro com ponto de milhar e "+" antes quando é piso: "+ 50.000", "+3.000". A unidade vem em itálico depois do número: "5 *dias*", "2 *meses*", "600*m²*".
- Datas por extenso em minúscula: "14, agosto, 2026."
- Sem emoji, sem ponto de exclamação no texto da agência. Exclamação só quando é nome de veículo (Bravo!).

## Cor

- `laranja` é a cor da marca. Capas, aberturas de capítulo, parede de clientes e cases inteiros ficam em fundo laranja com texto e logo em `on-laranja`.
- `ambar` é o par quente: números (`accent-number`), fundo dos retratos, parede de imprensa. Laranja e âmbar juntos formam o degradê do i (âmbar em cima, laranja embaixo). É o único degradê da marca.
- Páginas de conteúdo alternam `surface` (névoa) e `surface-alt` (cinza). Páginas de foto vão em `grafite`.
- Texto corrido é sempre `ink` sobre névoa, cinza ou grafite. Sobre laranja ou âmbar, texto corrido vai em grafite.
- `accent` (laranja) e `accent-number` (âmbar) sobre fundo claro ficam abaixo de 3:1. O deck usa assim só em títulos e números de 52px ou mais, com o rótulo em grafite ao lado. Siga a mesma regra: nunca em texto abaixo de 52px sobre névoa ou cinza.
- Fios: `rule` (30%) entre linhas de números, `rule-strong` (60%) entre pilares, `rule-on-color` sobre laranja.

## Tipografia

Quatro famílias, cada uma com um papel fixo:

| Família | Token | Papel |
|---|---|---|
| Acumin Pro ExtraCondensed | `--font-display` | Títulos gigantes em caixa-alta: nomes de case, manifesto, aberturas. |
| PP Editorial New | `--font-serif` | A palavra itálica que corta o título, todos os números, sobrenomes. |
| Aeonik | `--font-sans` | Títulos de conteúdo, texto corrido, rótulos de número. |
| Space Grotesk | `--font-grotesk` | Utilitário: marcas de borda, cargos, numeração, links, pílula. |

- **A regra da mistura.** Um título display mistura pesos da Acumin na mesma linha: Bold no substantivo, Light Italic na palavra de ligação, Regular no resto ("**IDEIAS** *QUE* GANHAM **VIDA**"). E pode trocar uma palavra por `serif-display` ("REINVENTANDO O *futuro*"). Uma troca por título.
- Títulos Aeonik (`headline-m`, `pillar-title`) põem o trecho que importa em PP Editorial New Italic: Regular para destaque normal, Ultrabold Italic (`pillar-italic`) nos pilares.
- Números são sempre PP Editorial New (`stat-xl`, `stat-l`, `stat-m`), nunca Aeonik.
- **Corpo de texto pelo volume.** O texto corrido tem quatro corpos e um por página: `body` (18px) em bios e notas, `body-l` (20px) como padrão, `body-xl` (24px) quando a página tem até 60 palavras e `body-2xl` (28px) para uma frase ou parágrafo de até 25 palavras, sozinho na página ou sobre foto. Quanto menos texto, maior o corpo; nunca o contrário.
- **Subtítulo de big number.** O número que é o assunto da página (`stat-xl`, ou `stat-l` sozinho ou sobre foto) leva, abaixo do rótulo, uma frase em caixa normal que diz o que ele significa: `stat-subtitle` (28px) com `stat-xl`, `stat-subtitle-s` (24px) com `stat-l`. Ex.: "+ 50.000 PESSOAS / em cinco dias de World Tour BT400". Um big number por página.
- Entrelinha dos displays é menor que o corpo da letra (0,70 a 0,77). Acentos e itálicos passam da caixa da linha: não corte com `overflow: hidden` na vertical.
- Letter-spacing: −2% nos displays e títulos grandes, −1% no texto, 0 nos rótulos.
- Corpos do palco 1920×1080. No mobile o corpo não é proporcional; use esta tabela (corpo do palco → corpo no celular): 12→11, 16→13, 20→15,5, 24→17, 28→19, 36→24, 52→36, 90→44, 145→56, 180→68, 310→124, 410→150.
- O peso Regular (400) de pé da Acumin não veio na pasta de fontes. O sistema serve o Medium (500) no lugar, como a apresentação faz. Quando o arquivo Regular chegar, ele substitui o Medium sem mudar nada no uso.
- As quatro famílias são licenciadas pela agência. Antes de compartilhar este sistema fora da LIVEIDEA, confira a licença de uso web de cada uma.

## Layout

- O formato-mestre é o palco de 1920×1080. Fotos, textos e mosaicos dos cases começam a 118px das laterais e terminam a 118px da borda direita; pilares e grades usam `stage-margin` (160px).
- Toda página leva as marcas de borda (componente Chrome): LIVEIDEA AG à esquerda e 2027© à direita, em `chrome` (Space Grotesk Bold 12px), a `stage-chrome` (27px) da borda, no meio da altura. Elas ocupam de 27px a 95px à esquerda e de 1856px a 1894px à direita.
- **Zona livre das marcas:** nada fica a menos de 20px delas. Só uma foto sangrada pode passar por trás, e aí a marca vai em névoa. Não aumente as marcas: o tamanho é o mesmo em qualquer formato (6pt num slide 16:9 do PowerPoint). Marca maior invade o conteúdo.
- Mosaico de fotos com vão `space-4` (24px) no palco e `space-1` (10px) no mobile.
- Estatísticas em coluna: número alinhado à direita, rótulo à esquerda, fio `rule` embaixo de cada linha. O big number com subtítulo empilha (Stat `stack`): número em cima, rótulo e subtítulo embaixo, alinhados à esquerda.
- Mobile: coluna de até 640px, gutter `space-3` (20px), respiro de seção `space-7` (80px).

## Onde o sistema é usado

Este é o sistema da própria agência: serve a tudo o que a LIVEIDEA assina como LIVEIDEA. Muda o formato; tokens, tipografia, fotografia e tom são os mesmos. As peças dos eventos que a agência produz (cenografia, sinalização, credenciais, key visuals) são dos clientes e seguem o design system de cada um, nunca este.

| Aplicação | Formato-mestre | Referência no sistema |
|---|---|---|
| Apresentação institucional | palco 1920×1080 | a apresentação comercial 2027 |
| Apresentação de projeto (proposta para cliente) | palco 1920×1080 | as páginas de case |
| Site | coluna fluida, mobile até 640px | a versão mobile (landing) da apresentação |
| Outras: documentos e redes | o formato da peça | tokens, tipografia e fotografia |

**Toda apresentação abre com a capa padrão da LIVEIDEA**, institucional ou de projeto, antes de qualquer outra página. A capa padrão tem fundo `laranja` em página inteira, o logo `liveidea-nevoa` pequeno no centro e a assinatura IDEIAS *QUE* GANHAM VIDA em `display-manifesto` âmbar a 50% de opacidade sangrando a base da página. As marcas de borda vão em névoa. Ela é sempre a mesma: não leva cliente, título, data nem foto. A capa do projeto (cliente, nome do projeto, data e local) vem logo depois, como segunda página.

### Apresentações de projeto

- A LIVEIDEA assina, o projeto é o assunto. Use a mesma estrutura de página dos cases: o cliente em `label` e `ink-muted`, o nome do projeto em Display com a regra da mistura, a descrição em `body-tight` e os números em Stat.
- A sequência de abertura é fixa: a capa padrão LIVEIDEA (ver acima) e, em seguida, a capa do projeto.
- A marca do cliente entra só pelo arquivo oficial, na capa e no fechamento, na cor original. Nunca recolorida em laranja, nunca misturada ao logo da LIVEIDEA. No resto das páginas, as cores são as da LIVEIDEA.
- Números de proposta são previsões: escreva-os como no case e marque na `note` do Stat (PÚBLICO ESTIMADO, PREVISÃO DE MONTAGEM). Nunca apresente estimativa como entrega.
- Etapas do projeto vão na PillarList, que é numerada porque a ordem importa. Conceito, cenografia e jornada vão em páginas de foto (Aplicações de foto).
- Renders, mockups e referências seguem as regras de foto: quadro reto, sem moldura. Referência de terceiros leva a fonte em `chrome` no canto da foto.
- **Corpos iguais aos da apresentação comercial.** No PowerPoint 16:9, 2px do palco de 1920 = 1pt: texto corrido 20px (10pt), com as opções maiores 24px (12pt) até 60 palavras e 28px (14pt) até 25 palavras, texto pequeno 18px (9pt), rótulos 16px (8pt), subtítulo de big number 28px (14pt) com o número de 145px e 24px (12pt) com o de 72px, títulos de conteúdo em Aeonik 40–66px (20–33pt) com o destaque em serifa um pouco maior, números 52–145px (26–72pt), títulos display de case 142–180px (71–90pt). Só as palavras de abertura de capítulo (CONCEITO *criativo*, CHEGAR) e a assinatura IDEIAS QUE GANHAM VIDA passam disso, como as palavras-pôster do deck. O corpo maior vem da quantidade de texto, não da vontade de "ler melhor": página cheia fica em 20px, e a hierarquia continua vindo do contraste entre o display grande e o corpo.
- As marcas de borda (Chrome) continuam como no deck comercial: LIVEIDEA AG à esquerda e 2027© à direita, em 6pt, a 27px das laterais, e o conteúdo a partir de 118px. Respeite a zona livre das marcas (ver Layout).

### Site

- A base é a versão mobile da apresentação, que já é uma página web: coluna de até 640px, gutter `space-3`, respiro de seção `space-7`, corpos pela tabela mobile, fotos presas no fundo com o conteúdo rolando por cima, barra de progresso âmbar de 3px no topo e entradas disparadas pela rolagem.
- Em telas largas, o deck não define um layout de site. Até haver um, siga o palco: conteúdo a `stage-margin` proporcional à largura (160px em 1920), títulos display e números escalando com a largura da tela, e texto de até 24px fixo no corpo do palco, nunca menor que 16px.
- Fotos e mosaicos pelo PhotoGrid, que já se adapta à largura. Ligue `lazy` nas fotos abaixo da primeira dobra.
- CTA principal em Button `primary`; formulários e ações em fundo claro em `inverse`; links para redes em ArrowLink.
- Texto corrido, links e campos de formulário nunca em laranja ou âmbar sobre fundo claro. Foco sempre visível com `focus`.
- Antes de publicar o site, confirme a licença web de Acumin Pro ExtraCondensed, PP Editorial New e Aeonik. A Space Grotesk tem licença aberta.

### Outras aplicações

- **Documentos** (propostas em PDF, orçamentos, relatórios): fundo névoa, texto `body-l` em grafite, títulos `headline-m` com o destaque em serifa itálica, números em PP Editorial New, tabelas com fios `rule`. Laranja só em títulos grandes e no logo.
- **Redes sociais:** uma ideia por peça, título com a regra da mistura, foto com véu ou degradê quando tem texto por cima. Tamanhos pela tabela mobile. Logo névoa sobre foto ou laranja, laranja sobre névoa. Sem marcas de borda.
- Para qualquer formato novo, mantenha o que torna a marca reconhecível: laranja como cor de fundo, um título com duas vozes, foto real de evento e números de entrega.

## Fotografia

- Fotos reais de eventos da agência, nunca banco de imagem. Duas famílias: **palco** (luz azul e magenta, telões, plateia, multidão) e **bastidor** (equipe com camiseta da marca, montagem, credenciamento).
- A foto ocupa o quadro inteiro, sem moldura nem canto arredondado. Pode sangrar a página.
- Para texto sobre foto, escureça a base com um degradê de transparente até `shade`.
- Retratos dos sócios: recorte sem fundo sobre uma cápsula `ambar` (`radius-pill`), cabeça passando do topo da cápsula.
- Tratamentos (componente Photo): `veu-leve` para escurecer uma faixa de foto, `veu-denso` quando título e números ocupam a foto, degradê até `shade` para legenda na base, degradê até grafite quando a foto some num lado da página.
- Mosaicos (componente PhotoGrid): dupla, trio, destaque, mosaico, vitrine, laterais, faixa e capas, com as proporções dos slides. Vão `space-4` no palco, `space-1` no mobile.
- Composição da página (Aplicações de foto): véu denso, faixa e costura, meia página, some no grafite, título na borda e número sobre a foto. O nome do case atravessando a borda da foto é a assinatura dos cases.
- Ver os grupos Fotografia e Capas nos assets.

## Logo

- O logotipo LIVEIDEA tem o pingo do i em círculo solto acima da letra. Use os arquivos do grupo Logos, nunca redesenhe.
- Sobre laranja ou grafite: `liveidea-nevoa.svg`. Sobre névoa ou cinza: `liveidea-laranja.svg` (fechamento) ou `liveidea-grafite.svg`.
- O símbolo i (bar + círculo em degradê âmbar → laranja) é elemento gráfico de abertura, sempre grande e atrás do texto, nunca no lugar do logo.

## Iconografia

- Estilo da apresentação comercial: **traço bold com pontas chatas**. Grid de 24px, traço de 2,5px (cerca de 10% do tamanho), `stroke-linecap: butt`, `stroke-linejoin: miter`, sem preenchimento, numa cor só. Nada de ponta ou canto arredondado; círculos e arcos só quando a forma pede (relógio, busca, local).
- O conjunto tem 26 ícones (componente Icon e arquivos `icone-*.svg` no grupo Ícones): navegação, ações e informação de evento (local, data, horário, público, hospedagem, gastronomia, transporte, música, foto).
- Ícone acompanha um rótulo: localização, data, público, horário. Não substitui a palavra e não vira enfeite. Tamanhos de 16, 24, 32 ou 48px, alinhado à primeira linha do texto, com vão de `space-1`.
- Cor herdada do texto: `ink` sobre névoa e cinza, `nevoa` sobre grafite, laranja e foto.
- A seta fina e as aspas do deck original continuam no grupo Ícones para o fechamento e os cartões de imprensa.
- Sem emoji e sem biblioteca de ícones pronta. Ícone novo segue o mesmo grid e traço e é registrado aqui.

## Movimento

A apresentação anima tudo com GSAP. Para recriar o mesmo gesto:

- Títulos entram linha a linha subindo de dentro de uma máscara: 1,0s, `power3.out` (em CSS, aproxime com cubic-bezier(0.25, 1, 0.5, 1)), 0,09s entre linhas.
- Fotos abrem com recorte de baixo para cima em 1,0s `power3.inOut` (em CSS, cubic-bezier(0.76, 0, 0.24, 1)) enquanto a imagem desce de 120% para 100% em 1,4s.
- Números contam do zero até o valor em 1,5s `power3.out`.
- Fios crescem da esquerda em 0,8s `power3.inOut`.
- Troca de página: cortina de 0,35s entrando e 0,5s saindo. Entre pilares, só o marcador grafite desliza (0,62s).
- Com `prefers-reduced-motion`, tudo aparece pronto, sem animação.

## Botões

- Todo botão é pílula (`radius-pill`) em Space Grotesk Bold.
- `primary` laranja é a pílula LEIA: uma por tela, para a ação principal. Texto névoa no laranja dá 2,5:1; quando a ação precisa ser lida por todos em fundo claro, use `inverse` (grafite, 16,8:1).
- `glass` só sobre foto ou palco escuro: são os controles da apresentação (Início, ‹ Voltar, Avançar ›, Tela cheia), com a barra de progresso laranja de 2px no rodapé.
- CTAs em caixa-alta, verbo primeiro (VER O CASE). Controles em caixa normal.

## Componentes

Os componentes ficam em `window.LiveIdea` (React 18). Todos leem os tokens deste sistema e funcionam nos dois temas.

- **Icon**: os 26 ícones em traço bold com pontas chatas, herdando a cor do texto.
- **Button** e **ProgressBar**: botões em pílula e a barra de progresso do player.
- **Photo**: foto ou vídeo com véu, degradê, logo, entrada animada e texto por cima ou atravessando a borda.
- **PhotoGrid**: os oito mosaicos de foto dos cases.
- **Aplicações de foto**: página de referência com as seis composições de página do deck.

- **Chrome**: marcas de borda da página.
- **Logo**: o logotipo em SVG, herdando a cor do texto.
- **Display**: título gigante em Acumin com a regra da mistura.
- **Headline**: título Aeonik com destaque em serifa itálica.
- **CaseHeader**: cliente, nome do case e descrição.
- **Stat**: número, unidade e rótulo com fio; no big number, subtítulo e bloco empilhado.
- **PillarList**: lista numerada de pilares com o marcador grafite no ativo.
- **PressCard** e **ReadPill**: recorte de imprensa e a pílula LEIA.
- **TeamCard**: retrato em cápsula, cargo, nome e bio.
- **ArrowLink**: link de rede com seta diagonal.
- **Stamp**: selo circular de texto girando ("INSCRIÇÕES ESGOTADAS EM 24 HORAS").
