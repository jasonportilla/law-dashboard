import React from 'react';
import GridContainer from './components/materialComponents/Grid/GridContainer.jsx';
import GridItem from './components/materialComponents/Grid/GridItem';
import Register from './pages/Register';

const App = () => (
  <div className="App">
    <GridContainer>
      <GridItem>
        <Register />
      </GridItem>
    </GridContainer>
  </div>
);

export default App;
