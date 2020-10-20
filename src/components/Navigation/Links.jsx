import React, { useContext } from "react";
import MyLink from "./MyLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { LinksContext } from '../../state/links-contex';
import MenuToPhones from "./MenuToPhones";
const links = ['home', 'education', 'skills', 'projects', 'carrer', 'contact'];

const Links = () => {
  const { toggleMenuIsClicked, menuIsClicked } = useContext(LinksContext);
  return (

    <ul className={`side-nav ${menuIsClicked && 'menu-is-clicked'}`}>
      <FontAwesomeIcon icon={faBars} className='menu' onClick={toggleMenuIsClicked} />
      {menuIsClicked && <MenuToPhones />}
      {links.map(link => <MyLink key={link} id={link} />)}
    </ul>
  );
};

export default Links;
