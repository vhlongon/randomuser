import { mockData } from '@/test/mocks/mockData';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { ExtraInfo } from '../ExtraInfo';

describe('ExtraInfo', () => {
  it('should render button and toggle content when clicked', async () => {
    const user = userEvent.setup();

    const props = mockData.info;

    render(<ExtraInfo {...props} />);

    const button = screen.getByText('Show extra info');

    await user.click(button);

    expect(await screen.findByText(`seed: ${props.seed}`)).toBeInTheDocument();
    expect(
      await screen.findByText(`version: ${props.version}`)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(`results: ${props.results}`)
    ).toBeInTheDocument();
  });
});
