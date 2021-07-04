import { render, screen } from '@testing-library/react'
import App from './App'

describe('<App />', () => {
  it('should render the root component', () => {
    render(<App />)
    const linkElement = screen.getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument()
  })
})
