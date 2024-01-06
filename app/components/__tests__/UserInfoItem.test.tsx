import { render, screen } from '@testing-library/react';
import { UserInfoItem } from '../UserInfoItem';
import { mockData } from '@/test/mocks/mockData';

describe('UserInfoItem', () => {
  it('should render correctly', () => {
    const userInfo = mockData.results[0];
    const props = {
      href: `emailto:${userInfo.email}`,
      icon: 'icon',
      primary: userInfo.email,
    };

    render(<UserInfoItem {...props} />);

    expect(screen.getByText(props.primary)).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', props.href);
  });
});
