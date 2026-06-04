// BaseNode.js
// Reusable node shell: layout, themed styling, title, icons, and dynamic handles.

import { Handle } from 'reactflow';
import { getVariantTheme, getNodeStyle } from './nodeTheme';
import { getNodeIcon } from './nodeIcons';
import { useStore } from '../store';
import { useTheme } from '../context/ThemeContext';

const handleOffset = (index, total) => `${((index + 1) / (total + 1)) * 100}%`;

const renderHandles = (id, handles, theme) => {
  const counts = {};
  handles.forEach((h) => {
    counts[h.position] = (counts[h.position] || 0) + 1;
  });

  const seen = {};
  return handles.map((h) => {
    const index = seen[h.position] || 0;
    seen[h.position] = index + 1;
    const autoStyle =
      counts[h.position] > 1 ? { top: handleOffset(index, counts[h.position]) } : {};

    return (
      <Handle
        key={`${id}-${h.id}`}
        type={h.type}
        position={h.position}
        id={`${id}-${h.id}`}
        className="pipeline-handle"
        style={{ ...autoStyle, ...h.style }}
      />
    );
  });
};

export const BaseNode = ({
  id,
  title,
  subtitle,
  variant = 'default',
  handles = [],
  children,
  style = {},
  className = '',
}) => {
  const deleteNode = useStore((state) => state.deleteNode);
  const { mode } = useTheme();
  const theme = getVariantTheme(variant, mode);
  const Icon = getNodeIcon(title);

  const cssVars = {
    '--node-accent': theme.accent,
    '--node-accent-muted': theme.accentMuted,
    '--node-accent-glow': theme.glow,
    '--node-title-color': theme.titleColor,
  };

  const handleDelete = (event) => {
    event.stopPropagation();
    deleteNode(id);
  };

  return (
    <div
      className={`pipeline-node ${className}`}
      style={{ ...getNodeStyle(variant, mode), ...cssVars, ...style }}
    >
      {renderHandles(id, handles, theme)}
      {title && (
        <div className="pipeline-node__header">
          <div className="pipeline-node__title-row">
            <div className="pipeline-node__icon">
              <Icon />
            </div>
            <div>
              <span className="pipeline-node__title">{title}</span>
              {subtitle && (
                <span className="pipeline-node__subtitle">{subtitle}</span>
              )}
            </div>
          </div>
          <button
            type="button"
            className="pipeline-node__delete nodrag nopan"
            aria-label={`Delete ${title} node`}
            title="Delete node"
            onClick={handleDelete}
          >
            ×
          </button>
        </div>
      )}
      {children && <div className="pipeline-node__body">{children}</div>}
    </div>
  );
};
