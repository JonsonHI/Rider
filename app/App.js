/*
 * @Version: 1.0
 * @Autor: Jonson
 * RN 进入主页过度页面 写一些请求处理类
 * @Date: 2020-02-09 11:15:36
 */
import React, { useEffect } from 'react';
import { View, ActivityIndicator, DeviceEventEmitter, BackHandler, ToastAndroid,StatusBar,NativeModules } from 'react-native';
import { AuthLoadingRouter } from './routers/AuthLoading';
import MyLoading from './utils/MyLoading';
// import {SafeAreaView} from 'react-navigation';
// import { Toast } from './components';
import { Provider } from 'mobx-react';
import stores from './stores/RootStore'
// import SplashScreen from 'react-native-splash-screen';
import { useScreens } from 'react-native-screens';
useScreens()

const navigationPersistenceKey = __DEV__ ? 'NavigationStateDEV' : null;
let lastBackPressed: number;

function index() {
  useEffect(() => {
    // SplashScreen.hide();
    DeviceEventEmitter.emit('badgeNumber', 30);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
    };
  });

  function onBackButtonPressAndroid() {
    if (lastBackPressed && lastBackPressed + 2000 >= Date.now()) {
      // 最近2秒内按过back键，可以退出应用。
      return false;
    }
    lastBackPressed = Date.now();
    ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
    return true;
  }

  return (
    <Provider {...stores}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white'
        }}
      >
        <AuthLoadingRouter
          // persistenceKey={navigationPersistenceKey}
          renderLoadingExperimental={() => <ActivityIndicator size="large" color="black" />}
          onNavigationStateChange={(prevState, currentState) => {
            const AppRouter = currentState.routes[1];
            if (AppRouter.routes && AppRouter.routes.length > 1) {
              BackHandler.removeEventListener('hardwareBackPress', onBackButtonPressAndroid);
            } else {
              BackHandler.addEventListener('hardwareBackPress', onBackButtonPressAndroid);
            }
          }}
        />
        
        {<MyLoading
          ref={(ref) => {
            global.mLoadingComponentRef = ref;
          }}
        />}
      </View>
    </Provider>
  );
}

export default index;