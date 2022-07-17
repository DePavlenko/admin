import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from './header';
import { ReactComponent as Logo } from '../../__mocks__/assets/logo.svg';
import user from '../../__mocks__/assets/user.jpg';
import { mockNavigation } from '../../__mocks__/navigation';

export default {
  component: Header,
  title: 'Header',
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  logo: Logo,
  navigation: mockNavigation,
  avatar: user,
  isLogged: true,
};
