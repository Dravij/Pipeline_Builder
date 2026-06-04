// delayNode.js

import { defineNode } from '../components/createNode';

export const DelayNode = defineNode({
  title: 'Delay',
  variant: 'utility',
  description: 'Wait before passing data downstream.',
  handles: [
    { type: 'target', position: 'left', id: 'input' },
    { type: 'source', position: 'right', id: 'output' },
  ],
  fields: [
    { label: 'Milliseconds', fieldName: 'delayMs', defaultValue: '1000' },
  ],
});
