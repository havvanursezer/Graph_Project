import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {NavigationWrapper} from '../components';
import {
  BestSellersContainer,
  GeneralGraphicsContainer,
  LocationComparisonChartsContainer,
} from '../pages';
import {Image} from 'react-native';
import {appStyle} from '../ui/style';
import Colors from '../ui/colors';

const Tab = createBottomTabNavigator();

export default function TabNavigationContainer() {
  const TabBarIcon = (focused: any, route: any) => {
    switch (route.name) {
      case 'General Graphs':
        return focused
          ? require('../../assest/tabBarIcons/diagramActive.png')
          : require('../../assest/tabBarIcons/diagram.png');
      case 'Comparison Location':
        return focused
          ? require('../../assest/tabBarIcons/comparisonActive.png')
          : require('../../assest/tabBarIcons/comparison.png');
      case 'Best Seller':
        return focused
          ? require('../../assest/tabBarIcons/best-sellerActive.png')
          : require('../../assest/tabBarIcons/best-seller.png');
    }
  };

  return (
    <NavigationWrapper>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarActiveTintColor: Colors.pink,
          tabBarInactiveTintColor: Colors.lightPink,
          tabBarIcon: ({focused}) => (
            <Image
              source={TabBarIcon(focused, route)}
              style={appStyle.tabIcon}
            />
          ),
        })}>
        <Tab.Screen
          name="General Graphs"
          component={GeneralGraphicsContainer}
        />
        <Tab.Screen name="Best Seller" component={BestSellersContainer} />
        <Tab.Screen
          name="Comparison Location"
          component={LocationComparisonChartsContainer}
        />
      </Tab.Navigator>
    </NavigationWrapper>
  );
}
