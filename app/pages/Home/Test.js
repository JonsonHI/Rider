/*
 * @Author: Jonson 
 * @Date: 2020-02-09 15:46:32 
 * @Last Modified by: Jonson
 * @Last Modified time: 2020-02-12 15:50:29
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
const { width, height } = Dimensions.get('window');
// import {BaseContainer} from '../../components'
import BaseContainer from '../../components/BaseContainer'

// @setStatusBar({
//     // barStyle: 'light-content',
//     // translucent: true,
//     backgroundColor: 'red'
// })
export default class Test extends Component {



    constructor(props) {
        super(props);
        this.state = {
            
          };

    }
   
    

    componentDidMount() {

    }


    render() {
        console.log(nav)
       return(
        <BaseContainer 
        title={'第三页'} 
        isTopNavigator={false} 
        isHiddenNavBar={false} 
        statusBarStyle={'light-content'}>
       {/* <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}> */}
            <Text style={{marginTop:100,color:'red'}} onPress={()=>nav.goBack(null)}>测试页</Text>
            
        {/* </SafeAreaView>  */}
          
       </BaseContainer>
        )
    }

}

var styles = StyleSheet.create({
   
});
