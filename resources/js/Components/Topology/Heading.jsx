import React from 'react';

// Heading component 
function Heading({ icon, heading, position, ...rest }) {

  return (
    <div {...rest} className={`flex items-center font-bold `}>
       {iconLeft}
      <h2>{heading}</h2>
      {iconRight}
    </div>
  );
}

// Subheading component 
function Subheading({ icon, subheading, position, ...rest }) {

  return (
    <div {...rest} className={`flex items-center `}>
      {iconLeft}
      <h3>
        {subheading}
      </h3>
      {iconRight}
    </div>
  );
}
export { Heading, Subheading };


