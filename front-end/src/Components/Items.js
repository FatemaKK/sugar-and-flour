import axios from "axios";
import { useState, useEffect } from "react";
import Item from "./Item";

function Items() {
  const API = process.env.REACT_APP_API_URL;
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/bakedItems`)
      .then((response) => setItems(response.data))
      .catch((error) => console.warn(error));
  }, [API]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return <Item key={item.id} item={item} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Items;
