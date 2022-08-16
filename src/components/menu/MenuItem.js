import React, { Component } from "react";

// localhost:5000/

// list of all menus
//  /allmenus

// show all items (with description and pictures) from certain menu
//  /menu_id=<id>

// show all items from all menus
//  /allitems

// state:
//

// const [data, setData]  = useState([{}])

// useEffect(() => {
//     fetch("/")
// })

//================================================

// show cetrain item only
//  /item_id=<id>+<menu_id>
// ex: /item_id=2+1

export default class MenuItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            // item_name: "",
            // item_description: "",
            // item_img_link: "",
            // item_scan_link: "",
            menuItemClass: "",
        };
    }

    // backend_server = "http://localhost:5000/item_id";

    // getItem(menu_id, item_id) {
    //     fetch(`${this.backend_server}=${item_id}+${menu_id}`)
    //         .then((response) => response.json())
    //         .then((data) => this.setState({ data }))
    //         .catch((error) => {
    //             console.log("getItem() MenuItem.js fetch error", error);
    //         });
    // }

    displayImg() {
        let no_img =
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png";

        if (
            this.props.item_img_link === "null" ||
            this.props.item_img_link === "none"
        ) {
            return (
                // eslint-disable-next-line
                <img className="image" src={no_img} alt="no image available" />
            );
        } else {
            // eslint-disable-next-line
            return (
                <img className={this.props.item_img_link} alt="Food image" />
            );
        }
    }

    render() {
        const item_name = this.props.item_name;
        const item_des = this.props.item_description;

        // const item_scan_link = this.props.item_scan_link;

        return (
            <div className="menu-item-component-wrapper">
                <div className="menu-item">
                    <div>
                        <div className="menu-item-title-wrapper">
                            <h3 className="menu-item-title">{item_name}</h3>
                        </div>
                        <div className="menu-item-description-wrapper">
                            <div className="menu-item-description">
                                {item_des}
                            </div>
                        </div>
                    </div>

                    <div className="menu-image-wrapper">
                        <div className="menu-image">
                            {this.displayImg()}

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
}
