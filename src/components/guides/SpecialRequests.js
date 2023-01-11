import React from "react";

export default function SpecialRequests() {
    return (
        <div className="special-requests guide">
            <h1>SPECIAL REQUESTS</h1>
            <p className="header-details">
                As in any restaurant there is always special orders for various
                reasons. Sometimes it's an allergies, other times it's "I don't
                like"/"I don't eat". Ocasinally it's something that easy to do
                or fix. Other times it's like a new dish is being made. <br />
                This guide will cover most common requests and how to deal with
                it and how put it in the system (hopefully).
            </p>
            <h3>Allergies</h3>
            <p className="description">
                Also "intolerances" (wheat, dairy, etc). Important stuff.
            </p>
            <p>
                Few things to know: <br />
                All fried food fried in the same oil (shellfish, glutein etc) —
                for serious allergies strongly not reccomended. <br />
                Hearsay restaurants use SOY BEAN oil for frying <br />
                Certain items possible to fry separetly (bacon brussel sprouts)
                <br />
                All deserts have dairy. <br />
                Even if item on the menu has "GF" you still have to put special
                reguest for kitchen.
            </p>
            <ol>
                <li>
                    Check with chef if this item even possible to make without
                    certain ingridients
                </li>
                <p className="description">
                    For exemple the cheesesteak eggrolls can not be made without
                    cheese or glutein. But bacon brussel sprouts could be cooked
                    separetly from rest of the fried food in case of
                    glutein/seafood allergies
                </p>
                <li>
                    Type in special request with what type of allergy the person
                    has for certain items
                </li>
                <li>Let the kitchen chef/manager on duty know</li>
                <li>Let managers know</li>
                <li>
                    When delivering food — check with chef/kitchen manager about
                    the entree and check visually
                </li>
                <li>
                    If order isn't made properly (allergy item on the plate) —
                    ask chef to remake the order since just removing it could
                    still make the guest sick
                </li>
            </ol>
            <p>Here is few examples of how to put allergies in system:</p>
            <ul>
                <li>
                    Filet mignon: DAIRY ALLERGY. No butter! No mash potato - sub
                    fries. No cheese on fries
                </li>
                <li>Bowl Poblano soup: GLUTEIN ALLERGY. No tortia crisps</li>
                <li>Blackaned redfish tacos: SHELLFISH ALLERGY. </li>
                <li>Ribeye: SHELLFISH ALLERGY. </li>
            </ul>
            <h3>Picky people and "I don't like that"</h3>
            <p>
                We all have stuff that we don't like and we all have friends and
                relatives who's picky. It's not an allergy and isn't hazardus
                but still has to be taken seriously.
            </p>
            <ul>
                <li>
                    For "glutein" diets you don't have to tell them that it's
                    fried in same oil (fries, sprouts)
                </li>
                <li>
                    For people who doesn't eat seafood — it's still okay for it
                    to be fried in the same oil
                </li>
                <li>Still put the prefered order as special request</li>
            </ul>
            <ul>
                <li>
                    Before running the order make sure visually that order is up
                    to requests
                </li>
                <li>
                    If order made wrong politely ask chef to remove/replace/fix
                    the items according to the order.
                </li>
                <li>
                    The order doesn't have to be remaid but simply fixed (take
                    off undesired items)
                </li>
            </ul>
            <h3>Upselling, Upcharging, adding stuff</h3>
            <p>
                A good server not only suggests the items but also offers
                topping and sides. <br />
                Besides a good server also doesn't say that we can't sell
                certain items — we can sell anything. But it will have a price.
                Before assuming the price for extras check with chef. You could
                say to guest something like "let me check with chef how he would
                like to do this" After any and all modification make sure to
                talk to chef/kitchen manager about how and what exactly you're
                trying to order.
            </p>
            <ul>
                <li>
                    If guest wants shrimp tacos — ask chef how much would we
                    upcharge for it
                </li>
                <li>
                    For adding shrimp — (as of Jan 2023 - $10 and it will be 4
                    shrimp ) ask chef how many shrimp it's going to be and how
                    much
                </li>
                <li>For different type of topping ask chef how much</li>
                <li>
                    If someone wants extra taco or two — ask chef. If we can't
                    do 1-3 tacos (due to the fish is porsioned) offer guest
                    whole order to share?
                </li>
            </ul>
            <ul>
                <li>
                    Add shrimp to steak: Special reguest and add price according
                    to chef ($10 as of Jan 2023 for 4 shrimp)
                </li>
                <li>
                    Shrimp tacos. Redfish tacos: NO REDFISH, sub shrimp and add
                    price.
                </li>
                <li>
                    Extra sausage to pasta: add chicken. Request: NO CHICKEN,
                    extra sausage
                </li>
                <li>
                    Requests like "add avocado" (extra $2), "Jalapenio" (grilled
                    jalapenio on SD extra $1, just pickled — no upcharge),
                    "pretzel" (4$) — should be charged as well even if it's
                    $2-$3
                </li>
                <li>
                    Only thing's we wouldn't charge in kitchen is garnishes
                    (pico, pickles, basic vegetables like lettuce, tomatoes)
                </li>
                <li>If not sure — ask chef/kitchen manager</li>
                <br />
                <p>same goes for the bar modifications</p>
                <li>Extra shot? Charge for it</li>
                <li>Extra juice on the side? You got it — charge for it</li>
                <li>Bar wouldn't charge for regular olives</li>
                <li>Bar absolutely would charge for blue cheese olives</li>
                <li>If not sure ask bartender</li>
            </ul>
        </div>
    );
}
