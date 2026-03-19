import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import CustomBottomTabbar from './CustomBottomTabbar';
import { rh } from '../utils/responsive';
import Reports from '../screens/Reports';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      tabBar={props => <CustomBottomTabbar {...props} />}
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#F5F5F5',
          // borderTopWidth: 0, // Removes the border line on both iOS and Android
          // elevation: 0, // Removes the shadow/elevation on Android
          // shadowOpacity: 0, // Removes the shadow on iOS
          // borderTopColor: 'transparent',
        },

        // tabBarIcon: () => {
        //   let iconSource;

        //   if (route.name === 'Items') {
        //     iconSource = require('../assets/images/shopping-bag.png');
        //   } else if (route.name === 'AddItems') {
        //     iconSource = require('../assets/images/add-to-cart.png');
        //   }

        //   return (
        //     <Image
        //       source={iconSource}
        //       style={{ width: rw(6), height: rh(6) }}
        //       resizeMode="contain"
        //     />
        //   );
        // },
        // tabBarActiveTintColor: '#534eda',
        // tabBarInactiveTintColor: 'gray',
        // tabBarLabelStyle: {
        //   fontSize: rf(12),
        //   fontWeight: '600',
        // },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}
