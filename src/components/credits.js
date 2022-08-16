import React from "react";

import { NavLink } from "react-router-dom";

export default function Credits() {
    return (
        <div className="credits-wrapper">
            <div className="credits">
                <h2>UNOFFICIAL TRAINING GUIDE</h2>
                <>
                    <p>
                        Created by Oleh Kovelskyi as "best practices" and
                        recommendations.
                    </p>

                    <br />
                    <p>All rights reserved.</p>
                    <br />
                    <NavLink to="/">
                        <h3 className="menu-item">Homepage</h3>
                    </NavLink>
                </>
            </div>
        </div>
    );
}
