// import React, { Component } from "react";

// import MenuItem from "./MenuItem";

// // show all items (with description and pictures) from certain menu
// //  /menu_id=<id>

// //
// //     ["Brunch menu"],
// //     [
// //         1,
// //         "Egg benedict",
// //         "Poached eggs served on the bed of muffin and proscuto, topped with hollanday sauce.",
// //         "https://test.com/sldkfj",
// //         null,
// //         2,
// //     ],
// //     [
// //         2,
// //         "Texas Omlette",
// //         "Omlette with smoked brisket, tomatoes, topped with avocado, pico, jallapenio",
// //         "https://testing.com/lk",
// //         null,
// //         2,
// //     ],
// //

// // NEEDED DATA:
// // menu_id
// // menu_name
// // item_id

// export default class ChoosenMenu extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             isLoading: true,
//             menu_id: this.props.match.params.slug,
//             data: { response: [] },
//         };
//     }

//     // /menu_id=<id>
//     // change id=1 to id={menu_id}

//     getItems() {
//         if (this.props.match.params.slug.length > 0) {
//             fetch(
//                 `https://hearsay-unofficial-backend.herokuapp.com/menu_id=${this.props.match.params.slug}`
//             )
//                 .then((response) => response.json())
//                 .then((data) => this.setState({ data: { response: data } }))
//                 .catch((error) => {
//                     console.log("ChoosenMenu getItems() fetch error", error);
//                 });
//         }
//     }

//     displayMenuName() {
//         let menu_list = [
//             "not a",
//             "Dinner",
//             "Brunch",
//             "Drink",
//             "Dessert",
//             "Appetaizer",
//         ];
//         let menu_index = this.state.menu_id;

//         if (this.state.menu_id.length > 0) {
//             return (
//                 <div className="choosen-menu-title-wrapper">
//                     <h2 className="choosen-menu-title">
//                         {menu_list[menu_index]} menu
//                     </h2>
//                 </div>
//             );
//         }
//     }

//     listItems() {
//         const { data } = this.state;
//         if (data.response.length > 0) {
//             return (
//                 data.response.length > 0 &&
//                 data.response[0].map((item_name, count) => {
//                     return (
//                         <MenuItem
//                             item_name={item_name}
//                             item_description={
//                                 this.state.data.response[1][count]
//                             }
//                             item_img_link={this.state.data.response[2][count]}
//                             key={count}
//                         />
//                     );
//                 })
//             );
//         } else {
//             return <p>working on it</p>;
//         }
//     }

//     componentDidMount() {
//         this.getItems();
//     }

//     render() {
//         return (
//             <div className="choosen-menu-wrapper">
//                 <div className="choosen-menu">
//                     {this.displayMenuName()}

//                     {this.listItems()}
//                 </div>
//             </div>
//         );
//     }
// }

import React from "react";
import { useState } from "react";
import MenuItem from "./MenuItemFunction";
import { useParams } from "react-router-dom";

export default function ChoosenMenu(params) {
    const [isLoading, setLoading] = useState(false);
    // const [menu_id, setMenu_id] = useState(this.props.match.params.slug);
    const [data, setData] = useState();
    const { slug: menus_actual_name } = useParams();

    if (menus_actual_name.length > 0) {
        fetch(
            // `https://hearsay-unofficial-backend.herokuapp.com/menu=${menus_actual_name}`
            // `http://localhost:5000/menu=${menus_actual_name}` // not working for some reason
            `http://127.0.0.1:5000/menu=${menus_actual_name}`
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
            return <h2> Loading… </h2>;
        }
    }

    return (
        <div className="choosen-menu-wrapper">
            <div className="choosen-menu">
                {displayMenuName()}

                {listItems()}
            </div>
        </div>
    );
}
