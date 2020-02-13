/*
 * @Author: Jonson 
 * @Date: 2020-02-09 14:10:22 
 * @Last Modified by:   Jonson 
 * @Last Modified time: 2020-02-09 14:10:22 
 */

import React from "react";
import { ActivityIndicator, StyleSheet, Text, View,Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
export default class MyLoading extends React.Component {
    constructor(props) {
        super(props);
        this.minShowingTime = 200;
        this.state = {
            isLoading : false,
            setIsLoading : (isLoading) => {
                if (isLoading != this.state.isLoading) {
                    let curTimeLong = new Date().getTime();
                    if (isLoading) {
                        this.startTime = curTimeLong;
                        this.setState({
                            isLoading
                        });
                    } else {
                        let hasShowingTimeLong = curTimeLong - this.startTime;
                        if (hasShowingTimeLong < this.minShowingTime) {
                            setTimeout(() => {
                                this.setState({
                                    isLoading
                                });
                            }, this.minShowingTime - hasShowingTimeLong);

                        } else {
                            this.setState({
                                isLoading
                            });
                        }
                    }

                }
            },
        };
    }

    showLoading = () => {
        this.state.setIsLoading(true);
    };
    dismissLoading = () => {
        this.state.setIsLoading(false);

    };

    render() {
        if (!this.state.isLoading) {
            return null;
        }
        return (
            <View style={{
                flex : 1,
                width : width,
                height : height,
                position : 'absolute',
                // backgroundColor:'red',
                backgroundColor : 'rgba(52,52,52,alpha)',
            }}>
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color="white" />
                    <Text style={styles.loadingTitle}>加载中...</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loading : {
        backgroundColor : LoadingColor,
        height : 80,
        width : 100,
        borderRadius : 10,
        justifyContent : 'center',
        alignItems : 'center',
        position : 'absolute',
        top : (height - 80) / 2,
        left : (width - 100) / 2,
    },

    loadingTitle : {
        marginTop : 10,
        fontSize : 14,
        color : 'white'
    }
});