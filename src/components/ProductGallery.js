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

                <h2>Sortiment</h2>

                <select name='Sortera'> {/* Ur funktion */}
                    <option value={0}>Sortera</option>
                    <option value={1}>Pris: Stigande</option>
                    <option value={2}>Pris: Fallande</option>
                </select>
                
                { //För varje produkt-objekt, rendera ett produktkort med resp. data
                this.props.productData.map(this.renderCard)}

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