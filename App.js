import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationRoot from './src/navigation';

const App = () => {
  return (
    <NavigationContainer>
      <NavigationRoot />
    </NavigationContainer>
  );
};

export default App;
