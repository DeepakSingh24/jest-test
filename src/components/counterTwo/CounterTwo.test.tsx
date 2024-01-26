import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import CounterTwo from './CounterTwo'
describe('CounterTwo Component', () => {
  test('Rendering', () => {
    render(<CounterTwo count={0} />)
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toBeInTheDocument()
    const text = screen.getByText(/Counter Two/)
    expect(text).toBeInTheDocument()
  })

  test('check increment callBack', async () => {
    user.setup()
    const fn1 = jest.fn()
    const fn2 = jest.fn()
    render(<CounterTwo count={0} incrementCount={fn1} decrementCount={fn2} />)
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })
    const decrementButton = screen.getByRole('button', {
      name: 'Decrement',
    })
    await user.click(incrementButton)
    await user.click(decrementButton)
    expect(fn1).toHaveBeenCalledTimes(1)
    expect(fn2).toHaveBeenCalledTimes(1)
  })
})
