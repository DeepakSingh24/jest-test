import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState<number>(0)
  const [amount, setAmount] = useState<number>(0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increament
      </button>
      <input
        type="number"
        name="amount"
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button onClick={() => setCount(amount)}>Set</button>
    </div>
  )
}

export default Counter
