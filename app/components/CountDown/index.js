/*
 * @Author: Jonson 
 * @Date: 2020-02-15 23:36:42 
 * @Last Modified by: Jonson
 * 使用
 * <LCCountDownButton frameStyle={{top:44 * 3 + 4,right:10,width:120,height:36,position:'absolute'}}
        beginText='获取验证码'
        endText='再次获取验证码'
        count={10}
        pressAction={()=>{this.countDownButton.startCountDown()}}
        changeWithCount={(count)=> count + 's后重新获取'}
        id='register'   
        ref={(e)=>{this.countDownButton=e}}
        />
 * 
 * @Last Modified time: 2020-02-16 00:05:32
 */
import React, { Component, PropTypes } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

const CountDownButtonState = {
    CountDownButtonActive: 0,
    CountDownButtonDisable: 1,
}

// {id , startTime, deathCount}
var timeRecodes = [];  //根据id来记录LCCountDownButton的信息

export default class CountDown extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            btnTitle: '默认',
            buttonState: CountDownButtonState.CountDownButtonActive
        }
    }

    static defaultProps = {
        id: "id",           //按钮的身份标识,同一个页面的按钮是同一个id
        beginText: "beginText",    //初始状态按钮title
        endText: "endText",      //读秒结束后按钮的title
        count: 60,             //总的计时数 单位是秒s
        pressAction: () => { },         //按下按钮的事件,但是触发倒数(startCountDown)需要你自己来调用
        changeWithCount: () => { },         //读秒变化的函数,该函数带有一个参数count,表示当前的剩余事件
        end: () => { },         //读秒完毕后的回调,读秒结束触发
        frameStyle: {},             //初始化的位置大小
        disableStyle: {},             //按钮禁用的时候样式                 (有默认,见底部styles)
        activeStyle: {},             //active情况下按钮样式              (有默认,见底部styles)
        disableTextStyle: {},             //按钮禁用的时候里面文字的样式        (有默认,见底部styles)
        activeTextStyle: {},             //active情况下按钮里面文字的样式      (有默认,见底部styles)
    }

    componentWillMount() {
        this.shouldSetState = true;
        this.setState({
            btnTitle: this.props.beginText,
            buttonState: CountDownButtonState.CountDownButtonActive
        })
    }

    componentDidMount() {
        const { id, changeWithCount } = this.props;
        for (var i = 0; i < timeRecodes.length; i++) {
            let obj = timeRecodes[i];
            if (obj.id == id) {
                let liveTime = Date.now() - obj.startTime
                if (liveTime < obj.deathCount * 1000) {
                    //避免闪动
                    let detalTime = Math.round(liveTime / 1000);
                    let content = changeWithCount(obj.deathCount - detalTime);
                    this.setState({
                        btnTitle: content
                    });
                    //手动调用倒计时
                    this.startCountDownWithCount(obj.startTime)
                }
            }
        }

    }

    clearTime() {
        if (this.interval) {
            clearInterval(this.interval)
        }
    }

    componentWillUnmount() {
        this.shouldSetState = false;
        this.clearTime();
    }

    startCountDownWithCount(startTime) {
        this.setState({ buttonState: CountDownButtonState.CountDownButtonDisable });
        const { changeWithCount, endText, count, end } = this.props;
        this.startTime = startTime;
        this.interval = setInterval(() => {
            let detalTime = Math.round((Date.now() - this.startTime) / 1000);
            let content = changeWithCount(count - detalTime);
            if (detalTime >= count) {
                content = endText;
                this.clearTime();
                end && end();
                this.setState({ buttonState: CountDownButtonState.CountDownButtonActive });
            }
            if (this.shouldSetState) {
                this.setState({
                    btnTitle: content
                })
            }
        }, 100)
    }

    recordButtonInfo() {
        const { id, count } = this.props;
        var hasRecord = false;
        for (var i = 0; i < timeRecodes.length; i++) {
            let obj = timeRecodes[i];
            if (obj.id == id) {
                obj.startTime = Date.now();
                hasRecord = true;
                break;
            }
        }
        if (!hasRecord) {
            let buttonInfo = {
                id: id,
                deathCount: count,
                startTime: Date.now()
            }
            timeRecodes.push(buttonInfo)
        }
    }

    //外界调用
    startCountDown() {
        this.startCountDownWithCount(Date.now());
        this.recordButtonInfo();
    }

    buttonPressed = () => {
        const { pressAction } = this.props;
        pressAction();
    }

    render() {
        let isDisable = this.state.buttonState == CountDownButtonState.CountDownButtonDisable;
        const { frameStyle, disableStyle, activeStyle, disableTextStyle, activeTextStyle }
            = this.props;
        return (
            <TouchableOpacity disabled={isDisable}
                onPress={this.buttonPressed}
                style={[
                    styles.buttonCommonStyle,
                    isDisable ? styles.disableButtonStyle : styles.activeButtonStyle,
                    isDisable ? disableStyle : activeStyle,
                    frameStyle
                ]}
            >
                <Text style={[
                    styles.txtCommonStyle,
                    isDisable ? styles.disableTxtStyle : styles.activeTxtStyle,
                    isDisable ? disableTextStyle : activeTextStyle
                ]}>
                    {this.state.btnTitle}
                </Text>
            </TouchableOpacity>
        );
    }


}

const styles = StyleSheet.create({

    buttonCommonStyle: {
        borderRadius: 3,
        borderWidth: 1,
        borderColor: 'gray',
        paddingRight: 8,
        paddingLeft: 8,
        paddingTop: 8,
        paddingBottom: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    //禁用时候的TouchableOpacity样式
    disableButtonStyle: {
        backgroundColor: 'red',
    },
    //可以点击时候的TouchableOpacity样式
    activeButtonStyle: {
        backgroundColor: 'green',
    },

    txtCommonStyle: {
        fontSize: 14,
    },
    //禁用时候的Text样式
    disableTxtStyle: {
        color: 'gray',
    },
    //可以点击时候的Text样式
    activeTxtStyle: {
        color: 'black',
    }
});