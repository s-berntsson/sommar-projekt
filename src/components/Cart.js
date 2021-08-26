import React from 'react';
import { connect } from 'react-redux';
import * as cartActions from '../redux/actions/cartActions';

class Cart extends React.Component {

    handleClick = async (event) => {
        await this.props.dispatch(cartActions.addProduct(event.target.value));
        console.log(this.props.contents);
    }

    render() {
        return (
            <div>

                <p>kundvagnen</p>

                <button type='button' onClick={this.handleClick} value='popcorn'>add product</button>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart,
        contents: state.cart.contents,
        total: state.cart.total
    };
}


export default connect(mapStateToProps)(Cart);

