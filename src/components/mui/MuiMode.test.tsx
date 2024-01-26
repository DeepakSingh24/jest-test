import { render, screen } from '../../test-utils'
import MuiMode from './MuiMode'
describe('MuiMode test', () => {
  test('Rendering', () => {
    render(<MuiMode />)
    //render(<MuiMode/>,{
    // wrapper:AppProvidera
    // })
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveTextContent('dark mode')
  })
})
