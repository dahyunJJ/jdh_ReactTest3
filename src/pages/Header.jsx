import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="hd mw">
        <nav className="gnb">
          <Link to="/" className="logo">
            <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="logo" />
          </Link>
          <div className="gnbList">
            <Link to="/Shop">Shop</Link>
            <Link to="/Blog">Blog</Link>
            <Link to="/Our Story">Our Story</Link>
          </div>
        </nav>
        <div className="personIcon">
          <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-solid fa-cart-shopping"></i>
          <i class="fa-regular fa-user"></i>
        </div>
      </header>
    </>
  );
}

export default Header;
