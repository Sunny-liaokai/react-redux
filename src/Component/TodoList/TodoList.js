import React, { Component } from 'react';
import {Input,Button,List} from "antd";
import './index.css'
import {connect} from "react-redux";
import {ADD,DEL} from "../../store/actionTypes";
class TodoList extends Component {
    state = {
        inputValue:''
    }
    handleInputChange=(e)=>{
        this.setState({
            inputValue:e.target.value
        })
    }
    // storeChange=()=>{
    //     console.log('订阅')
    //     this.setState({
    //         store:store.getState()
    //     })
    // }
    componentDidMount() {
        // store.subscribe(this.storeChange)//订阅信息 监听redux修改后
    }

    render() {
        // console.log(this)
        let {handleClickAdd,handleClickDel}=this.props
        return (
            <div style={{margin:'0 auto'}}>
                <div className='center'>
                    <Input placeholder='Write Something'
                           value={this.state.inputValue}
                           style={{width: '250px',marginRight:'10px'}}
                           onChange={this.handleInputChange}
                    />
                    <Button type="primary" onClick={()=>{handleClickAdd(this.state.inputValue)}}>增加</Button>
                </div>
                <div style={{marginTop:'10px'}}>
                    <List
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item,index)=>(<List.Item onClick={()=>{
                            handleClickDel(index)
                        }}>{item}</List.Item>)}
                    >
                    </List>
                </div>
            </div>
        );
    }
}
//connect stateToProps将原来的仓库映射成组件的props属性 也就是可以通过props拿到仓库的数据
const stateToProps = ({ADD_reducer,reducer})=>{
    return {
        list:reducer.list
    }
}
// connect dispatchToProps通过它来修改仓库中的store数据
const dispatchToProps = (dispatch) =>{
    return {
        handleClickAdd(value){
            dispatch({type:ADD,value}) //dispatch第一个type为描述内容 第二个要改变的值
        },
        handleClickDel(index){
            dispatch({type:DEL,index})
        }
    }
}

export default connect(stateToProps,dispatchToProps)(TodoList);
//映射关系就是把原来的state映射成组件中的props属性,在组件中可以通过props调用方法或state