import { Link } from "react-router-dom";


function NavBar() {
  return (
    <nav>
      <Link to="/">
        <h1>HOME</h1>
      </Link>
      <Link to="/bakedItems">
        <h1>Sugar & Flour</h1>
      </Link>
      <Link to="/bakedItems/new">
        <h1>Add New Item</h1>
      </Link>
    </nav>
  );
}

export default NavBar;
