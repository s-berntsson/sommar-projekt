const productData = require('../../assets/products.json');

export default function productReducer(state = productData){
    return state
}

// saknar actions eftersom jag inte vill ändra något i datan
// endast komma åt den genom store