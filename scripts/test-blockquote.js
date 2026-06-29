const React = require('react');

const removeFirstAlertPrefix = (nodes) => {
  let removed = false;
  const removePrefix = (n) => {
    if (removed) return n;
    if (typeof n === 'string') {
      const trimmed = n.trimStart();
      if (trimmed.startsWith('[!') || trimmed.match(/^\[!(TIP|NOTE|IMPORTANT|WARNING|CAUTION)\]/i)) {
        removed = true;
        return n.replace(/^\[!(TIP|NOTE|IMPORTANT|WARNING|CAUTION)\]\s*/i, '');
      }
      return n;
    }
    if (Array.isArray(n)) {
      return n.map(child => removePrefix(child));
    }
    if (React.isValidElement(n)) {
      if (n.props && 'children' in n.props) {
        return React.cloneElement(n, {
          ...n.props,
          children: removePrefix(n.props.children)
        });
      }
    }
    return n;
  };
  return removePrefix(nodes);
};

// Mock structure from react-markdown with leading whitespace
const mockChildren = [
  React.createElement('p', {}, [
    "\n  ",
    "[!TIP]\n",
    React.createElement('strong', {}, "For high-speed industrial deployment:")
  ])
];

console.log("BEFORE:", JSON.stringify(mockChildren));
const result = removeFirstAlertPrefix(mockChildren);
console.log("AFTER:", JSON.stringify(result));
