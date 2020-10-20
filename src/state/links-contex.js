import React, { createContext, useEffect, useState } from "react";

const LinksContext = createContext();

const { Provider } = LinksContext;

const LinksProvider = ({ children }) => {
  const [path, setPath] = useState("");
  const [menuIsClicked, setMenuIsClicked] = useState(false);
  useEffect(() => {
    if (path === "") {
      const takePath = window.location.href.split("/")[3];
      setPath(takePath);
    }
  }, [path]);

  const handlePathChanged = (pathName) => {
    setPath(pathName);
    setMenuIsClicked(false);
  };

  const toggleMenuIsClicked = () => {
    setMenuIsClicked(!menuIsClicked);
  };
  return (
    <Provider
      value={{ path, handlePathChanged, menuIsClicked, toggleMenuIsClicked }}
    >
      {children}
    </Provider>
  );
};

export { LinksContext, LinksProvider };
