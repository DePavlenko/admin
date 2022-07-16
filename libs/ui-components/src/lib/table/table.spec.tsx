import { render, screen } from '@testing-library/react';
import { Table, TableContent } from './table';

type MockData = {
  name: string;
  age: number;
};

const mockData: MockData[] = [
  {
    name: 'test name 1',
    age: 25,
  },
  {
    name: 'test name 2',
    age: 45,
  },
  {
    name: 'test name 3',
    age: 53,
  },
];

const dummyContent: TableContent<MockData>[] = [
  {
    title: 'column 1',
    render: ({ name }) => <p>{name}</p>,
  },
  {
    title: 'column 2',
    render: ({ age }) => <p>{age}</p>,
  },
];

describe('Table', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Table data={mockData} content={dummyContent} status="idle" />
    );
    expect(baseElement).toBeTruthy();
  });
  it('should render loading indicator on loading', () => {
    render(<Table data={mockData} content={dummyContent} status="loading" />);
    const loadingIndicator = screen.getByTestId('progress');
    expect(loadingIndicator).toBeInTheDocument();
  });
  it('should render 2 columns and 3 rows with dummy data', () => {
    render(<Table data={mockData} content={dummyContent} status="idle" />);
    const columns = screen.getAllByRole('columnheader');
    expect(columns.length).toBe(2);
    const rows = screen.getAllByRole('row');
    expect(rows.length - 1).toBe(3);
  });
  it('should render error indicator on error', () => {
    render(<Table data={mockData} content={dummyContent} status="failed" />);
    const errorIndicator = screen.getByTestId('error');
    expect(errorIndicator).toBeInTheDocument();
  });
});
