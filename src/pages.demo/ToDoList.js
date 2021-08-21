import React from "react";
import ToDoItem from "./ToDoItem";

export default class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            list: []
        }
    }

    render() {
        return (
            < div>
                < label htmlFor="ipt1"> todolist < /label>
                <input id="ipt1" value={this.state.inputValue} onChange={this.inputChange}/>
                <button onClick={this.clickButton}>button</button>
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
        this.setState((preState)=>({
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