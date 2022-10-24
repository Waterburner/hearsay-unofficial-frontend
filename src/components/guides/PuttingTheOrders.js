import React from "react";

export default function PuttingTheOrders() {
    return (
        <div className="putting-the-orders guide">
            <h1>Putting the orders</h1>
            <p className="header-details">timing, order of courses etc</p>
            <h3>Timing</h3>
            <p className="description">
                When you have salads as entree it's not the same as if you have
                well done steaks
            </p>
            <p>
                Use common sense when sending the orders: <br />
                If you have meatballs as an appetizer (which needs to be fried
                first, then plated, topped with cheese and toasted) and salads
                as entree — make sure there is good 10 minutes in between
                sending the meal order. Salads takes few minutes to make (unless
                it has well done steak on it). <br />
                On other hand if you have deviled eggs as an appetizer and pork
                chop as meal (or well done steak) send it one after another:
                deviled eggs being made in 25.5 seconds while meat needs to be
                fully cooked thru, so the quest doesn't have to wait for another
                20ish minutes AFTER they finished an appetizer.
                <br />
                Also if you have any soups that guest would like before the
                entree — you can send it either with appetizer or right
                before/after entree (soups are made almost right away and it's
                fast to "consume")
                <br />
                Important role in timing of sending the orders play the "vibe"
                in the restaurant: how busy it is, what is going on in general.
                If you know that there is large party that is ordering you might
                want to rush in and send the order in before them.
                <br />
                So the main factors that affect your timing:
            </p>
            <ul>
                <li>what appetizer is ordered</li>
                <li>what entree is ordered</li>
                <li>how busy is the kitchen</li>
            </ul>
            <p>Here is few examples of how to time the orders:</p>
            <ul>
                <li>
                    Kitchen isn't too busy: Cheesesteak eggrolls to start with.
                    After 5-7 minutes after you sent an appetizer.
                </li>
                <li>
                    Kitchen either very busy or you have large party in the
                    restaurant who's about to order/ordered: send in an
                    appetizer and right after that an entree.
                </li>
                <li>
                    Kitchen isn't too busy: Deviled eggs to start with. As meal
                    well done cheeseburger with lots of modifications. Send it
                    with 1 minute interval.
                </li>
                <p className="description">
                    Make sure you talk to the chef about modifications. Make
                    sure to check the order before running it.
                </p>
                <li>
                    Kitchen isn't too busy: cub of soup and Blackaned redfish
                    tacos. Send one right after another.
                </li>
                <p className="description">
                    soup is fast to make and it's also fast to eat
                </p>
            </ul>
            <h3>Courses</h3>
            <p className="description">
                in the toast there is optional button for Courses
            </p>
            <p>
                Often you'll encounter guest who's going to order entrees and
                then ask you to start with… bread board or calamari. Or any
                other appetizer. In this case you don't have to remove all of
                the orders to ring in the starters first. What you can do is
                select each entree and select Course criteria for it ("Course 1"
                for example). In this case when you hit "send"/"stay" you'll get
                pop-up window with options what courses you would like to send.
                <br />
                Items with "no course" will be send without option to hold it,
                but you'll be able to check/uncheck items with course option. So
                you can put it entrees with "Course 1" option and appetizer with
                no Course option and send appetizers only. The items that has
                not been sent (fired up) will be red in the system.
                <br />
                There is also option to "hold" the order instead of sending it
                in. It is useful if you just send an appetizer and took entree
                order but need to hold it for few minutes before firing it up.
                Another situation is when somebody tells you that they want
                drink with a meal — so you can put it in the system but don't
                send it until the food is starting to come up.
            </p>
        </div>
    );
}
