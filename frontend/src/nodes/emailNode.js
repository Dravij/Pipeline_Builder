// emailNode.js

import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';
import { NodeField } from '../components/NodeField';

export const EmailNode = ({ id, data }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: 'body' },
    { type: 'source', position: Position.Right, id: 'sent' },
  ];

  return (
    <BaseNode id={id} title="Email" variant="utility" handles={handles}>
      <NodeField
        nodeId={id}
        label="To"
        fieldName="emailTo"
        value={data?.emailTo || ''}
      />
      <NodeField
        nodeId={id}
        label="Subject"
        fieldName="emailSubject"
        value={data?.emailSubject || ''}
      />
    </BaseNode>
  );
};
