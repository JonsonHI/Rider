/*
 * @Author: Jonson 
 * @Date: 2020-02-09 13:59:56 
 * @Last Modified by: Jonson
 * @Last Modified time: 2020-02-26 11:03:57
 */

import React from 'react';
import { View, ActivityIndicator, AsyncStorage, Alert, Platform, Image, NativeModules, PermissionsAndroid, StatusBar } from 'react-native';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import { inject, observer, renderReporter } from 'mobx-react'
import { observable } from 'mobx'
import { AppRouter } from './AppRouter';
import {AuthRouter} from './AuthRouter';
type Props = {
  navigation: any
};

@inject("HomeStore")
@observer
export default class AuthLoadingScreen extends React.Component<Props> {
  constructor(props) {
    super(props);
    // renderReporter.on((report) => {
    //   console.warn(report.component.constructor.name + '  renderTime' + report.renderTime + '  totalTime' + report.totalTime);
    // });

  }

  async UNSAFE_componentWillMount() {

    global.nav = this.props.navigation
    this.props.navigation.navigate('AppRouter')
    
  }


  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }
}

export const AuthLoadingRouter = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      AppRouter: AppRouter,
      // AuthRouter: AuthRouter
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);
