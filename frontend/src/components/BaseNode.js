// BaseNode.js
// Reusable node shell: layout, themed styling, title, and dynamic handles.

import { Handle } from 'reactflow';
import { getNodeStyle, getTitleStyle } from './nodeTheme';
import { useStore } from '../store';

const handleOffset = (index, total) => `${((index + 1) / (total + 1)) * 100}%`;

const headerStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: 8,
};

const deleteButtonStyle = {
  flexShrink: 0,
  width: 20,
  height: 20,
  border: 'none',
  borderRadius: 4,
  background: 'transparent',
  color: '#94a3b8',
  cursor: 'pointer',
  fontSize: 16,
  lineHeight: 1,
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const renderHandles = (id, handles, variant) => {
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
        style={{
          width: 10,
          height: 10,
          background: getNodeStyle(variant).borderColor,
          ...autoStyle,
          ...h.style,
        }}
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
  className,
}) => {
  const deleteNode = useStore((state) => state.deleteNode);

  const handleDelete = (event) => {
    event.stopPropagation();
    deleteNode(id);
  };

  return (
    <div className={className} style={{ ...getNodeStyle(variant), ...style, position: 'relative' }}>
      {renderHandles(id, handles, variant)}
      {title && (
        <div style={{ ...getTitleStyle(variant), ...headerStyle }}>
          <div>
            <span>{title}</span>
            {subtitle && (
              <span style={{ display: 'block', fontWeight: 400, fontSize: 11, opacity: 0.75 }}>
                {subtitle}
              </span>
            )}
          </div>
          <button
            type="button"
            className="nodrag nopan"
            aria-label={`Delete ${title} node`}
            title="Delete node"
            style={deleteButtonStyle}
            onClick={handleDelete}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#fee2e2';
              e.currentTarget.style.color = '#dc2626';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#94a3b8';
            }}
          >
            ×
          </button>
        </div>
      )}
      {children && <div>{children}</div>}
    </div>
  );
};
