const cartState = { //Initiella state
    contents: [],  //Tom kundvagn
    total: 0   //Totalpriset är 0
}

export default function cartReducer(state = cartState, action) {
    switch (action.type) {

        case "ADD_PRODUCT": {
            return {
                ...state,
                contents: [
                    ...state.contents,
                    (action.product)
                ]

            }
        }
        case "ADD_COST": {
            const cost = parseInt(action.cost)  //Vet inte var i koden den slutade vara ett nummer, haha

            return {
                ...state,
                total: state.total + cost 
            }
        }
        default:
            return state
    }
}



/*

STATE

- cart: []  - fylls på med product titles
- sort: 0, stigande eller fallande
- total: summan av priserna på produkter i cart
- products: all produktinformation

*/