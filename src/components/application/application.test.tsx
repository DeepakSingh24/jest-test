import { Application } from './application'
import { render, screen } from '@testing-library/react'

describe('Application component', () => {
  test('Rendering', () => {
    render(<Application />)

    const formHeading = screen.getByRole('heading', { level: 1 })
    expect(formHeading).toBeInTheDocument()

    const sectionHeading = screen.getByRole('heading', { level: 2 })
    expect(sectionHeading).toBeInTheDocument()

    const nameElement = screen.getByRole('textbox', { name: 'Name' })
    expect(nameElement).toBeInTheDocument()

    const nameElement2 = screen.getByLabelText('Name', {
      selector: 'input',
    })
    expect(nameElement2).toBeInTheDocument()

    const bioElement = screen.getByRole('textbox', { name: 'Bio' })
    expect(bioElement).toBeInTheDocument()

    const jobLocationElement = screen.getByRole('combobox')
    expect(jobLocationElement).toBeInTheDocument()

    const termsElement = screen.getByRole('checkbox')
    expect(termsElement).toBeInTheDocument()

    const termsElement2 = screen.getByLabelText(
      'I Agree to terms and condition'
    )
    expect(termsElement2).toBeInTheDocument()

    const submitElement = screen.getByRole('button')
    expect(submitElement).toBeInTheDocument()
    expect(submitElement).toBeDisabled()

    const placeHolderElement = screen.getByPlaceholderText('Fullname')
    expect(placeHolderElement).toBeInTheDocument()

    const textElement = screen.getByText('All fields are mandatory')
    expect(textElement).toBeInTheDocument()

    const altTextElement = screen.getByAltText('A person with laptop')
    expect(altTextElement).toBeInTheDocument()

    const titleElement = screen.getByTitle('close')
    expect(titleElement).toBeInTheDocument()

    const testElement = screen.getByTestId('custom-element')
    expect(testElement).toBeInTheDocument()

    //full string match
    //screen.getByText("Hello world")
    //substring match
    // screen.getByText("llo world", {
    //   exact: false,
    // });
    //screen.getByText(/world/) substring match
    //screen.getByText(/world/i) substring match, ignore case
    //screen.getByText(/^hello world$/i) full string match ignore case
    //screen.getByText((content) => content.startsWith("Hello"))
  })
})
