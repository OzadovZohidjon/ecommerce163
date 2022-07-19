import React from 'react'
import { CounterStyle } from './CounterStyle'
import { Button } from './../Button/Button'
import { Span } from '../Typography'

function Counter({ qty, decrement, increment }) {
    return (
        <CounterStyle>
            <Button onClick={() => decrement()}>-</Button>
            <Span>{qty}</Span>
            <Button onClick={() => increment()}>+</Button>
        </CounterStyle>
    )
}

export default Counter
