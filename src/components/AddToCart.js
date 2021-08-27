import React from 'react';
import * as cartActions from '../redux/actions/cartActions';
import { connect } from 'react-redux';

class AddToCart extends React.Component {
    constructor(props) {
        super(props)
    }

    handleClick = async (event) => {
        await this.props.dispatch(cartActions.addProduct(event.target.name));
        await this.props.dispatch(cartActions.addCost(event.target.value));
        console.log(event.target.cost);
        console.log(this.props.contents);
        console.log(this.props.total);
    }

    render() {
        return(
            <button onClick={this.handleClick} name={this.props.name} value={this.props.price}>Add to cart</button>
        )
    }

}



function mapStateToProps(state, ownProps) {
    return {
        cart: state.cart,
        contents: state.cart.contents,
        total: state.cart.total,
        value: ownProps.value,
        price: ownProps.price
    };
}


export default connect(mapStateToProps)(AddToCart);