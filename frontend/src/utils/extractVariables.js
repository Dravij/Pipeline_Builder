// extractVariables.js
// Parses {{variableName}} patterns and returns valid, deduplicated JS identifiers.

const VARIABLE_PATTERN = /\{\{([^{}]+)\}\}/g;
const VALID_IDENTIFIER = /^[A-Za-z_$][A-Za-z0-9_$]*$/;

export const extractVariables = (text = '') => {
  const seen = new Set();
  const variables = [];

  for (const match of text.matchAll(VARIABLE_PATTERN)) {
    const name = match[1].trim();
    if (!VALID_IDENTIFIER.test(name) || seen.has(name)) {
      continue;
    }
    seen.add(name);
    variables.push(name);
  }

  return variables;
};
