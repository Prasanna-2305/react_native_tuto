import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Screen1 from '../screen/Screen1';
import Screen2 from '../screen/Screen2';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#e91e63',
          inactiveTintColor: '#888',
          labelStyle: { fontSize: 16 },
          style: {
            backgroundColor: '#fff',
            borderTopWidth: 1,
            borderTopColor: '#ccc',
            height: 60,
          },
        }}
      >
        <Tab.Screen name="Screen1" component={Screen1} />
        <Tab.Screen name="Screen2" component={Screen2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;
