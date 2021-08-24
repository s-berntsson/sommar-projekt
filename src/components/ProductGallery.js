import ProductCard from "./ProductCard";


function ProductGallery() {
    return(
        <div>
            <h3>this is the product gallery</h3>
            <ProductCard/>
            {/* 

            - Rendera ut alla produktkort med länk till produktsidan
            - Onclick körs funktion som renderar sidan för den specifika produkten
            - Går det att koppla renderingen av produktsidan så att den anpassar sig efter path?

             */}
        </div>
    )
}

export default ProductGallery;