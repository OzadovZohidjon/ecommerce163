import React, { useState } from 'react'
import { CounterStyle } from './CounterStyle'
import { Button } from './../Button/Button'
import { Span } from '../Typography'

function Counter({ qty }) {
    let [count, setCount] = useState(qty)

    function Increment() {
        setCount(count + 1)
    }

    function Decrement() {
        if (count === 1) {
            setCount(1)
        } else {
            setCount(count - 1)
        }
    }

    return (
        <CounterStyle>
            <Button onClick={() => Decrement()}>-</Button>
            <Span>{count}</Span>
            <Button onClick={() => Increment()}>+</Button>
        </CounterStyle>
    )
}

export default Counter
