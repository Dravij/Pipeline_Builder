// filterNode.js

import { defineNode } from '../components/createNode';

export const FilterNode = defineNode({
  title: 'Filter',
  variant: 'transform',
  description: 'Pass through items that match a condition.',
  handles: [
    { type: 'target', position: 'left', id: 'input' },
    { type: 'source', position: 'right', id: 'output' },
  ],
  fields: [
    {
      label: 'Operator',
      fieldName: 'operator',
      type: 'select',
      defaultValue: 'contains',
      options: [
        { value: 'contains', label: 'Contains' },
        { value: 'equals', label: 'Equals' },
        { value: 'startsWith', label: 'Starts with' },
      ],
    },
    { label: 'Value', fieldName: 'filterValue', defaultValue: '' },
  ],
});
