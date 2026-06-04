// inputNode.js

import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';
import { NodeField } from '../components/NodeField';

export const InputNode = ({ id, data }) => {
  const handles = [
    { type: 'source', position: Position.Right, id: 'value' },
  ];

  return (
    <BaseNode id={id} title="Input" variant="input" handles={handles}>
      <NodeField
        nodeId={id}
        label="Name"
        fieldName="inputName"
        value={data?.inputName || id.replace('customInput-', 'input_')}
      />
      <NodeField
        nodeId={id}
        label="Type"
        fieldName="inputType"
        type="select"
        value={data?.inputType || 'Text'}
        options={[
          { value: 'Text', label: 'Text' },
          { value: 'File', label: 'File' },
        ]}
      />
    </BaseNode>
  );
};
