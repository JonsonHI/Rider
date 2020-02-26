/*
 * @Author: Jonson 
 * @Date: 2020-02-09 15:46:10 
 * @Last Modified by: Jonson
 * @Last Modified time: 2020-02-26 15:43:52
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
import {isNumber, getBool, isArray} from '../../utils/CommonUtils'


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

    isNumber = () =>{
        alert(isArray([':','']))
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
                <Text style={{marginTop:50}}
                    onPress={()=> this.isNumber()}
                >登录页</Text>



            </BaseContainer>
        )
    }

}

var styles = StyleSheet.create({

});
