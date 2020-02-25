/*
 * @Author: Jonson 
 * @Date: 2020-02-09 15:46:32 
 * @Last Modified by: Jonson
 * @Last Modified time: 2020-02-25 12:01:16
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
import { inject, observer } from 'mobx-react'
import { observable } from 'mobx'
import BaseContainer from '../../components/BaseContainer'
import MToast from '../../utils/toast/Toast';

// @setStatusBar({
//     // barStyle: 'light-content',
//     // translucent: true,
//     backgroundColor: 'red'
// })
@inject("HomeStore")
@observer
export default class Test extends Component {



    constructor(props) {
        super(props);
        this.state = {

        };

    }



    componentDidMount() {

    }

    rightView = () =>{
        return(
            <View style={{flexDirection:'row'}}>
                <Text>111</Text> 
                <Text>222</Text>
            </View>
        )
    }

    isLoading = () =>{
        const {HomeStore} = this.props
        this.timer = setTimeout(
            () => { HomeStore.isLoading = false
                // HomeStore.isLoading = true
            },
            500
          );
    }


    render() {
        // console.log(nav)
        const {HomeStore} =this.props
        return (
            <BaseContainer
                title={'第三页'}
                store={HomeStore}
                isTopNavigator={false}
                isHiddenNavBar={false}
                // leftView={<View><Text>111</Text></View>}
                rightView={this.rightView()}
                statusBarStyle={'light-content'}
                onWillFocus={payload => {
                    console.log('页面将要获得焦点', payload);
                }}
            >
                {
                    this.isLoading()
                }
                {/* <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}> */}
                <Text style={{ marginTop: 100, color: 'red' }} onPress={() => nav.goBack(null)}>测试页</Text>
                <Text style={{ marginTop: 100, color: 'red' }} onPress={() => nav.navigate('Seller')}>跳转</Text>
                <Text style={{ marginTop: 100, color: 'red' }} onPress={() => 
                    MToast.show({
                        data: '暂时无服务',
                        // textColor: toastTextColor,
                        // backgroundColor: toastBacKColor,
                        // duration: MToast.duration.SHORT, //1.SHORT 2.LONG
                        position: MToast.position.CENTER, // 1.TOP 2.CENTER 3.BOTTOM
                        // icon: <Image source={require('../../img/error.png')} style={{ width: 32, height: 32, resizeMode: 'contain' }} />
                    })
                }>测试页</Text>

                {/* </SafeAreaView>  */}

            </BaseContainer>
        )
    }

}

var styles = StyleSheet.create({

});
