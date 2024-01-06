import LoadingPage from '@/app/loading';
import { render, screen } from '@testing-library/react';

describe('LoadingPage', () => {
  it('should render user card skeleton', () => {
    render(<LoadingPage />);

    expect(screen.getByLabelText('loading user card')).toBeInTheDocument();
  });
});
