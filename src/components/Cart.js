import React from 'react';
import { connect } from 'react-redux';
import * as cartActions from '../redux/actions/cartActions'; //need later for adding "remove product"-action
import CartCard from './CartCard';


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
                /* för varje objekt i productData, gå igenom vagnen och jämför
                    1. om objektets namn finns i vagnen, lägg till på listan 
                    2. rendera produktkort utefter nya listan */
                this.props.productData.filter(
                    object => this.props.contents.includes(object.name)) //1
                    .map(this.renderCartCard) //2
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
        cart: state.cart, //Ta bort? Används inte...
        contents: state.cart.contents,
        total: state.cart.total,
        productData: state.productData
    };
}


export default connect(mapStateToProps)(Cart);

