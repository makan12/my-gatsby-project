import PropTypes from 'prop-types'
import React from 'react'
// import Typography from "typography";

// import  from '../images/m1.jpg'

const Header = props => (
  
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo"  >
    <img alt="" src="https://img.icons8.com/ios/77/ffffff/medium-logo.png"/>
    <a href="https://icons8.com/icon/38489/medium"></a>
    {/* <typography> */}
    {/* Ⓜ */}
      {/* </typography> */}
    </div>
    <div className="content">
      <div className="inner">
        <h1>Makan Janani</h1>
        <h4>
        Web Application Developer
          
        </h4>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
