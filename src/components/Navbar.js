import React from 'react'
import PropTypes from 'prop-types'


const Navbar = (props) => {
    return (
    
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{props.titleProp}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    {/* </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/about">{props.about}</a> */}
                    
                </ul>
                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                <div className={`form-check form-switch mx-3 text-${props.mode === 'light' ? 'dark':'light'}`}>
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.changeMode}/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                        Enable {props.mode === 'light'? 'dark':'light'} mode
                    </label>
                </div>
            </div>
        </div>
    </nav>
  )
}

Navbar.propTypes = {
    titleProp: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}

Navbar.defaultProps ={
    titleProp: "Title here",
    about: "baout here"
}

export default Navbar;