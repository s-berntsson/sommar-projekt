import ProductCard from "./ProductCard";
import { connect } from 'react-redux';
import React from "react";



class ProductGallery extends React.Component {

    renderCard = (product) => {
        return (
            <ProductCard key={product.SerialNumber} name={product.name} price={product.pricePerHekto}
                img={product.img} characteristics={product.characteristics} />
        )
    }
    render() {
        return (
            <div>

                <h3>this is the product gallery</h3>

                {this.props.productData.map(this.renderCard)}

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        productData: state.productData
    };
}


export default connect(mapStateToProps)(ProductGallery);