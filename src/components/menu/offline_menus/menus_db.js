// DB that's supplies the info to the app

export default function MenusDB(menu_name) {
    const dinner_menu = [
        {
            id: 24,
            name: "Crab crusted redfish",
            description:
                "Pan seared redfish topped with Jumbo lump crab meat with little bit of breading. Then toasted to perfection in the oven and drizzled with lemon butter sauce. Served over garlic blistered green beans and roasted red bell pepper sauce.",
            link: "https://i.postimg.cc/zBdLfTyT/ENTR-crab-redfish-old.jpg",
            scanLink: "none",
        },
        {
            id: 34,
            name: "Chicken Melanese",
            description:
                "Panko crusted chicken breast deep fry to golden brown topped with artichoke hearts and capers in lemon butter sauce. Serves with green beans.",
            link: "https://i.postimg.cc/hvktJscQ/ENTR-malanese.jpg",
            scanLink: "none",
        },
        {
            id: 44,
            name: "Ribeye",
            description:
                "12 ounce. Ribeye have most fat between all steaks which makes it most flavorful. Serves with bacon Brussels and mash potatoes. ",
            link: "https://i.postimg.cc/dtC0bbj2/ENTR-ribeye-corn-beans.jpg",
            scanLink: "none",
        },
        {
            id: 54,
            name: "Filet",
            description:
                "6oz. Very tender with good flavor, but not as flavorful as ribeye. Mash potatoes and garlic green beans. ",
            link: "none",
            scanLink: "none",
        },

        {
            id: 64,
            name: "Short rib",
            description:
                "Slow braised short rib topped with caramel onions and drizzled with shiner brown grawy. Gouda grits and bacon sprouts. ",
            link: "https://i.postimg.cc/Gtyc1DGL/ENTR-short-rib-old.jpg",
            scanLink: "none",
        },

        {
            id: 84,
            name: "Grilled Double Pork Chop",
            description:
                "Chimichuri marinated double ribbed (bone in) pork chop grilled to med well or well done. Serves with Sweet potato wedges and green beans. Chimichuri on the side",
            link: "none",
            scanLink: "none",
        },
        {
            id: 94,
            name: "Bacon wrap shrimp and grits",
            description:
                "Jalapeño, crab and cheese staffed shrimp and wrapped in bacon. Deep fried and served over creole sauce (tomato based sauce) with grits.",
            link: "https://i.postimg.cc/TwQbWZ4L/ENTR-bacon-wrap-shrimp.jpg",
            scanLink: "none",
        },

        {
            id: 114,
            name: "Hearsay Cheeseburger",
            description:
                "Wagyu beef (fancy breed of the cow), cheddar, applewood smoked bacon, lettuce, tomato, fresh red onion, chipotle aioli (mayo based sauce), rosemary and parmesan fry mix. Patty cooked to desired temperature. ",
            link: "https://i.postimg.cc/SQDLXzBT/ENTR-burger.jpg",
            scanLink: "none",
        },

        {
            id: 134,
            name: "Shrimp and sausage fettoccini",
            description:
                "Sautéed shrimp and jalapeño sausage, cherry tomatoes, with fettuccini in Creole Sauce - tomato based lobster sauce.",
            link: "none",
            scanLink: "none",
        },
        {
            id: 144,
            name: "Chicken Sandwich",
            description:
                "CRISPY FRIED OR GRILLED. Focaccia, lettuce, mozzarella, applewood smoked bacon, avocado, tomato, chipotle aioli, rosemary and parmesan fry mix",
            link: "none",
            scanLink: "none",
        },
        {
            id: 154,
            name: "Blackened Redfish Taco",
            description:
                "corn tortillas, pico de gallo, shredded lettuce, avocado, chipotle aioli, street corn casserole",
            link: "none",
            scanLink: "none",
        },
        {
            id: 164,
            name: "Crunchy Ahi Tuna Tacos",
            description:
                "ginger cilantro slaw, ponzu, avocado, gochujang aioli, street corn casserole",
            link: "none",
            scanLink: "none",
        },

        {
            id: 184,
            name: "Roasted Poblano Soup",
            description: "Cup or Bowl. Garnished with fried tortilla crisps",
            link: "none",
            scanLink: "none",
        },
        {
            id: 194,
            name: "Chicken, Shrimp and Sausage Gumbo",
            description:
                "Chef's family receipe. Chicken, Shrimp, Crab, Sausage spicy gumbo with white rice",
            link: "none",
            scanLink: "none",
        },
        {
            id: 204,
            name: "House salad",
            description:
                "mixed greens, tomato, carrots, cucumber, sweet sherry vinaigrette",
            link: "none",
            scanLink: "none",
        },
        {
            id: 214,
            name: "Avocado & Cucumber Salad",
            description:
                "sliced avocado, cucumber ribbons, mixed greens, tomato, queso fresco, sweet sherry vinaigrette",
            link: "none",
            scanLink: "none",
        },
        {
            id: 224,
            name: "Spinach and Watermelon salad",
            description:
                "Spinash, Tofu, treenuts and fresh watermellon in sherry vinigrett",
            link: "none",
            scanLink: "none",
        },
        {
            id: 234,
            name: "Califlower «Crabcake»",
            description:
                "Flat grilled califlower in shape of crabcake and cilantro tartar on the side",
            link: "none",
            scanLink: "none",
        },
    ];

    const drink_menu = [
        {
            id: 4,
            name: "Whitney",
            description:
                "Stoli Razberi vodka, Cassis (berry liquor), lemon juice, simple syrop, muddled blackberries and champagne. Garnished with blackberry.",
            link: "none",
            scanLink: "none",
        },
        {
            id: 14,
            name: "Flaming Leah",
            description: "Stoli Vodka, strawberries, mint, lime juice, sugar",
            link: "none",
            scanLink: "none",
        },
        {
            id: 24,
            name: "Pink Delicious",
            description:
                "Hendrick’s Gin, St. Germain, Peychaud’s Bitters,\nChampagne, grapefruit juice",
            link: "none",
            scanLink: "none",
        },
        {
            id: 34,
            name: "The Smoot",
            description: "Absolut Vanilla Vodka, Cassis, pineapple juice",
            link: "none",
            scanLink: "none",
        },
        {
            id: 44,
            name: "Jalapeño",
            description: "Deep Eddy Vodka, jalapeño, lemon juice, sugar ",
            link: "none",
            scanLink: "none",
        },
        {
            id: 54,
            name: "Hearsay Old Fashioned",
            description:
                "House Infused Woodford Reserve, Angostura Bitters,\norange",
            link: "none",
            scanLink: "none",
        },
        {
            id: 64,
            name: "Way Down Southside",
            description:
                "Maestro Dobel Tequila, lime juice, cilantro, mint, sugar",
            link: "none",
            scanLink: "none",
        },
        {
            id: 74,
            name: "Hemingway Daiquiri",
            description:
                "Plantation Rum, Maraska Maraschino, grapefruit\njuice, lime juice, sugar",
            link: "none",
            scanLink: "none",
        },
        {
            id: 84,
            name: "Gin Gin Mule",
            description: "Fords Gin, Ginger Beer, cucumber, mint, lime juice ",
            link: "none",
            scanLink: "none",
        },
        {
            id: 94,
            name: "Bee’s Knees",
            description: "Empress Gin, lemon juice, Manuka chamomile honey",
            link: "none",
            scanLink: "none",
        },
    ];

    const appetizer_menu = [
        {
            id: 4,
            name: "Cheese steak egg rolls",
            description:
                "Asian style fried eggrolls stuffed with in-house smoked brisket and cheese. served with sweet chilli sauce￼",
            link: "https://i.postimg.cc/d0rmDNFr/APP-eggrolls.jpg",
            scanLink: "none",
        },
        {
            id: 14,
            appetizer_menu_name: "Artisan bread board",
            description:
                "Pretzel, jallapenio cornbread and challa rolls with side of herbal butter. 2 of each",
            link: "https://i.postimg.cc/Z5gVWydt/APP-bread-board-old.jpg",
            scanLink: "none",
        },
        {
            id: 24,
            appetizer_menu_name: "Spinach artichoke dip",
            description:
                "Cream spinach (cream cheese and spinach) with pickled jallapenios and artichoke hearts served in sourdough bread bowl with tortilla chips and croustini",
            link: "https://i.postimg.cc/63KVZV6S/APP-spinach-dip.jpg",
            scanLink: "none",
        },
        {
            id: 34,
            appetizer_menu_name: "Kung Pao Shrimp & Calamari",
            description:
                "lightly fried calamari, shrimp, jalapeño, bell pepper, bean sprouts",
            link: "none",
            scanLink: "none",
        },
        {
            id: 44,
            appetizer_menu_name: "Texas Charcuterie Board",
            description:
                "Bavarian pretzel, sliced brisket, prosciutto, jalapeño sausage, seasonal cheese, fruit, nuts, olives, cheese sauce, grain mustard",
            link: "none",
            scanLink: "none",
        },
        {
            id: 54,
            appetizer_menu_name: "Buffalo Shrimp",
            description: "lightly fried, blue cheese, chive, ranch",
            link: "none",
            scanLink: "none",
        },
        {
            id: 64,
            appetizer_menu_name: "Deviled Egg Trio",
            description: "bacon, jalapeño, crispy onion",
            link: "none",
            scanLink: "none",
        },
        {
            id: 74,
            appetizer_menu_name: "Wagyu Meatballs",
            description:
                "ground beef, spicy tomato sauce, mozzarella, parmesan, grilled crostini",
            link: "none",
            scanLink: "none",
        },
    ];

    const brunch_menu = [
        {
            id: 4,
            name: "Chicken and waffle",
            description:
                "Fried 3-4 chicken strips and waffle. Served with syrop and butter and sprinkled with powdered sugar￼",
            link: "https://i.postimg.cc/RFT7L3N0/BRUNCH-chicken-and-waffle.jpg",
            scanLink: "none",
        },
        {
            id: 14,
            name: "Chicken fried steak and eggs",
            description:
                "chicken fried ribbi top of the white pepperconrn gravy and accompanied with a two eggs cook to your liking and breakfast potato hash￼￼￼",
            link: "none",
            scanLink: "none",
        },
        {
            id: 24,
            name: "Chicken Chilaquiles Verdes",
            description:
                "spicy roasted tomatillo salsa, corn chips,\npickled onions, avocado, queso fresco, crema,\ncilantro, fried egg",
            link: "none",
            scanLink: "none",
        },
        {
            id: 34,
            name: "Bread Pudding French Toast",
            description:
                "choice of blackberry, strawberry or candied pecan\ntopping and whipped butter, applewood smoked bacon",
            link: "none",
            scanLink: "none",
        },
        {
            id: 44,
            name: "Eggs Benedict ",
            description:
                "prosciutto, poached egg, English muffin,\nhollandaise sauce, fried potato hash",
            link: "none",
            scanLink: "none",
        },
        {
            id: 54,
            name: "Buttermilk Pancakes",
            description:
                "choice of blackberry, strawberry or candied pecan\ntopping and whipped butter, applewood smoked bacon",
            link: "none",
            scanLink: "none",
        },
        {
            id: 64,
            name: "Brunch Steak & Eggs",
            description: "Hanger steak, choice eggs, fried potato hash",
            link: "none",
            scanLink: "none",
        },
        {
            id: 74,
            name: "Farmer’s Omelet & Mixed Greens",
            description:
                "spinach, mushrooms, tomato, mozzarella, sherry\nvinaigrette, pickled onions, fried potato hash",
            link: "none",
            scanLink: "none",
        },
        {
            id: 84,
            name: "Texas Omelet",
            description:
                "smoked brisket, cheddar, jalapeños, pico de gallo,\navocado, mixed greens, fried potato hash",
            link: "none",
            scanLink: "none",
        },
    ];

    const dessert_menu = [
        {
            id: 4,
            name: "Hearsay Bread Pudding",
            description:
                "Bread pudding drizzled with caramel sauce and accompanied with vanilla bean ice cream. garnished with whip cream and berries",
            link: "https://i.postimg.cc/c4CG82Jp/DESS-bread-pudding.jpg",
            scanLink: "none",
        },
        {
            id: 14,
            name: "Creme brulee",
            description:
                "Traditional creme brulee with sugar-caramel crust and garnished with whip cream and berries",
            link: "https://i.postimg.cc/T27m2vbB/DESS-cream-brulee2.jpg",
            scanLink: "none",
        },
        {
            id: 24,
            name: "Espresso Chocolate mousse",
            description:
                "Chocolate musse dessert with wafer cookie and garnished with whip cream and berries",
            link: "none",
            scanLink: "none",
        },
    ];

    if (menu_name === "dinner_menu") {
        return dinner_menu;
    }

    if (menu_name === "brunch_menu") {
        return brunch_menu;
    }

    if (menu_name === "appetizer_menu" || menu_name === "appetizers_menu") {
        return appetizer_menu;
    }

    if (menu_name === "dessert_menu" || menu_name === "desserts_menu") {
        return dessert_menu;
    }

    if (menu_name === "drink_menu" || menu_name === "drinks_menu") {
        return drink_menu;
    } else {
        return [
            {
                name: "error",
                description: "menu name not found",
                link: "null",
                scanLink: "null",
            },
        ];
    }
}
