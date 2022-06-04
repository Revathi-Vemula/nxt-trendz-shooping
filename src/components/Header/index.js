import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="navbar">
    <div className="nav-bar-content">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo-header"
      />
      <button type="button" className="btn-logo-logout">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav-logout"
          className="nav-logo"
        />
      </button>
    </div>

    <ul className="nav-items">
      <Link to="/" className="nav-text">
        <li>Home</li>
      </Link>
      <Link to="/products" className="nav-text">
        <li>Products</li>
      </Link>
      <Link to="/cart" className="nav-text">
        <li>Cart</li>
      </Link>
      <li>
        <button type="button" className="btn-logout">
          Logout
        </button>
      </li>
    </ul>

    <ul className="nav-items-sm">
      <Link to="/">
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="nav-logo"
          />
        </li>
      </Link>
      <Link to="/products">
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="nav-logo"
          />
        </li>
      </Link>
      <Link to="/cart">
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="nav-logo"
          />
        </li>
      </Link>
    </ul>
  </nav>
)

export default Header
