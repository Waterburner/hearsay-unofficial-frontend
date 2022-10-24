import React from "react";
import { useState } from "react";
import MenuItem from "./MenuItemFunction";
import { useParams } from "react-router-dom";
import ChoosenMenuOffline from "./ChoosenMenuOffline";

export default function ChoosenMenu(params) {
    // const [isLoading, setLoading] = useState(false);
    // const [menu_id, setMenu_id] = useState(this.props.match.params.slug);
    const [data, setData] = useState();
    const { slug: menus_actual_name } = useParams();

    if (menus_actual_name.length > 0) {
        fetch(
            `https://hearsay-unofficial-backend.herokuapp.com/menu=${menus_actual_name}`
            // `http://localhost:5000/menu=${menus_actual_name}` // not working for some reason
            // `http://127.0.0.1:5000/menu=${menus_actual_name}`
        )
            .then((response) => response.json())
            .then((data) => setData([data]))
            .catch((error) => {
                console.log("ChoosenMenu getItems() fetch error", error);
            });
    }

    function displayMenuName() {
        const fixTheDisplayName = (input_phrase) => {
            let newPhrase_array = input_phrase.split("_");
            let display = "";
            newPhrase_array.map((word) => {
                return (display =
                    display +
                    word.charAt(0).toUpperCase() +
                    word.slice(1).toLowerCase() +
                    "_");
            });
            display = display.replaceAll("_", " ");
            display = display.slice(0, -1);
            return display;
        };

        if (menus_actual_name.length > 0) {
            let display_name = fixTheDisplayName(menus_actual_name);

            return (
                <div className="choosen-menu-title-wrapper">
                    <h2 className="choosen-menu-title">{display_name}</h2>
                </div>
            );
        }
    }

    function listItems() {
        // ================ testing
        // if (data) {

        // }

        // ============ end of testing

        if (data) {
            let menu_item_names_list = data[0][0];
            let menu_item_descriptions_list = data[0][1];
            let menu_item_img_links_list = data[0][2];
            let menu_item_scan_links_list = data[0][3];

            return menu_item_names_list.map((item_name, index) => {
                return (
                    <MenuItem
                        item_name={item_name}
                        item_description={menu_item_descriptions_list[index]}
                        item_img_link={menu_item_img_links_list[index]}
                        item_scan_link={menu_item_scan_links_list[index]}
                    />
                );
            });
        } else {
            return <ChoosenMenuOffline />;
        }
    }

    return (
        <>
            <div className="choosen-menu-wrapper">
                <div className="choosen-menu">
                    {displayMenuName()}

                    {listItems()}
                </div>
            </div>
        </>
    );
}
