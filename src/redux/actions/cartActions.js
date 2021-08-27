export function addProduct(product) {
    return { type: "ADD_PRODUCT", product }
};

export function addCost(cost) {
    return { type: "ADD_COST", cost }
};


// Lägga till "REMOVE_PROODUCT" och "SUBTRACT_COST" när varor tas bort från cart