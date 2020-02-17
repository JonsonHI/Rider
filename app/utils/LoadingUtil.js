/*
 * @Version: 1.0
 * @Autor: Jonson
 * @LastEditors: Seven
 * Loading页面工具类
 * @Date: 2019-04-05 10:34:31
 * @LastEditTime: 2019-04-07 21:14:00
 */
let LoadingUtil = {
    showLoading(timeOut = 10000){
        global.mLoadingComponentRef && global.mLoadingComponentRef.showLoading();
        this.timerLoading = setTimeout(() => {
            this.dismissLoading();
        }, timeOut);

    },
    dismissLoading(){
        global.mLoadingComponentRef && global.mLoadingComponentRef.dismissLoading();
        this.timerLoading && clearTimeout(this.timerLoading);

    },
};

export default LoadingUtil;