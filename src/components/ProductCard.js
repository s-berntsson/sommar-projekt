import { Link } from "react-router-dom";


function ProductCard(props) {

    const renderListItems = (obj) => {

        const keys = Object.keys(obj);

        return (
            <ul>
                <li className={keys[0]}>{keys[0] + ': ' + obj.size}</li>
                <li className={keys[1]}>{keys[1] + ': ' + obj.flavour}</li>
                <li className={keys[2]}>{keys[2] + ': ' + obj.hardness}</li>
            </ul>
        )
    }

    return (
        <div>
            <img src={`products/${props.img}`} width='200px' alt={`Bild på ${props.name}-popcorn.`} />
            <Link to={props.name}>{props.name}</Link>
            <p>{props.price} kr/hg</p>
            <aside>INFO-BUTTON</aside>
            {renderListItems(props.characteristics)}
            <aside>Add to cart</aside>
        </div>
    )
}

export default ProductCard;
