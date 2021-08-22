import {CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM} from './ActionTypes'

const defaultState = {
    inputValue: '123',
    list: ['1', '2', '3']
};

//state 是原始的页面的state，action是action函数传过来的值
export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        // console.log(newState)
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === ADD_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        console.log(newState);
        return newState;
    }
    if (action.type === DELETE_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    return state;
}
