import React from 'react'
//object Destructuring in function based component one way
// const Greetings = ({name,children}) => {
//     return (
//         <>
//       <h1>Hello {name}</h1>
//       <p>{children}</p>
//       </>
//     )
// }

//object Destructuring in function based component second way
const Greetings = (props) => {
    const { name,children } = props; //object 
    return (
        <>
      <h1>Hello {name}</h1>
      <p>{children}</p>
      </>
    )
}

export default Greetings
