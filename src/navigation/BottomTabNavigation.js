import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screen/home/HomeScreen';
import OrderScreen from '../screen/order/OrderScreen';
import ProfileScreen from '../screen/profile/ProfileScreen';
import RateList from '../screen/rateList/RateList';

const BottomTab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          if (route.name === 'Home') {
            return <MaterialIcons name="home" size={size} color={color} />;
          } else if (route.name === 'RateList') {
            return (
              <MaterialCommunityIcons
                name="clipboard-list-outline"
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Order') {
            return <MaterialIcons name="payment" size={size} color={color} />;
          } else if (route.name === 'Profile') {
            return (
              <MaterialCommunityIcons
                name="account-settings-outline"
                size={size}
                color={color}
              />
            );
          }
        },
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <BottomTab.Screen name="RateList" component={RateList} />
      <BottomTab.Screen name="Order" component={OrderScreen} />
      <BottomTab.Screen name="Profile" component={ProfileScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;
