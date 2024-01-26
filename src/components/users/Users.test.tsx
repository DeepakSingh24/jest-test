import { render, screen } from '@testing-library/react'
import { Users } from './Users'
import { rest } from 'msw'
import { server } from '../../mocks/server'
import { ERROR_TEXT, USERS_TEXT } from './users.constants'
import { USER_LIST } from './url'

describe('Users', () => {
  test('Render users', () => {
    render(<Users />)
    const textElement = screen.getByRole('heading', {
      name: USERS_TEXT,
    })
    expect(textElement).toBeInTheDocument()
  })
  test('rendered list item count', async () => {
    render(<Users />)
    const listItem = await screen.findAllByRole('listitem')
    expect(listItem).toHaveLength(3)
  })
  test('render error', async () => {
    server.use(
      rest.get(USER_LIST, (req, res, ctx) => {
        return res(ctx.status(500))
      })
    )
    render(<Users />)
    const errorText = await screen.findByText(ERROR_TEXT)
    expect(errorText).toBeInTheDocument()
  })
})
