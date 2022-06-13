import styled from "styled-components";

export const ListContainer = styled.div`
  border: 1px solid #000;
  width: 99vw;
  margin: 0 auto;
  display: grid;
  padding: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 0 auto;
  border: 1px solid #000;
  padding: 1rem;
  width: 100vw;
`
export const SearchButton = styled.button`
  background-color: #212121;
  color: #fff;
  padding: 0.25rem 1rem;
  outline: none;
`

export const SearchInput = styled.input`
  border: 1px solid #212121;
  padding: 0.25rem 1rem;
  outline: none;
  margin-right: 0.5rem;
`
