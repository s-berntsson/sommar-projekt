import { Link } from "react-router-dom";

export default function CartCard(props) {
    return (
        <div>'
        <img src={`products/${props.img}`} width='200px' alt={`Bild på ${props.name}-popcorn.`} />
            <Link to={props.name}>{props.name}</Link>
            <button>x</button>
            <p>{props.serialNum}</p>
            <p>{props.price} kr/hg</p>
        </div>
    )
}