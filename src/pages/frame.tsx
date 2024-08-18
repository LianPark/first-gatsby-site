import React from 'react'

const Frame = ({ children }) => {
  console.log(children);
  
  return (
    <div>
      <h1>This is the page title</h1>
      { children }
    </div>
  )
}

export default Frame