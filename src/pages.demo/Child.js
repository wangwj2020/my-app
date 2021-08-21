import React from "react";

export default class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            count:0
        }
    }

    componentWillMount() {
        console.log("will mount")
    }

    componentDidMount() {
        console.log("did mount")
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log("will pros "+nextProps.name)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("should update ")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("did update")
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
    }

    render() {
        return <div>
            <p>这里是子组建，测试子组建的生命周期</p>
            <p>{this.props.count}</p>
        </div>
    }

};