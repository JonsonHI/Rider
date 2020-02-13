/*
 * @Author: Jonson 
 * @Date: 2020-02-11 22:13:44 
 * @Last Modified by: Jonson
 * @Last Modified time: 2020-02-12 14:45:13
 */
import React from 'react'
import hoistNonReactStatics from '../hoistNonReactStatics'
import { StatusBar } from 'react-native'

export const setStatusBar = (statusbarProps = {}) => WrappedComponent => {
  class Component extends React.PureComponent {
    constructor(props) {
      super(props)
      this._navListener = nav.addListener('willFocus', this._setStatusBar)
    }

    componentWillUnmount() {
      this._navListener.remove();
    }

    _setStatusBar = () => {
      const {
        barStyle = "dark-content",
        backgroundColor = '#fff',
        translucent = false
      } = statusbarProps
      StatusBar.setBarStyle(barStyle)
      if (Android) {
        StatusBar.setTranslucent(translucent)
        StatusBar.setBackgroundColor(backgroundColor);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  return hoistNonReactStatics(Component, WrappedComponent);
}
// global.setStatusBar =  setStatusBar