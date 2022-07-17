import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './header';
import { mockNavigation } from '../../__mocks__/navigation';

const MockLogo = () => <svg data-testid="logo"></svg>;
const mockAvatar = '/user.jpg';

describe('Header', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header
          isLogged={true}
          logo={MockLogo}
          navigation={mockNavigation}
          avatar={mockAvatar}
        />
      </BrowserRouter>
    );
  });
  it('should render logo', () => {
    const logo = screen.getByTestId('logo');
    expect(logo).toBeInTheDocument();
  });
  it('should render navigation', () => {
    const dashboardLink = screen.getByText('Settings');
    expect(dashboardLink).toBeInTheDocument();
  });
  it('should render avatar', () => {
    const image = screen.getByAltText('user');
    expect(image).toBeInTheDocument();
  });
});
