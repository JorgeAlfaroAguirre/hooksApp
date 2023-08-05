import { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';

interface Country {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  capital: string[];
  population: number;
}

interface Props {
  countryCode: string;
}

export const MultipleCustomHooks: React.FC<Props> = ({ countryCode }) => {
  const [url, setUrl] = useState(`https://restcountries.com/v3.1/alpha/${countryCode}`);
  const { data, isLoading, hasError } = useFetch<Country[]>(url);

  useEffect(() => {
    setUrl(`https://restcountries.com/v3.1/alpha/${countryCode}`);
  }, [countryCode]);

  if (isLoading === true) {
    return <h3>Loading...</h3>;
  }

  if (hasError !== null) {
    return <h3>Error: {hasError}</h3>;
  }

  if (!data || data.length === 0) {
    return <h3>Country not found.</h3>;
  }

  const country = data[0];

  return (
    <>
      <h3>https://restcountries.com/</h3>
      <h2>Country Information:</h2>
      <p>Common Name: {country.name?.common}</p>
      <p>Official Name: {country.name?.official}</p>
      <p>Capital: {country.capital.join(', ')}</p>
      <p>Population: {country.population}</p>
    </>
  );
};
