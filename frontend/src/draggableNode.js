// draggableNode.js

import { getToolbarStyle } from './components/nodeTheme';

export const DraggableNode = ({ type, label, variant = 'default' }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        style={{ 
          cursor: 'grab', 
          minWidth: '80px', 
          height: '60px',
          display: 'flex', 
          alignItems: 'center', 
          borderRadius: '8px',
          justifyContent: 'center', 
          flexDirection: 'column',
          ...getToolbarStyle(variant),
        }} 
        draggable
      >
          <span style={{ color: '#fff', fontSize: 13, fontWeight: 500 }}>{label}</span>
      </div>
    );
  };
