import { useEffect } from 'react';
import {
  Box,
  ToggleButtonGroup,
  ToggleButton,
  Container,
  Typography,
  Link,
} from '@mui/material';
import { University } from '@roamlerorg/types';
import { Table, TableContent } from '@roamlerorg/ui-components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  setCountry,
  fetchUniversities,
  selectUniversities,
} from '../../store/universities/universities.slice';

const countries = ['Netherlands', 'France', 'Ukraine', 'Brazil'];

const tableContent: TableContent<University>[] = [
  {
    title: 'Display name and domain',
    render: (data) => (
      <Box>
        <Typography sx={{ fontWeight: 700 }}>{data.name}</Typography>
        <Typography component="span" sx={{ color: '#666' }}>
          {data.domains[0]}
        </Typography>
      </Box>
    ),
    tdProps: {
      sx: {
        width: 400,
      },
    },
    thProps: {
      sx: {
        width: 400,
      },
    },
  },
  {
    title: 'Country',
    render: (data) => <Typography>{data.country}</Typography>,
  },
  {
    title: 'Website',
    render: (data) => <Link href={data.web_pages[0]}>Website</Link>,
    tdProps: {
      align: 'right',
    },
    thProps: {
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
    <Container sx={{ my: 4 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          mb: 1.5,
        }}
      >
        <Box sx={{ mr: 5 }}>
          <Typography variant="h3">Some universities</Typography>
          <Typography variant="subtitle1" sx={{ color: '#666' }}>
            Discover some universities around the world
          </Typography>
        </Box>
        <Box sx={{ overflow: 'auto' }}>
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
      </Box>
      <Table status={status} data={data} content={tableContent} />
    </Container>
  );
};

export default Dashboard;
