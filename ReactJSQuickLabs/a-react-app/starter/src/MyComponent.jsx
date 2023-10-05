import React from 'react'
import ComponentWithProps from 'ComponentWithProps'

const MyComponent = () => {
  return (
<>
<h1>Hello World</h1>
<ComponentWithProps />
<ComponentWithProps
content="Content passed from props"
number={10}
/>
</>
  );
};