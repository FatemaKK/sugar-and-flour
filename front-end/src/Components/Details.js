import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
l;

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

  return (
    <div>
      <h4>'{item.name}' &nbsp; {item.featuredBestseller ? "YES" : "NO"}</h4>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <p><img src={item.image} /></p>
    </div>
  );
}

export default Details;
