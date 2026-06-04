// NodeField.js
// Reusable controlled field (text or select) that persists to the Zustand store.

import { useState } from 'react';
import { useStore } from '../store';

export const NodeField = ({
  nodeId,
  label,
  fieldName,
  type = 'text',
  value,
  options = [],
}) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const [localValue, setLocalValue] = useState(value);

  const handleChange = (e) => {
    const next = e.target.value;
    setLocalValue(next);
    updateNodeField(nodeId, fieldName, next);
  };

  return (
    <label className="node-field">
      <span className="node-field__label">{label}</span>
      {type === 'select' ? (
        <select
          className="node-field__select"
          value={localValue}
          onChange={handleChange}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type="text"
          className="node-field__input"
          value={localValue}
          onChange={handleChange}
        />
      )}
    </label>
  );
};
