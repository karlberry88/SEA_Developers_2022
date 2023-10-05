import React from 'react'

const ArrowFunctionComponent = (props) => {
  // extra code here
  const title = 'Tuesday';
  const element = <h4>Welcome to {title}</h4>  
    return (
    <div>
       <h3>Arrow Function Component</h3>
        {element}
        <h5>Hello {props.firstname}!</h5>
    </div>
  )
}

export default ArrowFunctionComponent