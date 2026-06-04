// outputNode.js

import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';
import { NodeField } from '../components/NodeField';

export const OutputNode = ({ id, data }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: 'value' },
  ];

  return (
    <BaseNode id={id} title="Output" variant="output" handles={handles}>
      <NodeField
        nodeId={id}
        label="Name"
        fieldName="outputName"
        value={data?.outputName || id.replace('customOutput-', 'output_')}
      />
      <NodeField
        nodeId={id}
        label="Type"
        fieldName="outputType"
        type="select"
        value={data?.outputType || 'Text'}
        options={[
          { value: 'Text', label: 'Text' },
          { value: 'File', label: 'Image' },
        ]}
      />
    </BaseNode>
  );
};
