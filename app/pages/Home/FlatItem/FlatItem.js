/*
 * @Author: Jonson 
 * @Date: 2020-02-21 18:19:54 
 * @Last Modified by: Jonson
 * @Last Modified time: 2020-02-22 18:51:46
 */

import React, { Component, PureComponent, PropTypes } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Dimensions,
    TouchableOpacity
} from "react-native";
// import {BaseContainer} from '../../components'
import { inject, observer } from 'mobx-react'
import { observable } from 'mobx'


// @setStatusBar({
//     // barStyle: 'light-content',
//     // translucent: true,
//     backgroundColor: 'red'
// })
@inject("HomeStore")
@observer
export default class FlatItem extends Component {



    constructor(props) {
        super(props);
        this.state = {
            // textColor:
        };

    }



    componentDidMount() {

    }

    render() {
        // console.log(nav)
        const { HomeStore, index,item } = this.props
        if(index === HomeStore.flatListIndex){
            return (
                <TouchableOpacity onPress={() => this.toIndex(index)}
                    style={{backgroundColor:'gray'}}
                >
                    <View style={{justifyContent:'center',alignItems:"center",height:50 }}>
                    <Text style={{ color: 'blue',}}>{item.title}</Text>
                    </View>
                    
                </TouchableOpacity>
            )
        }
        return (
            <TouchableOpacity onPress={() => this.toIndex(index)}>
                <Text style={{ height: 50, color: 'black' }}>{item.title}</Text>
            </TouchableOpacity>
        )
        
    }

}

var styles = StyleSheet.create({

});
