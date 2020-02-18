/*
 * @Author: Jonson 
 * @Date: 2020-02-09 15:46:32 
 * @Last Modified by: Jonson
 * @Last Modified time: 2020-02-17 15:38:01
 */
/*
 * @Author: Jonson 
 * @Date: 2020-02-09 15:46:10 
 * @Last Modified by:   Jonson 
 * @Last Modified time: 2020-02-09 15:46:10 
 */

import React, { Component, PureComponent, PropTypes } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Dimensions,
} from "react-native";

import BaseContainer from '../../components/BaseContainer'
import {setStatusBar} from '../../components/StatusBar'

@setStatusBar({
    barStyle: 'light-content',
    translucent: true,
    backgroundColor: 'transparent'
})

export default class Section extends Component {



    constructor(props) {
        super(props);
        this.state = {
            
          };

    }
   
    

    componentDidMount() {

    }


    render() {
        // console.log(nav)
       return(
        <BaseContainer
        title={'首页'}
        isTopNavigator={true}
        statusBarStyle={'dark-content'}
        // isNotBackground={isNotBackground}
        // isHiddenNavBar={false}
        style={{ backgroundColor: 'white', flex: 1, }}
    >
        {/* <SafeAreaView style={{ flex: 1, backgroundColor: 'blue' }}> */}
            <Text style={{marginTop:0,color:'red'}} onPress={()=>nav.navigate('Home')}>section页</Text>
            <Text style={{marginTop:50,color:'red'}} onPress={()=>nav.navigate('Test')}>test页</Text>
            
        {/* </SafeAreaView> */}
          
        </BaseContainer>
        )
    }

}

var styles = StyleSheet.create({
   
});
