import { render, screen, logRoles } from '@testing-library/react'
import { Skills } from './Skills'

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'JAVASCRIPT']

  test('Rendering Parent List', () => {
    render(<Skills skills={skills} />)
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
  })

  test('Render ListItem', () => {
    render(<Skills skills={skills} />)
    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(skills.length)
  })

  test('Rendering Login Button', () => {
    render(<Skills skills={skills} />)
    const loginButton = screen.getByRole('button', {
      name: 'Login',
    })
    expect(loginButton).toBeInTheDocument()
  })

  test('Not Rendering start learning Button', () => {
    render(<Skills skills={skills} />)
    const learingButton = screen.queryByRole('button', {
      name: 'Start Learning',
    })
    expect(learingButton).not.toBeInTheDocument()
  })

  test('Rendering Start learning button eventually', async () => {
    const view = render(<Skills skills={skills} />)
    // logRoles(view.container);
    // screen.debug();
    const learingButton = await screen.findByRole(
      'button',
      {
        name: 'Start Learning',
      },
      {
        timeout: 2000,
      }
    )
    // screen.debug();
    expect(learingButton).toBeInTheDocument()
  })
})
