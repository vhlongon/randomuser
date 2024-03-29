import { render, screen } from '@testing-library/react';
import { UserCard } from '../UserCard';
import { mockData } from '@/test/mocks/mockData';

describe('UserCard', () => {
  it('should render correctly', () => {
    const props = {
      user: mockData.results[0],
      info: mockData.info,
    };

    render(<UserCard {...props} />);

    const {
      login: { username },
      name: { first, last, title },
      email,
      location: { street, city, state, country },
      picture,
      phone,
    } = props.user;

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
    const birthDate = screen.getByText(
      new Date(props.user.dob.date).toLocaleDateString()
    );

    expect(subheading).toHaveTextContent(username);
    expect(image).toHaveAttribute('src', picture.thumbnail);
    expect(heading).toHaveTextContent(`${title}.${first} ${last}`);
    expect(emailLink).toHaveAttribute('href', `mailto:${email}`);
    expect(phoneLink).toHaveAttribute('href', `tel:${phone}`);
    expect(addressLink).toHaveAttribute('href', addressUrl);
    expect(birthDate).toBeInTheDocument();
  });
});
