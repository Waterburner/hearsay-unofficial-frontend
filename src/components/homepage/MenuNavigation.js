import React from "react";

import { NavLink } from "react-router-dom";

export default function MenuNavigation() {
    return (
        <div className="menu-navigation">
            <p>What would you like to learn?</p>
            <div className="menu-item-wrapper">
                <NavLink to="/menus">
                    <h3 className="menu-item">menus</h3>
                </NavLink>
            </div>

            <div className="menu-item-wrapper">
                <NavLink to="/guest-approach">
                    <h3 className="menu-item">guest upproach</h3>
                </NavLink>
            </div>

            <div className="menu-item-wrapper">
                <NavLink to="/orders-in-special">
                    <h3 className="menu-item">special requests</h3>
                </NavLink>
            </div>

            <div className="menu-item-wrapper">
                <NavLink to="/putting-the-orders">
                    <h3 className="menu-item">putting the orders in</h3>
                </NavLink>
            </div>

            <div className="menu-item-wrapper">
                <NavLink to="/sideworks">
                    <h3 className="menu-item">sideworks</h3>
                </NavLink>
            </div>

            <div className="menu-item-wrapper">
                <NavLink to="credits">
                    <h3 className="menu-item">credits</h3>
                </NavLink>
            </div>
        </div>
    );
}
