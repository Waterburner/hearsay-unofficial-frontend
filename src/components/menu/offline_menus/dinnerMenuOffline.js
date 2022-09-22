import React from "react";

export default function DinnerMenuOffline() {
    return (
        <div className="dinner-menu-offline">
            <div className="menu-item-component-wrapper">
                <div className="menu-item">
                    <div className="menu-item-title-wrapper">
                        <h3 className="menu-item-title"></h3>
                    </div>
                    <div className="menu-item-description-wrapper">
                        <div className="menu-item-description"></div>
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
        </div>
    );
}
