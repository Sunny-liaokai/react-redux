import React,{Component}from'react'
// import store from "../../store";
// import {connect} from "react-redux";
// import {ADD, DEL} from "../../store/actionTypes";
 class Listening extends Component{
    componentDidMount() {
        // console.log('初始化')
        // store.subscribe((e)=>{
        //     console.log(store.getState())
        //     // console.log('兄弟组件听到了')
        // })
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('兄弟组件')
        return true
    }

     render() {
        return(
            <div>12</div>
        )
    }
}
export default Listening