import React from 'react'

const CallbackChild = ({ increment, color }) => {
  return (
    <div>
        <div>{color}</div>
        <button onClick={increment}>Child Button</button>
    </div>
  )
}

//prevents unnessecary rerenders for our components by making it so they only rerender when props have changed
export default React.memo(CallbackChild)