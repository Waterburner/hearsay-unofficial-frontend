import React, { Component } from "react";
import { useParams } from "react-router-dom";
import MenusDB from "./offline_menus/menus_db";

export default function ChoosenMenuOffline(params) {
    const { slug: menu_name } = useParams();

    // const dinner_menu = [
    //     {
    //         id: 14,
    //         name: "Redfish Sandwich",
    //         description:
    //             "CHOICE OF CRISPY OR GRILLED. Focaccia, cole slaw, rosemary and parmesan fry mix",
    //         link: "none",
    //         scanLink: "none",
    //     },

    //     {
    //         id: 24,
    //         name: "Crab crusted redfish",
    //         description:
    //             "Panseared redfish topped with Jumbo lump crab meat with little bit of breading and then toasted to perfection. Drizzled with lemon butter sauce, served over garlic blistered green beans and roasted red bell pepper sauce.",
    //         link: "https://i.postimg.cc/zBdLfTyT/ENTR-crab-redfish-old.jpg",
    //         scanLink: "none",
    //     },
    //     {
    //         id: 34,
    //         name: "Chicken Melanese￼",
    //         description:
    //             "Panko crusted chicken breast deep fry to Golden Brown topped with artichoke hearts, capers in lemon butter sauce. Serves with green beans. ",
    //         link: "https://i.postimg.cc/hvktJscQ/ENTR-malanese.jpg",
    //         scanLink: "none",
    //     },
    //     {
    //         id: 44,
    //         name: "Ribeye￼",
    //         description:
    //             "12 ounce. Ribeye have most fat between all steaks which makes it most flavorful. Serves with bacon Brussels and mash potatoes. ",
    //         link: "https://i.postimg.cc/dtC0bbj2/ENTR-ribeye-corn-beans.jpg",
    //         scanLink: "none",
    //     },
    //     {
    //         id: 54,
    //         name: "Filet￼",
    //         description:
    //             "6oz. Very tender with good flavor, but not as flavorful as ribeye. Mash potatoes and garlic green beans. ",
    //         link: "none",
    //         scanLink: "none",
    //     },
    //     {
    //         id: 64,
    //         name: "Short rib￼",
    //         description:
    //             "Slow braised short rib topped with caramel onions and drizzled with au jus sauce. Gouda grits and bacon sprouts. ",
    //         link: "https://i.postimg.cc/Gtyc1DGL/ENTR-short-rib-old.jpg",
    //         scanLink: "none",
    //     },
    //     {
    //         id: 74,
    //         name: "Chicken fried Texas ribeye",
    //         description:
    //             "Panko crusted deep fried ribeye (6oz) topped with peppercorn gravy. Grits and carrots. ",
    //         link: "https://i.postimg.cc/bJYD8mwz/ENTR-chicken-fried-steak.jpg",
    //         scanLink: "none",
    //     },
    //     {
    //         id: 84,
    //         name: "Grilled pork chop",
    //         description:
    //             "Cooked to your desired temperature topped with mustard sauce and fried onions. Grits and bacon sprouts",
    //         link: "https://i.postimg.cc/BvSQ1X9p/ENTR-pork-chop.jpg",
    //         scanLink: "none",
    //     },
    //     {
    //         id: 94,
    //         name: "Bacon wrap shrimp and grits",
    //         description:
    //             "Jalapeño, crab and cheese staffed shrimp and wrapped in bacon. Deep fried and served over creole sauce (tomato based sauce) with grits.",
    //         link: "https://i.postimg.cc/TwQbWZ4L/ENTR-bacon-wrap-shrimp.jpg",
    //         scanLink: "none",
    //     },
    //     {
    //         id: 104,
    //         name: "Cedar planked salmon",
    //         description:
    //             "Grilled Salmon on top of the cedar plank, drizzled with lemon butter and dill sauce. Serves with bacon sprouts and Gouda grits. (Comes medium well, but could be cooked to desired temperature). ",
    //         link: "https://i.postimg.cc/RZcNHk3S/ENTR-cedar-salmon.jpg",
    //         scanLink: "none",
    //     },
    //     {
    //         id: 114,
    //         name: "Hearsay Cheeseburger",
    //         description:
    //             "Wagyu beef (fancy breed of the cow), cheddar, applewood smoked bacon, lettuce, tomato, fresh red onion, chipotle aioli (mayo based sauce), rosemary and parmesan fry mix. Patty cooked to desired temperature. ",
    //         link: "https://i.postimg.cc/SQDLXzBT/ENTR-burger.jpg",
    //         scanLink: "none",
    //     },
    //     {
    //         id: 124,
    //         name: "The Byrd (burger)",
    //         description:
    //             "Wagyu beef (fancy cow breed. Cooked to desired temperature) with applewood smoked bacon, cheddar, mozzarella, fried egg, fresh onions, jalapeños, avocado, mustard, mayo, ketchup, tomato, served with gouda mac and cheese & rosemary and parmesan fry mix.",
    //         link: "https://i.postimg.cc/HLg8vYG8/ENTR-byrd.jpg",
    //         scanLink: "none",
    //     },

    //     {
    //         id: 134,
    //         name: "Shrimp and sausage fetticcini",
    //         description:
    //             "Sautéed shrimp and jalapeño sausage, cherry tomatoes, with fettuccini in Creole Sauce - tomato based sauce.",
    //         link: "none",
    //         scanLink: "none",
    //     },
    //     {
    //         id: 144,
    //         name: "Chicken Sandwich",
    //         description:
    //             "CRISPY FRIED OR GRILLED. Focaccia, lettuce, mozzarella, applewood smoked bacon, avocado, tomato, chipotle aioli, rosemary and parmesan fry mix",
    //         link: "none",
    //         scanLink: "none",
    //     },
    //     {
    //         id: 154,
    //         name: "Blackened Redfish Taco",
    //         description:
    //             "corn tortillas, pico de gallo, shredded lettuce, avocado, chipotle aioli, street corn casserole",
    //         link: "none",
    //         scanLink: "none",
    //     },
    //     {
    //         id: 164,
    //         name: "Crunchy Ahi Tuna Tacos",
    //         description:
    //             "ginger cilantro slaw, ponzu, avocado, gochujang aioli, street corn casserole",
    //         link: "none",
    //         scanLink: "none",
    //     },
    //     {
    //         id: 174,
    //         name: "Wagyu Dog",
    //         description:
    //             "GRILLED BUN OR JALAPEÑO CORNBREAD BATTERED served with gouda mac and cheese & rosemary and parmesan fry mix",
    //         link: "none",
    //         scanLink: "none",
    //     },
    //     {
    //         id: 184,
    //         name: "Roasted Poblano Soup",
    //         description: "Cup or Bowl. Garnished with fried tortilla crisps",
    //         link: "none",
    //         scanLink: "none",
    //     },
    //     {
    //         id: 194,
    //         name: "Hearsay Clam Chowder",
    //         description:
    //             "New England (white, cream based) garnished with chives and bacon",
    //         link: "none",
    //         scanLink: "none",
    //     },
    //     {
    //         id: 204,
    //         name: "House salad",
    //         description:
    //             "mixed greens, tomato, carrots, cucumber, sweet sherry vinaigrette",
    //         link: "none",
    //         scanLink: "none",
    //     },
    //     {
    //         id: 214,
    //         name: "Seared Tuna, Avocado & Cucumber",
    //         description:
    //             "sliced avocado, cucumber ribbons, mixed greens, tomato, queso fresco, sweet sherry vinaigrette",
    //         link: "none",
    //         scanLink: "none",
    //     },
    //     {
    //         id: 224,
    //         name: "Chopped Chicken ",
    //         description:
    //             "chicken, cucumber, tomato, boiled egg, cabbage, romaine, blue cheese, bacon, onion, herb vinaigrette",
    //         link: "none",
    //         scanLink: "none",
    //     },
    //     {
    //         id: 234,
    //         name: "Grilled Steak",
    //         description:
    //             "mixed greens, blue cheese,\ntomato, red onion, soft boiled\negg, avocado, crispy strips",
    //         link: "none",
    //         scanLink: "none",
    //     },
    // ];

    // const drink_menu = [
    //     {
    //         id: 4,
    //         name: "Whitney",
    //         description:
    //             "Stoli Razberi vodka, Cassis (berry liquor), lemon juice, simple syrop, muddled blackberries and champagne. Garnished with blackberry.",
    //         link: "none",
    //         scanLink: "none",
    //     },
    //     {
    //         id: 14,
    //         name: "Flaming Leah",
    //         description: "Stoli Vodka, strawberries, mint, lime juice, sugar",
    //         link: "none",
    //         scanLink: "none",
    //     },
    //     {
    //         id: 24,
    //         name: "Pink Delicious",
    //         description:
    //             "Hendrick’s Gin, St. Germain, Peychaud’s Bitters,\nChampagne, grapefruit juice",
    //         link: "none",
    //         scanLink: "none",
    //     },
    //     {
    //         id: 34,
    //         name: "The Smoot",
    //         description: "Absolut Vanilla Vodka, Cassis, pineapple juice",
    //         link: "none",
    //         scanLink: "none",
    //     },
    //     {
    //         id: 44,
    //         name: "Jalapeño",
    //         description: "Deep Eddy Vodka, jalapeño, lemon juice, sugar ",
    //         link: "none",
    //         scanLink: "none",
    //     },
    //     {
    //         id: 54,
    //         name: "Hearsay Old Fashioned",
    //         description:
    //             "House Infused Woodford Reserve, Angostura Bitters,\norange",
    //         link: "none",
    //         scanLink: "none",
    //     },
    //     {
    //         id: 64,
    //         name: "Way Down Southside",
    //         description:
    //             "Maestro Dobel Tequila, lime juice, cilantro, mint, sugar",
    //         link: "none",
    //         scanLink: "none",
    //     },
    //     {
    //         id: 74,
    //         name: "Hemingway Daiquiri",
    //         description:
    //             "Plantation Rum, Maraska Maraschino, grapefruit\njuice, lime juice, sugar",
    //         link: "none",
    //         scanLink: "none",
    //     },
    //     {
    //         id: 84,
    //         name: "Gin Gin Mule",
    //         description: "Fords Gin, Ginger Beer, cucumber, mint, lime juice ",
    //         link: "none",
    //         scanLink: "none",
    //     },
    //     {
    //         id: 94,
    //         name: "Bee’s Knees",
    //         description: "Empress Gin, lemon juice, Manuka chamomile honey",
    //         link: "none",
    //         scanLink: "none",
    //     },
    // ];

    function displayImg(link) {
        let no_img =
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png";

        if (link === "null" || link === "none") {
            return (
                // eslint-disable-next-line
                <img className="image" src={no_img} alt="no image available" />
            );
        } else {
            return (
                // eslint-disable-next-line
                <img className="image" src={link} alt="Food image" />
            );
        }
    }

    function listItemsFromMenu(menu_name) {
        return menu_name.map((item_id) => {
            console.log(item_id[14]);
            return (
                <div className="menu-item-component-wrapper">
                    <div className="menu-item">
                        <div>
                            <div className="menu-item-title-wrapper">
                                <h3 className="menu-item-title">
                                    {item_id.name}
                                </h3>
                            </div>
                            <div className="menu-item-description-wrapper">
                                <div className="menu-item-description">
                                    {item_id.description}
                                </div>
                            </div>
                        </div>

                        <div className="menu-image-wrapper">
                            <div className="menu-image">
                                {displayImg(item_id.link)}

                                {/* <div className="scan">
                                <div className="sketchfab-embed-wrapper">
                                    
                                </div>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }

    function showChoosenMenuOffline(menu_name) {
        if (menu_name) {
            return listItemsFromMenu(MenusDB(menu_name));
        } else {
            return (
                <h2>
                    Server is not responding. <br />
                    No offline version of {menu_name}
                </h2>
            );
        }
    }

    return <>{showChoosenMenuOffline(menu_name)}</>;
}
