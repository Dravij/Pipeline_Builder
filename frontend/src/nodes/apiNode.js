// apiNode.js

import { defineNode } from '../components/createNode';

export const ApiNode = defineNode({
  title: 'API',
  variant: 'utility',
  description: 'Send a request to an external endpoint.',
  handles: [
    { type: 'target', position: 'left', id: 'payload' },
    { type: 'source', position: 'right', id: 'response' },
  ],
  fields: [
    { label: 'URL', fieldName: 'apiUrl', defaultValue: 'https://api.example.com' },
    {
      label: 'Method',
      fieldName: 'apiMethod',
      type: 'select',
      defaultValue: 'GET',
      options: [
        { value: 'GET', label: 'GET' },
        { value: 'POST', label: 'POST' },
        { value: 'PUT', label: 'PUT' },
        { value: 'DELETE', label: 'DELETE' },
      ],
    },
  ],
});
