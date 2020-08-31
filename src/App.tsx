import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import {
  Navbar, Nav
} from 'react-bootstrap';
import "./App.scss";
import Home from './Home';
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function App(): React.ReactElement {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <LinkContainer to="/">
          <Navbar.Brand id="brand">
            <Logo />
            <h1>
              Paul J Magnus
            </h1>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text id="contact-nav">
            <Nav.Link href="mailto:pauljmagnus@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/paul-magnus/">
              <FontAwesomeIcon icon={faLinkedin} />
            </Nav.Link>
            <Nav.Link href="https://github.com/paulmagnus">
              <FontAwesomeIcon icon={faGithub} />
            </Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}