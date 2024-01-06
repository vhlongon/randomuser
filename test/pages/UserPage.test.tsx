import { render, screen } from '@testing-library/react';
import UserPage from '../../app/page';
import { mockData } from '../mocks/mockData';

describe('UserPage', () => {
  it('should render correctly', async () => {
    const Result = await UserPage();

    render(Result);

    const user = mockData.results[0];
    const {
      login: { username },
      name: { first, last, title },
      email,
      location: { street, city, state, country },
      picture,
      phone,
      dob,
    } = user;

    const subheading = screen.getByRole('heading', { level: 2 });
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
});
