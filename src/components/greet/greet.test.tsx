import { render, screen } from '@testing-library/react'
import Greet from './greet'

describe('Greet component', () => {
  test('Render perfectly', () => {
    render(<Greet />)
    let value = screen.getByText(/Hello/i)
    expect(value).toBeInTheDocument()
  })

  describe('Nesting', () => {
    test('Render with name', () => {
      render(<Greet name="Deepak" />)
      let value = screen.getByText(/Hello Deepak/i)
      expect(value).toBeInTheDocument()
    })
  })
})

describe('Repeating', () => {
  test('Render with only name', () => {
    render(<Greet name="Deepak" />)
    let value = screen.getByText(/Deepak/i)
    expect(value).toBeInTheDocument()
  })
})
