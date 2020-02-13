/*
 * @Author: Jonson 
 * @Date: 2020-02-12 12:12:15 
 * @Last Modified by: Jonson
 * @Last Modified time: 2020-02-12 15:46:13
 */

import React from 'react';
import {
  View,Dimensions,
} from "react-native";
const { width, height } = Dimensions.get('window');
import { NavigationBar, Theme } from 'teaset';
// import LinearGradient from 'react-native-linear-gradient';
import { withNavigation } from 'react-navigation';

export type Props = {
  leftView?: any,
  backButtonPress?: any,
  isTopNavigator?: ?boolean,
  isNotBackground?: boolean,
  background?: any,
  statusBarStyle?:any,
  ...NavigationBar.props
};


class NavigatorBar extends React.PureComponent<Props> {
  static defaultProps = {
    isTopNavigator: false,
    isNotBackground: false,
    statusBarStyle:'dark-content'
  };

  constructor(props: Props) {
    super(props);
  }

  backButtonPress = () => {
    const { backButtonPress } = this.props;
    if (backButtonPress) {
      backButtonPress();
    } else {
      this.props.navigation.goBack();
    }
  };

  renderLeftView = () => {
    const { isTopNavigator, leftView } = this.props;
    let left;
    if (isTopNavigator || leftView) {
      left = leftView;
    } else {
      left = <NavigationBar.BackButton title="返回" onPress={this.backButtonPress} />;
    }
    return left;
  };

  render() {
    return (
      <NavigationBar
        leftView={this.renderLeftView()}
        background={
          this.props.isNotBackground ? (
            // <LinearGradient
            //   start={{ x: 0.0, y: 0.25 }}
            //   end={{ x: 0.5, y: 1.0 }}
            //   locations={[0, 1]}
            //   // colors={['rgb(13,199,255)', 'rgb(16,174,255)']}
            //   colors={['white', 'white']}
            //   style={{
            //     height: Theme.statusBarHeight + Theme.navBarContentHeight,
            //     borderBottomColor:'black',
            //     borderBottomWidth:1
            //   }}
            // >
            // </LinearGradient>
            //自定义view
            <View style={{height:Theme.statusBarHeight + Theme.navBarContentHeight,width:width,
                          backgroundColor:isNotBackground,borderBottomColor:'#D8D8D8',borderBottomWidth:0.5}}/>
          ) : (
            <View style={{height:Theme.statusBarHeight + Theme.navBarContentHeight,width:width,
              backgroundColor:'blue',}}>
                {this.props.background}
              </View>
            
          )
        }
        titleStyle={{
          fontSize: 17,
          color: '#272A33',
          fontWeight: 'bold'
        }}
        tintColor={Theme.tabBarColor}
        statusBarStyle={this.props.statusBarStyle}//'dark-content'
        // statusBarColor={'#fff'}
        {...this.props}
      />
    );
  }
}

export default withNavigation(NavigatorBar);

// const styles = StyleSheet.create({
// 	container: {
// 		// flex: 1,
// 		...StyleSheet.absoluteFill,
// 		height: 64,
//
// 		backgroundColor: 'red',
// 	},
// });
