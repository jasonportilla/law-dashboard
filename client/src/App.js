import React from 'react';
import GridContainer from './components/materialComponents/Grid/GridContainer.jsx';
import GridItem from './components/materialComponents/Grid/GridItem';
import Register from './pages/Register';
import Header from './components/Header';

const App = () => (
  <GridContainer className="App">
    <GridItem className="app-content">
      <Header />
      <Register />
    </GridItem>
  </GridContainer>
);

export default App;
