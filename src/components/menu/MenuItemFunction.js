import React from "react";

export default function MenuItem(props) {
    let no_img =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png";

    function displayImg(props) {
        // console.log(this.props.item_img_link);
        let item_img = props.item_img_link;
        if (item_img > 0) {
            return (
                // eslint-disable-next-line jsx-a11y/img-redundant-alt
                <img
                    className="image"
                    src={item_img}
                    alt="Image of food (simething went wrong)"
                />
            );
        } else {
            return (
                // eslint-disable-next-line jsx-a11y/img-redundant-alt
                <img className="image" src={no_img} alt="no image available" />
            );
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
                            {props.items_description}
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
