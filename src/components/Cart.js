import React from 'react';
import { connect } from 'react-redux';
import * as cartActions from '../redux/actions/cartActions'; //need later for adding "remove product"-action
import CartCard from './CartCard';

/*

för varje objekt i productData, gå igenom vagnen och jämför
- om objektets namn finns i vagnen, lägg till på listan

*/


class Cart extends React.Component {

    renderCartCard = (product) => {
        return (
        <CartCard key={product.SerialNumber} serialNum={product.SerialNumber} 
        name={product.name} img={product.img} price={product.pricePerHekto} />
        )
    }

    render() {
        return (
            <div>

                <p>kundvagnen</p>

                {
                this.props.productData.filter(
                    object => this.props.contents.includes(object.name))
                    .map(this.renderCartCard)
                }

                <section>
                    <h3>Totalt</h3>
                    <h3>{this.props.total}</h3>
                </section>

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

