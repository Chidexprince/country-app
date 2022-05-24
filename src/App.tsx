import React from 'react';
import CountryList from './components/Country-List';
import NavBar from './components/Navbar';
import Search from './components/Search';
import Global from './styles/global';

function App() {
  return (
    <div>
      <Global/>
      <NavBar />
      <Search />
      <CountryList/>
    </div>
  );
}

export default App;
