import React from 'react'

const RefForwardInput = React.forwardRef((props, ref) =>{
    return (
        <input type="text" ref={ref}/>
    )
})

export default RefForwardInput