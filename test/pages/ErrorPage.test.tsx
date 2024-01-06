import ErrorPage from '@/app/error';
import { render, screen } from '@testing-library/react';

describe('ErrorPage', () => {
  it('should render error message', () => {
    vi.spyOn(console, 'error').mockImplementation(() => undefined);

    const error = new Error('test error');
    render(<ErrorPage error={error} />);

    const heading = screen.getByRole('heading', { level: 1, name: 'Error' });
    const message = screen.getByText(error.message, { exact: false });

    expect(heading).toBeInTheDocument();
    expect(message).toBeInTheDocument();
    expect(console.error).toHaveBeenCalledWith(error);
  });
});
