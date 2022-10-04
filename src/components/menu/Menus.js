import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Menus extends Component {
    constructor() {
        super();

        this.state = {
            menus: [],
            isLoading: false,
        };
    }
    // address to backend server (fetch data from DB)
    backend_server_menus =
        "https://hearsay-unofficial-backend.herokuapp.com/menus";
    // "http://localhost:5000/menus";

    getMenus() {
        fetch(this.backend_server_menus)
            .then((response) => response.json())
            .then((data) => this.setState({ menus: data }))
            .catch((error) => {
                console.log("getMenus() fetch error", error);
            });
        // response
        // template: [menus array]
    }

    // auto generated menu list from DB
    listMenus() {
        console.log(this.state);
        return (
            this.state.menus.length > 0 &&
            this.state.menus[0].map((menu, index) => {
                return menu.map((item) => {
                    var navLinkTarget = this.state.menus[1][index];
                    navLinkTarget = "/menu/" + navLinkTarget;

                    return (
                        <div className="menu-item-wrapper" key={item + index}>
                            <NavLink to={navLinkTarget}>{item}</NavLink>
                        </div>
                    );
                });
            })
        );
    }

    listMenusOffline() {
        return (
            <>
                <div className="menu-item-wrapper">
                    <NavLink to="/menu/appetizer_menu">
                        Sharebles(Appetizers)
                    </NavLink>
                </div>
                <div className="menu-item-wrapper">
                    <NavLink to="/menu/dinner_menu">Dinner</NavLink>
                </div>
                <div className="menu-item-wrapper">
                    <NavLink to="/menu/drink_menu">Drinks</NavLink>
                </div>
                <div className="menu-item-wrapper">
                    <NavLink to="/menu/dessert_menu">Desserts</NavLink>
                </div>
                <div className="menu-item-wrapper">
                    <NavLink to="/menu/brunch_menu">Brunch</NavLink>
                </div>
            </>
        );
    }

    componentDidMount() {
        this.getMenus();
    }

    render() {
        if (this.state.isLoading === true) {
            return <li>still loading…</li>;
        }

        return (
            <div className="menus-wrapper">
                <div className="menu-navigation">
                    <h3 className="menus-head">SELECT A MENU</h3>
                    {this.state.menus.length > 0
                        ? this.listMenus()
                        : this.listMenusOffline()}
                    {/*
                    <div className="menu-item-wrapper">
                         <NavLink to="/allmenuitems">All menu items</NavLink> 
                    </div>
                    */}
                </div>
            </div>
        );

        // return (
        //     <div className="menus-wrapper">
        //         <div className="menus">
        //             <h2 className="menus-head-wrapper">
        //                 <div className="menus-head">Menus</div>
        //             </h2>

        //             <div className="menu-selection-wrapper">
        //                 <ul className="menu-selection">
        //                     <li>
        //                         <NavLink to="/drink_menu">Drinks</NavLink>
        //                     </li>
        //                 </ul>
        //             </div>
        //             <div className="menu-selection-wrapper">
        //                 <ul className="menu-selection">
        //                     <li>
        //                         <NavLink to="/menu/4">Appetizers</NavLink>
        //                     </li>
        //                 </ul>
        //             </div>
        //             <div className="menu-selection-wrapper">
        //                 <ul className="menu-selection">
        //                     <li>
        //                         <NavLink to="/menu/1">Dinner</NavLink>
        //                     </li>
        //                 </ul>
        //             </div>
        //             <div className="menu-selection-wrapper">
        //                 <ul className="menu-selection">
        //                     <li>
        //                         <NavLink to="/menu/2">Brunch</NavLink>
        //                     </li>
        //                 </ul>
        //             </div>
        //             <div className="menu-selection-wrapper">
        //                 <ul className="menu-selection">
        //                     <li>
        //                         <NavLink to="/menu/3">Desserts</NavLink>
        //                     </li>
        //                 </ul>
        //             </div>
        //             <div className="menu-selection-wrapper">
        //                 <ul className="menu-selection">
        //                     <li>
        //                         <NavLink to="/all_menu_items">
        //                             All dishes
        //                         </NavLink>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // );
    }
}
