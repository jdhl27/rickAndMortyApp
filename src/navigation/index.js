import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../views/home';
import Profile from '../views/profile';

const Stack = createNativeStackNavigator();

function NavigationRoot() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Characters',
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({route}) => ({
          title: `Detail of ${route.params.item?.name}`,
        })}
      />
    </Stack.Navigator>
  );
}

export default NavigationRoot;
