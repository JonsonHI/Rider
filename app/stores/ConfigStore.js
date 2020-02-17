/*
 * @Author: Jonson 
 * @Date: 2020-02-09 14:07:20 
 * @Last Modified by: Jonson
 * @Last Modified time: 2020-02-16 22:15:54
 */
import { observable, action } from 'mobx';

class ConfigStore {
    @observable
    isError: boolean = false;
    @observable
    isLoading: boolean = true;
    @observable
    isConnect: boolean = false;
    @observable
    errorInfo: ErrorInfo;
    @observable
    loadingType: string;
}  
export { ConfigStore };