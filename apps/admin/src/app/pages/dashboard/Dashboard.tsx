import { useEffect, useState } from 'react';
import {
  Box,
  ToggleButtonGroup,
  ToggleButton,
  Container,
  Typography,
  Link,
} from '@mui/material';
import { Table, TableContent } from '@roamlerorg/ui-components';

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
    trProps: {
      sx: {
        width: 400,
      },
    },
  },
  {
    title: 'Country',
    render: (data: University) => data.country,
    trProps: {
      sx: {
        width: 350,
      },
    },
  },
  {
    title: 'Website',
    render: (data: University) => <Link href={data.web_pages[0]}>Website</Link>,
    trProps: {
      align: 'right',
    },
    tdProps: {
      align: 'right',
    },
  },
];

const Dashboard = () => {
  const [country, setCountry] = useState(countries[0]);
  const [loading, setLoading] = useState(false);
  const [universities, setUniversities] = useState<University[]>([]);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `http://universities.hipolabs.com/search?country=${country}`
        );
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
        const data = await response.json();
        setUniversities(data.slice(0, 10));
      } catch (error) {
        const typedError = error as Error;
        setError(typedError.message);
      }
      setLoading(false);
    })();
  }, [country]);

  const handleCountryChange = (
    event: React.MouseEvent<HTMLElement>,
    country: string
  ) => {
    setCountry(country);
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
      <Table
        loading={loading}
        data={universities}
        error={error}
        content={tableContent}
      />
    </Container>
  );
};

export default Dashboard;
