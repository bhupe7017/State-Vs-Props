import React from 'react'

function Props(props) {
    return (
        <div>
            <h1>This Is Props</h1>
            <button onClick={props.data}>Click</button>
        </div>
    )
}

export default Props
