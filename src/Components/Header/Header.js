import React from 'react';
import  {Link}  from 'react-router-dom';
import  './Header.css'

const Header = () => {
    return (
        <div>
<nav className="navbar navbar-expand-lg mt-3 ">
  <div className="container">
    <Link className="navbar-brand " to="/">E-Learn</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav m-auto  mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="#">Free Learning</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">My Courses</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ">College Affiliation</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ">Courses</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ">Contact Us</Link>
        </li>
      </ul>
      <div className="d-flex">
        
        <button className="btn btn-outline-danger me-5" type="submit">Log in</button>
        <button className="btn btn-success " type="submit">Register</button>
      </div>
    </div>
  </div>
</nav>

<section className='container'>

  <div className='header-content row '>
      <div className='col-lg-6'>
        <p>
            start your favourite course 
        </p>
        <h3>
        Now learning from anywhere, and build your bright career.
        </h3>
        <button className='btn btn-success'>Start Learning</button>
      </div>

      <div className='col-lg-6'>
        {/* <a href="https://ibb.co/k1vdwH9"><img src="https://i.ibb.co/YZwr1Ry/elegant-touching-reading-concentrated-sophisticated-1.png" alt="elegant-touching-reading-concentrated-sophisticated-1" border="0"></a> */}

        <img src="https://i.ibb.co/YZwr1Ry/elegant-touching-reading-concentrated-sophisticated-1.png" alt="" style={{widht:"526px", height:"580px"}}/>
      </div>
  </div>

</section>
        </div>
    );
};

export default Header;