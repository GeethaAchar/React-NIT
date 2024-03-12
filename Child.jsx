// eslint-disable-next-line no-unused-vars
import React from 'react';
 

const Child = (props) => {
  console.log(props)
  return (

    <div>
   
      <h1>My name is {props.names}</h1>
      <h1>My age is {props.age}</h1>
    </div>
  )
}

export default Child
