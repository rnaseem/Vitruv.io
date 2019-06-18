import React from "react"
import "./style.css";
import vitruvianMan from "./vitruvianManShortened.mp4";

function VitruviAnimation() {
    return (
        <video autoPlay
            muted
            id="myVideo">
            <source src={vitruvianMan}
                type="video/mp4"></source>
        </video>);
}

export default VitruviAnimation