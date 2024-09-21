import PropTypes from 'prop-types';
import React from 'react';
// import './MobileMenu.scss';
import { Turn as Hamburger } from 'hamburger-react'
// import $ from 'jquery';



export default function MobileMenu({ menu: { items } }) {
  // const [show, setShow] = React.useState(false);
  const [isChange, setIsChange] = React.useState(false);

  // const handleChange = () => setIsChange(!isChange);
 

  return (
  <>

    <div className="main-menu-mobile self-center">
      <a
        className="menu-icon"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setIsChange(!isChange);
          // handleChange(!);
        }}
      >
  <Hamburger rounded size={20} direction="left" duration={0.4} />
      </a>
      {/* {show && ( */}
 
        <ul  className= {isChange ? "nav justify-content-center show" : "nav justify-content-center"}
        >
          {items.map((i, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li className="nav-item" key={index}>
              <a className="nav-link" href={i.url}>
                {i.name}
              </a>
            </li>
          ))}
        </ul>
    
      {/* )} */}
    </div>
 </>
  );
}


MobileMenu.propTypes = {
  menu: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
};

export const layout = {
  areaId: 'icon-wrapper',
  sortOrder: 50
};

export const query = `
  query {
    menu {
      items {
        name
        url
      }
    }
}`;


