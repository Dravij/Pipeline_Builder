// toolbar.js

import { DraggableNode } from './draggableNode';
import { toolbarNodes } from './nodes/registry';

export const PipelineToolbar = () => {
    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {toolbarNodes.map(({ type, label, variant }) => (
                    <DraggableNode key={type} type={type} label={label} variant={variant} />
                ))}
            </div>
        </div>
    );
};
