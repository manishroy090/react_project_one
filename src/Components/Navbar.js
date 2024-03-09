import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-dark bg-light">
    <div className="container-fluid">
    <a to="navbar-brand">{props.title}</a>
    <form className="d-flex" role="search">
      <span>{props.searchplaceholder}</span>
      <input className="form-control me-2" type="search" placeholder="" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
</>
  )
}

Navbar.prototype = {
  title:PropTypes.string,
  searchplaceholder:PropTypes.string
}
