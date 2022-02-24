import { Link } from "react-router-dom";

function Item({ item }) {
  let priceFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div>
      <ul>
        <li>
          <img src={item.image} />
        </li>
        <li>
          <Link to={`/bakedItems/${item.id}`}>{item.name}</Link>
        </li>
        <li>{item.description}</li>
        <li>Price: {priceFormatter.format(item.price)}</li>
        <li>Rating: {item.rating}</li>
      </ul>
    </div>
  );
}

export default Item;
