import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function New() {
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  const [item, setItem] = useState({
    name: "",
    description: "",
    price: "",
    rating: "",
    featured_bestseller: false,
    image: "",
  });

  const addItem = (newItem) => {
    axios
      .post(`${API}/bakedItems`, newItem)
      .then(() => {
        navigate("/bakedItems");
      })
      .catch((error) => console.warn(error));
  };

  const handleTextChange = (event) => {
    setItem({ ...item, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem(item);
  };

  const handleCheckBoxChange = () => {
    setItem({ ...item, featured_bestseller: !item.featured_bestseller });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={item.name}
          type="text"
          onChange={handleTextChange}
        />
        <br />
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          value={item.description}
          type="text"
          onChange={handleTextChange}
        />
        <br />
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          value={item.price}
          type="number"
          onChange={handleTextChange}
        />
        <br />
        <label htmlFor="rating">Rating:</label>
        <select id="rating" value={item.rating} onChange={handleTextChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <label htmlFor="featured_bestseller">Featured Bestseller:</label>
        <input
          id="featured_bestseller"
          value={item.featured_bestseller}
          type="checkbox"
          onChange={handleCheckBoxChange}
        />
        <br />
        <label htmlFor="image">Image:</label>
        <input
          id="image"
          value={item.image}
          type="text"
          onChange={handleTextChange}
          required
        />
        <br />
        <br />
        <Button variant="outline-secondary" handleSubmit={handleSubmit}>
          Submit
        </Button>
        <br />
        <Link to={"/bakedItems"}>
          <Button variant="outline-secondary">Back</Button>
        </Link>
      </form>
    </div>
  );
}

export default New;
