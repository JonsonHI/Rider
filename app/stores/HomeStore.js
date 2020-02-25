/*
 * @Author: Jonson 
 * @Date: 2020-02-09 14:07:53 
 * @Last Modified by: Jonson
 * @Last Modified time: 2020-02-21 18:35:32
 */

import { action, computed, observable, toJS } from "mobx";

import { ConfigStore } from "./ConfigStore";
export default class HomeStore extends ConfigStore {
    @observable  flatListIndex = null
}