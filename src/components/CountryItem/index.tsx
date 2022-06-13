import React from "react";
import ReactCountryFlag from "react-country-flag";

import { Country } from "../../types";
import { CardContainer, DetailButton, NameContainer, Name } from "./styles";

type Props = Country;

export const CountryItem: React.FC<Props> = ({
  code,
  continent,
  name
}) => {

  return (
    <CardContainer>
      <NameContainer>
        <ReactCountryFlag countryCode={code} svg /> <Name>{name} </Name>
      </NameContainer>  
      <div>
        <h5>Continent: {continent.name}</h5> 
        <DetailButton>See Details</DetailButton>
      </div>
    </CardContainer>

  )
} ;
