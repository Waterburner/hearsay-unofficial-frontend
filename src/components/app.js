import React, { Component } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./homepage/Homepage";
import Menus from "./menu/Menus.js";
import AllMenuItems from "./menu/AllMenuItems";
import ChoosenMenu from "./menu/ChoosenMenu";
import Credits from "./credits";
import Sidework from "./sidework";
import NoMatch from "./NoMatch";

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Router>
                    <div className="app-wrapper">
                        <Header />

                        <Routes>
                            <Route exact path="/" element={<Homepage />} />

                            <Route path="/menus" element={<Menus />} />

                            <Route
                                path="/all_menu_items"
                                element={<AllMenuItems />}
                            />

                            <Route
                                path="/allmenuitems"
                                element={<AllMenuItems />}
                            />

                            <Route
                                exact
                                path="/menu/:slug"
                                element={<ChoosenMenu />}
                            />

                            <Route path="/credits" element={<Credits />} />

                            <Route path="/sideworks" element={<Sidework />} />

                            <Route path="*" element={<NoMatch />} />
                        </Routes>

                        <Footer />
                    </div>
                </Router>
            </div>
        );
    }
}
