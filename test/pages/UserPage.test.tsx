import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserPage from '../../app/page';
import { getUserHandler } from '../mocks/handlers';
import { mockData } from '../mocks/mockData';
import { server } from '../mocks/server';
import { TestQueryProvider } from '../mocks/utils';

describe('UserPage', () => {
  it('should render correctly user data when request is successful', async () => {
    server.use(getUserHandler({ delay: 1000 }));
    const user = userEvent.setup();

    render(<UserPage />, { wrapper: TestQueryProvider });

    await user.click(screen.getByRole('button', { name: /get random user/i }));

    const userData = mockData.results[0];
    const {
      login: { username },
      name: { first, last, title },
      email,
      location: { street, city, state, country },
      picture,
      phone,
      dob,
    } = userData;

    const subheading = await screen.findByRole('heading', { level: 2 });
    const image = screen.getByRole('img');
    const heading = screen.getByRole('heading', { level: 1 });
    const emailLink = screen.getByRole('link', { name: email });
    const phoneLink = screen.getByRole('link', { name: phone });
    const addressLink = screen.getByRole('link', {
      name: `${street.name}, ${city} ${country}`,
    });
    const addressUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${street.name}, ${city}, ${state}, ${country}`
    )}`;
    const birthDate = screen.getByText(new Date(dob.date).toLocaleDateString());

    expect(subheading).toHaveTextContent(username);
    expect(image).toHaveAttribute('src', picture.thumbnail);
    expect(heading).toHaveTextContent(`${title}.${first} ${last}`);
    expect(emailLink).toHaveAttribute('href', `mailto:${email}`);
    expect(phoneLink).toHaveAttribute('href', `tel:${phone}`);
    expect(addressLink).toHaveAttribute('href', addressUrl);
    expect(birthDate).toBeInTheDocument();
  });

  it('should render correctly error message when request is failed', async () => {
    const errorMessage = 'Some error message';
    server.use(getUserHandler({ error: errorMessage }));
    vi.spyOn(console, 'error').mockImplementation(() => {});

    const user = userEvent.setup();

    render(<UserPage />, { wrapper: TestQueryProvider });

    await user.click(screen.getByRole('button', { name: /get random user/i }));

    const fetchErrorMessage = 'Failed to fetch';

    expect(await screen.findByText('Error')).toBeInTheDocument();
    expect(await screen.findByText(fetchErrorMessage)).toBeInTheDocument();
    expect(console.error).toHaveBeenCalledWith(TypeError(fetchErrorMessage));
  });
});
