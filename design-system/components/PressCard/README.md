# PressCard

O recorte de imprensa: aspas, pílula LEIA, manchete, linha fina, data e veículo, num cartão névoa sobre a parede âmbar.

- `headline` é a manchete como saiu no veículo, sem aspas extras. `dek` é a linha fina, opcional. `date` por extenso: "14, agosto, 2026."
- `outlet` é o nome do veículo em texto. Para mostrar a marca do veículo, passe o arquivo oficial em `outletLogo`; nunca redesenhe a marca de terceiros.
- `href` liga a pílula LEIA à matéria. Sem `href`, a pílula some.
- `size` é o corpo da manchete em px (padrão 52). A linha fina acompanha.
- O cartão é sempre `surface-card` com texto grafite, `radius-card` e `shadow-card`, em qualquer tema. Monte a parede em `ambar`, com cartões de tamanhos diferentes.
- No deck a manchete aparece na fonte do próprio veículo (vinda como imagem). Aqui ela usa PP Editorial New.

Props: `headline`, `dek`, `date`, `outlet`, `outletLogo`, `href`, `cta`, `size`, `className`, `style`.
