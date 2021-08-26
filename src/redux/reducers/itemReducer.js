
const initItems = [
    { title: 'item 1'},
    { title: 'item 2'},
    { title: 'item 3'}
]


export default function itemReducer(state = initItems, action) {  //STATE INITIALIZED HERE!!!
    switch(action.type) {
        case "ADD_ITEM":
            return [...state, { ...action.item }];
        default:
            return state;
    }
}