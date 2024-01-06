import { Info } from '@/app/types';
import { render, screen } from '@testing-library/react';
import { ExtraInfo } from '../ExtraInfo';
import { userEvent } from '@testing-library/user-event';

describe('ExtraInfo', () => {
  const props: Info = {
    page: 1,
    results: 1,
    seed: 'abc',
    version: '1.0',
  };
  it('should render button and toggle content when clicked', async () => {
    const user = userEvent.setup();

    render(<ExtraInfo {...props} />);

    const button = screen.getByText('Show extra info');

    await user.click(button);

    expect(await screen.findByText('seed: abc')).toBeInTheDocument();
    expect(await screen.findByText('version: 1.0')).toBeInTheDocument();
    expect(await screen.findByText('results: 1')).toBeInTheDocument();
  });
});
