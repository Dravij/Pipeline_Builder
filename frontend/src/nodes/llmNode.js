// llmNode.js

import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';

export const LLMNode = ({ id }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: 'system' },
    { type: 'target', position: Position.Left, id: 'prompt' },
    { type: 'source', position: Position.Right, id: 'response' },
  ];

  return (
    <BaseNode id={id} title="LLM" variant="ai" handles={handles}>
      <span>This is a LLM.</span>
    </BaseNode>
  );
};
