/*
 * @Author: Jonson 
 * @Date: 2020-02-09 14:00:04 
 * @Last Modified by: Jonson
 * @Last Modified time: 2020-02-11 10:57:26
 */

import React from 'react';

import { createStackNavigator } from 'react-navigation';
// import Home from '../pages/Home/Home'
import section from '../pages/Home/section'

export const AuthRouter = createStackNavigator(
  {
    section: {
      screen: section,
      navigationOptions: () => ({
        header: null
      })
    },
  
  },
  {
    defaultNavigationOptions: () => ({
      header: null,
      gesturesEnabled: true
    }),
    // headerTransitionPreset: 'fade-in-place',
    // headerMode: 'float',
    mode: 'modal'
  }
);
