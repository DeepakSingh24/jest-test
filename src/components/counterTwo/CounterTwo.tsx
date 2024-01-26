import React from 'react'
import { CounterTwoProps } from './counterTwo.types'
const CounterTwo = ({
  count = 0,
  incrementCount,
  decrementCount,
}: CounterTwoProps) => {
  return (
    <div>
      <h1>Counter Two</h1>
      {count}
      {incrementCount && <button onClick={incrementCount}>Increment</button>}
      {decrementCount && <button onClick={decrementCount}>Decrement</button>}
    </div>
  )
}

export default CounterTwo
