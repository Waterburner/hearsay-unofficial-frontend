import React, { Component } from "react";

export default function GuestApproach() {
    return (
        <div>
            <h1>Guest approach guide</h1>

            <div className="greeting_section">
                <h3 className="greeting-header">Greeting</h3>
                <p className="greeting-description">
                    Start the conversation with greeting. Something like "good
                    evening" or "hello". <i>Optionaly</i> ask how they're doing.
                    Contiue with offering a drink, something like:
                    <u>
                        <li>
                            "would you like to start with a cocktail, glass of
                            wine or a beer?"
                        </li>
                        <li>what would you like to drink today?</li>
                        <li>
                            today we're futuring … (whatever we are futuring),
                            would you be interested?
                        </li>
                        <li>
                            would you be interested in a …(barkeeper special)?
                        </li>
                        <li>etc.</li>
                    </u>
                    <br />
                    After taking any and all orders always make sure to use
                    "affirmation therm" ("awesome", "great", "you got it") — so
                    the guest would know that you heard him, and also make sure
                    you always double check the order ("old fasion, nice!",
                    "awesome, Casa Migos Margarita!"). Then you may ask if they
                    have been dining with us before (or have been here before).
                    <br />
                    <p className="description-options">
                        <div className="description-option-choice">
                            If <b className="option">yes</b> — ask if they would
                            like to start with an Appetaizer, a soup or a salad?
                            <br />
                        </div>
                        <div className="description-option-choice">
                            If <b className="option">no</b> - recommend your
                            favorite Appetaizer and inform which one is most
                            popular (limit to 2-3 recommendation). I usually
                            finish it with "we don't really have bad choices,
                            but this is my favorite and other one is most
                            popular".
                            <br />
                            Also tell them about your favorite entree, the most
                            popular one, maybe a good salad if they're looking
                            for something lighter. Inform that most of the
                            entrees comes with some sides. They should feel free
                            to substitude sides (show them where is our sides on
                            the menu — in exemple "sides are on the buttom right
                            on the menu").
                        </div>
                    </p>
                    If guest(s) seems like they're not sure what to order
                    conclude the conversation with something like "I'll be back
                    with … (name the ordered drinks) and you'll have couple
                    minutes with the menus" <br />
                    or if they do order appetaizer — say same thing and name the
                    appetaizer (you're checking if you heard it right) And to
                    finalize the approach say something like "If you need
                    anything my name is…", or just "My name is… I'll be taking
                    care of you today".
                </p>
            </div>

            <div className="meal-order-section">
                <h3 className="meal-order-header">Taking the entree order</h3>

                <p className="meal-order-description">
                    If the drinks are ready as soon as you left the table — just
                    deliver them and ask if there are any questions. If no —
                    just say I'll give you a moment.
                    <br />
                    Before appetaizers ready (give it like 5 minutes), or if you
                    see that guests are ready — approach them and ask if they
                    have any questions or they're ready to order.
                    <br />
                    If the guest ordering{" "}
                    <b className="option">a salad as meal </b> ask would they
                    like to add any chincken, shrimp or salmon on that salad.
                    You can always ask to add shrimp to salad that has chicken
                    already (whatever sounds good, basicaly). Also ask if they
                    would like to start with a soup. <br />
                    If it's <b className="option">a steak</b> — how they would
                    like the steak to be cooked and also confirm when they say
                    temperature how it's going to be (med rare — worm red
                    center, etc). After that you can ask if they would like to
                    add shrimp to the steak. <br />
                    If the guest choosing
                    <b className="option">a soup as meal</b> — ask if they want
                    to add a salad as well to the order. <br />
                    In case of if order is <b className="option">a burger</b> -
                    ask how the burger should be cooked and if everything on
                    burger sounds good (lots of "no tomato", "no onions").
                    <br />
                    If people want
                    <b className="option">
                        "side of soup or salad, or substitude side for soup or
                        salad"
                    </b>
                    — inform them that soup or salads sold saperatly and/or that
                    we don't have "side salad". <br />
                </p>
            </div>
        </div>
    );
}
