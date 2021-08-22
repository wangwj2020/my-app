import React from "react";
import axios from "axios";
import 'antd/dist/antd.css'
import {Input} from 'antd';
import {Button} from 'antd';
import {List, Avatar} from 'antd';
import store from "../store";
import {CHANGE_INPUT_VALUE,ADD_ITEM,DELETE_ITEM} from '../store/ActionTypes'

export default class ToDoListPro extends React.Component {
    constructor(props) {
        super(props);
        console.log(store.getState());
        this.state = store.getState();
        store.subscribe(this.storeChangeHandler);
    }

    storeChangeHandler = () => {
        const newState = store.getState();
        this.setState(newState);
    }

    //组件被挂载之后执行
    componentDidMount() {
        console.log(" did mount")

    }

    render() {
        console.log("parent render")
        return (
            < div>
                < label htmlFor="ipt1"> todolist < /label>
                <Input id="ipt1" value={this.state.inputValue} onChange={this.inputChange}/>
                <Button type="primary" onClick={this.clickButton}>提交</Button>
                <div>
                    <List
                        dataSource={this.state.list}
                        renderItem={(item, index) => (
                            <List.Item onClick={this.removeItem.bind(this, index)}>
                                <List.Item.Meta
                                    avatar={<Avatar
                                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                                    title={<a href="https://ant.design">{item.title}</a>}
                                    description={item}
                                />
                            </List.Item>
                        )}
                    />
                </div>
            </div>

        );
    }

    inputChange = (e) => {
        const value = e.target.value;
        // this.setState(() => ({inputValue: value}))
        const action = {
            type: CHANGE_INPUT_VALUE,
            value: value
        }
        store.dispatch(action);
    }

    clickButton = () => {
        // this.setState((preState) => ({
        //     list: [...preState.list, preState.inputValue],
        //     inputValue: ""
        // }))
        const action = {
            type: ADD_ITEM
        }
        store.dispatch(action);
    }

    removeItem = (idx) => {
        // console.log(idx);
        const action = {
            type: DELETE_ITEM,
            index: idx
        }
        store.dispatch(action);
    }

}

