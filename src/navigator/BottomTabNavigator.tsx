import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StackNavigator, SearchStackNavigator, AccountStackNavigator } from './StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text } from 'react-native';

const Tab = createMaterialBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      activeColor='#7076C9'
      inactiveColor='#696869'
      barStyle={{
        position: 'absolute',
        opacity: 1,
        backgroundColor: 'white',
        borderWidth: 0,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        elevation: 0,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.16,
        shadowRadius: 24,
      }}
    >
      <Tab.Screen 
        name="HomeScreen" 
        component={StackNavigator} 
        options={{
          tabBarLabel: <Text style={styles.tabTextStyle}>Home</Text>,
          tabBarIcon: ({color}) => <Icon name='home' color={color} size={25} />
        }}
      />

      <Tab.Screen 
        name="WishlistScreen" 
        component={SearchStackNavigator} 
        options={{
          tabBarLabel: <Text style={styles.tabTextStyle}>Wishlist</Text>,
          tabBarIcon: ({color}) => <Icon name='heart' color={color} size={25} />
        }}
      />

      <Tab.Screen 
        name="AccountScreen" 
        component={AccountStackNavigator} 
        options={{
          tabBarLabel: <Text style={styles.tabTextStyle}>My Account</Text>,
          tabBarIcon: ({color}) => <Icon name='person' color={color} size={25} />
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabTextStyle: {
    fontSize: 13, 
    fontFamily: 'Flexo'
  }
});