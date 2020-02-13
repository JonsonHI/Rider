/*
 * @Author: Jonson 
 * @Date: 2020-02-09 15:46:10 
 * @Last Modified by: Jonson
 * @Last Modified time: 2020-02-13 17:08:24
 */

import React, { Component, PureComponent, PropTypes } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Dimensions,
} from "react-native";
// import {setStatusBar} from '../../components/StatusBar'
import BaseContainer from '../../components/BaseContainer'
import {ENVS} from '../../config'

// @setStatusBar({
//     barStyle: 'dark-content',
//     translucent: true,
//     backgroundColor: 'transparent'
// })
export default class Home extends Component {


    constructor(props) {
        super(props);
        this.state = {

        };

    }



    componentDidMount() {

    }


    render() {
        return (
            <BaseContainer
                title={'首页'}
                isTopNavigator={true}
                statusBarStyle={'dark-content'}
                isNotBackground={isNotBackground}
                // isHiddenNavBar={false}
                style={{ backgroundColor: 'red', flex: 1, }}
            >
                <Text style={{ marginTop: 100 }} onPress={() => nav.navigate('section')}>首页</Text>
        <Text style={{ marginTop: 100 }} onPress={() => {
            console.log(ENVS.api_url)
            ENVS.api_url =  'SSS';
            console.log(ENVS.api_url)
        }
        }>{ENVS.api_url}</Text>
            </BaseContainer>
        )
    }

}

var styles = StyleSheet.create({

});
