// textNode.js

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from '../components/BaseNode';
import { TextNodeEditor } from '../components/TextNodeEditor';
import { extractVariables } from '../utils/extractVariables';
import { useStore } from '../store';

const DEFAULT_TEXT = '{{input}}';

export const TextNode = ({ id, data }) => {
  const removeEdgesByTargetHandles = useStore(
    (state) => state.removeEdgesByTargetHandles
  );
  const initialText = data?.text ?? DEFAULT_TEXT;

  const [text, setText] = useState(initialText);
  const [dimensions, setDimensions] = useState({ width: 220, height: 80 });
  const previousVariablesRef = useRef(extractVariables(initialText));

  const variables = useMemo(() => extractVariables(text), [text]);

  const handles = useMemo(
    () => [
      ...variables.map((variable) => ({
        type: 'target',
        position: Position.Left,
        id: variable,
      })),
      { type: 'source', position: Position.Right, id: 'output' },
    ],
    [variables]
  );

  useEffect(() => {
    const previousVariables = previousVariablesRef.current;
    const removedVariables = previousVariables.filter(
      (variable) => !variables.includes(variable)
    );

    if (removedVariables.length > 0) {
      removeEdgesByTargetHandles(
        id,
        removedVariables.map((variable) => `${id}-${variable}`)
      );
    }

    previousVariablesRef.current = variables;
  }, [variables, id, removeEdgesByTargetHandles]);

  const handleTextChange = useCallback((nextText) => {
    setText(nextText);
  }, []);

  const handleResize = useCallback((nextDimensions) => {
    setDimensions(nextDimensions);
  }, []);

  return (
    <BaseNode
      id={id}
      title="Text"
      variant="transform"
      handles={handles}
      style={{ width: dimensions.width, minHeight: dimensions.height }}
    >
      <TextNodeEditor
        nodeId={id}
        value={initialText}
        onTextChange={handleTextChange}
        onResize={handleResize}
      />
    </BaseNode>
  );
};
