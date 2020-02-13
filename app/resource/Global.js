/*
 * @Author: Jonson 
 * @Date: 2020-02-09 14:00:26 
 * 一些常用的文字 颜色 通用修改类
 * @Last Modified by: Jonson
 * @Last Modified time: 2020-02-12 15:48:07
 */

import { Dimensions, PixelRatio, Platform } from 'react-native';
// import { FontSize } from './FontSize';
// import { Px2Dp } from './Tool';

const { height, width } = Dimensions.get('window');

import { Theme } from 'teaset';

// 系统是iOS
global.iOS = Platform.OS === 'ios';
// 系统是安卓
global.Android = Platform.OS === 'android';
// 获取屏幕宽度
global.SCREEN_WIDTH = width;
// 获取屏幕高度
global.SCREEN_HEIGHT = height;
// 获取屏幕分辨率
global.PixelRatio = PixelRatio.get();
// 最小线宽
global.pixel = 1 / PixelRatio;
// 适配字体
// global.FONT_SIZE = FontSize;
// 屏幕适配
// global.px2dp = Px2Dp;
// ApiConfig
// global.ApiConfig = ApiConfig;
global.isNotBackground = '#31DB48'

// global.Config = Config;
global.isIPhoneX = Theme.isIPhoneX;

global.Theme = Theme;

//toast提示背景颜色
global.toastBacKColor = '#333'
//toast 字体色
global.toastTextColor = '#ffffff'
//loading 背景色
global.LoadingColor = '#DEDEDD'
