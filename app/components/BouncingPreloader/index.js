/*
 * @Author: Jonson 
 * @Date: 2020-02-09 15:46:10 
 * @Last Modified by: Jonson
 * @Last Modified time: 2020-02-18 14:56:11
 */

import React, { Component, PureComponent, PropTypes } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Dimensions,
} from "react-native";

import Bounc from "../../utils/Bounc";


export default class BouncingPreloader extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };

    }

    componentDidMount() {
    }
    componentDidUpdate() {

    }


    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Bounc
                    icons={[
                        myImg.timg
                    ]}
                    leftDistance={10}
                    rightDistance={0}
                    leftRotation="-0deg"
                    rightRotation="180deg"
                    speed={1000}
                    size={80}
                />
                <Text style={{fontSize:16}}>加 载 中 .......</Text>
            </View>

        )
    }

}

var styles = StyleSheet.create({

});
