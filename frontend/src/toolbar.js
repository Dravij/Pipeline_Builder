// toolbar.js

import { DraggableNode } from './draggableNode';
import { toolbarNodes } from './nodes/registry';

export const PipelineToolbar = () => {
  return (
    <aside className="app-sidebar">
      <div className="sidebar-header">
        <p className="sidebar-header__title">Components</p>
      </div>
      <div className="sidebar-nodes">
        {toolbarNodes.map(({ type, label, variant }) => (
          <DraggableNode key={type} type={type} label={label} variant={variant} />
        ))}
      </div>
    </aside>
  );
};
