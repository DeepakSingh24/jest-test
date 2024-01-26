import { useState } from 'react'
import CounterTwo from './CounterTwo'

const UseCounterTwo = () => {
  const [count, setCount] = useState<number>(0)
  const increment = () => {
    setCount((count) => count + 1)
  }
  const decrement = () => {
    setCount((count) => count - 1)
  }
  return (
    <CounterTwo
      count={count}
      incrementCount={increment}
      decrementCount={decrement}
    />
  )
}

export default UseCounterTwo
