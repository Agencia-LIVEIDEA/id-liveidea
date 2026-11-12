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
- [`design-system/CHANGELOG.md`](design-system/CHANGELOG.md): histórico de versões.

## Estrutura

```
design-system/
├── README.md              brand book
├── CHANGELOG.md           histórico de versões (semver)
├── design-system.json     índice: título, namespace, grupos de assets e ordem
├── tokens.json            tokens de cor, tipo, espaçamento e raio
├── assets/
│   ├── Logos/             4 SVGs (laranja, névoa, grafite, símbolo i)
│   ├── Icones/            29 SVGs (26 do conjunto + seta, seta diagonal, aspas do deck)
│   ├── Fotografia/        20 fotos reais de eventos da agência
│   └── Capas/             8 key visuals de eventos (portfólio)
├── components/            21 componentes React 18 (window.LiveIdea) + Capa, Aplicações de foto
│                          e Proposta criativa (páginas de referência)
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

## Skill: aplicar o design system com o Claude

A skill [`liveidea-design-system`](.claude/skills/liveidea-design-system/SKILL.md) aplica este sistema
em apresentações (.pptx), documentos (.docx, PDF) e artefatos HTML (artifacts, páginas, peças de redes).
Ela não guarda cores, fontes nem regras: a cada uso, baixa a **última versão da `main`** deste
repositório, confere a versão (`tokens.json` × `CHANGELOG.md`), monta um kit e informa a versão aplicada.

- **Claude Code neste repositório:** a skill já está em `.claude/skills/` e carrega sozinha.
- **claude.ai (Configurações > Capacidades > Skills):** rode `bash scripts/package-skill.sh` e envie
  `dist/liveidea-design-system.zip`. Lá, o acesso ao repositório privado vem do conector GitHub; sem
  ele, a skill pede o ZIP da `main` e não aplica a marca de memória.
- **Fontes no ZIP.** O empacotador copia as 18 fontes da `main` para `fonts/` do ZIP, com
  `fonts/VERSION` (versão e commit). Elas são a reserva quando a versão baixada vem sem fontes (o
  conector GitHub lê só texto). As fontes ficam fora do git na pasta da skill (`.gitignore`): em
  Claude Code, a skill usa as do repositório. **O ZIP leva fontes licenciadas: uso interno, não
  compartilhe fora da LIVEIDEA.** Reempacote e reenvie quando uma versão mudar as fontes.

| Arquivo | Função |
|---|---|
| `scripts/sync_ds.sh` | baixa a `main` para um cache, valida a versão e monta o kit |
| `scripts/build_kit.py` | gera `tokens.css`, `@font-face` (arquivos ou base64), `office.json` (pt, hex, nomes de fonte do Office) |
| `scripts/liveidea_pptx.py` | helper python-pptx: capa padrão, capa do projeto, Ghost em PNG, Chrome, Stat, Eyebrow, foto com véu, fechamento |
| `scripts/liveidea_docx.py` | helper python-docx: fundo névoa, títulos em duas vozes, números, tabelas com fio `rule` |
| `scripts/render.js` | Playwright: Ghost e logos em PNG, prévia de páginas HTML e peças de redes |
| `references/` | regras por formato e checklist de conformidade |

Mudança de MINOR/PATCH no design system não exige mudar a skill. Se uma versão alterar capa, Ghost,
Chrome ou grid, revise os modelos de `liveidea_pptx.py` e suba `TEMPLATES_FROM` no mesmo PR: o helper
avisa quando o kit é mais novo que os modelos.

## Versionamento

Versão atual: **1.2.0** (ver [`design-system/CHANGELOG.md`](design-system/CHANGELOG.md)).

- **Semver.** MAJOR quando quem usa precisa mudar o próprio trabalho (token renomeado ou removido, prop removida, componente retirado); MINOR para regra ou componente novo e mudança visual de componente existente; PATCH para correção de texto, exemplo ou prévia.
- **Toda mudança passa por pull request** numa branch própria. O PR atualiza o `CHANGELOG.md`, a linha de versão no topo do `design-system/README.md`, o `meta.release` do `tokens.json` e o `lastChange` do `design-system.json`.
- **Sincronização no mesmo ciclo.** O design system do claude.ai é atualizado junto com o PR, a partir da versão publicada (ler antes de publicar), e a nota do `lastChange` começa pela versão (`v1.2.0 · …`).
- **Tag depois do merge.** Com o PR na `main`, crie a tag `vX.Y.Z` no commit do merge (`git tag v1.2.0 <commit> && git push origin v1.2.0`) e, se quiser, uma release no GitHub com o trecho do CHANGELOG.

