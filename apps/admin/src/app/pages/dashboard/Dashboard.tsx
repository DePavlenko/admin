import { useEffect } from 'react';
import {
  Box,
  ToggleButtonGroup,
  ToggleButton,
  Container,
  Typography,
  Link,
} from '@mui/material';
import { Table, TableContent } from '@roamlerorg/ui-components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  setCountry,
  fetchUniversities,
  selectUniversities,
} from '../../store/universities/universities.slice';

const countries = ['Netherlands', 'France', 'Ukraine', 'Brazil'];

type University = {
  domains: string[];
  country: string;
  web_pages: string[];
};

const tableContent: TableContent<University>[] = [
  {
    title: 'Display name and domain',
    render: (data: University) => data.domains[0],
    tdProps: {
      sx: {
        width: 400,
      },
    },
  },
  {
    title: 'Country',
    render: (data: University) => data.country,
    tdProps: {
      sx: {
        width: 350,
      },
    },
  },
  {
    title: 'Website',
    render: (data: University) => <Link href={data.web_pages[0]}>Website</Link>,
    tdProps: {
      align: 'right',
    },
  },
];

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { data, status, country } = useAppSelector(selectUniversities);

  useEffect(() => {
    dispatch(fetchUniversities(country));
  }, [dispatch, country]);

  const handleCountryChange = (
    event: React.MouseEvent<HTMLElement>,
    country: string | null
  ) => {
    country && dispatch(setCountry(country));
  };

  return (
    <Container sx={{ my: 2.5 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 1.5,
        }}
      >
        <Box>
          <Typography variant="h3">Some universities</Typography>
          <Typography variant="subtitle1">
            Discover some universities around the world
          </Typography>
        </Box>
        <ToggleButtonGroup
          color="primary"
          value={country}
          exclusive
          onChange={handleCountryChange}
        >
          {countries.map((country) => (
            <ToggleButton key={country} value={country}>
              {country}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>
      <Table status={status} data={data} content={tableContent} />
    </Container>
  );
};

export default Dashboard;
