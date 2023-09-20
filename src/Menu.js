import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
    return (
        <>
            <div className="header">
                {/* <div className="logo"><a href="#">TRAVELL</a></div> */}
                <div className="menu">
                    <NavLink exact to="/" > <a href="#">Home</a> </NavLink>
                    <NavLink exact to="/about" > <a href="#">About US</a> </NavLink>
                    <NavLink exact to="/event" > <a href="#">Events</a> </NavLink>
                    <NavLink exact to="/contact" > <a href="#">Contact US</a> </NavLink>
                    <NavLink exact to="/Gallery" > <a href="#">Gallery</a> </NavLink>
                </div>
                <div className="bar">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>


        </>
    );
}
export default Menu;