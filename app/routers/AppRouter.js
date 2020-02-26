/*
 * @Author: Jonson 
 * @Date: 2020-02-09 14:00:12 
 * @Last Modified by: Jonson
 * @Last Modified time: 2020-02-26 13:50:50
 */


import React from 'react';
import { createBottomTabNavigator, createStackNavigator, StackViewTransitionConfigs, createSwitchNavigator, createAppContainer } from 'react-navigation';

import StackViewStyleInterpolator from 'react-navigation-stack/src/views/StackView/StackViewStyleInterpolator';
import {I18nManager,StatusBar, Image, Platform, Easing, Animated  } from 'react-native';
import {configRoute} from '../components/NavigationHelp/addToRouteStack'

//所有controller
import Home from '../pages/Home/Home'
import Test from '../pages/Home/Test'
import Seller from '../pages/Home/Seller'
import Section from '../pages/Home/section'
import GroupList from '../pages/Home/GroupList'
import Login from '../pages/Login' //登录页面

const IOS_MODAL_ROUTES = ['Test'];

const dynamicModalTransition = (transitionProps, prevTransitionProps) => {
  const isModal = IOS_MODAL_ROUTES.some(
    screenName =>
      screenName === transitionProps.scene.route.routeName ||
      (prevTransitionProps && screenName === prevTransitionProps.scene.route.routeName)
  );
  return StackViewTransitionConfigs.defaultTransitionConfig(transitionProps, prevTransitionProps, isModal);
};

const TransitionConfiguration = () => ({
  screenInterpolator: (sceneProps) => {
      const {scene} = sceneProps;
      const {route} = scene;
      // 获取屏幕切换时新屏幕的参数
      const params = route.params || {};
      // 看看参数中是否有 transition 参数，有则使用，否则使用缺省值 forHorizontal
      // forHorizontal 表示从右向左滑出
      const transition = params.transition || 'forHorizontal';
      return StackViewStyleInterpolator[transition](sceneProps);
      // return dynamicModalTransition;
  },
  transitionSpec: {
    duration: 300,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing,
},

});

const MyTab = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: '主页',
        tabBarIcon: ({ tintColor, focused }) => (
          focused ?
            <Image source={myImg.successPay} />
            :
            <Image source={myImg.successPay} />
        ),
      }
    },
    Seller: {
      screen: Seller,
      navigationOptions: {
        tabBarLabel: '卖家',
        tabBarIcon: ({ tintColor, focused }) => (
          focused ?
            <Image source={myImg.successPay} />
            :
            <Image source={myImg.successPay} />
        ),
      }
    },
    
  },
  {
    initialRouteName: 'Home',
    backBehavior: 'none',
    // lazy: false,
    navigationOptions: ({ navigation }) => NavigationOptions(navigation),
    tabBarOptions: {
      tabStyle: {
        // marginTop: 10,
      },
      style: {},
      safeAreaInset: {
        bottom: 'always',
        top: 'never'
      },
      showLabel: true
    }
  }
);

// Main.navigationOptions = ({ navigation }) => {
//   DeviceEventEmitter.addListener('badgeNumber', (badgeNumber: number) => {
//     navigation.setParams({
//       badgeNumber: badgeNumber
//     });
//   });
//
//   const badgeNumber = navigation.state.params && navigation.state.params.badgeNumber;
//
//   const tabBarButtonComponent = (props: any) => {
//     return [
//       <TouchableOpacity {...props} activeOpacity={1} style={{ width: SCREEN_WIDTH / 3 }} key={'tabBar'} />,
//       <Badge count={badgeNumber} key={'Badge'} style={{ position: 'absolute', left: SCREEN_WIDTH - 60, top: 5 }} />
//     ];
//   };
//   return { tabBarButtonComponent };
// };

// const NavigationOptions = navigation => {
//   console.log('NavigationOptions', navigation);
//   if (navigation.state.key === 'Main') {
//     DeviceEventEmitter.addListener('badgeNumber', (badgeNumber: number) => {
//       navigation.setParams({
//         badgeNumber: badgeNumber
//       });
//     });
//   }
// };

MyTab.navigationOptions = ({ navigation }) => {
  global.nav = navigation
  const routes = navigation.state.routes;
  const params = routes ? routes[navigation.state.index].params : null;

  const headerTitle = params ? params.title : '';

  const headerTitleStyle = {
    fontSize: iOS ? 23 : 20,
    color: 'white',
    flex: 1,
    textAlign: 'center',
    paddingTop: Android ? 17 : null
  };
  const headerBackTitle = null;
  const headerTintColor = 'white';
  const headerStyle = {
    backgroundColor: Theme.navColor,
    shadowColor: 'transparent',
    shadowOpacity: 0,
    borderBottomWidth: 0,
    borderBottomColor: 'transparent',
    elevation: 0
  };

  // 这里的导航都是手动控制的，所以这里设置为null就可以隐藏了。
  const header = null;

  return {
    headerTitle,
    headerStyle,
    headerTitleStyle,
    headerBackTitle,
    headerTintColor,
    header
  };
};

export const AppRouter = createStackNavigator(
  configRoute(
  {
    //tab
    MyTab: {
      screen: MyTab
    },
    //登录
    Login: {
      screen: Login,
      navigationOptions: () => ({
        header: null,
        gesturesEnabled: Platform.OS === 'ios' ? false : true
      })
      
    },
    Home: {
      screen: Home,
      
    },
    Test: {
      screen: Test,
    },
    Seller: {
      screen: Seller,
    },
    GroupList: {
      screen: GroupList,
    },
    Section: {
      screen: Section,
    },

  }),
  {
    // 快速定制导航条，所有的导航都是重写的，所以这里会将全部的导航置空
    defaultNavigationOptions: () => ({
      headerStyle: {
        ...Platform.OS === 'android' && {
          height: StatusBar.currentHeight + 44,
          paddingTop: StatusBar.currentHeight
        }
      },
      header: null,
      gesturesEnabled: true,
      headerTransparent: false
    }),
    // transitionConfig: iOS
    //   ? dynamicModalTransition
    //   : () => ({
    //     screenInterpolator: StackViewStyleInterpolator.forHorizontal
    //   }),
    transitionConfig:TransitionConfiguration,
    // transitionConfig: iOS ? dynamicModalTransition : StackViewStyleInterpolator.forHorizontal,
    // transitionConfig: StackViewStyleInterpolator.forVertical,
    cardOverlayEnabled: false,
    // transparentCard: true,
    // headerTransitionPreset: 'fade-in-place',
    // headerMode: 'float',
    // mode: 'modal'
  }
);


// const TabOptions = (tabBarTitle, tabBarIconName) => {
//   const title = tabBarTitle;
//   const tabBarIcon = ({ focused }: { focused: boolean }) => {
//     const color = focused ? Theme.tabBarColor : '#aaa';
//     return (
//       <View style={{ marginTop: 3,justifyContent:'center',alignItems:'center' }}>
//         {/* <CustomIcon name={tabBarIconName} size={35} color={color} /> */}
//         {tabBarIconName === 'home' ?
//           <Image source={require('../img/home.png')} style={{height:30,width:30}} color={color}/>
//           :
//           <Image source={require('../img/home.png')} style={{height:30,width:30}}/>
//         }

//         <Text style={{marginTop:2,fontSize:10}}>{tabBarTitle}</Text>
//       </View>
//     );
//   };
//   const tabBarVisible = true;
//   return { title, tabBarVisible, tabBarIcon };
// };
