import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import Counter from './Counter'

describe('Counter', () => {
  test('Rendering', () => {
    render(<Counter />)
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toBeInTheDocument()
  })

  test('heading content', () => {
    render(<Counter />)
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveTextContent('0')
  })
  test('Button Click event', async () => {
    user.setup()
    render(<Counter />)
    const increamentButton = screen.getByRole('button', {
      name: 'Increament',
    })
    await user.click(increamentButton)
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveTextContent('1')
  })
  test('double click button', async () => {
    user.setup()
    render(<Counter />)
    const increamentButton = screen.getByRole('button', {
      name: 'Increament',
    })
    await user.dblClick(increamentButton)
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveTextContent('2')
  })

  test('heading content should have 10 value', async () => {
    user.setup()
    render(<Counter />)
    const numberInput = screen.getByRole('spinbutton')
    await user.type(numberInput, '10')
    const setButton = screen.getByRole('button', {
      name: 'Set',
    })
    await user.click(setButton)
    const headingContent = screen.getByRole('heading')
    expect(headingContent).toHaveTextContent('10')
  })
  test('tab event checker', async () => {
    user.setup()
    render(<Counter />)
    const increamentButton = screen.getByRole('button', {
      name: 'Increament',
    })
    const setButton = screen.getByRole('button', {
      name: 'Set',
    })
    const numberInput = screen.getByRole('spinbutton')
    await user.tab()
    expect(increamentButton).toHaveFocus()
    await user.tab()
    expect(numberInput).toHaveFocus()
    await user.tab()
    expect(setButton).toHaveFocus()
    //user.clear(screen.getByRole('textbox'))
  })
})
