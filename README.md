# ID LIVEIDEA

Identidade visual e design system da **LIVEIDEA** — *Ideias que ganham vida*.

Este repositório guarda a versão em arquivos do design system publicado no claude.ai
([LIVEIDEA — Design System](https://claude.ai/artifact/3oPtjN6mypsBwXnpAKwTrk)), extraído da
apresentação comercial 2027. Vale para tudo o que a agência assina em nome próprio:
apresentação institucional, apresentações de projeto, site, documentos e redes.

## Comece por aqui

- [`design-system/README.md`](design-system/README.md): o brand book — princípios, tom, cor,
  tipografia, layout, fotografia, logo, iconografia, movimento e componentes.
- [`design-system/tokens.json`](design-system/tokens.json): todos os tokens (cor nos temas Claro e
  Grafite, tipografia, espaçamento, raios), cada um com nota de uso.

## Estrutura

```
design-system/
├── README.md              brand book
├── design-system.json     índice: título, namespace, grupos de assets e ordem
├── tokens.json            tokens de cor, tipo, espaçamento e raio
├── assets/
│   ├── Logos/             4 SVGs (laranja, névoa, grafite, símbolo i)
│   ├── Icones/            29 SVGs (26 do conjunto + seta, seta diagonal, aspas do deck)
│   ├── Fotografia/        20 fotos reais de eventos da agência
│   └── Capas/             8 key visuals de eventos (portfólio)
├── components/            17 componentes React 18 (window.LiveIdea) + Capa e Aplicações de foto
│   ├── <Componente>/README.md     diretrizes de uso
│   ├── <Componente>/preview.html  prévia renderizada no design system
│   ├── bundle.js · bundle.css     código dos componentes
│   └── index.d.ts                 tipos (documentação das props)
└── fonts/                 18 arquivos .woff2 (Acumin Pro ExtraCondensed, PP Editorial New,
                           Aeonik, Space Grotesk)
```

## Observações

- **Fontes licenciadas.** Acumin Pro ExtraCondensed, PP Editorial New e Aeonik são licenciadas pela
  agência; a Space Grotesk tem licença aberta. Este repositório é privado por isso: não torne
  público nem publique as fontes num site sem confirmar a licença web de cada família.
- **Referências `/_blob/<id>` nas prévias.** Os `preview.html` apontam para os assets pelo id de
  upload do design system no claude.ai. O mapa id → arquivo está em `design-system.json`
  (`assetGroups.<Grupo>.files.<arquivo>.blob`). As prévias rodam dentro do design system, que
  injeta tokens, fontes, React e o bundle; fora dele, use os arquivos de `assets/` diretamente.
- **Fonte da verdade.** Edições feitas no design system do claude.ai não chegam aqui sozinhas:
  depois de mudar lá, sincronize este repositório (e vice-versa).
- **Peças de eventos de clientes não usam este sistema**: cada evento segue o design system do
  próprio cliente.
