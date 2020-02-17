/*
 * @Version: 1.0
 * @Autor: Jonson
 * @LastEditors: Seven
 * iPhone X 适配工具类
 * @Date: 2019-03-30 23:56:46
 * @LastEditTime: 2019-04-07 21:14:11
 */
import { Dimensions,Platform} from 'react-native';

export let screenW = Dimensions.get('window').width;
export let screenH = Dimensions.get('window').height;
// iPhoneX
const X_WIDTH = 375;
const X_HEIGHT = 812;
//iphoneXS Max
const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

export default class IphoneX {
    static ifIphoneX(iphoneXStyle, iosStyle, androidStyle) {
    
        if (Platform.OS === 'ios' &&
        ((screenH === X_HEIGHT && screenW === X_WIDTH) ||
            (screenH === X_WIDTH && screenW === X_HEIGHT)||(screenH === XSMAX_HEIGHT && screenW === XSMAX_WIDTH)
            )) {
            return iphoneXStyle;
        } else if (Platform.OS === 'ios') {
            return iosStyle
        } else {
            if (androidStyle) return androidStyle;
            return iosStyle
        }
      }
}