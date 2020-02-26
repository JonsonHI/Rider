/*
 * @Author: Jonson 
 * @Date: 2020-02-09 13:59:56 
 * @Last Modified by: Jonson
 * @Last Modified time: 2020-02-26 13:38:44
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
  componentDidMount () {
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~极光推送 Jpush ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // JPush.init();
    //     //连接状态
    //     this.connectListener = result => {
    //         console.log("connectListener:" + JSON.stringify(result))
    //     };
    //     JPush.addConnectEventListener(this.connectListener);
    //     //通知回调
    //     this.notificationListener = result => {
    //         console.log("notificationListener:" + JSON.stringify(result))
    //     };
    //     JPush.addNotificationListener(this.notificationListener);
    //     //本地通知回调
    //     this.localNotificationListener = result => {
    //         console.log("localNotificationListener:" + JSON.stringify(result))
    //     };
    //     JPush.addLocalNotificationListener(this.localNotificationListener);
    //     //自定义消息回调
    //     this.customMessageListener = result => {
    //         console.log("customMessageListener:" + JSON.stringify(result))
    //     };
    //     JPush.addCustomMessagegListener(this.customMessageListener);
    //     //tag alias事件回调
    //     this.tagAliasListener = result => {
    //         console.log("tagAliasListener:" + JSON.stringify(result))
    //     };
    //     JPush.addTagAliasListener(this.tagAliasListener);
    //     //手机号码事件回调
    //     this.mobileNumberListener = result => {
    //         console.log("mobileNumberListener:" + JSON.stringify(result))
    //     };
    //     JPush.addMobileNumberListener(this.mobileNumberListener);
  }

  async UNSAFE_componentWillMount() {

    global.nav = this.props.navigation
    let token = 1;
    if(token){
      this.props.navigation.navigate('Login')
    }
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
