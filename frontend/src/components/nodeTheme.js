// nodeTheme.js — theme-aware tokens for nodes and toolbar palette

const darkVariants = {
  input: {
    accent: '#3b82f6',
    accentMuted: 'rgba(59, 130, 246, 0.15)',
    glow: 'rgba(59, 130, 246, 0.25)',
    background: '#13131a',
    borderColor: 'rgba(59, 130, 246, 0.35)',
    titleColor: '#93c5fd',
    toolbarColor: 'rgba(59, 130, 246, 0.12)',
    toolbarBorder: 'rgba(59, 130, 246, 0.3)',
    nodeShadow: '0 4px 24px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.04)',
    nodeHoverShadow: '0 8px 32px rgba(0, 0, 0, 0.5), 0 0 0 1px var(--node-accent-muted), inset 0 1px 0 rgba(255,255,255,0.06)',
  },
  output: {
    accent: '#10b981',
    accentMuted: 'rgba(16, 185, 129, 0.15)',
    glow: 'rgba(16, 185, 129, 0.25)',
    background: '#13131a',
    borderColor: 'rgba(16, 185, 129, 0.35)',
    titleColor: '#6ee7b7',
    toolbarColor: 'rgba(16, 185, 129, 0.12)',
    toolbarBorder: 'rgba(16, 185, 129, 0.3)',
    nodeShadow: '0 4px 24px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.04)',
    nodeHoverShadow: '0 8px 32px rgba(0, 0, 0, 0.5), 0 0 0 1px var(--node-accent-muted), inset 0 1px 0 rgba(255,255,255,0.06)',
  },
  ai: {
    accent: '#f59e0b',
    accentMuted: 'rgba(245, 158, 11, 0.15)',
    glow: 'rgba(245, 158, 11, 0.25)',
    background: '#13131a',
    borderColor: 'rgba(245, 158, 11, 0.35)',
    titleColor: '#fcd34d',
    toolbarColor: 'rgba(245, 158, 11, 0.12)',
    toolbarBorder: 'rgba(245, 158, 11, 0.3)',
    nodeShadow: '0 4px 24px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.04)',
    nodeHoverShadow: '0 8px 32px rgba(0, 0, 0, 0.5), 0 0 0 1px var(--node-accent-muted), inset 0 1px 0 rgba(255,255,255,0.06)',
  },
  transform: {
    accent: '#a78bfa',
    accentMuted: 'rgba(167, 139, 250, 0.15)',
    glow: 'rgba(167, 139, 250, 0.25)',
    background: '#13131a',
    borderColor: 'rgba(167, 139, 250, 0.35)',
    titleColor: '#c4b5fd',
    toolbarColor: 'rgba(167, 139, 250, 0.12)',
    toolbarBorder: 'rgba(167, 139, 250, 0.3)',
    nodeShadow: '0 4px 24px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.04)',
    nodeHoverShadow: '0 8px 32px rgba(0, 0, 0, 0.5), 0 0 0 1px var(--node-accent-muted), inset 0 1px 0 rgba(255,255,255,0.06)',
  },
  utility: {
    accent: '#64748b',
    accentMuted: 'rgba(100, 116, 139, 0.15)',
    glow: 'rgba(100, 116, 139, 0.25)',
    background: '#13131a',
    borderColor: 'rgba(100, 116, 139, 0.35)',
    titleColor: '#94a3b8',
    toolbarColor: 'rgba(100, 116, 139, 0.12)',
    toolbarBorder: 'rgba(100, 116, 139, 0.3)',
    nodeShadow: '0 4px 24px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.04)',
    nodeHoverShadow: '0 8px 32px rgba(0, 0, 0, 0.5), 0 0 0 1px var(--node-accent-muted), inset 0 1px 0 rgba(255,255,255,0.06)',
  },
  default: {
    accent: '#6366f1',
    accentMuted: 'rgba(99, 102, 241, 0.15)',
    glow: 'rgba(99, 102, 241, 0.25)',
    background: '#13131a',
    borderColor: 'rgba(99, 102, 241, 0.35)',
    titleColor: '#a5b4fc',
    toolbarColor: 'rgba(99, 102, 241, 0.12)',
    toolbarBorder: 'rgba(99, 102, 241, 0.3)',
    nodeShadow: '0 4px 24px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.04)',
    nodeHoverShadow: '0 8px 32px rgba(0, 0, 0, 0.5), 0 0 0 1px var(--node-accent-muted), inset 0 1px 0 rgba(255,255,255,0.06)',
  },
};

const lightVariants = {
  input: {
    accent: '#2563eb',
    accentMuted: 'rgba(37, 99, 235, 0.1)',
    glow: 'rgba(37, 99, 235, 0.2)',
    background: '#ffffff',
    borderColor: 'rgba(37, 99, 235, 0.35)',
    titleColor: '#1d4ed8',
    toolbarColor: 'rgba(37, 99, 235, 0.08)',
    toolbarBorder: 'rgba(37, 99, 235, 0.25)',
    nodeShadow: '0 4px 16px rgba(37, 99, 235, 0.08), 0 0 0 1px rgba(37, 99, 235, 0.06)',
    nodeHoverShadow: '0 8px 24px rgba(37, 99, 235, 0.12), 0 0 0 1px rgba(37, 99, 235, 0.15)',
  },
  output: {
    accent: '#059669',
    accentMuted: 'rgba(5, 150, 105, 0.1)',
    glow: 'rgba(5, 150, 105, 0.2)',
    background: '#ffffff',
    borderColor: 'rgba(5, 150, 105, 0.35)',
    titleColor: '#047857',
    toolbarColor: 'rgba(5, 150, 105, 0.08)',
    toolbarBorder: 'rgba(5, 150, 105, 0.25)',
    nodeShadow: '0 4px 16px rgba(5, 150, 105, 0.08), 0 0 0 1px rgba(5, 150, 105, 0.06)',
    nodeHoverShadow: '0 8px 24px rgba(5, 150, 105, 0.12), 0 0 0 1px rgba(5, 150, 105, 0.15)',
  },
  ai: {
    accent: '#d97706',
    accentMuted: 'rgba(217, 119, 6, 0.1)',
    glow: 'rgba(217, 119, 6, 0.2)',
    background: '#ffffff',
    borderColor: 'rgba(217, 119, 6, 0.35)',
    titleColor: '#b45309',
    toolbarColor: 'rgba(217, 119, 6, 0.08)',
    toolbarBorder: 'rgba(217, 119, 6, 0.25)',
    nodeShadow: '0 4px 16px rgba(217, 119, 6, 0.08), 0 0 0 1px rgba(217, 119, 6, 0.06)',
    nodeHoverShadow: '0 8px 24px rgba(217, 119, 6, 0.12), 0 0 0 1px rgba(217, 119, 6, 0.15)',
  },
  transform: {
    accent: '#7c3aed',
    accentMuted: 'rgba(124, 58, 237, 0.1)',
    glow: 'rgba(124, 58, 237, 0.2)',
    background: '#ffffff',
    borderColor: 'rgba(124, 58, 237, 0.35)',
    titleColor: '#6d28d9',
    toolbarColor: 'rgba(124, 58, 237, 0.08)',
    toolbarBorder: 'rgba(124, 58, 237, 0.25)',
    nodeShadow: '0 4px 16px rgba(124, 58, 237, 0.08), 0 0 0 1px rgba(124, 58, 237, 0.06)',
    nodeHoverShadow: '0 8px 24px rgba(124, 58, 237, 0.12), 0 0 0 1px rgba(124, 58, 237, 0.15)',
  },
  utility: {
    accent: '#475569',
    accentMuted: 'rgba(71, 85, 105, 0.1)',
    glow: 'rgba(71, 85, 105, 0.15)',
    background: '#ffffff',
    borderColor: 'rgba(71, 85, 105, 0.3)',
    titleColor: '#334155',
    toolbarColor: 'rgba(71, 85, 105, 0.06)',
    toolbarBorder: 'rgba(71, 85, 105, 0.2)',
    nodeShadow: '0 4px 16px rgba(15, 23, 42, 0.06), 0 0 0 1px rgba(15, 23, 42, 0.04)',
    nodeHoverShadow: '0 8px 24px rgba(15, 23, 42, 0.1), 0 0 0 1px rgba(71, 85, 105, 0.12)',
  },
  default: {
    accent: '#4f46e5',
    accentMuted: 'rgba(79, 70, 229, 0.1)',
    glow: 'rgba(79, 70, 229, 0.2)',
    background: '#ffffff',
    borderColor: 'rgba(79, 70, 229, 0.35)',
    titleColor: '#4338ca',
    toolbarColor: 'rgba(79, 70, 229, 0.08)',
    toolbarBorder: 'rgba(79, 70, 229, 0.25)',
    nodeShadow: '0 4px 16px rgba(79, 70, 229, 0.08), 0 0 0 1px rgba(79, 70, 229, 0.06)',
    nodeHoverShadow: '0 8px 24px rgba(79, 70, 229, 0.12), 0 0 0 1px rgba(79, 70, 229, 0.15)',
  },
};

const palettes = { dark: darkVariants, light: lightVariants };

export const getVariantTheme = (variant = 'default', mode = 'dark') => {
  const palette = palettes[mode] || palettes.dark;
  return palette[variant] || palette.default;
};

export const getNodeStyle = (variant = 'default', mode = 'dark', overrides = {}) => {
  const theme = getVariantTheme(variant, mode);
  return {
    width: 240,
    minHeight: 88,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 14,
    padding: '12px 14px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    fontSize: 13,
    background: theme.background,
    borderColor: theme.borderColor,
    boxShadow: theme.nodeShadow,
    transition: 'box-shadow 0.2s ease, border-color 0.2s ease, background 0.2s ease',
    ...overrides,
  };
};

export const getToolbarItemStyle = (variant = 'default', mode = 'dark') => {
  const theme = getVariantTheme(variant, mode);
  return {
    backgroundColor: theme.toolbarColor,
    borderColor: theme.toolbarBorder,
    color: theme.titleColor,
    accent: theme.accent,
  };
};

export const getCanvasTheme = (mode = 'dark') => ({
  backgroundDotColor:
    mode === 'light' ? 'rgba(15, 23, 42, 0.12)' : 'rgba(255, 255, 255, 0.07)',
  minimapNodeColor: mode === 'light' ? '#e2e8f0' : '#1a1a24',
  minimapMaskColor:
    mode === 'light' ? 'rgba(248, 250, 252, 0.85)' : 'rgba(9, 9, 11, 0.75)',
});
