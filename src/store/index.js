import {createStore} from 'redux' //  引入createStore方法
import Reducers from "./reducer";//导入管理者
const Compatible = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()//这句话添加以后可以使用redux调试工具
const store = createStore(Reducers, Compatible)//将管理者派发给仓库
export default store