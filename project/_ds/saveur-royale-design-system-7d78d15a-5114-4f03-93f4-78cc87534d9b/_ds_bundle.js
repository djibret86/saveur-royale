/* @ds-bundle: {"format":3,"namespace":"SaveurRoyaleDesignSystem_7d78d1","components":[{"name":"FlagChip","sourcePath":"components/brand/FlagChip.jsx"},{"name":"GoldRule","sourcePath":"components/brand/GoldRule.jsx"},{"name":"CrownGlyph","sourcePath":"components/brand/GoldRule.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"SectionHeading","sourcePath":"components/brand/SectionHeading.jsx"},{"name":"TechnicalRing","sourcePath":"components/brand/TechnicalRing.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"ProductCard","sourcePath":"components/product/ProductCard.jsx"}],"sourceHashes":{"components/brand/FlagChip.jsx":"d1a513a66f81","components/brand/GoldRule.jsx":"9a8f8b5c4c05","components/brand/Logo.jsx":"b5a761756871","components/brand/SectionHeading.jsx":"2ff79372d7da","components/brand/TechnicalRing.jsx":"1aad30a3447d","components/core/Badge.jsx":"8aa829c03532","components/core/Button.jsx":"e5f9c810c28a","components/core/Card.jsx":"19636cbc5840","components/core/Tag.jsx":"3625e0e8447c","components/forms/Input.jsx":"9fa464f6554c","components/forms/Select.jsx":"e923c8826e31","components/product/ProductCard.jsx":"789fd9b1aaa5","ui_kits/boutique/App.jsx":"7986c883c3ef","ui_kits/boutique/CartDrawer.jsx":"c213fd4ab8f2","ui_kits/boutique/Collection.jsx":"2c5784194777","ui_kits/boutique/Footer.jsx":"5c48063d2825","ui_kits/boutique/Header.jsx":"1db3bd97e574","ui_kits/boutique/Hero.jsx":"5240dd6b5fea","ui_kits/boutique/ProductDetail.jsx":"853f0601d253","ui_kits/boutique/Story.jsx":"6c733c23bc1b","ui_kits/boutique/data.js":"2271c8e04755"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SaveurRoyaleDesignSystem_7d78d1 = window.SaveurRoyaleDesignSystem_7d78d1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/FlagChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Saveur Royale — FlagChip
 * Provenance marker: the Côte d'Ivoire flag chip + "Fièrement produite en
 * Côte d'Ivoire". Horizontal or vertical (label-style) orientation.
 */
function FlagChip({
  label = "Fièrement produite en Côte d'Ivoire",
  orientation = 'horizontal',
  onDark = false,
  className = '',
  style = {},
  ...rest
}) {
  const vertical = orientation === 'vertical';
  const flag = /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: vertical ? 14 : 22,
      height: vertical ? 9 : 14,
      borderRadius: 1.5,
      overflow: 'hidden',
      border: '0.5px solid rgba(0,0,0,0.12)',
      flex: 'none',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      background: 'var(--ci-orange)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      background: '#ffffff'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      background: 'var(--ci-green)'
    }
  }));
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: 'inline-flex',
      flexDirection: vertical ? 'column' : 'row',
      alignItems: 'center',
      gap: '0.5em',
      writingMode: vertical ? 'sideways-lr' : 'horizontal-tb',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: '0.7rem',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
      ...style
    }
  }, rest), flag, /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { FlagChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/FlagChip.jsx", error: String((e && e.message) || e) }); }

// components/brand/GoldRule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Saveur Royale — GoldRule
 * The signature filet: a centred caps/script word flanked by gold rules
 * that fade to transparent. Optionally crowned.
 */
function GoldRule({
  children,
  crown = false,
  color = 'var(--gold-600)',
  className = '',
  style = {},
  ...rest
}) {
  const line = dir => ({
    flex: 1,
    height: '1.3px',
    background: dir === 'l' ? 'linear-gradient(90deg, transparent, var(--gold-300))' : 'linear-gradient(90deg, var(--gold-300), transparent)'
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.4rem',
      width: '100%',
      ...style
    }
  }, rest), crown && /*#__PURE__*/React.createElement(CrownGlyph, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: line('l')
  }), children && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '0.82rem',
      letterSpacing: 'var(--ls-caps)',
      textIndent: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color
    }
  }, children), /*#__PURE__*/React.createElement("span", {
    style: line('r')
  })));
}

/** The heraldic gold crown mark, inline SVG drawn from the logo silhouette. */
function CrownGlyph({
  size = 26,
  className = '',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size * 0.62,
    viewBox: "0 0 100 62",
    className: className,
    style: {
      display: 'block',
      ...style
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "sr-crown-g",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#f4e3b8"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.5",
    stopColor: "#e3c074"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#b8862f"
  }))), /*#__PURE__*/React.createElement("path", {
    fill: "url(#sr-crown-g)",
    d: "M8 52 L4 18 L26 34 L50 6 L74 34 L96 18 L92 52 Z"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "53",
    width: "88",
    height: "6",
    rx: "2",
    fill: "url(#sr-crown-g)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "4",
    r: "4",
    fill: "#e3c074"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "4",
    cy: "16",
    r: "3.4",
    fill: "#e3c074"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "96",
    cy: "16",
    r: "3.4",
    fill: "#e3c074"
  }));
}
Object.assign(__ds_scope, { GoldRule, CrownGlyph });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/GoldRule.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Saveur Royale — Logo
 * The master wordmark (script "Royale" + crown + LIQUEUR banner).
 * Uses the brand PNG; a cream variant is auto-selected for dark grounds.
 * `base` resolves the assets path relative to the page using the component.
 */
function Logo({
  variant = 'auto',
  onDark = false,
  height = 84,
  base = '',
  alt = 'Saveur Royale',
  className = '',
  style = {},
  ...rest
}) {
  const useCream = variant === 'cream' || variant === 'auto' && onDark;
  const file = useCream ? 'royale-logo-cream.png' : 'royale-logo.png';
  const src = (base ? base.replace(/\/$/, '') + '/' : '') + 'assets/logo/' + file;
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: alt,
    className: className,
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Saveur Royale — SectionHeading
 * The hallmark lock-up: a gold-rule eyebrow ("SAVEUR"-style) above a large
 * Pinyon script title, with an optional sans subtitle. Light or dark ground.
 */
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  crown = false,
  align = 'center',
  onDark = false,
  className = '',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      gap: '0.75rem',
      maxWidth: '42rem',
      margin: align === 'center' ? '0 auto' : 0,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      width: align === 'center' ? '100%' : 'auto',
      minWidth: align === 'center' ? '14rem' : undefined
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.GoldRule, {
    crown: crown
  }, eyebrow)), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 400,
      fontSize: 'var(--fs-script-lg)',
      lineHeight: 1.04,
      letterSpacing: 0,
      margin: 0,
      color: onDark ? 'var(--cream-300)' : 'var(--text-strong)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-lead)',
      lineHeight: 'var(--lh-normal)',
      margin: '0.25rem 0 0',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, subtitle));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/brand/TechnicalRing.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Saveur Royale — TechnicalRing
 * The bottle's double dotted technical ring (e.g. "25% / VOL", "75 / CL").
 */
function TechnicalRing({
  value,
  label,
  size = 96,
  onDark = false,
  className = '',
  style = {},
  ...rest
}) {
  // On the labels: solid navy outer ring, gold dotted inner ring, navy figures.
  const ink = onDark ? 'var(--cream-300)' : 'var(--indigo-700)';
  const inkSoft = onDark ? 'var(--cream-400)' : 'var(--indigo-500)';
  const dotted = onDark ? 'var(--gold-300)' : 'var(--gold-500)';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      position: 'relative',
      width: size,
      height: size,
      borderRadius: '50%',
      border: `1.6px solid ${inkSoft}`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: size * 0.07,
      borderRadius: '50%',
      border: `1.5px dotted ${dotted}`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: size * 0.30,
      lineHeight: 0.95,
      color: ink,
      letterSpacing: '-0.01em'
    }
  }, value), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: size * 0.115,
      letterSpacing: '0.2em',
      textIndent: '0.2em',
      textTransform: 'uppercase',
      color: inkSoft,
      marginTop: 2
    }
  }, label));
}
Object.assign(__ds_scope, { TechnicalRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/TechnicalRing.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Saveur Royale — Badge
 * Small engraved-caps marker. Gold-leaf for ceremony, outline & soft tones,
 * plus a chocolate "premium" tone for dark grounds.
 */
function Badge({
  children,
  tone = 'gold',
  size = 'md',
  className = '',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: '0.6rem',
      padding: '0.28em 0.7em',
      letterSpacing: '0.18em'
    },
    md: {
      fontSize: '0.68rem',
      padding: '0.4em 0.95em',
      letterSpacing: '0.2em'
    }
  };
  const tones = {
    gold: {
      background: 'var(--grad-gold)',
      color: 'var(--choc-800)',
      boxShadow: 'var(--shadow-inset-gold)',
      border: '1px solid var(--gold-600)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--gold-700)',
      border: '1px solid var(--gold-500)'
    },
    soft: {
      background: 'var(--gold-50)',
      color: 'var(--gold-700)',
      border: '1px solid var(--gold-100)'
    },
    cream: {
      background: 'var(--cream-300)',
      color: 'var(--choc-700)',
      border: '1px solid transparent'
    },
    premium: {
      background: 'var(--choc-600)',
      color: 'var(--cream-300)',
      border: '1px solid var(--line-on-dark)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.4em',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      textTransform: 'uppercase',
      textIndent: sizes[size].letterSpacing,
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...sizes[size],
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Saveur Royale — Button
 * Regal CTA: gold-leaf primary, gold-outline secondary, quiet ghost,
 * and a cream variant for dark/premium grounds.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconStart = null,
  iconEnd = null,
  fullWidth = false,
  disabled = false,
  type = 'button',
  className = '',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      height: 'var(--control-h-sm)',
      padding: '0 1rem',
      fontSize: '0.78rem'
    },
    md: {
      height: 'var(--control-h-md)',
      padding: '0 1.6rem',
      fontSize: '0.84rem'
    },
    lg: {
      height: 'var(--control-h-lg)',
      padding: '0 2.2rem',
      fontSize: '0.92rem'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.6em',
    width: fullWidth ? '100%' : 'auto',
    border: '1px solid transparent',
    borderRadius: 'var(--radius-pill)',
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    textIndent: '0.16em',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    whiteSpace: 'nowrap',
    transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)',
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: 'var(--grad-gold)',
      color: 'var(--choc-800)',
      boxShadow: 'var(--shadow-gold), var(--shadow-inset-gold)',
      borderColor: 'var(--gold-600)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--gold-700)',
      borderColor: 'var(--gold-500)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-strong)',
      borderColor: 'transparent'
    },
    dark: {
      background: 'var(--choc-700)',
      color: 'var(--cream-300)',
      borderColor: 'var(--choc-600)',
      boxShadow: 'var(--shadow-md)'
    },
    cream: {
      background: 'var(--cream-100)',
      color: 'var(--choc-700)',
      borderColor: 'transparent',
      boxShadow: 'var(--shadow-sm)'
    }
  };
  const hoverByVariant = {
    primary: (e, on) => {
      e.currentTarget.style.boxShadow = on ? '0 12px 34px rgba(199,154,78,0.5), var(--shadow-inset-gold)' : 'var(--shadow-gold), var(--shadow-inset-gold)';
    },
    secondary: (e, on) => {
      e.currentTarget.style.background = on ? 'var(--gold-50)' : 'transparent';
    },
    ghost: (e, on) => {
      e.currentTarget.style.background = on ? 'rgba(199,154,78,0.10)' : 'transparent';
    },
    dark: (e, on) => {
      e.currentTarget.style.background = on ? 'var(--choc-600)' : 'var(--choc-700)';
    },
    cream: (e, on) => {
      e.currentTarget.style.background = on ? '#ffffff' : 'var(--cream-100)';
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    className: className,
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => {
      if (disabled) return;
      e.currentTarget.style.transform = 'translateY(-1px)';
      hoverByVariant[variant]?.(e, true);
    },
    onMouseLeave: e => {
      if (disabled) return;
      e.currentTarget.style.transform = 'translateY(0)';
      hoverByVariant[variant]?.(e, false);
    },
    onMouseDown: e => {
      if (disabled) return;
      e.currentTarget.style.transform = 'scale(0.975)';
    },
    onMouseUp: e => {
      if (disabled) return;
      e.currentTarget.style.transform = 'translateY(-1px)';
    }
  }, rest), iconStart, children, iconEnd);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Saveur Royale — Card
 * Warm-elevated surface. Three grounds: cream paper, premium chocolate
 * (with cacao grain), and a wave-guilloché variant. Optional gold hairline.
 */
function Card({
  children,
  variant = 'paper',
  goldHairline = false,
  padding = 'var(--space-6)',
  interactive = false,
  className = '',
  style = {},
  ...rest
}) {
  const variants = {
    paper: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      boxShadow: 'var(--shadow-md)',
      border: goldHairline ? '1px solid var(--gold-300)' : '1px solid var(--line-soft)'
    },
    raised: {
      background: 'var(--surface-raised)',
      color: 'var(--text-body)',
      boxShadow: 'var(--shadow-lg)',
      border: goldHairline ? '1px solid var(--gold-300)' : '1px solid transparent'
    },
    premium: {
      background: 'var(--grad-choc-warm)',
      color: 'var(--text-on-dark)',
      boxShadow: 'var(--shadow-xl)',
      border: goldHairline ? '1px solid var(--gold-600)' : '1px solid var(--line-on-dark)'
    },
    waves: {
      color: 'var(--text-body)',
      boxShadow: 'var(--shadow-md)',
      border: goldHairline ? '1px solid var(--gold-300)' : '1px solid var(--line-soft)'
    }
  };
  const isDark = variant === 'premium';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `${variant === 'waves' ? 'sr-waves' : ''} ${isDark ? 'sr-grain' : ''} ${className}`,
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-card)',
      padding,
      overflow: 'hidden',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...variants[variant],
      ...style
    },
    onMouseEnter: interactive ? e => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = isDark ? 'var(--shadow-xl)' : 'var(--shadow-lg)';
    } : undefined,
    onMouseLeave: interactive ? e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = variants[variant].boxShadow;
    } : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Saveur Royale — Tag
 * Soft, rounded flavour/category chip. Optional dot. Selectable state.
 */
function Tag({
  children,
  selected = false,
  dotColor = null,
  onClick,
  className = '',
  style = {},
  ...rest
}) {
  const interactive = typeof onClick === 'function';
  return /*#__PURE__*/React.createElement("span", _extends({
    role: interactive ? 'button' : undefined,
    tabIndex: interactive ? 0 : undefined,
    onClick: onClick,
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5em',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: '0.8rem',
      padding: '0.45em 0.95em',
      borderRadius: 'var(--radius-pill)',
      cursor: interactive ? 'pointer' : 'default',
      background: selected ? 'var(--choc-700)' : 'var(--gold-50)',
      color: selected ? 'var(--cream-300)' : 'var(--text-body)',
      border: '1px solid ' + (selected ? 'var(--choc-700)' : 'var(--line-soft)'),
      transition: 'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), dotColor && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '0.5em',
      height: '0.5em',
      borderRadius: '50%',
      background: dotColor,
      flex: 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Saveur Royale — Input
 * Refined text field with a Cinzel small-caps label and warm focus.
 */
function Input({
  label,
  hint,
  error,
  iconStart = null,
  id,
  className = '',
  style = {},
  ...rest
}) {
  const inputId = id || (label ? 'sr-in-' + label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.4rem',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '0.7rem',
      letterSpacing: '0.16em',
      textIndent: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.6rem',
      height: 'var(--control-h-md)',
      padding: '0 1rem',
      background: 'var(--surface-raised)',
      border: '1px solid ' + (error ? 'var(--bissap-red)' : focus ? 'var(--gold-500)' : 'var(--line-strong)'),
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? '0 0 0 3px var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)'
    }
  }, iconStart && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)',
      display: 'flex'
    }
  }, iconStart), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: e => {
      setFocus(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur?.(e);
    }
  }, rest, {
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: '0.95rem',
      color: 'var(--text-strong)',
      minWidth: 0
    }
  }))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.78rem',
      color: error ? 'var(--bissap-red)' : 'var(--text-faint)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Saveur Royale — Select
 * Styled native select matching the Input field language.
 */
function Select({
  label,
  hint,
  children,
  id,
  className = '',
  style = {},
  ...rest
}) {
  const selId = id || (label ? 'sr-sel-' + label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.4rem',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '0.7rem',
      letterSpacing: '0.16em',
      textIndent: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId
  }, rest, {
    style: {
      width: '100%',
      height: 'var(--control-h-md)',
      padding: '0 2.4rem 0 1rem',
      appearance: 'none',
      WebkitAppearance: 'none',
      background: 'var(--surface-raised)',
      border: '1px solid var(--line-strong)',
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-sans)',
      fontSize: '0.95rem',
      color: 'var(--text-strong)',
      cursor: 'pointer',
      outline: 'none'
    }
  }), children), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: '1rem',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 8,
      height: 8,
      borderRight: '1.5px solid var(--gold-600)',
      borderBottom: '1.5px solid var(--gold-600)',
      rotate: '45deg',
      pointerEvents: 'none',
      marginTop: -3
    }
  })), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.78rem',
      color: 'var(--text-faint)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/product/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Saveur Royale — ProductCard
 * A bottle/product tile: image on a warm ground, script flavour name,
 * fruit accent, descriptor, price, and an add affordance on hover.
 */
function ProductCard({
  name,
  flavourFr,
  // script flavour name e.g. "Passion"
  kind = 'Liqueur de fruit',
  image,
  price,
  accent = 'var(--gold-500)',
  badge = null,
  // e.g. "Édition limitée"
  abv,
  // e.g. "25%"
  volume = '75 cl',
  onAdd,
  className = '',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", _extends({
    className: className,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      border: '1px solid var(--line-soft)',
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-md)',
      transform: hover ? 'translateY(-4px)' : 'translateY(0)',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '3 / 4',
      overflow: 'hidden',
      borderBottom: '1px solid var(--line-soft)'
    }
  }, badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'var(--space-4)',
      left: 'var(--space-4)',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "gold",
    size: "sm"
  }, badge)), image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name || flavourFr,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.05)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    className: "sr-waves",
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-faint)',
      fontFamily: 'var(--font-display)',
      letterSpacing: '0.2em'
    }
  }, "BOUTEILLE")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.35rem',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '0.62rem',
      fontWeight: 600,
      letterSpacing: '0.22em',
      textIndent: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, kind), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 400,
      fontSize: '2.1rem',
      lineHeight: 0.95,
      margin: 0,
      color: 'var(--text-strong)'
    }
  }, flavourFr || name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.6rem',
      marginTop: '0.15rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '0.5rem',
      height: '0.5rem',
      borderRadius: '50%',
      background: accent,
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.82rem',
      color: 'var(--text-muted)'
    }
  }, [abv && `${abv} vol`, volume].filter(Boolean).join(' · '))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '1.2rem',
      color: 'var(--text-strong)'
    }
  }, price), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAdd,
    "aria-label": `Ajouter ${flavourFr || name} au panier`,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5em',
      height: '40px',
      padding: '0 1.1rem',
      border: '1px solid var(--gold-600)',
      borderRadius: 'var(--radius-pill)',
      background: hover ? 'var(--grad-gold)' : 'transparent',
      color: hover ? 'var(--choc-800)' : 'var(--gold-700)',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '0.7rem',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      cursor: 'pointer',
      boxShadow: hover ? 'var(--shadow-inset-gold)' : 'none',
      transition: 'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.CrownGlyph, {
    size: 16
  }), " Ajouter"))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/ProductCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/boutique/App.jsx
try { (() => {
// Saveur Royale — Boutique app orchestrator
function App() {
  const products = window.SR_PRODUCTS;
  const [detail, setDetail] = React.useState(null);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [cart, setCart] = React.useState([]);
  const addToCart = p => {
    setCart(prev => {
      const ex = prev.find(i => i.id === p.id);
      if (ex) return prev.map(i => i.id === p.id ? {
        ...i,
        qty: i.qty + 1
      } : i);
      return [...prev, {
        id: p.id,
        flavour: p.flavour,
        price: p.price,
        image: p.image,
        qty: 1
      }];
    });
    setCartOpen(true);
  };
  const removeFromCart = id => setCart(prev => prev.filter(i => i.id !== id));
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const goCollection = () => {
    const sc = document.getElementById('boutique-scroll');
    const el = document.getElementById('collection');
    if (sc && el) sc.scrollTo({
      top: el.offsetTop - 70,
      behavior: 'smooth'
    });
  };
  const goHome = () => document.getElementById('boutique-scroll')?.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    cartCount: count,
    onCart: () => setCartOpen(true),
    onHome: goHome
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    onExplore: goCollection
  }), /*#__PURE__*/React.createElement(Collection, {
    products: products,
    onAdd: addToCart,
    onOpen: setDetail
  }), /*#__PURE__*/React.createElement(Story, null)), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(ProductDetail, {
    product: detail,
    onClose: () => setDetail(null),
    onAdd: addToCart
  }), /*#__PURE__*/React.createElement(CartDrawer, {
    open: cartOpen,
    items: cart,
    onClose: () => setCartOpen(false),
    onRemove: removeFromCart
  }));
}
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/boutique/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/boutique/CartDrawer.jsx
try { (() => {
// Saveur Royale — Cart drawer
const {
  Button,
  GoldRule
} = window.SaveurRoyaleDesignSystem_7d78d1;
function CartDrawer({
  open,
  items,
  onClose,
  onRemove
}) {
  const total = items.reduce((s, i) => s + i.qty * parseInt(String(i.price).replace(/\D/g, ''), 10), 0);
  const fmt = n => n.toLocaleString('fr-FR').replace(/\u202f/g, ' ') + ' F';
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 70,
      background: 'rgba(13,7,6,0.5)',
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'auto' : 'none',
      transition: 'opacity var(--dur-base) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      zIndex: 71,
      width: 'min(420px, 92vw)',
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-xl)',
      transform: open ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform var(--dur-slow) var(--ease-out)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5) var(--space-6)',
      borderBottom: '1px solid var(--line-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      fontSize: '0.8rem'
    }
  }, "Votre panier"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Fermer",
    style: {
      background: 'none',
      border: 'none',
      fontSize: 22,
      cursor: 'pointer',
      color: 'var(--text-muted)',
      lineHeight: 1
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: 'var(--space-5) var(--space-6)'
    }
  }, items.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-faint)',
      textAlign: 'center',
      marginTop: '3rem'
    }
  }, "Votre panier est vide.") : items.map(i => /*#__PURE__*/React.createElement("div", {
    key: i.id,
    style: {
      display: 'flex',
      gap: '0.9rem',
      alignItems: 'center',
      padding: '0.8rem 0',
      borderBottom: '1px solid var(--line-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 64,
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden',
      border: '1px solid var(--line-soft)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: i.image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: '1.4rem',
      lineHeight: 1,
      color: 'var(--text-strong)'
    }
  }, i.flavour), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.78rem',
      color: 'var(--text-muted)'
    }
  }, i.qty, " \xD7 ", i.price)), /*#__PURE__*/React.createElement("button", {
    onClick: () => onRemove(i.id),
    "aria-label": "Retirer",
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--text-faint)',
      cursor: 'pointer',
      fontSize: 16
    }
  }, "\u2715")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)',
      borderTop: '1px solid var(--line-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: '0.9rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      fontSize: '0.74rem',
      color: 'var(--text-muted)'
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '1.5rem',
      color: 'var(--text-strong)'
    }
  }, fmt(total))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    disabled: items.length === 0
  }, "Passer la commande"))));
}
window.CartDrawer = CartDrawer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/boutique/CartDrawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/boutique/Collection.jsx
try { (() => {
// Saveur Royale — Collection grid
const {
  SectionHeading,
  ProductCard,
  Tag
} = window.SaveurRoyaleDesignSystem_7d78d1;
function Collection({
  products,
  onAdd,
  onOpen
}) {
  const cats = ['Tout', 'Liqueurs', 'Crèmes', 'Éditions limitées'];
  const [cat, setCat] = React.useState('Tout');
  const filtered = products.filter(p => {
    if (cat === 'Tout') return true;
    if (cat === 'Liqueurs') return p.kind.startsWith('Liqueur');
    if (cat === 'Crèmes') return p.kind.startsWith('Crème');
    if (cat === 'Éditions limitées') return p.kind.includes('Édition') || p.kind.includes('royale');
    return true;
  });
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Collection",
    id: "collection",
    style: {
      padding: 'var(--space-9) var(--gutter)',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    crown: true,
    eyebrow: "Nos saveurs",
    title: "La collection royale",
    subtitle: "Huit liqueurs n\xE9es de fruits s\xE9lectionn\xE9s, vieillies avec patience et savoir-faire."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.6rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
      margin: 'var(--space-6) 0 var(--space-7)'
    }
  }, cats.map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    selected: cat === c,
    onClick: () => setCat(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
      gap: 'var(--space-6)'
    }
  }, filtered.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    flavourFr: p.flavour,
    kind: p.kind,
    image: p.image,
    abv: p.abv,
    volume: p.volume,
    price: p.price,
    accent: p.accent,
    badge: p.badge,
    onClick: () => onOpen(p),
    onAdd: e => {
      e.stopPropagation();
      onAdd(p);
    },
    style: {
      cursor: 'pointer'
    }
  })))));
}
window.Collection = Collection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/boutique/Collection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/boutique/Footer.jsx
try { (() => {
// Saveur Royale — Footer & newsletter
const {
  Logo,
  Button,
  Input,
  GoldRule,
  FlagChip
} = window.SaveurRoyaleDesignSystem_7d78d1;
function Footer() {
  const cols = [{
    h: 'La Maison',
    items: ['Notre histoire', 'Savoir-faire', 'Valeurs', 'Presse']
  }, {
    h: 'Nos Saveurs',
    items: ['Liqueurs', 'Crèmes', 'Sirops', 'Éditions limitées']
  }, {
    h: 'Expériences',
    items: ['Bar Mobile', 'Afterwork Royal', 'Événements', 'Mixologie']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    className: "sr-grain",
    style: {
      background: 'var(--surface-ink-deep)',
      color: 'var(--text-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--line-on-dark)',
      padding: 'var(--space-8) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-md)',
      margin: '0 auto',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '14rem'
    }
  }, /*#__PURE__*/React.createElement(GoldRule, {
    crown: true,
    color: "var(--gold-300)"
  }, "Le Club Royal")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 400,
      fontSize: 'clamp(2rem,4vw,3rem)',
      color: 'var(--cream-200)',
      margin: 0
    }
  }, "Rejoignez nos c\xE9l\xE9brations"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-on-dark-muted)',
      maxWidth: '30rem',
      margin: 0
    }
  }, "Nouveaut\xE9s, \xE9ditions limit\xE9es et invitations \xE0 l'Afterwork Royal \u2014 directement dans votre bo\xEEte."), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => e.preventDefault(),
    style: {
      display: 'flex',
      gap: '0.6rem',
      width: 'min(440px, 100%)',
      alignItems: 'flex-end',
      marginTop: '0.4rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "vous@exemple.ci",
    type: "email",
    "aria-label": "E-mail"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    type: "submit"
  }, "S'inscrire")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-8) var(--gutter) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(3, 1fr)',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    onDark: true,
    height: 64,
    base: "../.."
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-on-dark-muted)',
      fontSize: '0.9rem',
      marginTop: '1rem',
      maxWidth: '20rem'
    }
  }, "Liquoristerie artisanale ivoirienne. Mettre en valeur nos fruits locaux \xE0 travers des produits naturels et raffin\xE9s."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '1rem'
    }
  }, /*#__PURE__*/React.createElement(FlagChip, {
    onDark: true
  }))), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      color: 'var(--gold-300)',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      fontSize: '0.72rem',
      margin: '0 0 0.9rem'
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'grid',
      gap: '0.55rem'
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--text-on-dark-muted)',
      fontSize: '0.9rem',
      textDecoration: 'none'
    }
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: 'var(--space-7) auto 0',
      paddingTop: 'var(--space-5)',
      borderTop: '1px solid var(--line-on-dark)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '0.6rem',
      fontSize: '0.76rem',
      color: 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Saveur Royale \xB7 www.saveurroyale.com"), /*#__PURE__*/React.createElement("span", {
    style: {
      letterSpacing: '0.1em'
    }
  }, "L'ABUS D'ALCOOL EST DANGEREUX POUR LA SANT\xC9 \xB7 \xC0 CONSOMMER AVEC MOD\xC9RATION"))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/boutique/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/boutique/Header.jsx
try { (() => {
// Saveur Royale — Boutique Header
const {
  Logo
} = window.SaveurRoyaleDesignSystem_7d78d1;
function Header({
  cartCount,
  onCart,
  onHome
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.getElementById('boutique-scroll');
    const onScroll = () => setScrolled((el ? el.scrollTop : window.scrollY) > 24);
    (el || window).addEventListener('scroll', onScroll);
    return () => (el || window).removeEventListener('scroll', onScroll);
  }, []);
  const links = ['La Maison', 'Nos Saveurs', 'Bar Mobile', 'Événements'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: scrolled ? '0.6rem clamp(1.25rem, 4vw, 3rem)' : '1.1rem clamp(1.25rem, 4vw, 3rem)',
      background: scrolled ? 'rgba(32,16,10,0.86)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--line-on-dark)' : '1px solid transparent',
      transition: 'all var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: '1.8rem',
      flex: 1
    }
  }, links.slice(0, 2).map(l => /*#__PURE__*/React.createElement(NavLink, {
    key: l
  }, l))), /*#__PURE__*/React.createElement("button", {
    onClick: onHome,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex'
    },
    "aria-label": "Accueil"
  }, /*#__PURE__*/React.createElement(Logo, {
    onDark: true,
    height: scrolled ? 42 : 56,
    base: "../..",
    style: {
      transition: 'height var(--dur-base) var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: '1.8rem',
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    }
  }, links.slice(2).map(l => /*#__PURE__*/React.createElement(NavLink, {
    key: l
  }, l)), /*#__PURE__*/React.createElement("button", {
    onClick: onCart,
    "aria-label": "Panier",
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 42,
      height: 42,
      borderRadius: '50%',
      cursor: 'pointer',
      background: 'transparent',
      border: '1px solid var(--line-on-dark)',
      color: 'var(--cream-300)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "21",
    r: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "21",
    r: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
  })), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -4,
      right: -4,
      minWidth: 18,
      height: 18,
      padding: '0 4px',
      borderRadius: 9,
      background: 'var(--grad-gold)',
      color: 'var(--choc-800)',
      fontFamily: 'var(--font-sans)',
      fontSize: '0.62rem',
      fontWeight: 800,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-inset-gold)'
    }
  }, cartCount))));
}
function NavLink({
  children
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '0.72rem',
      fontWeight: 600,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: h ? 'var(--gold-300)' : 'var(--cream-300)',
      textDecoration: 'none',
      transition: 'color var(--dur-base) var(--ease-out)',
      whiteSpace: 'nowrap'
    }
  }, children);
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/boutique/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/boutique/Hero.jsx
try { (() => {
// Saveur Royale — Boutique Hero
const {
  Button,
  GoldRule,
  FlagChip
} = window.SaveurRoyaleDesignSystem_7d78d1;
function Hero({
  onExplore
}) {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Hero",
    className: "sr-grain",
    style: {
      position: 'relative',
      minHeight: '92vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '8rem 1.5rem 4rem',
      overflow: 'hidden',
      marginTop: '-92px',
      backgroundColor: '#20100a',
      backgroundImage: 'repeating-radial-gradient(120% 80% at 50% -12%, transparent 0 17px, rgba(227,192,116,0.09) 17px 18px, transparent 18px 35px), radial-gradient(120% 70% at 50% 18%, #4d2814 0%, #34190c 40%, #20100a 66%, #160a06 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: '46rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1.4rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '16rem',
      maxWidth: '70vw'
    }
  }, /*#__PURE__*/React.createElement(GoldRule, {
    crown: true,
    color: "var(--gold-300)"
  }, "Liquoristerie \xB7 Depuis 2014")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 400,
      color: 'var(--cream-50)',
      fontSize: 'clamp(3.4rem, 9vw, 6.5rem)',
      lineHeight: 0.95,
      margin: 0,
      textShadow: '0 4px 30px rgba(0,0,0,0.4)'
    }
  }, "Un arc-en-ciel", /*#__PURE__*/React.createElement("br", null), "de saveurs tropicales"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-lead)',
      lineHeight: 1.6,
      color: 'var(--cream-300)',
      maxWidth: '34rem',
      margin: 0
    }
  }, "Liqueurs & sirops artisanaux n\xE9s des fruits de C\xF4te d'Ivoire. Faites de chacun de vos moments une c\xE9l\xE9bration."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.9rem',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: '0.6rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onExplore
  }, "D\xE9couvrir la collection"), /*#__PURE__*/React.createElement(Button, {
    variant: "cream",
    size: "lg"
  }, "Notre histoire")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '0.8rem'
    }
  }, /*#__PURE__*/React.createElement(FlagChip, {
    onDark: true
  }))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/boutique/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/boutique/ProductDetail.jsx
try { (() => {
// Saveur Royale — Product detail overlay
const {
  Button,
  Badge,
  GoldRule,
  TechnicalRing,
  FlagChip,
  Tag
} = window.SaveurRoyaleDesignSystem_7d78d1;
function ProductDetail({
  product,
  onClose,
  onAdd
}) {
  if (!product) return null;
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 80,
      background: 'rgba(13,7,6,0.62)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
      animation: 'sr-fade var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'relative',
      width: 'min(960px, 100%)',
      maxHeight: '90vh',
      overflow: 'auto',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-xl)',
      border: '1px solid var(--gold-300)',
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      animation: 'sr-rise var(--dur-slow) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Fermer",
    style: {
      position: 'absolute',
      top: 16,
      right: 16,
      zIndex: 2,
      width: 38,
      height: 38,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.8)',
      border: '1px solid var(--line-soft)',
      cursor: 'pointer',
      fontSize: 18,
      color: 'var(--choc-700)',
      lineHeight: 1
    }
  }, "\xD7"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      minHeight: '420px',
      borderRight: '1px solid var(--line-soft)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: product.image,
    alt: product.flavour,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-7)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.7rem'
    }
  }, product.badge && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "gold",
    size: "sm"
  }, product.badge)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '0.64rem',
      fontWeight: 600,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, product.kind), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-script)',
      fontWeight: 400,
      fontSize: '3.6rem',
      lineHeight: 0.9,
      margin: 0,
      color: 'var(--text-strong)'
    }
  }, product.flavour), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: '1.5rem',
      color: 'var(--gold-700)',
      margin: '0 0 0.2rem'
    }
  }, product.tagline), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-body)',
      lineHeight: 1.65,
      margin: 0
    }
  }, product.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.5rem',
      flexWrap: 'wrap',
      margin: '0.4rem 0'
    }
  }, product.notes.map(n => /*#__PURE__*/React.createElement(Tag, {
    key: n,
    dotColor: product.accent
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      alignItems: 'center',
      margin: '0.4rem 0'
    }
  }, /*#__PURE__*/React.createElement(TechnicalRing, {
    value: product.abv,
    label: "Vol",
    size: 78
  }), /*#__PURE__*/React.createElement(TechnicalRing, {
    value: product.volume.replace(' cl', ''),
    label: "Cl",
    size: 78
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '1.8rem',
      color: 'var(--text-strong)'
    }
  }, product.price), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--text-faint)'
    }
  }, "TTC \xB7 livraison Abidjan"))), /*#__PURE__*/React.createElement(GoldRule, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.7rem',
      marginTop: '0.4rem'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => {
      onAdd(product);
      onClose();
    }
  }, "Ajouter au panier")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '0.3rem'
    }
  }, /*#__PURE__*/React.createElement(FlagChip, null)))));
}
window.ProductDetail = ProductDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/boutique/ProductDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/boutique/Story.jsx
try { (() => {
// Saveur Royale — Story / heritage section (dark premium ground)
const {
  SectionHeading,
  GoldRule,
  CrownGlyph
} = window.SaveurRoyaleDesignSystem_7d78d1;
function Story() {
  const values = [{
    t: 'Originalité',
    d: "Concevoir des produits qui sortent de l'ordinaire par leur goût unique."
  }, {
    t: 'Raffinement',
    d: 'Un gage de qualité rien que par le soin mis dans chaque détail.'
  }, {
    t: 'Authenticité',
    d: "Valoriser uniquement les fruits produits en Côte d'Ivoire."
  }];
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Histoire",
    className: "sr-grain",
    style: {
      position: 'relative',
      background: 'var(--grad-choc-warm)',
      color: 'var(--text-on-dark)',
      padding: 'var(--space-9) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-lg)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    onDark: true,
    eyebrow: "La Maison",
    title: "L'art de la liquoristerie ivoirienne"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lead)',
      color: 'var(--cream-300)',
      lineHeight: 1.7,
      marginTop: '1rem'
    }
  }, "Fond\xE9e en 2015, la maison Saveur Royale \xE9labore liqueurs et sirops \xE0 partir des fruits de nos r\xE9gions. De la s\xE9lection des fruits au vieillissement en f\xFBt, notre processus allie savoir-faire contemporain et respect des traditions."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-6)'
    }
  }, values.map(v => /*#__PURE__*/React.createElement("div", {
    key: v.t,
    style: {
      display: 'flex',
      gap: '1rem',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 3
    }
  }, /*#__PURE__*/React.createElement(CrownGlyph, {
    size: 22
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      color: 'var(--gold-300)',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      fontSize: '0.82rem',
      margin: '0 0 0.2rem'
    }
  }, v.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-on-dark-muted)',
      fontSize: '0.95rem'
    }
  }, v.d)))))), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-xl)',
      border: '1px solid var(--gold-700)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/products/mangoustan.png",
    alt: "Liqueur Mangoustan Saveur Royale",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      aspectRatio: '4/5'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '34rem',
      margin: 'var(--space-8) auto 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(GoldRule, {
    color: "var(--gold-300)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-script)',
      fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
      color: 'var(--cream-200)',
      lineHeight: 1.1,
      margin: '1.2rem 0 0'
    }
  }, "Le go\xFBt de l'exception, \xE0 chaque gorg\xE9e.")));
}
window.Story = Story;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/boutique/Story.jsx", error: String((e && e.message) || e) }); }

// ui_kits/boutique/data.js
try { (() => {
// Saveur Royale — boutique catalogue (sample data)
window.SR_PRODUCTS = [{
  id: 'passion',
  flavour: 'Passion',
  kind: 'Liqueur de fruit',
  image: '../../assets/products/passion.jpg',
  accent: 'var(--tropic-passion)',
  abv: '25%',
  volume: '75 cl',
  price: '15 000 F',
  badge: 'Signature',
  tagline: 'Élixir solaire — une invitation au voyage.',
  notes: ['Fruit de la passion', 'Miel', 'Épices douces'],
  desc: "Son parfum envoûtant, mêlant la douceur du fruit et la profondeur des épices, évoque les îles lointaines et les couchers de soleil flamboyants. En bouche, une explosion de saveurs fruitées subtilement équilibrées par des notes de miel."
}, {
  id: 'bissap',
  flavour: 'Bissap',
  kind: 'Liqueur de fleur',
  image: '../../assets/products/bissap.png',
  accent: 'var(--bissap-red)',
  abv: '35%',
  volume: '75 cl',
  price: '15 000 F',
  badge: null,
  tagline: 'Ne vous fiez pas à la délicatesse de cette fleur.',
  notes: ['Hibiscus', 'Robe pourpre', 'Longue finale'],
  desc: "Si elle séduit par son parfum intense et la pureté de sa robe, son caractère corsé et sa longue finale sauront convertir les plus caciques d'entre vous."
}, {
  id: 'creme-bissap',
  flavour: 'Crème de Bissap',
  kind: 'Crème de liqueur',
  image: '../../assets/products/creme-bissap.jpg',
  accent: 'var(--bissap-red)',
  abv: '15%',
  volume: '75 cl',
  price: '16 000 F',
  badge: null,
  tagline: "Le préféré de ces messieurs, le péché inavoué de ces dames.",
  notes: ['Fleurs d\u2019hibiscus', 'Acidulé', 'Floral'],
  desc: "Une boisson puissante et exotique, élaborée à partir de fleurs d'hibiscus. Sa saveur vibrante et acidulée est rehaussée par une intensité qui en fait une expérience gustative audacieuse et marquante."
}, {
  id: 'corossol',
  flavour: 'Corossol',
  kind: 'Édition limitée',
  image: '../../assets/products/corossol.jpg',
  accent: 'var(--tropic-leaf)',
  abv: '25%',
  volume: '75 cl',
  price: '17 000 F',
  badge: 'Édition limitée',
  tagline: 'Une véritable invitation au voyage.',
  notes: ['Corossol', 'Pomme', 'Cannelle'],
  desc: "Ses notes fruitées de pomme et de cannelle, associées à la douceur du corossol, offrent une expérience gustative unique. En édition limitée, sa robe évolue vers des teintes rosées, révélant une complexité aromatique surprenante."
}, {
  id: 'citron',
  flavour: 'Citron',
  kind: 'Liqueur de fruit',
  image: '../../assets/products/citron.png',
  accent: '#e8c33a',
  abv: '35%',
  volume: '75 cl',
  price: '14 000 F',
  badge: null,
  tagline: 'Une ode à la fraîcheur et à l\u2019authenticité.',
  notes: ['Zestes de citron', 'Frais', 'Polyvalent'],
  desc: "Son arôme intense de citron, obtenu grâce à une infusion minutieuse de zestes, en fait une base idéale pour de nombreux cocktails. La douceur subtile qui équilibre l'acidité en fait une liqueur polyvalente."
}, {
  id: 'ananas',
  flavour: 'Ananas',
  kind: 'Liqueur de fruit',
  image: '../../assets/products/ananas.jpg',
  accent: 'var(--tropic-mango)',
  abv: '25%',
  volume: '75 cl',
  price: '14 000 F',
  badge: null,
  tagline: 'Une boisson exotique et rafraîchissante.',
  notes: ['Ananas mûr', 'Vanille', 'Doré'],
  desc: "Élaborée à partir d'ananas juteux et mûrs, elle offre une saveur douce et vanillée, parfaitement équilibrée, qui transporte immédiatement vos papilles vers des plages ensoleillées."
}, {
  id: 'chocolat',
  flavour: 'Chocolat',
  kind: 'Crème de liqueur',
  image: '../../assets/products/chocolat.jpg',
  accent: 'var(--choc-400)',
  abv: '10%',
  volume: '75 cl',
  price: '18 000 F',
  badge: null,
  tagline: 'Une symphonie unique pour exalter tous vos sens.',
  notes: ['Fèves de cacao', 'Pomme', 'Café'],
  desc: "Laissez votre palais vous conduire dans un monde où les notes de fèves de cacao, de pommes et de café s'entremêlent dans une symphonie unique, avec pour seul but d'exalter tous vos sens."
}, {
  id: 'mandarine',
  flavour: 'Mandarine',
  kind: 'Liqueur de fruit',
  image: '../../assets/products/mandarine.jpg',
  accent: 'var(--ci-orange)',
  abv: '25%',
  volume: '70 cl',
  price: '14 000 F',
  badge: null,
  tagline: 'Le soleil d\u2019Abidjan dans un verre.',
  notes: ['Mandarine', 'Zeste', 'Solaire'],
  desc: "Une liqueur solaire aux notes franches de mandarine et de zeste. À savourer frais, sur glace ou en cocktail \u2014 elle apporte une finesse délicate et chaleureuse à chaque gorgée."
}, {
  id: 'mangoustan',
  flavour: 'Mangoustan',
  kind: 'Édition royale',
  image: '../../assets/products/mangoustan.png',
  accent: '#8e2f6b',
  abv: '35%',
  volume: '75 cl',
  price: '20 000 F',
  badge: 'La couronne',
  tagline: "La pierre précieuse qui manquait à notre couronne.",
  notes: ['Mangoustan', 'Épices', 'Écorces & racines'],
  desc: "Célébré depuis des siècles, le mangoustan est sublimé en un élixir sensuel. Tel un philtre d'amour, il caresse le palais d'une douceur veloutée, suivie d'une note épicée qui réveille les sens."
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/boutique/data.js", error: String((e && e.message) || e) }); }

__ds_ns.FlagChip = __ds_scope.FlagChip;

__ds_ns.GoldRule = __ds_scope.GoldRule;

__ds_ns.CrownGlyph = __ds_scope.CrownGlyph;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.TechnicalRing = __ds_scope.TechnicalRing;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.ProductCard = __ds_scope.ProductCard;

})();
