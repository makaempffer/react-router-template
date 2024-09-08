import React from 'react';

const GridContainer = ({ children, cols = 3, className = '' }) => {
    return (
      <div className={`grid gap-8 grid-cols-1 md:grid-cols-${cols} ${className}`}>
        {children}
      </div>
    );
  };
  
  export default GridContainer;