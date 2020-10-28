import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { LinksContext } from "../../state/links-contex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGraduationCap,
    faFutbol,
    faHome,
    faBrain,
    faTasks,
    faPhoneSquareAlt,

} from "@fortawesome/free-solid-svg-icons";

const MyLink = ({ id }) => {
    const { path, handlePathChanged } = useContext(LinksContext);

    let linkIcon;
    switch (id) {
        case 'home':
            linkIcon = faHome;
            break;
        case 'education':
            linkIcon = faGraduationCap;
            break;
        case 'skills':
            linkIcon = faBrain;
            break;
        case 'projects':
            linkIcon = faTasks;
            break;
        case 'career':
            linkIcon = faFutbol;
            break;
        case 'contact':
            linkIcon = faPhoneSquareAlt;
            break;
        default:
            break;

    }
    return (
        <li
            className={`side-nav__item ${path === id && "side-nav__item--active"
                }`}
        >
            <FontAwesomeIcon icon={linkIcon} className="side-nav__icon" />
            <Link
                to={`/${id}`}
                className="side-nav__link"
                onClick={() => handlePathChanged(id)}
            >
                {id}
            </Link>
        </li>
    )
}

export default MyLink
