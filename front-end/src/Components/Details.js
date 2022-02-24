import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function Details() {
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    axios
      .get(`${API}/bakedItems/${id}`)
      .then((response) => setItem(response.data))
      .catch((error) => console.warn(error));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`${API}/bakedItems/${id}`)
      .then(() => {
        navigate("/bakedItems");
      })
      .catch((error) => console.warn(error));
  };

  let priceFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div>
      <h4>
        '{item.name}'{" "}
        {item.featured_bestseller ? "is a featured bestseller!" : null}
      </h4>
      <p>Description: {item.description}</p>
      <p>Price: {priceFormatter.format(item.price)}</p>
      <p>
        <img src={item.image} />
      </p>
      <div>
        <Link to={"/bakedItems"}>
          <button>Back</button>
        </Link>
        <Link to={`/bakedItems/${item.id}/edit`}>
          <button>Edit</button>
        </Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Details;
