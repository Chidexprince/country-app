import React from "react";
import { useQuery } from "@apollo/client";
import { CountryList } from "../CountryList";
import { GET_COUNTRIES } from "../../queries/countries";
import { Country } from "../../types";
import { LoaderContainer } from "./styles";

export const Home: React.FC = () => {
  const { loading, error, data } = useQuery<{ countries: Country[] }>(
    GET_COUNTRIES
  );


  if (loading) {
    return (
      <LoaderContainer>
        <span>Loading countries...</span>
      </LoaderContainer>
    );
  }

  if (error) {
    return <span>An error occurred.</span>;
  }

  return data ? (
    <CountryList countries={data.countries} />
  ) : null;
};
