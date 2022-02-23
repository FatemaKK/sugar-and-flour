import { Link } from "react-router-dom";

function Item({ item }) {
    return (
        <div>
            <ul>
                <li><img src={item.image} /></li>
                <li>{item.description}</li>
                <li><Link to={`/bakedItems/${item.id}`}>{item.name}</Link></li>
            </ul>
        </div>
    )
}

export default Item;