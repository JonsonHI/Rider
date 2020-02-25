/*
 * @Author: Jonson 
 * @Date: 2020-02-09 15:46:10 
 * @Last Modified by: Jonson
 * @Last Modified time: 2020-02-23 13:04:01
 */

import React, { Component, PureComponent, PropTypes } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Dimensions,
    SectionList,
    FlatList,
    TouchableOpacity
} from "react-native";
// import {setStatusBar} from '../../components/StatusBar'
import BaseContainer from '../../components/BaseContainer'
import { RouteHelper } from '../../components/NavigationHelp/RouteHelper'
import { CountDown, BouncingPreloader, RefreshSectionListView,RefreshListView } from "../../components";
import FlatItem from './FlatItem/FlatItem'
import { ENVS } from '../../config'
import { Data } from '../../data/JsonData'
import { inject, observer } from 'mobx-react'
import { observable } from 'mobx'
// @setStatusBar({
//     barStyle: 'dark-content',
//     translucent: true,
//     backgroundColor: 'transparent'
// })
@inject("HomeStore")
@observer
export default class GroupList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            num:0,
            Data:null
        };

    }



    componentDidMount() {
        this.timer = setTimeout(
            () => {
                this.setState({ isLoading: false })
                // HomeStore.isLoading = true
            },
            1000
        );
        var array = []
        for (i = 0; i < Data.goods.length; i++) {
            array.push((Object.assign({}, Data.goods[i], { 'selectIndex': i })))
        }
        // Data.goods = array
        this.setState({Data:array})
    }
    componentDidUpdate() {

    }


    _keyExtractor = (item, index) => {
        if (index) {
            return index.toString()
        }
        return index + ''

    }
    toIndex = (index) => {
        this._scrollView.scrollToLocation({
            sectionIndex: index,
            itemIndex: 0,
            viewPosition: 0,
            viewOffset: 0,
        })
    }

    itemOnChanged = (viewableItems, changed) => {
        const { HomeStore } = this.props
        // let firstItem = viewableItems[0].item.title;
        console.log(changed)
        if (viewableItems[0].section) {
            // 这里可以直接取到section的title
            // let name = firstItem.section.title;
            let index = viewableItems[0].section.selectIndex;
            // let idx = menuDatas.indexOf(name);
            this._flatlist.scrollToIndex({
                index: index,
                viewPosition: 0.5
            })
            HomeStore.flatListIndex = index

        }

    }

    render() {
        console.log(Data)
        return (
            <BaseContainer
                title={'分类'}
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
                        <View style={{ flex: 1 }}>
                            <View style={{ height: 50 }}>
                                <FlatList
                                    style={{ flex: 1 }}
                                    horizontal={true}
                                    ref={ref => (this.listview = ref)}
                                    data={[{ 'title': 1, 'listIndex': 1 }, { 'title': 2, 'listIndex': 2 }, { 'title': 3, 'listIndex': 3 }, { 'title': 4, 'listIndex': 4 }, { 'title': 5, 'listIndex': 5 }, { 'title': 6, 'listIndex': 6 }]}
                                    keyExtractor={this._keyExtractor}
                                    // contentContainerStyle={{backgroundColor: 'blue', flex: 1}}
                                    // contentContainerStyle={{backgroundColor: 'blue', height: 200}} height > 2 * 40
                                    onEndReachedThreshold={0.01} // 决定当距离内容最底部还有多远时触发onEndReached回调
                                    // scrollEventThrottle={16}
                                    showsVerticalScrollIndicator={false}
                                    // onEndReached={this._onEndReached}
                                    onLayout={this._onLayout} // 当组件挂载或者布局变化的时候调用，参数为：: {nativeEvent: { layout: {x, y, width, height}}} 这个事件会在布局计算完成后立即调用一次，不过收到此事件时新的布局可能还没有在屏幕上呈现，尤其是一个布局动画正在进行中的时候。
                                    renderItem={({ item, index }) =>
                                        <Text style={{ width: 40, justifyContent: "center", alignItems: 'center' }}>{item.title}</Text>
                                        // <FlatItem item={item} index={index} />
                                    }
                                />
                            </View>

                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={{ width: SCREEN_WIDTH * 0.3 }}>
                                    <FlatList
                                        // style={{ backgroundColor: 'blue' }}
                                        ref={ref => (this._flatlist = ref)}
                                        data={this.state.Data}
                                        keyExtractor={this._keyExtractor}
                                        // contentContainerStyle={{backgroundColor: 'blue', flex: 1}}
                                        // contentContainerStyle={{backgroundColor: 'blue', height: 200}} height > 2 * 40
                                        onEndReachedThreshold={0.01} // 决定当距离内容最底部还有多远时触发onEndReached回调
                                        scrollEventThrottle={16}
                                        showsVerticalScrollIndicator={false}
                                        onEndReached={this._onEndReached}
                                        onLayout={this._onLayout} // 当组件挂载或者布局变化的时候调用，参数为：: {nativeEvent: { layout: {x, y, width, height}}} 这个事件会在布局计算完成后立即调用一次，不过收到此事件时新的布局可能还没有在屏幕上呈现，尤其是一个布局动画正在进行中的时候。
                                        renderItem={({ item, index }) =>
                                            <FlatItem item={item} index={index} />
                                        }
                                    />
                                </View>
                                {/* <RefreshListView
                                    keyExtractor={this._keyExtractor}
                                    data={this.state.Data}
                                    refreshState={this.state.num}
                                    renderItem={({ item }) => {
                                        return (
                                            <Text style={{ height: 100 }}>{item.goodsGoryName}</Text>
                                        )
                                    }}
                                    onHeaderRefresh={() => {
                                        console.log('2222')
                                    }}
                                    onFooterRefresh={() => {
                                        console.log('1111')
                                        // setTimeout(() => {
                                        //     this.setState({
                                        //         num:2
                                        //     })
                                        // }, 500);
                                        setTimeout(() => {
                                            this.setState({
                                                num:0
                                            })
                                        }, 800);
                                        this.setState({Data:Data.goods.concat(Data.goods)})
                                        
                                    }}
                                /> */}
                                <RefreshSectionListView
                                    ref={ref => (this._scrollView = ref)}
                                    sections={this.state.Data}
                                    refreshState={this.state.num}
                                    keyExtractor={this._keyExtractor}
                                    renderSectionHeader={({ section: { title } }) => (
                                        <View style={{ height: 38, backgroundColor: '#fff', paddingHorizontal: 10, borderBottomWidth: 1, borderBottomColor: '#f1f1f1', flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={{ fontSize: 12, color: '#808080', lineHeight: 38 }}>{title}</Text>
                                        </View>
                                    )}
                                    onViewableItemsChanged={(info) => {
                                        // console.log(JSON.stringify(info))
                                        this.itemOnChanged(info.viewableItems, info.changed)
                                    }}
                                    // onEndReachedThreshold={0.1}
                                    // getItemLayout={this.getItemLayout}
                                    renderItem={({ item }) => {
                                        return (
                                            <Text style={{ height: 100 }}>{item.goodsGoryName}</Text>
                                        )
                                    }}
                                    onHeaderRefresh={
                                        console.log('222')
                                    }
                                    onFooterRefresh={()=>{
                                        console.log('11111')
                                         setTimeout(() => {
                                            this.setState({
                                                num:2
                                            })
                                        }, 500);
                                        setTimeout(() => {
                                            this.setState({
                                                num:0
                                            })
                                        }, 800);
                                        this.setState({Data:Data.goods.concat(this.state.Data)})
                                        // this.listview.scrollToIndex({
                                        //     index: index,
                                        //     viewPosition: 0.5
                                        // })
                                    }}
                                // ListFooterComponent={() => <View style={{height:20}}/>}
                                // maxToRenderPerBatch={20}
                                // updateCellsBatchingPeriod={1}
                                // windowSize={51}
                                />
                            </View>
                        </View>
                }



            </BaseContainer>
        )
    }

}

var styles = StyleSheet.create({

});
