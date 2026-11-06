# Stamp

O selo circular de texto que gira devagar no canto de um case, para um feito curto: "INSCRIÇÕES ESGOTADAS EM 24 HORAS".

- `text` em caixa-alta, até umas 34 letras. O texto se distribui no círculo inteiro.
- Um selo por página, no canto superior direito, encostado numa foto.
- Cor pelo `color` do pai: `on-laranja` sobre laranja, `ink` sobre névoa.
- Gira uma volta a cada 18s. Com `spin={false}` ou `prefers-reduced-motion`, fica parado.

Props: `text`, `size` (padrão 140), `spin`, `className`, `style`.
