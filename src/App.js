import  React,{Component,Fragment} from 'react'
import TodoList from "./Component/TodoList/TodoList";
import Listening from "./Component/Listening/Listening"
export default class App extends Component {
    render() {
        return (
            <Fragment>
                <TodoList/>
                <Listening/>
            </Fragment>
        )
    }
};
