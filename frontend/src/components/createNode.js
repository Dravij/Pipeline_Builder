// createNode.js
// Factory: pass a config object, get a fully wired React Flow node component.

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { NodeField } from './NodeField';
import { nodeDescriptionStyle } from './nodeTheme';

const POSITION_MAP = {
  left: Position.Left,
  right: Position.Right,
  top: Position.Top,
  bottom: Position.Bottom,
};

const resolvePosition = (position) =>
  typeof position === 'string' ? POSITION_MAP[position] : position;

const resolveFieldValue = (field, id, data) => {
  if (data?.[field.fieldName] !== undefined) {
    return data[field.fieldName];
  }
  if (typeof field.defaultValue === 'function') {
    return field.defaultValue(id, data);
  }
  return field.defaultValue ?? '';
};

export const defineNode = (config) => {
  const NodeComponent = ({ id, data }) => {
    const handles = (config.handles || []).map((handle) => ({
      ...handle,
      position: resolvePosition(handle.position),
    }));

    return (
      <BaseNode
        id={id}
        title={config.title}
        subtitle={config.subtitle}
        variant={config.variant}
        handles={handles}
        style={config.style}
      >
        {config.description && (
          <p style={nodeDescriptionStyle}>{config.description}</p>
        )}
        {(config.fields || []).map((field) => (
          <NodeField
            key={field.fieldName}
            nodeId={id}
            label={field.label}
            fieldName={field.fieldName}
            type={field.type || 'text'}
            value={resolveFieldValue(field, id, data)}
            options={field.options || []}
          />
        ))}
        {config.renderContent?.({ id, data })}
      </BaseNode>
    );
  };

  NodeComponent.displayName = `${config.title.replace(/\s/g, '')}Node`;
  return NodeComponent;
};
