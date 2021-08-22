import React from "react";
import ToDoItem from "./ToDoItem";
import axios from "axios";
import 'antd/dist/antd.css'
import {Input} from 'antd';
import {Button} from 'antd';

export default class ToDoList extends React.Component {
    constructor(props) {
        super(props);
    }

    //即将挂在到页面前执行
    UNSAFE_componentWillMount() {
        console.log("will mount")
    }

    //组件被挂载之后执行
    componentDidMount() {
        console.log(" did mount")
        axios.get('/api/todolist')
            .then((res) => {
                console.log(res.data);
                this.setState(() => ({
                    list: [...res.data]
                }))
            })
            .catch(() => {
                console.log("err")
            })
    }

    // 组件被更新之前会被执行
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("should component update")
        return true;
    }

    //组件被更新之前会被执行
    UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("component will update")
    }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //      console.log("snapshot before update")
    //     return true;
    // }

    //组件更新之后会被执行
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("component did update")
    }


    render() {
        console.log("parent render")
        return (
            < div>
                < label htmlFor="ipt1"> todolist < /label>
                <Input id="ipt1" value={this.state.inputValue} onChange={this.inputChange}/>
                <Button type="primary" onClick={this.clickButton}>提交</Button>
                <ul>
                    {this.getItem()}
                </ul>
            </div>
        );
    }

    getItem = () => {
        return this.state.list.map((item, index) => {
            return (<ToDoItem content={item} idx={index} deleteItem={this.removeItem.bind(this)}/>);
        })
    }

    inputChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({inputValue: value}))
    }

    clickButton = () => {
        this.setState((preState) => ({
            list: [...preState.list, preState.inputValue],
            inputValue: ""
        }))
    }

    removeItem = (idx) => {
        let index = idx;
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list
        })
    }
};