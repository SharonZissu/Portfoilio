import React, { useContext } from 'react'
import { LinksContext } from "../state/links-contex";

const OuterImage = () => {

    const { path } = useContext(LinksContext);

    return (
        <img
            className="out-image"
            style={{
                top: path === "contact" ? "-9.8rem" : "0",
                opacity: path === "contact" ? "1" : "0",
            }}
            src={require("../images/sharon-anima2.png")}
            alt="sharon anima 3"
        />
    )
}

export default OuterImage
