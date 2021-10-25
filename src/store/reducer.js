import {ADD,DEL} from "./actionTypes";
import {combineReducers} from "redux"
//默认数据
const defaultState = {
    list: [
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
}
/**
 *仓库管理者 记住：Reducer里只能接收state，不能改变state
 * @param state 原始数据
 * @param actions //新的提交数据
 */
 function reducer(state = defaultState, actions){
    console.log(actions)
    let newState=JSON.parse(JSON.stringify(state))
    switch (actions.type) {
        case ADD:
            newState.list.unshift(actions.value)
            return newState;
        case DEL:
            newState.list.splice(actions.index,1)
            return newState
        default:
            return state
    }
}
function ADD_reducer(state = [], actions){
    console.log(actions)
    return state
}

/**
 * combineReducers组合还原剂，可以创建不同的管理者（白话，文件）
 * @type {Reducer<CombinedState<unknown>>}
 */

export default combineReducers ({
    reducer,
    ADD_reducer
})