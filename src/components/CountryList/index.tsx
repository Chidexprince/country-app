import React, { memo, useCallback, useState } from "react";
import {SearchContainer, SearchButton, SearchInput, ListContainer } from "./styles"
import { CountryItem } from "../CountryItem";
import { Country } from "../../types";

type Props = {
  countries: Country[];
};

export const CountryList: React.FC<Props> = memo(({ countries }) => {
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const onSearch = useCallback(
    ({ target }) => {
      const value = target.value.toLowerCase();

      setFilteredCountries(() =>
        countries.filter(
          ({ code, name }) =>
            name.toLowerCase().includes(value) ||
            code.toLowerCase().includes(value)
        )
      );
    },
    [countries]
  );

  return (
    <>
        <form>
          <SearchContainer>
            <div>
              <h5>Keyword</h5>
              <SearchInput type="text" placeholder='Search country' onChange={onSearch} />
            </div>
            <SearchButton type="button" onClick={onSearch}>Search</SearchButton>
          </SearchContainer>
        </form>
      
      <ListContainer>
        {filteredCountries.length > 0 ? (
          <>
            {filteredCountries.map(country => (
              <CountryItem key={country.code} {...country} />
            ))}
          </>
        ) : (
          <span>No country found :-(</span>
          )}
      </ListContainer>
    </>
  );
});
