// nodeTheme.js
// Central design tokens — change styles here to update all nodes at once.

export const nodeVariants = {
  input: {
    borderColor: '#3b82f6',
    background: '#eff6ff',
    titleColor: '#1d4ed8',
    toolbarColor: '#2563eb',
  },
  output: {
    borderColor: '#10b981',
    background: '#ecfdf5',
    titleColor: '#047857',
    toolbarColor: '#059669',
  },
  ai: {
    borderColor: '#f59e0b',
    background: '#fffbeb',
    titleColor: '#b45309',
    toolbarColor: '#d97706',
  },
  transform: {
    borderColor: '#8b5cf6',
    background: '#f5f3ff',
    titleColor: '#6d28d9',
    toolbarColor: '#7c3aed',
  },
  utility: {
    borderColor: '#64748b',
    background: '#f8fafc',
    titleColor: '#334155',
    toolbarColor: '#475569',
  },
  default: {
    borderColor: '#cbd5e1',
    background: '#ffffff',
    titleColor: '#1e293b',
    toolbarColor: '#1C2536',
  },
};

export const nodeBaseStyle = {
  width: 220,
  minHeight: 80,
  borderWidth: 2,
  borderStyle: 'solid',
  borderRadius: 10,
  padding: 10,
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  fontSize: 13,
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
};

export const nodeDescriptionStyle = {
  margin: 0,
  fontSize: 12,
  color: '#64748b',
  lineHeight: 1.4,
};

export const getVariantTheme = (variant = 'default') =>
  nodeVariants[variant] || nodeVariants.default;

export const getNodeStyle = (variant = 'default', overrides = {}) => {
  const theme = getVariantTheme(variant);
  return {
    ...nodeBaseStyle,
    borderColor: theme.borderColor,
    background: theme.background,
    ...overrides,
  };
};

export const getTitleStyle = (variant = 'default') => {
  const theme = getVariantTheme(variant);
  return {
    fontWeight: 600,
    fontSize: 13,
    color: theme.titleColor,
    borderBottom: `1px solid ${theme.borderColor}33`,
    paddingBottom: 6,
    marginBottom: 2,
  };
};

export const getToolbarStyle = (variant = 'default') => {
  const theme = getVariantTheme(variant);
  return {
    backgroundColor: theme.toolbarColor,
  };
};
