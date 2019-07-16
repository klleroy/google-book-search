import React from "react";
import {Link} from "react-router-dom";
import "./navbar.css";

function Navbar() {
     return (
          <div className="navbar navbar-expand-lg navbar-light bg-dark">
               <Link className="navBarText navbar-brand" to="/">Google Books</Link>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarAltMarkup">
                    <span className="navbar-toggler-icon"></span>
               </button>
          </div>
     )
}