import React from 'react'

export function useMDXComponents(components) {
  return {
    ...components,
    // Intercepts standard Markdown blockquotes (">") automatically
    blockquote: ({ children }) => {
      const firstChild = React.Children.toArray(children)[0];
      const rawText = firstChild?.props?.children;

      // If you typed an exclamation mark at the start of your quote block:
      if (typeof rawText === 'string' && rawText.trim().startsWith('!')) {
        const cleanChildren = React.Children.map(children, (child, idx) => {
          if (idx === 0 && child.props?.children) {
            return React.cloneElement(child, {
              ...child.props,
              children: child.props.children.trim().substring(1).trim()
            });
          }
          return child;
        });

        return <div className="scripture-blockquote">{cleanChildren}</div>;
      }

      // Default: Classical Book Blockquote (Footnote-safe)
      return <div className="editorial-blockquote">{children}</div>;
    },
  };
}