import React from 'react';
import { connect } from 'react-redux';
import * as cartActions from '../redux/actions/cartActions'; //need later for adding "remove product"-action
import CartCard from './CartCard';

class Cart extends React.Component {

    renderCartCard = (product) => {
        return (
        <CartCard key={product} name={product} />
        )
    }

    render() {
        return (
            <div>

                <p>kundvagnen</p>

                {this.props.contents.map(this.renderCartCard)}

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart,
        contents: state.cart.contents,
        total: state.cart.total,
        productData: state.productData
    };
}


export default connect(mapStateToProps)(Cart);

