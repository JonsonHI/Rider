/*
 * @Author: Jonson 
 * @Date: 2020-02-09 15:46:10 
 * @Last Modified by: Jonson
 * @Last Modified time: 2020-02-25 11:58:29
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
import { CountDown,BouncingPreloader } from "../../components";
import { ENVS } from '../../config'

const icons = [
    "https://www.shareicon.net/data/256x256/2016/05/04/759946_bar_512x512.png",
    "https://www.shareicon.net/data/256x256/2016/05/04/759908_food_512x512.png",
    "https://www.shareicon.net/data/256x256/2016/05/04/759956_food_512x512.png",
    "https://www.shareicon.net/data/256x256/2016/05/04/759954_food_512x512.png",
    "https://www.shareicon.net/data/256x256/2016/05/04/759906_food_512x512.png",
    "https://www.shareicon.net/data/256x256/2016/05/04/759921_food_512x512.png"
];

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
            isLoading: true
        };

    }



    componentDidMount() {
        this.timer = setTimeout(
            () => {this.setState({isLoading:false})
                // HomeStore.isLoading = true
            },
            500
          );
    }
    componentDidUpdate(){
        
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
                style={{ flex: 1, }}
            >
                {
                    this.state.isLoading ?
                        <BouncingPreloader />
                        :
                        <View>
                            <Text style={{ marginTop: 100 }} onPress={() => nav.navigate('Test',{transition: 'forVertical'})}>首页</Text>
                            <Text style={{ marginTop: 100 }} onPress={() => RouteHelper.navigate('Test', null)}>RouteHelper</Text>
                            <Text style={{ marginTop: 50 }} onPress={() => RouteHelper.navigate('GroupList', null)}>GroupList</Text>
                            <Text style={{ marginTop: 100 }} onPress={() => {
                                console.log(ENVS.api_url)
                                ENVS.api_url = 'SSS';
                                console.log(this.type)
                            }
                            }>{ENVS.api_url}</Text>

                            <CountDown frameStyle={{ top: 10, left: 50, width: 120, height: 36 }}
                                beginText='获取验证码'
                                endText='再次获取验证码'
                                count={60}
                                pressAction={() => { this.countDownButton.startCountDown() }}
                                changeWithCount={(count) => count + 's后重新获取'}
                                id='register'
                                ref={(e) => { this.countDownButton = e }}
                            />
                        </View>
                }



            </BaseContainer>
        )
    }

}

var styles = StyleSheet.create({

});
