/*
 * @Author: Jonson 
 * @Date: 2020-02-26 15:26:05 
 * @Last Modified by: Jonson
 * @Last Modified time: 2020-02-26 15:40:03
 */


 //对obj对象调用Object最原始的toString方法
const toStr=(obj)=>{
    return Object.prototype.toString.call(obj);
};

 //判断当前数据的类型
//是数字或者是数字对象时当算作数字
export const isNumber=(obj)=>{return typeof obj==='number'||toStr(obj)==='[object Number]';};
//是字符串或者是字符串对象时当算作字符串
export const isString=(obj)=>{return typeof obj==='string'||toStr(obj)==='[object String]';};
export const isBool=(obj)=>{return typeof obj==='boolean'};
export const isArray=(obj)=>{return Array.isArray(obj)};
export const isObj=(obj)=>{return toStr(obj)==='[object Object]'};
export const isDate=(obj)=>{return toStr(obj)==='[object Date]'};
export const isRegExp=(obj)=>{return toStr(obj)==='[object RegExp]'};

/**
 * 根据传入的参数返回布尔值
 *          自动转布尔值的情况:0,NaN,null,undefined,''为false,其他情况为true
 *          该方法将空数组[],空对象{},数值为0的字符串'0',空白字符串'  ',也列入false中
 * @param obj
 * @returns {boolean}
 */
export const getBool=(obj)=>{
    if(isObj(obj)){let keyArr = Object.keys(obj);return !!keyArr.length}
    if(isArray(obj)){return !!obj.length}
    if(isString(obj)){
        let reg=/^\s*$/;
        let reg1=/^\s*0*(\.0*)?\s*$/;
        if(reg.test(obj)||reg1.test(obj)){return false}
    }
    return !!obj;
};