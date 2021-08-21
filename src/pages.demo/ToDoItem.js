import React from "react";
import PropTypes from "prop-types";

export default class ToDoItem extends React.Component {
    render() {
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