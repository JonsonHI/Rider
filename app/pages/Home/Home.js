/*
 * @Author: Jonson 
 * @Date: 2020-02-09 15:46:10 
 * @Last Modified by: Jonson
 * @Last Modified time: 2020-02-16 22:24:44
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
import { action, computed, observable, toJS } from "mobx";
import BaseContainer from '../../components/BaseContainer'
import { RouteHelper } from '../../components/NavigationHelp/RouteHelper'
import { CountDown } from "../../components";
import { ENVS } from '../../config'

// @setStatusBar({
//     barStyle: 'dark-content',
//     translucent: true,
//     backgroundColor: 'transparent'
// })
export default class Home extends Component {

    @observable type = null;

    constructor(props) {
        super(props);
        this.state = {

        };

    }



    componentDidMount() {

    }


    render() {
        // console.log(RouteHelper)
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
                <Text style={{ marginTop: 100 }} onPress={() => RouteHelper.navigate('section', null)}>RouteHelper</Text>
                <Text style={{ marginTop: 100 }} onPress={() => {
                    console.log(ENVS.api_url)
                    ENVS.api_url = 'SSS';
                    console.log(this.type)
                }
                }>{ENVS.api_url}</Text>

                <CountDown frameStyle={{ top: 10, left: 50, width: 120, height: 36}}
                    beginText='获取验证码'
                    endText='再次获取验证码'
                    count={60}
                    pressAction={() => { this.countDownButton.startCountDown() }}
                    changeWithCount={(count) => count + 's后重新获取'}
                    id='register'
                    ref={(e) => { this.countDownButton = e }}
                />
            </BaseContainer>
        )
    }

}

var styles = StyleSheet.create({

});
