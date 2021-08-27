import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Checkout from './Checkout';
import ProductGallery from './ProductGallery';
import ProductPage from "./ProductPage";

class MyRouter extends React.Component {  //Lyckades inte fixa redux+funktionella komponenter så alla container components är tyvärr klasskomponenter

    createProductRoutes = (product) => {
        return (
            /* för varje produkt, skapa path och koppla till komponent som innehåller produktinfo till samma produkt*/
            <Route exact path={'/' + product.name} key={product.SerialNumber}>
                <ProductPage serialNum={product.SerialNumber} name={product.name} price={product.pricePerHekto}
                img={product.img} characteristics={product.characteristics} desc={product.desc} />
            </Route>
        )
    }

    render() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={ProductGallery} />
                {
                // skapa routes för alla produkter 
                this.props.productData.map(this.createProductRoutes)
                }
                <Route exact path='/checkout' component={Checkout} />
            </Switch>
        </div>
    )
}}

function mapStateToProps(state) {
    return {
        productData: state.productData
    };
}


export default connect(mapStateToProps)(MyRouter);