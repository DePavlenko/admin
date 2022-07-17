import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Table, TableContent } from './table';
import { mockTableData, MockTableData } from '../../__mocks__/table';

export default {
  component: Table,
  title: 'Table',
} as ComponentMeta<typeof Table>;

const mockTableContent: TableContent<MockTableData>[] = [
  {
    title: 'User',
    render: ({ name }) => <span>{name}</span>,
  },
  {
    title: 'Age',
    render: ({ age }) => <span>{age}</span>,
  },
];

const Template: ComponentStory<typeof Table<MockTableData>> = (args) => (
  <Table {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  status: 'idle',
  data: mockTableData,
  content: mockTableContent,
};
