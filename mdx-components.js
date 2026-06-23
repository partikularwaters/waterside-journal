import React from 'react'

export function useMDXComponents(components) {
  return {
    ...components,
    // Intercepts standard Markdown blockquotes (">") automatically
    blockquote: ({ children }) => {
      let variantClass = '';
      let found = false;

      // Recursive function to locate the macro token in the first available text string
      function scanAndStrip(node) {
        if (!node) return node;

        // Condition A: If it's a raw text string, look for our tokens
        if (typeof node === 'string') {
          const trimmed = node.trim();
          if (!found) {
            if (trimmed.startsWith('!')) { variantClass = 'scripture-quote'; found = true; }
            else if (trimmed.startsWith('~')) { variantClass = 'author-quote'; found = true; }
            else if (trimmed.startsWith('=')) { variantClass = 'confession-quote'; found = true; }

            if (found) {
              const macroChar = trimmed[0];
              const macroIndex = node.indexOf(macroChar);
              const postMacro = node.substring(macroIndex + 1);
              // Safely strips the macro symbol and the single trailing space right after it
              return node.substring(0, macroIndex) + (postMacro.startsWith(' ') ? postMacro.substring(1) : postMacro);
            }
          }
          return node;
        }

        // Condition B: If it's a React element, recursively map its internal children
        if (React.isValidElement(node) && node.props && 'children' in node.props) {
          const originalChildren = node.props.children;
          const processedChildren = mapChildren(originalChildren);
          
          return React.cloneElement(node, {
            ...node.props,
            children: processedChildren
          });
        }

        return node;
      }

      function mapChildren(nodes) {
        if (Array.isArray(nodes)) {
          return nodes.map((child, index) => {
            const processed = scanAndStrip(child);
            // FIX: If the processed node is a React element, explicitly assign a unique key
            if (React.isValidElement(processed)) {
              return React.cloneElement(processed, {
                key: child.key ?? index
              });
            }
            return processed;
          });
        }
        return scanAndStrip(nodes);
      }

      const updatedChildren = mapChildren(children);

      // Returns the custom structural block matching your targeted CSS stylesheet
      return (
        <div className={`editorial-blockquote ${variantClass}`.trim()}>
          {updatedChildren}
        </div>
      );
    },
  };
}