import AddToCart from "./AddToCart";

function ProductPage(props) {

    const renderCharacteristics = (obj) => {

        const keys = Object.keys(obj);
        const values = Object.values(obj);

        // Hårdkodar detta så länge, for-loop funkar inte med return :(
            return (
                <ul>
                <li key={keys[0]}>
                    <h3>{keys[0]}</h3>
                    <h1>{values[0]}</h1>
                </li>
                <li key={keys[1]}>
                    <h3>{keys[1]}</h3>
                    <h1>{values[1]}</h1>
                </li>
                <li key={keys[2]}>
                    <h3>{keys[2]}</h3>
                    <h1>{values[2]}</h1>
                </li>
                </ul>
            )

    }

    return (
        <div>
            <section>
                <img src={`products/${props.img}`} height='500px' alt={`Bild på ${props.name}-popcorn`}></img>
                {renderCharacteristics(props.characteristics)}
            </section>
            <h2>{props.name}</h2>
            <aside>{'Artikelnr: ' + props.serialNum}</aside>
            <p>{props.desc}</p>
            <h4 className='large-price'>149</h4>
            <h2>kr/hg</h2>
            <AddToCart name={props.name} price={props.price}/>
        </div>
    )
}

export default ProductPage;