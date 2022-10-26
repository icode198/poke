import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StackNavigator, SearchStackNavigator } from './StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text } from 'react-native';

const Tab = createMaterialBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      activeColor='#C04C4B'
      inactiveColor='#696869'
      barStyle={{
        position: 'absolute',
        opacity: 0.7,
        backgroundColor: 'white',
        borderWidth: 0,
        elevation: 0,
        shadowColor: 'rgba(255,255,255,0.5)',
      }}
    >
      <Tab.Screen 
        name="RootScreen"   
        component={StackNavigator} 
        options={{
          //Whitout error: tabBarLabel: 'List'.toLocaleUpperCase(),
          tabBarLabel: <Text style={styles.tabTextStyle}>{'List'.toLocaleUpperCase()}</Text>,
          tabBarIcon: ({color}) => <Icon name='list-circle-outline' color={color} size={25} />
        }}
      />

      <Tab.Screen 
        name="SearchScreen" 
        component={SearchStackNavigator} 
        options={{
          //Whitout error: Search: 'List'.toLocaleUpperCase(),
          tabBarLabel: <Text style={styles.tabTextStyle}>{'Search'.toLocaleUpperCase()}</Text>,
          tabBarIcon: ({color}) => <Icon name='search-circle-outline' color={color} size={25} />
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabTextStyle: {
    fontSize: 13, 
    fontFamily: 'FingerPaint-Regular'
  }
});