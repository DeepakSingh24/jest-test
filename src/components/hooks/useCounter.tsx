import { useState } from 'react'

type CounterProps = {
  initialCount?: number
}
const useCounter = ({ initialCount = 0 }: CounterProps = {}) => {
  const [count, setCount] = useState(initialCount)
  const increment = () => {
    setCount((count) => count + 1)
  }
  const decrement = () => {
    setCount((count) => count - 1)
  }
  const reset = () => {
    setCount(0)
  }

  return { count, increment, decrement, reset }
}

export default useCounter
