import React from 'react'

function Memo({name}) {
    console.log("Memo")
    return (
        <div>Memo {name}</div>
    )
}

export default React.memo(Memo)

