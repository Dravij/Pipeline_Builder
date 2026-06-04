// TextNodeEditor.js
// Auto-resizing textarea for the Text node with store persistence.

import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { useStore } from '../store';

const MIN_WIDTH = 240;
const MAX_WIDTH = 420;
const MIN_HEIGHT = 88;
const HORIZONTAL_PADDING = 28;
const VERTICAL_CHROME = 72;
const TEXTAREA_FONT = '12px "SF Mono", "Fira Code", Consolas, monospace';

const measureLongestLineWidth = (text, font) => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (!context) {
    return MIN_WIDTH - HORIZONTAL_PADDING;
  }

  context.font = font;
  const lines = text.split('\n');
  return lines.reduce(
    (max, line) => Math.max(max, context.measureText(line || ' ').width),
    0
  );
};

export const TextNodeEditor = ({ nodeId, value, onTextChange, onResize }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const textareaRef = useRef(null);
  const [text, setText] = useState(value);

  const measureAndResize = useCallback(() => {
    const textarea = textareaRef.current;
    if (!textarea) {
      return;
    }

    const longestLineWidth = measureLongestLineWidth(text, TEXTAREA_FONT);
    const contentWidth = longestLineWidth + HORIZONTAL_PADDING;
    const width = Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, contentWidth));
    const innerWidth = width - HORIZONTAL_PADDING;

    textarea.style.width = `${innerWidth}px`;
    textarea.style.height = '0px';
    const textareaHeight = textarea.scrollHeight;
    const height = Math.max(MIN_HEIGHT, textareaHeight + VERTICAL_CHROME);

    textarea.style.height = `${textareaHeight}px`;
    textarea.style.width = '100%';

    onResize?.({ width, height });
  }, [text, onResize]);

  useLayoutEffect(() => {
    measureAndResize();
  }, [measureAndResize]);

  const handleChange = (event) => {
    const next = event.target.value;
    setText(next);
    updateNodeField(nodeId, 'text', next);
    onTextChange?.(next);
  };

  return (
    <label className="node-field">
      <span className="node-field__label">Text</span>
      <textarea
        ref={textareaRef}
        className="node-field__textarea"
        value={text}
        onChange={handleChange}
        rows={1}
        spellCheck={false}
      />
    </label>
  );
};
