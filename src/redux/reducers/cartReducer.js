const cartState = {
    contents: ['hej', 'hejhej'],
    total: 0
}

export default function cartReducer(state = cartState, action) {  
    switch(action.type) {
        case "ADD_PRODUCT":
            return [{...state.contents}, ...action.product ];
        default:
            return state;
    }
}


/* 

STATE

- cart: []  - fylls på med product titles
- sort: 0, stigande eller fallande
- total: summan av priserna på produkter i cart
- products: all produktinformation

*/