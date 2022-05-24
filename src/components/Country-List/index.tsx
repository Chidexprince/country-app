import React from 'react';
import Country from '../Country';
import {ListContainer} from "./styles"

const CountryList:React.FC = () => {
  return (
    <ListContainer>
      <Country />
    </ListContainer>
  )
}

export default CountryList