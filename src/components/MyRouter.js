import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Checkout from './Checkout';
import ProductGallery from './ProductGallery';
import ProductPage from "./ProductPage";

class MyRouter extends React.Component {

    createProductRoutes = (product) => {
        return (
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
                {this.props.productData.map(this.createProductRoutes)}
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