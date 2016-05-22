import React from 'react';

export default opts => svg => {
  const { content, attributes: { width, height, viewBox } } = svg;
  const Component = props =>
          (<svg
           width={width}
           height={height}
           viewBox={viewBox}
           dangerouslySetInnerHTML={{ __html: content }}
          />);
  Component.displayName = opts.displayName;

  return Component;
}
