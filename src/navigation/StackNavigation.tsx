import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Reports from '../screens/Reports';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
    // screenOptions={{
    //   headerBackTitle: '',
    //   headerTintColor: '#ffffff',
    //   headerStyle: {
    //     backgroundColor: '#282468ea',
    //     paddingVertical: rh(3),
    //     paddingHorizontal: rw(5),
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //   },
    // }}
    >
      <Stack.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Reports"
        component={Reports}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
