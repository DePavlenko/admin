import { render, screen } from '@testing-library/react';
import { Table, TableContent } from './table';
import { mockTableData, MockTableData } from '../../__mocks__/table';

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

describe('Table', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Table data={mockTableData} content={mockTableContent} status="idle" />
    );
    expect(baseElement).toBeTruthy();
  });
  it('should render loading indicator on loading', () => {
    render(
      <Table data={mockTableData} content={mockTableContent} status="loading" />
    );
    const loadingIndicator = screen.getByTestId('progress');
    expect(loadingIndicator).toBeInTheDocument();
  });
  it('should render 2 columns and 3 rows with dummy data', () => {
    render(
      <Table data={mockTableData} content={mockTableContent} status="idle" />
    );
    const columns = screen.getAllByRole('columnheader');
    expect(columns.length).toBe(2);
    const rows = screen.getAllByRole('row');
    expect(rows.length - 1).toBe(3);
  });
  it('should render error indicator on error and default error message', () => {
    render(
      <Table data={mockTableData} content={mockTableContent} status="failed" />
    );
    const errorIndicator = screen.getByTestId('error');
    expect(errorIndicator).toBeInTheDocument();
    const error = screen.getByText(/Something went wrong/i);
    expect(error).toBeInTheDocument();
  });
  it('should render error indicator on error and error message', () => {
    render(
      <Table
        data={mockTableData}
        content={mockTableContent}
        status="failed"
        error="test error"
      />
    );
    const errorIndicator = screen.getByTestId('error');
    expect(errorIndicator).toBeInTheDocument();
    const error = screen.getByText(/test error/i);
    expect(error).toBeInTheDocument();
  });
});
