import React from 'react';
import { connect } from 'react-redux';
import * as cartActions from '../redux/actions/cartActions';

class Cart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {  //state is used here to save the event target of handleChange, so that we can use it in handleSubmit
            item: {
                title: ""
            }
        }; 
    }


    handleClick = (event) => {
        this.props.dispatch(cartActions.addProduct(event.target.value));
        console.log(this.props.contents);
    }

    render() {
        return (
            <div>
                
                <p>kundvagnen</p>

                <button type='button' onClick={this.handleClick} value='product title'>add product</button>

            </div>
        )
    }}

    function mapStateToProps(state) {
    return {
        cart: state.cart,
        contents: state.cart.contents,
        total: state.cart.total
    };
}


export default connect(mapStateToProps)(Cart);

