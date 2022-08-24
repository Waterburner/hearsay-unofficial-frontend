import React from "react";

export default function MenuItem(props) {
    let no_img =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png";

    function displayImg(props) {
        let item_img = props.item_img_link;

        if (item_img.length > 0) {
            if (
                item_img === null ||
                item_img === "none" ||
                item_img === "null"
            ) {
                return (
                    // eslint-disable-next-line jsx-a11y/img-redundant-alt
                    <img
                        className="image"
                        src={no_img}
                        alt="no image available"
                    />
                );
            } else {
                return (
                    // eslint-disable-next-line jsx-a11y/img-redundant-alt
                    <img
                        className="image"
                        src={item_img}
                        alt="Image of food (simething went wrong)"
                    />
                );
            }
        }
    }

    return (
        <div className="menu-item-component-wrapper">
            <div className="menu-item">
                <div>
                    <div className="menu-item-title-wrapper">
                        <h3 className="menu-item-title">{props.item_name}</h3>
                    </div>
                    <div className="menu-item-description-wrapper">
                        <div className="menu-item-description">
                            {props.item_description}
                        </div>
                    </div>
                </div>

                <div className="menu-image-wrapper">
                    <div className="menu-image">
                        {displayImg(props)}

                        {/* <div className="scan">
                                <div className="sketchfab-embed-wrapper">
                                    
                                </div>
                            </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
