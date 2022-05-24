import React from 'react';
import {SearchContainer, SearchButton, SearchInput} from "./styles"

const Search:React.FC = () => {
  return (
    <>
      
      <SearchContainer>
        <div>
          <h3>Keyword</h3>
          <SearchInput type="text" />
        </div>
        
        <SearchButton>Search</SearchButton>
      </SearchContainer>
    </>
  )
}

export default Search