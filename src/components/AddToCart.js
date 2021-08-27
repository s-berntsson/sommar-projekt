import React from 'react';
import * as cartActions from '../redux/actions/cartActions';
import { connect } from 'react-redux';

class AddToCart extends React.Component {

    handleClick = () => {

        //När "add to cart"-klickas ska kundvagnens innehåll samt totalpriset uppdateras
        this.props.dispatch(cartActions.addProduct(this.props.name));
        this.props.dispatch(cartActions.addCost(this.props.price));
    }

    render() {
        return (
            <button onClick={this.handleClick}>Add to cart</button>
        )
    }

}


//Kopplad till store så att dispatch kan ske, trots att state ej används
function mapStateToProps(state, ownProps) {  
    return {
        name: ownProps.name,
        price: ownProps.price
    };
}


export default connect(mapStateToProps)(AddToCart);