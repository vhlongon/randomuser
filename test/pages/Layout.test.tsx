import Layout from '@/app/layout';
import { render, screen } from '@testing-library/react';

describe('Layout', () => {
  it('should render children', () => {
    vi.spyOn(console, 'error').mockImplementation(() => undefined);

    const Content = () => 'test children';

    render(
      <Layout>
        <Content />
      </Layout>
    );

    expect(screen.getByText('test children')).toBeInTheDocument();
  });
});
