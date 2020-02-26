/*
 * @Author: Jonson 
 * @Date: 2020-02-09 15:46:10 
 * @Last Modified by: Jonson
 * @Last Modified time: 2020-02-26 11:30:53
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


export default class Home extends Component {


    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        };

    }



    componentDidMount() {

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
                <Text>登录页</Text>



            </BaseContainer>
        )
    }

}

var styles = StyleSheet.create({

});
