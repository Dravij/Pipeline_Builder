// NodeField.js
// Reusable controlled field (text or select) that persists its value to the
// Zustand store via updateNodeField, removing the duplicated useState pattern.

import { useState } from 'react';
import { useStore } from '../store';

const labelStyle = {
  display: 'flex',
  flexDirection: 'column',
  fontSize: 12,
  gap: 2,
  marginBottom: 4,
};

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
    <label style={labelStyle}>
      {label}
      {type === 'select' ? (
        <select value={localValue} onChange={handleChange}>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input type="text" value={localValue} onChange={handleChange} />
      )}
    </label>
  );
};
