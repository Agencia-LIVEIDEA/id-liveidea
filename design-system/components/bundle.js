/* @ds-bundle: {"format":4,"namespace":"LiveIdea","components":[{"name":"Icon"},{"name":"Button"},{"name":"ProgressBar"},{"name":"Photo"},{"name":"PhotoGrid"},{"name":"Chrome"},{"name":"Logo"},{"name":"Display"},{"name":"Headline"},{"name":"CaseHeader"},{"name":"Stat"},{"name":"PillarList"},{"name":"ReadPill"},{"name":"PressCard"},{"name":"TeamCard"},{"name":"ArrowLink"},{"name":"Stamp"}]} */
(function () {
  var React = window.React, h = React.createElement, useState = React.useState, useMemo = React.useMemo;
  var LOGO = {"W":186.49,"H":45.99,"g":"<g transform=\"translate(0.00 18.54)\"><path d=\"M21.8922 27.3814 C21.4237 27.4022 21.1201 27.4282 20.8147 27.4282 C14.3149 27.43 7.81333 27.4074 1.31179 27.4525 C0.277652 27.4595 -0.00343863 27.1315 3.16348e-05 26.1304 C0.0329991 17.8555 0.0295287 9.58239 0.00523682 1.30755 C0.00176656 0.396605 0.220394 -0.0232965 1.23198 0.00099539 C3.6681 0.0599899 6.1077 0.0547845 8.54383 0.00099539 C9.47386 -0.0180911 9.72892 0.306379 9.72371 1.21038 C9.68728 6.77842 9.73065 12.3465 9.6838 17.9128 C9.67513 18.9781 9.98919 19.3043 11.0615 19.2835 C14.2715 19.2176 17.485 19.2887 20.6967 19.2419 C21.6146 19.228 21.9234 19.5403 21.9061 20.4408 C21.8644 22.7139 21.8922 24.9904 21.8922 27.3779\" fill=\"currentColor\" fill-rule=\"nonzero\"/></g><g transform=\"translate(24.16 18.55)\"><path d=\"M9.69943 13.7304 C9.69943 17.9017 9.6786 22.0729 9.71677 26.2425 C9.72545 27.1291 9.50682 27.4692 8.55077 27.4432 C6.0782 27.379 3.60391 27.3894 1.13134 27.4397 C0.253367 27.4571 -0.00343567 27.1378 3.4596e-05 26.2997 C0.019121 17.919 0.019121 9.53834 3.4596e-05 1.15939 C-0.00170054 0.319586 0.26551 -0.0118229 1.13308 0.000323055 C3.64555 0.038496 6.15802 0.0367608 8.67049 0.000323055 C9.49988 -0.0118229 9.72024 0.317853 9.71504 1.10213 C9.68554 5.31156 9.70116 9.52099 9.70116 13.7304\" fill=\"currentColor\" fill-rule=\"nonzero\"/></g><g transform=\"translate(35.85 18.54)\"><path d=\"M28.51 0.023959 C28.9177 0.023959 29.2023 0.426509 29.0652 0.809974 C28.503 2.382 28.0137 3.74929 27.5262 5.11657 C25.005 12.1664 22.47 19.2111 19.9766 26.2713 C19.6764 27.118 19.3103 27.4894 18.3421 27.4599 C15.7516 27.38 13.1575 27.4061 10.5652 27.4495 C9.85557 27.4616 9.53978 27.2013 9.30901 26.5645 C6.24477 18.0693 3.16143 9.58107 0.0867785 1.08933 C0.0728974 1.05289 0.0590163 1.01645 0.0434002 0.978282 C-0.112762 0.591347 0.171802 0.169711 0.588234 0.171446 C2.73633 0.176652 6.59526 0.190534 7.59644 0.150626 C7.60858 0.150626 7.61899 0.150626 7.63114 0.150626 C9.12162 0.171447 9.64563 0.521942 10.0794 1.84585 C11.3044 5.58506 12.6856 9.27395 14.006 12.9819 C14.0164 13.008 14.0251 13.034 14.0355 13.06 C14.2229 13.5736 14.9534 13.5805 15.1373 13.0669 C15.1373 13.0635 15.1408 13.06 15.1408 13.0565 C16.5393 9.12993 17.9534 5.20854 19.2982 1.26285 C19.607 0.357107 20.0148 -0.0263607 21.0194 0.00140142 C23.4538 0.0656013 25.8917 0.0343732 28.5048 0.0274326\" fill=\"currentColor\" fill-rule=\"nonzero\"/></g><g transform=\"translate(66.77 18.54)\"><path d=\"M0.0210715 13.7145 C0.0210715 9.53981 0.0470994 5.36335 0.000250789 1.19036 C-0.01016 0.253389 0.302159 6.05674e-05 1.19922 0.00353083 C7.92459 0.0312929 14.65 0.0347651 21.3753 6.24737e-05 C22.3505 -0.00514292 22.6489 0.314119 22.6125 1.26671 C22.5483 3.04175 22.5552 4.82373 22.6108 6.6005 C22.6385 7.46807 22.3505 7.73354 21.4864 7.72313 C17.9693 7.68149 14.4522 7.73875 10.935 7.68496 C9.96337 7.67108 9.78986 8.06149 9.78639 8.91343 C9.78292 9.7758 9.99634 10.1853 10.9455 10.1714 C13.6124 10.1298 16.2793 10.1853 18.9462 10.1454 C19.8033 10.1315 20.1035 10.4126 20.0775 11.2767 C20.0254 13.0153 20.0358 14.7556 20.074 16.4942 C20.0913 17.2507 19.8155 17.5128 19.0641 17.5041 C16.3972 17.4746 13.7304 17.5075 11.0635 17.4867 C10.2549 17.4798 9.78119 17.6099 9.77772 18.6198 C9.77425 19.6556 10.2896 19.7216 11.0756 19.7181 C14.5146 19.699 17.9554 19.732 21.3944 19.6955 C22.2551 19.6869 22.6559 19.8639 22.616 20.8425 C22.5413 22.6956 22.5674 24.5539 22.6073 26.407 C22.6229 27.1618 22.3574 27.4256 21.6026 27.4238 C14.761 27.4047 7.92112 27.3995 1.0795 27.429 C0.154672 27.4325 0.00371894 27.0404 0.00892433 26.2422 C0.0384216 22.0675 0.0228084 17.8927 0.0228084 13.7163\" fill=\"currentColor\" fill-rule=\"nonzero\"/></g><g transform=\"translate(91.56 18.54)\"><path d=\"M0.0211628 13.841 C0.0211628 9.6663 0.0506609 5.49331 0.000342076 1.32031 C-0.0118038 0.300057 0.297045 -0.026149 1.31904 0.00161311 C3.67708 0.0675481 6.0386 0.055402 8.39665 0.00681829 C9.31974 -0.0122682 9.68237 0.227185 9.6789 1.23183 C9.64247 9.57955 9.64421 17.9273 9.67718 26.275 C9.68065 27.1963 9.40475 27.474 8.48687 27.4514 C6.05248 27.3924 3.61288 27.3872 1.17849 27.4531 C0.21723 27.4792 0.00381192 27.12 0.0107524 26.2455 C0.04372 22.1107 0.0263733 17.9758 0.0263733 13.841\" fill=\"currentColor\" fill-rule=\"nonzero\"/></g><g transform=\"translate(89.08 0.00)\"><path d=\"M14.4613 7.25635 C14.4647 11.261 11.2513 14.5283 7.29344 14.5422 C3.31305 14.5561 -0.0548473 11.1725 0.000676914 7.21992 C0.0579363 3.23258 3.32692 -0.0121119 7.27435 3.39887e-05 C11.2495 0.0121799 14.4578 3.24993 14.4613 7.25809\" fill=\"currentColor\" fill-rule=\"nonzero\"/></g><g transform=\"translate(103.70 18.55)\"><path d=\"M9.78798 13.5953 C9.78798 14.3275 9.78798 15.0598 9.78798 15.792 C9.78798 17.5757 9.86432 17.6746 11.6949 17.5011 C12.9303 17.3849 14.3028 17.5792 15.1825 16.3629 C16.1958 14.9609 16.3069 13.4322 15.6423 11.8775 C15.0125 10.4027 13.7545 9.95327 12.2415 10.0209 C11.7799 10.0418 11.3132 10.0591 10.8534 10.0175 C10.0708 9.94807 9.71857 10.2222 9.7741 11.0551 C9.83136 11.8984 9.78624 12.7486 9.78624 13.5971 M0.0139786 13.5936 C0.0139786 9.45703 0.0313376 5.32048 0.000105173 1.18392 C-0.00510022 0.36841 0.18055 -0.0167907 1.08629 0.000560647 C5.3391 0.083847 9.59712 0.00402965 13.843 0.205305 C19.647 0.479456 23.6812 4.00004 25.0329 9.71557 C26.1867 14.6017 25.5274 19.1616 22.3833 23.1871 C20.4139 25.7083 17.6794 27.0305 14.5561 27.1641 C10.0361 27.3567 5.50567 27.2473 0.978712 27.2977 C0.076443 27.3081 0.00530845 26.824 0.00877872 26.1195 C0.02613 21.9448 0.0174523 17.7683 0.0174523 13.5936\" fill=\"currentColor\" fill-rule=\"nonzero\"/></g><g transform=\"translate(131.23 18.54)\"><path d=\"M0.0193982 13.7632 C0.0193982 9.62488 0.0454065 5.48832 0.000293094 1.35003 C-0.0101177 0.362738 0.253624 -0.00684476 1.30338 9.57641e-05 C7.95935 0.0417389 14.6171 0.0365369 21.273 0.00356942 C22.2395 -0.00163598 22.5622 0.303745 22.5275 1.26501 C22.4651 3.04178 22.4737 4.82376 22.5241 6.60054 C22.5483 7.46117 22.2534 7.73531 21.3893 7.72664 C17.9069 7.685 14.4227 7.73358 10.9403 7.69368 C10.0485 7.68327 9.70143 7.9418 9.7049 8.87009 C9.70837 9.79492 9.96864 10.1975 10.9611 10.1784 C13.6298 10.1298 16.3019 10.1975 18.9722 10.1454 C19.9075 10.1263 20.1782 10.4543 20.1452 11.3548 C20.0827 13.0153 20.074 14.681 20.1486 16.3416 C20.1903 17.2976 19.8224 17.5267 18.9393 17.511 C16.3088 17.4677 13.6766 17.5093 11.0444 17.4885 C10.2549 17.4833 9.71184 17.5718 9.70663 18.5903 C9.70316 19.5724 10.163 19.7303 10.9958 19.7233 C14.4401 19.6956 17.8843 19.7407 21.3285 19.6938 C22.243 19.6817 22.557 19.9559 22.5275 20.8755 C22.4685 22.6522 22.4616 24.4342 22.531 26.211 C22.5692 27.2156 22.1684 27.4377 21.2435 27.4325 C14.5876 27.4013 7.92986 27.3996 1.2739 27.4325 C0.316102 27.4377 -0.00490891 27.1393 0.00376675 26.1763 C0.0454099 22.0397 0.0211138 17.9015 0.0211138 13.7632\" fill=\"currentColor\" fill-rule=\"nonzero\"/></g><g transform=\"translate(155.65 18.53)\"><path d=\"M13.5739 15.8211 L17.3478 15.8211 C16.7839 14.2612 16.2738 12.8956 15.7724 11.5145 C15.6995 11.3115 15.5069 11.1761 15.29 11.1761 L15.2865 11.1761 C14.7382 12.6649 14.1899 14.1536 13.5757 15.8211 M30.835 27.2712 L28.8344 27.2712 C26.9379 27.2712 25.0414 27.2677 23.1449 27.2712 C20.7869 27.2764 21.3387 27.4222 20.5613 25.4493 C19.7111 23.2908 20.1327 23.5511 17.799 23.5337 C15.9025 23.5199 14.006 23.5546 12.1112 23.5199 C11.3859 23.5077 11.0112 23.7645 10.7387 24.4568 C9.62825 27.2799 9.60569 27.2712 6.50848 27.2712 L0 27.2712 C0.123194 26.8669 0.189123 26.5824 0.296701 26.3152 C3.63509 18.0039 6.99431 9.70127 10.2997 1.3761 C10.7023 0.362787 11.2159 -0.0432349 12.335 0.00361371 C14.5751 0.0973108 16.8221 0.0469895 19.0674 0.0226976 C19.718 0.0157571 20.1327 0.175388 20.3982 0.845149 C23.7366 9.23972 27.101 17.6221 30.4533 26.0098 C30.58 26.3273 30.6528 26.6657 30.8333 27.2695\" fill=\"currentColor\" fill-rule=\"nonzero\"/></g>"};
  var QUOTE = "M829.102 119.009L829.102 130.218C829.102 132.405 828.47 134.562 827.207 136.688L817.097 154.457L809.695 154.457L818.18 134.865L813.396 134.865C812.012 134.865 811.049 134.562 810.508 133.954C809.966 133.407 809.695 132.466 809.695 131.129L809.695 119.009C809.695 117.612 809.966 116.64 810.508 116.093C811.049 115.547 812.012 115.273 813.396 115.273L825.401 115.273C826.725 115.273 827.688 115.547 828.29 116.093C828.831 116.64 829.102 117.612 829.102 119.009ZM806.591 119.009L806.591 130.218C806.591 132.405 805.959 134.562 804.695 136.688L794.586 154.457L787.184 154.457L795.669 134.865L790.885 134.865C789.501 134.865 788.538 134.562 787.997 133.954C787.455 133.407 787.184 132.466 787.184 131.129L787.184 119.009C787.184 117.612 787.455 116.64 787.997 116.093C788.538 115.547 789.501 115.273 790.885 115.273L802.89 115.273C804.214 115.273 805.177 115.547 805.779 116.093C806.32 116.64 806.591 117.612 806.591 119.009Z";
  var ARROW = 'M21.9203 0.707107 C22.3108 0.316583 22.3108 -0.316583 21.9203 -0.707107 L15.5563 -7.07107 C15.1658 -7.46159 14.5327 -7.46159 14.1421 -7.07107 C13.7516 -6.68054 13.7516 -6.04738 14.1421 -5.65685 L19.799 0 L14.1421 5.65685 C13.7516 6.04738 13.7516 6.68054 14.1421 7.07107 C14.5327 7.46159 15.1658 7.46159 15.5563 7.07107 L21.9203 0.707107 Z M0 0 L0 1 L21.2132 1 L21.2132 0 L21.2132 -1 L0 -1 L0 0 Z';
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }
  function px(v) { return typeof v === 'number' ? v + 'px' : v; }

  function Chrome(p) {
    var inset = p.inset == null ? 27 : p.inset;
    return h('div', { className: cx('li-chrome', p.className), style: Object.assign({ '--li-inset': px(inset) }, p.style), 'aria-hidden': 'true' },
      h('span', null, p.left == null ? 'LIVEIDEA AG' : p.left),
      h('span', null, p.right == null ? '2027©' : p.right));
  }

  function Logo(p) {
    var height = p.height || 46;
    return h('svg', {
      className: cx('li-logo', p.className), viewBox: '0 0 ' + LOGO.W + ' ' + LOGO.H,
      height: height, width: +(height * LOGO.W / LOGO.H).toFixed(2), role: 'img',
      'aria-label': p.title || 'LIVEIDEA', style: p.style,
      dangerouslySetInnerHTML: { __html: LOGO.g }
    });
  }

  function Display(p) {
    var Tag = p.as || 'h1';
    return h(Tag, { className: cx('li-display', p.className), style: Object.assign({ '--li-size': px(p.size || 180) }, p.style) }, p.children);
  }

  function Headline(p) {
    var Tag = p.as || 'h2';
    return h(Tag, { className: cx('li-headline', p.weight === 'regular' && 'li-headline--regular', p.className), style: Object.assign({ '--li-size': px(p.size || 40) }, p.style) }, p.children);
  }

  function CaseHeader(p) {
    return h('header', { className: cx('li-case', p.className), style: p.style },
      p.client ? h('div', { className: 'li-case__client' }, p.client) : null,
      h(Display, { as: 'h2', size: p.size || 120 }, p.title),
      p.children ? h('p', { className: 'li-case__text' }, p.children) : null);
  }

  function Stat(p) {
    var size = p.size || 'm';
    return h('div', { className: cx('li-stat', 'li-stat--' + size, p.stack && 'li-stat--stack', p.rule === false && 'li-stat--bare', p.className), style: p.style },
      h('div', { className: 'li-stat__num' },
        h('span', { className: 'li-stat__value' }, p.value),
        p.unit ? h('em', { className: 'li-stat__unit' }, p.unit) : null),
      h('div', { className: 'li-stat__label' }, p.label,
        p.note ? h('span', { className: 'li-stat__note' }, p.note) : null,
        p.subtitle ? h('span', { className: 'li-stat__subtitle' }, p.subtitle) : null));
  }

  function PillarList(p) {
    var st = useState(p.defaultActive || 0);
    var active = p.active != null ? p.active : st[0];
    function pick(i) { if (p.active == null) st[1](i); if (p.onSelect) p.onSelect(i); }
    return h('ol', { className: cx('li-pillars', p.className), style: p.style },
      (p.items || []).map(function (it, i) {
        var on = i === active;
        return h('li', { key: i, className: cx('li-pillar', on && 'is-active') },
          h('button', { type: 'button', className: 'li-pillar__btn', 'aria-pressed': on ? 'true' : 'false', onClick: function () { pick(i); } },
            h('span', { className: 'li-pillar__no' }, String(i + 1).padStart(2, '0')),
            h('span', { className: 'li-pillar__title' }, it.title, ' ', h('em', null, it.accent)),
            h('span', { className: 'li-pillar__text' }, it.text)));
      }));
  }

  function ReadPill(p) {
    var Tag = p.href ? 'a' : 'button';
    var props = { className: cx('li-pill', p.className), style: p.style, onClick: p.onClick };
    if (p.href) { props.href = p.href; props.target = '_blank'; props.rel = 'noopener noreferrer'; } else { props.type = 'button'; }
    return h(Tag, props, p.children || 'LEIA');
  }

  function Quote() {
    return h('svg', { className: 'li-quote', viewBox: '787 115 43 40', width: 43, height: 40, 'aria-hidden': 'true' }, h('path', { d: QUOTE }));
  }

  function PressCard(p) {
    return h('article', { className: cx('li-press', p.className), style: Object.assign({ '--li-size': px(p.size || 52) }, p.style) },
      h('div', { className: 'li-press__top' }, h(Quote), p.href ? h(ReadPill, { href: p.href }, p.cta || 'LEIA') : null),
      h('h3', { className: 'li-press__headline' }, p.headline),
      p.dek ? h('p', { className: 'li-press__dek' }, p.dek) : null,
      p.date ? h('p', { className: 'li-press__date' }, p.date) : null,
      p.outletLogo ? h('img', { className: 'li-press__logo', src: p.outletLogo, alt: p.outlet || '' })
        : (p.outlet ? h('p', { className: 'li-press__outlet' }, p.outlet) : null));
  }

  function TeamCard(p) {
    return h('figure', { className: cx('li-team', p.className), style: p.style },
      h('div', { className: 'li-team__pic' },
        h('div', { className: 'li-team__shape' }),
        p.photo ? h('img', { className: 'li-team__photo', src: p.photo, alt: [p.first, p.last].filter(Boolean).join(' ') }) : null),
      h('figcaption', null,
        p.role ? h('div', { className: 'li-team__role' }, p.role) : null,
        h('div', { className: 'li-team__name' }, p.first, h('em', null, p.last)),
        p.bio ? h('p', { className: 'li-team__bio' }, p.bio) : null));
  }

  function ArrowLink(p) {
    return h('a', { className: cx('li-arrow', p.className), href: p.href, target: '_blank', rel: 'noopener noreferrer', style: p.style },
      h('span', { className: 'li-arrow__text' }, p.children),
      h('svg', { className: 'li-arrow__icon', viewBox: '-2 -17 19 19', width: 19, height: 19, 'aria-hidden': 'true' },
        h('g', { transform: 'rotate(-45)' }, h('path', { d: ARROW }))));
  }

  var sid = 0;
  function Stamp(p) {
    var size = p.size || 140, r = size / 2 - 14, c = size / 2;
    var id = useMemo(function () { sid += 1; return 'li-stamp-' + sid; }, []);
    var d = 'M ' + c + ',' + c + ' m -' + r + ',0 a ' + r + ',' + r + ' 0 1,1 ' + (2 * r) + ',0 a ' + r + ',' + r + ' 0 1,1 -' + (2 * r) + ',0';
    return h('svg', { className: cx('li-stamp', p.spin === false && 'li-stamp--still', p.className), viewBox: '0 0 ' + size + ' ' + size, width: size, height: size, role: 'img', 'aria-label': p.text, style: p.style },
      h('defs', null, h('path', { id: id, d: d })),
      h('text', null, h('textPath', { href: '#' + id, startOffset: '0', textLength: (2 * Math.PI * r - 6).toFixed(1), lengthAdjust: 'spacing' }, p.text)));
  }

  // ---- Ações ---------------------------------------------------------------
  function OutIcon() {
    return h('svg', { className: 'li-btn__out', viewBox: '-2 -17 19 19', width: 12, height: 12, 'aria-hidden': 'true' },
      h('g', { transform: 'rotate(-45)' }, h('path', { d: ARROW })));
  }

  function Button(p) {
    var variant = p.variant || 'primary', size = p.size || 'md';
    var cls = cx('li-btn', 'li-btn--' + variant, 'li-btn--' + size, p.className);
    var kids = [
      p.icon === 'prev' ? h('span', { key: 'p', 'aria-hidden': 'true' }, '‹') : null,
      h('span', { key: 't', className: 'li-btn__text' }, p.children),
      p.icon === 'next' ? h('span', { key: 'n', 'aria-hidden': 'true' }, '›') : null,
      p.icon === 'out' ? h(OutIcon, { key: 'o' }) : null
    ];
    if (p.href && !p.disabled) {
      return h('a', { className: cls, href: p.href, target: '_blank', rel: 'noopener noreferrer', style: p.style }, kids);
    }
    return h('button', { type: p.type || 'button', className: cls, disabled: p.disabled, onClick: p.onClick, style: p.style, 'aria-pressed': p.pressed }, kids);
  }

  function ProgressBar(p) {
    var v = Math.max(0, Math.min(1, p.value == null ? 0 : p.value));
    return h('div', { className: cx('li-progress', 'li-progress--' + (p.tone || 'laranja'), p.className), role: 'progressbar', 'aria-valuemin': 0, 'aria-valuemax': 100, 'aria-valuenow': Math.round(v * 100), 'aria-label': p.label || 'Progresso', style: Object.assign({ '--li-h': px(p.height || 2) }, p.style) },
      h('div', { className: 'li-progress__fill', style: { width: (v * 100) + '%' } }));
  }

  // ---- Fotografia ------------------------------------------------------------
  function ratioOf(r) {
    if (r == null) return undefined;
    if (typeof r === 'number') return String(r);
    return String(r).replace(':', ' / ');
  }

  function Photo(p) {
    var place = p.place || 'base';
    var dark = place === 'base' || place === 'centro' || p.overlayTheme === 'dark';
    var media = p.video
      ? h('video', { className: 'li-photo__img', src: p.video, poster: p.poster || p.src, muted: true, loop: true, playsInline: true, autoPlay: true, preload: 'metadata', style: { objectPosition: p.focus } })
      : h('img', { className: 'li-photo__img', src: p.src, alt: p.alt || '', loading: p.lazy ? 'lazy' : 'eager', decoding: 'async', style: { objectPosition: p.focus } });
    return h('figure', {
      className: cx('li-photo', p.fill && 'li-photo--fill', p.reveal && 'li-photo--reveal', p.className),
      style: Object.assign({ aspectRatio: p.fill ? undefined : ratioOf(p.ratio) }, p.style)
    },
      h('div', { className: 'li-photo__media' },
        media,
        p.veil ? h('div', { className: 'li-photo__veil li-photo__veil--' + p.veil }) : null,
        p.fade ? h('div', { className: 'li-photo__fade li-photo__fade--' + p.fade }) : null,
        p.logo ? h('div', { className: 'li-photo__logo' }, h(Logo, { height: typeof p.logo === 'number' ? p.logo : 46 })) : null),
      p.children ? h('div', { className: 'li-photo__over li-photo__over--' + place, 'data-theme': dark ? 'dark' : undefined }, p.children) : null);
  }

  var GRID = ['dupla', 'trio', 'destaque', 'mosaico', 'vitrine', 'laterais', 'faixa', 'capas'];
  var AREAS = 'abcdefghijkl';
  function PhotoGrid(p) {
    var layout = GRID.indexOf(p.layout) >= 0 ? p.layout : 'dupla';
    var photos = p.photos || [];
    var style = Object.assign({}, p.columns ? { gridTemplateColumns: p.columns } : null);
    var cells = photos.map(function (ph, i) {
      return h(Photo, { key: i, lazy: p.lazy, src: ph.src, alt: ph.alt, focus: ph.focus, video: ph.video, poster: ph.poster, veil: ph.veil, logo: ph.logo, className: 'li-grid__cell', style: { gridArea: layout === 'capas' ? undefined : AREAS[i] } }, ph.children || null);
    });
    if (p.children && (layout === 'vitrine' || layout === 'laterais')) {
      cells.push(h('div', { key: 'slot', className: 'li-grid__slot', style: { gridArea: 't' } }, p.children));
    }
    return h('div', { className: cx('li-gridwrap', p.className), style: p.style },
      h('div', { className: cx('li-grid', 'li-grid--' + layout, 'li-grid--gap-' + (p.gap || 'm')), style: style }, cells));
  }

  // ---- Ícones: grid 24px, traço bold 2,5px, pontas chatas, cantos vivos --------
  var ICONS = {"seta-direita":"<path d=\"M3 12h16.5\"/><path d=\"M13 5.5 19.5 12 13 18.5\"/>","seta-esquerda":"<path d=\"M21 12H4.5\"/><path d=\"M11 5.5 4.5 12 11 18.5\"/>","seta-diagonal":"<path d=\"M6 18 18 6\"/><path d=\"M8.5 6H18v9.5\"/>","chevron-direita":"<path d=\"M9 4.5 16.5 12 9 19.5\"/>","chevron-esquerda":"<path d=\"M15 4.5 7.5 12 15 19.5\"/>","chevron-baixo":"<path d=\"M4.5 9 12 16.5 19.5 9\"/>","mais":"<path d=\"M12 3.5v17\"/><path d=\"M3.5 12h17\"/>","fechar":"<path d=\"M5 5l14 14\"/><path d=\"M19 5 5 19\"/>","check":"<path d=\"M4 12.5l5.5 5.5L20 6.5\"/>","menu":"<path d=\"M3 6.5h18\"/><path d=\"M3 12h18\"/><path d=\"M3 17.5h18\"/>","play":"<path d=\"M7 4.5v15L19 12z\"/>","busca":"<circle cx=\"10.5\" cy=\"10.5\" r=\"6.75\"/><path d=\"M15.5 15.5 21 21\"/>","link-externo":"<path d=\"M13.5 3.5h7v7\"/><path d=\"M20.5 3.5 11 13\"/><path d=\"M18 14v6.5H3.5V6H10\"/>","download":"<path d=\"M12 3v12.5\"/><path d=\"M6.5 10 12 15.5 17.5 10\"/><path d=\"M4 20.5h16\"/>","local":"<path d=\"M12 21.5S5 15.2 5 9.5a7 7 0 0 1 14 0c0 5.7-7 12-7 12z\"/><circle cx=\"12\" cy=\"9.5\" r=\"2.5\"/>","calendario":"<path d=\"M3.5 5.5h17v15h-17z\"/><path d=\"M3.5 10.5h17\"/><path d=\"M8 3v5\"/><path d=\"M16 3v5\"/>","relogio":"<circle cx=\"12\" cy=\"12\" r=\"8.75\"/><path d=\"M12 6.5V12l4 2.5\"/>","pessoas":"<circle cx=\"9\" cy=\"8\" r=\"3.25\"/><path d=\"M3 20.5V18a4.5 4.5 0 0 1 4.5-4.5h3A4.5 4.5 0 0 1 15 18v2.5\"/><path d=\"M15.5 4.9a3.25 3.25 0 0 1 0 6.2\"/><path d=\"M17.5 13.7A4.5 4.5 0 0 1 21 18v2.5\"/>","email":"<path d=\"M3 5.5h18v13H3z\"/><path d=\"M3 6.5 12 13l9-6.5\"/>","camera":"<path d=\"M3 7.5h18v12.5H3z\"/><circle cx=\"12\" cy=\"13.75\" r=\"3.5\"/><path d=\"M8 7.5 9.5 4.5h5L16 7.5\"/>","musica":"<path d=\"M9 18.5V5.5l11-2v13\"/><circle cx=\"6.5\" cy=\"18.5\" r=\"2.5\"/><circle cx=\"17.5\" cy=\"16.5\" r=\"2.5\"/>","microfone":"<path d=\"M9 3.5h6v10.5H9z\"/><path d=\"M5.5 11a6.5 6.5 0 0 0 13 0\"/><path d=\"M12 17.5v4\"/><path d=\"M8.5 21.5h7\"/>","talheres":"<path d=\"M5.5 3v7a2.5 2.5 0 0 0 5 0V3\"/><path d=\"M8 12.5v9\"/><path d=\"M18.5 21.5V3C16 4.5 14.5 7.5 14.5 11v3.5h4\"/>","hospedagem":"<path d=\"M3 4.5v16\"/><path d=\"M3 16.5h18v4\"/><path d=\"M10.5 16.5v-6.5h8a2.5 2.5 0 0 1 2.5 2.5v4\"/><path d=\"M5.5 11h3v3h-3z\"/>","carro":"<path d=\"M3.5 17.5V12l2.5-6h12l2.5 6v5.5z\"/><path d=\"M3.5 12h17\"/><path d=\"M6.5 17.5v3\"/><path d=\"M17.5 17.5v3\"/>","aviao":"<path d=\"M12 2.5v19\"/><path d=\"M2.5 14 12 9l9.5 5\"/><path d=\"M8 21 12 18.5l4 2.5\"/>"};
  function Icon(p) {
    var d = ICONS[p.name];
    if (!d) return null;
    var size = p.size || 24;
    var a11y = p.title ? { role: 'img', 'aria-label': p.title } : { 'aria-hidden': 'true' };
    return h('svg', Object.assign({
      className: cx('li-icon', p.className), viewBox: '0 0 24 24', width: size, height: size,
      fill: 'none', stroke: 'currentColor', strokeWidth: 2.5, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10,
      style: p.style, dangerouslySetInnerHTML: { __html: d }
    }, a11y));
  }
  Icon.names = Object.keys(ICONS);

  var api = { Icon: Icon, Button: Button, ProgressBar: ProgressBar, Photo: Photo, PhotoGrid: PhotoGrid, Chrome: Chrome, Logo: Logo, Display: Display, Headline: Headline, CaseHeader: CaseHeader, Stat: Stat, PillarList: PillarList, ReadPill: ReadPill, PressCard: PressCard, TeamCard: TeamCard, ArrowLink: ArrowLink, Stamp: Stamp };
  window.LiveIdea = Object.assign(window.LiveIdea || {}, api);
})();
