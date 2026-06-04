// registry.js
// Single source of truth for node types, components, and toolbar metadata.

import { InputNode } from './inputNode';
import { LLMNode } from './llmNode';
import { OutputNode } from './outputNode';
import { TextNode } from './textNode';
import { EmailNode } from './emailNode';
import { FilterNode } from './filterNode';
import { DelayNode } from './delayNode';
import { ApiNode } from './apiNode';
import { NoteNode } from './noteNode';

export const nodeRegistry = [
  { type: 'customInput', label: 'Input', variant: 'input', component: InputNode },
  { type: 'llm', label: 'LLM', variant: 'ai', component: LLMNode },
  { type: 'customOutput', label: 'Output', variant: 'output', component: OutputNode },
  { type: 'text', label: 'Text', variant: 'transform', component: TextNode },
  { type: 'email', label: 'Email', variant: 'utility', component: EmailNode },
  { type: 'filter', label: 'Filter', variant: 'transform', component: FilterNode },
  { type: 'delay', label: 'Delay', variant: 'utility', component: DelayNode },
  { type: 'api', label: 'API', variant: 'utility', component: ApiNode },
  { type: 'note', label: 'Note', variant: 'utility', component: NoteNode },
];

export const nodeTypes = Object.fromEntries(
  nodeRegistry.map(({ type, component }) => [type, component])
);

export const toolbarNodes = nodeRegistry.map(({ type, label, variant }) => ({
  type,
  label,
  variant,
}));
