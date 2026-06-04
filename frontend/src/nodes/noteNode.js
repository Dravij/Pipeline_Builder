// noteNode.js

import { defineNode } from '../components/createNode';

export const NoteNode = defineNode({
  title: 'Note',
  variant: 'utility',
  description: 'A sticky note for pipeline documentation.',
  handles: [],
  fields: [
    { label: 'Note', fieldName: 'noteText', defaultValue: 'Add a comment here...' },
  ],
  style: { minHeight: 60, width: 180 },
});
