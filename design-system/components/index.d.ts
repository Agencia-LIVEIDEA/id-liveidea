import type { ReactNode, CSSProperties, MouseEventHandler } from 'react';

interface Base { className?: string; style?: CSSProperties }

/** Marcas de borda da página: LIVEIDEA AG e 2027©. */
export interface ChromeProps extends Base { left?: ReactNode; right?: ReactNode; /** px, padrão 27 */ inset?: number | string }
/** Logotipo LIVEIDEA em SVG, cor herdada de `color`. */
export interface LogoProps extends Base { /** px, padrão 46 */ height?: number; title?: string }
/** Título Acumin com a regra da mistura: <b> Bold, <em> Light Italic, <span className="li-sbi"> Semibold Italic, <i> serifa itálica. */
export interface DisplayProps extends Base { children: ReactNode; /** px, padrão 180 */ size?: number | string; as?: keyof JSX.IntrinsicElements }
/** Título Aeonik; <em> vira PP Editorial New Italic em accent. */
export interface HeadlineProps extends Base { children: ReactNode; /** px, padrão 40 */ size?: number | string; weight?: 'bold' | 'regular'; as?: keyof JSX.IntrinsicElements }
/** Cliente, nome do case (Display) e descrição. */
export interface CaseHeaderProps extends Base { client?: ReactNode; title: ReactNode; children?: ReactNode; /** px do título, padrão 120 */ size?: number | string }
/** Número de entrega + unidade + rótulo, com fio. */
export interface StatProps extends Base { value: ReactNode; unit?: ReactNode; label: ReactNode; note?: ReactNode; /** frase em caixa normal abaixo do rótulo: stat-subtitle (xl) ou stat-subtitle-s (l, m) */ subtitle?: ReactNode; size?: 'm' | 'l' | 'xl'; /** número em cima, rótulo e subtítulo embaixo: o big number */ stack?: boolean; rule?: boolean }
export interface Pillar { title: ReactNode; accent: ReactNode; text: ReactNode }
/** Lista numerada de pilares com o marcador grafite no ativo. */
export interface PillarListProps extends Base { items: Pillar[]; active?: number; defaultActive?: number; onSelect?: (index: number) => void }
/** Pílula laranja LEIA. */
export interface ReadPillProps extends Base { children?: ReactNode; href?: string; onClick?: MouseEventHandler }
/** Recorte de imprensa. */
export interface PressCardProps extends Base { headline: ReactNode; dek?: ReactNode; date?: ReactNode; outlet?: string; outletLogo?: string; href?: string; cta?: ReactNode; /** px da manchete, padrão 52 */ size?: number | string }
/** Cartão de sócio com retrato em cápsula. */
export interface TeamCardProps extends Base { photo?: string; role?: ReactNode; first: ReactNode; last?: ReactNode; bio?: ReactNode }
/** Link de saída com seta diagonal. */
export interface ArrowLinkProps extends Base { href: string; children: ReactNode }
/** Selo circular de texto girando. */
export interface StampProps extends Base { text: string; /** px, padrão 140 */ size?: number; spin?: boolean }

/** Marcador de seção da proposta: 01 · INSIGHT. */
export interface EyebrowProps extends Base { children: ReactNode; /** número do passo; número vira 01, 02 */ number?: number | string; tone?: "ambar" }
export interface NumberedItem { title: ReactNode; text?: ReactNode }
/** Lista numerada com fio: anatomia do KV, elementos, entregáveis. */
export interface NumberedListProps extends Base { items: NumberedItem[]; /** padrão 1 */ start?: number }
/** Argumento em colunas numeradas (conceito em três tempos). */
export interface StepsProps extends Base { items: (ReactNode | { text: ReactNode })[]; /** sobre fundo laranja */ onColor?: boolean }
/** Título display translúcido sangrando a base da página (capa, abertura, fechamento). */
export interface GhostProps extends Base { children: ReactNode; /** px, padrão 307 */ size?: number | string }

/** Ícone em traço bold com pontas chatas (grid 24px, traço 2,5px), cor herdada. */
export type IconName = "seta-direita" | "seta-esquerda" | "seta-diagonal" | "chevron-direita" | "chevron-esquerda" | "chevron-baixo" | "mais" | "fechar" | "check" | "menu" | "play" | "busca" | "link-externo" | "download" | "local" | "calendario" | "relogio" | "pessoas" | "email" | "camera" | "musica" | "microfone" | "talheres" | "hospedagem" | "carro" | "aviao";
export interface IconProps extends Base { name: IconName; /** px, padrão 24 */ size?: number; title?: string }
/** Botão em pílula: primary (laranja), inverse, outline, glass (sobre foto). */
export interface ButtonProps extends Base { children: ReactNode; variant?: "primary" | "inverse" | "outline" | "glass"; size?: "sm" | "md" | "lg"; href?: string; icon?: "next" | "prev" | "out"; disabled?: boolean; onClick?: MouseEventHandler; type?: "button" | "submit"; pressed?: boolean }
/** Barra de progresso da apresentação. */
export interface ProgressBarProps extends Base { /** 0 a 1 */ value: number; tone?: "laranja" | "ambar"; /** px, padrão 2 */ height?: number; label?: string }
/** Foto ou vídeo com os tratamentos do deck. */
export interface PhotoProps extends Base { src: string; alt?: string; video?: string; poster?: string; /** "16/9", "4/5" ou número */ ratio?: string | number; fill?: boolean; /** object-position */ focus?: string; veil?: "leve" | "denso"; fade?: "base" | "baixo" | "direita" | "esquerda"; /** true ou altura em px */ logo?: boolean | number; reveal?: boolean; place?: "base" | "centro" | "borda-base" | "borda-topo"; children?: ReactNode; lazy?: boolean }
export interface GridPhoto { src: string; alt?: string; focus?: string; video?: string; poster?: string; veil?: "leve" | "denso"; logo?: boolean | number; children?: ReactNode }
/** Mosaicos de foto dos cases. */
export interface PhotoGridProps extends Base { layout: "dupla" | "trio" | "destaque" | "mosaico" | "vitrine" | "laterais" | "faixa" | "capas"; photos: GridPhoto[]; gap?: "xs" | "s" | "m" | "l"; /** grid-template-columns */ columns?: string; /** conteúdo de vitrine e laterais */ children?: ReactNode; lazy?: boolean }

export declare function Icon(props: IconProps): JSX.Element;
export declare function Button(props: ButtonProps): JSX.Element;
export declare function ProgressBar(props: ProgressBarProps): JSX.Element;
export declare function Photo(props: PhotoProps): JSX.Element;
export declare function PhotoGrid(props: PhotoGridProps): JSX.Element;
export declare function Chrome(props: ChromeProps): JSX.Element;
export declare function Logo(props: LogoProps): JSX.Element;
export declare function Display(props: DisplayProps): JSX.Element;
export declare function Headline(props: HeadlineProps): JSX.Element;
export declare function CaseHeader(props: CaseHeaderProps): JSX.Element;
export declare function Stat(props: StatProps): JSX.Element;
export declare function PillarList(props: PillarListProps): JSX.Element;
export declare function ReadPill(props: ReadPillProps): JSX.Element;
export declare function PressCard(props: PressCardProps): JSX.Element;
export declare function TeamCard(props: TeamCardProps): JSX.Element;
export declare function ArrowLink(props: ArrowLinkProps): JSX.Element;
export declare function Stamp(props: StampProps): JSX.Element;
export declare function Eyebrow(props: EyebrowProps): JSX.Element;
export declare function NumberedList(props: NumberedListProps): JSX.Element;
export declare function Steps(props: StepsProps): JSX.Element;
export declare function Ghost(props: GhostProps): JSX.Element;
