// draggableNode.js

import { getToolbarItemStyle } from './components/nodeTheme';
import { getNodeIcon } from './components/nodeIcons';
import { useTheme } from './context/ThemeContext';

export const DraggableNode = ({ type, label, variant = 'default' }) => {
  const { mode } = useTheme();
  const theme = getToolbarItemStyle(variant, mode);
  const Icon = getNodeIcon(label);

  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.currentTarget.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  const onDragEnd = (event) => {
    event.currentTarget.style.cursor = 'grab';
  };

  return (
    <div
      className={`palette-node ${type}`}
      style={{
        '--palette-accent': theme.accent,
        '--palette-bg': theme.backgroundColor,
        '--palette-border': theme.borderColor,
      }}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={onDragEnd}
      draggable
    >
      <div className="palette-node__icon">
        <Icon />
      </div>
      <span className="palette-node__label">{label}</span>
    </div>
  );
};
