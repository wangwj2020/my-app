import React from "react";
import PropTypes from "prop-types";


export default class ToDoItem extends React.Component {
    render() {
        console.log("child render")
        const {idx, content, test} = this.props;
        return (
            <li onClick={this.handlerClick} key={idx}>
                {content}-{test}
            </li>
        );
    }

    handlerClick = () => {
        const {deleteItem, idx} = this.props;
        deleteItem(idx);
    }

    // 一个组件要从父组件接受参数
    // 如果这个组件第一次存在于父组件中，不会被执行
    // 如果这个组件之前已经存在于父组件中，才会被执行
    componentWillReceiveProps(nextProps, nextContext) {
        console.log("child component will receive props")
    }

    //当组件即将从页面被移除时会被执行
    componentWillUnmount() {
        console.log("child component will unmount")
    }
};

//数据类型校验
ToDoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

//数据默认值
ToDoItem.defaultProps = {
    test: "hello world"
};