/*
 * @Author: Jonson 
 * @Date: 2020-02-12 12:12:08 
 * @Last Modified by: Jonson
 * @Last Modified time: 2020-02-12 12:12:30
 */

import React, { Component } from 'react';
import { View, ActivityIndicator, Modal } from 'react-native';
// import MToast from '../../resource/modaltoast/ModalToast';
import { observer } from 'mobx-react';

type Props = {
  isVisible?: boolean
};
@observer
export default class LoadingSpinner extends Component<Props> {
  render() {
    const { isVisible } = this.props;

    return (
      <Modal transparent={true} onRequestClose={() => { }} visible={isVisible} animationType={'fade'}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 80,
              height: 80,
              backgroundColor: '#DEDEDD',
              borderRadius: 10
            }}
          >
            {/* {
              MToast.show(toastOpts = {
                data: 'Loading',
                textFont: 14,
                textColor: '#ffffff',
                backgroundColor: '#DEDEDD',
                position: MToast.position.CENTER, // 1.TOP 2.CENTER 3.BOTTOM
                icon: <ActivityIndicator color='#fff' size={'large'} />
              })
            } */}
            <ActivityIndicator size="large" color="white" />
          </View>
        </View>
      </Modal>
    );
  }
}
