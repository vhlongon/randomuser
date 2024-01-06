import Layout from '@/app/layout';
import { render, screen } from '@testing-library/react';

describe('Layout', () => {
  it('should render children', () => {
    const children = <div>test children</div>;
    render(<Layout>{children}</Layout>);

    expect(screen.getByText('test children')).toBeInTheDocument();
  });
});
