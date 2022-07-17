import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './header';
import { mockNavigation } from '../../__mocks__/navigation';

const MockLogo = () => <svg data-testid="logo"></svg>;
const mockAvatar = '/user.jpg';

const renderHeader = (isLogged = true) =>
  render(
    <BrowserRouter>
      <Header
        isLogged={isLogged}
        logo={MockLogo}
        navigation={mockNavigation}
        avatar={mockAvatar}
      />
    </BrowserRouter>
  );

describe('Header', () => {
  it('should render only logo if user is not signed in', () => {
    renderHeader(false);
    const logo = screen.getByTestId('logo');
    screen.debug();
    expect(logo).toBeInTheDocument();
    const navigationItem = screen.queryByText(/Dashboard/i);
    expect(navigationItem).not.toBeInTheDocument();
    const avatar = screen.queryByAltText('user');
    expect(avatar).not.toBeInTheDocument();
    const burger = screen.queryByLabelText(/menu/i);
    expect(burger).not.toBeInTheDocument();
  });
  it('should render logo', () => {
    renderHeader();
    const logo = screen.getByTestId('logo');
    expect(logo).toBeInTheDocument();
  });
  it('should render navigation', () => {
    renderHeader();
    const dashboardLink = screen.getByText('Settings');
    expect(dashboardLink).toBeInTheDocument();
  });
  it('should render avatar', () => {
    renderHeader();
    const avatar = screen.getByAltText('user');
    expect(avatar).toBeInTheDocument();
  });
  it('should render burger', () => {
    renderHeader();
    const burger = screen.getByLabelText('menu');
    expect(burger).toBeInTheDocument();
  });
});
