import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

//Layout Components
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Navigation/Sidebar.jsx";
import Links from "./components/Navigation/Links.jsx";

//Main Components
import Home from "./components/MainContent/Home/Home.jsx";
import Education from "./components/MainContent/Education/Education.jsx";
import Skills from "./components/MainContent/Skills/Skills.jsx";
import Projects from "./components/MainContent/Projects/Projects.jsx";
import Carrer from "./components/MainContent/Carrer/Carrer.jsx";
import Contact from "./components/MainContent/Contact/Contact.jsx";
import OuterImage from "./components/OuterImage.jsx";

import "./styles/sass/main.scss";

const App = () => {
  return (
    <div className="middle-container">
      <h1>Hello</h1>
      <OuterImage />
      <Header />
      <div className="content">
        <Sidebar>
          <Links />
        </Sidebar>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/education" component={Education} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/carrer" component={Carrer} />
          <Route path="/contact" component={Contact} />
          <Redirect to="/home" />
        </Switch>
      </div>
    </div>
  );
};

export default App;
