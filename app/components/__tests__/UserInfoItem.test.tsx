import { render, screen } from '@testing-library/react';
import { UserInfoItem } from '../UserInfoItem';

describe('UserInfoItem', () => {
  it('should render correctly', () => {
    const props = {
      href: 'https://www.google.com',
      icon: 'icon',
      primary: 'primary',
      secondary: 'secondary',
    };

    render(<UserInfoItem {...props} />);

    expect(screen.getByText('primary')).toBeInTheDocument();
    expect(screen.getByText('secondary')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', props.href);
  });
});
