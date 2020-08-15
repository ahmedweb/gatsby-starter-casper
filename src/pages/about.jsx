import React, { Component } from "react";
import Helmet from "react-helmet";
import About from "../components/About/About";
import config from "../../data/SiteConfig";
import Layout from "../components/layout";

class AboutPage extends Component {
  render() {
    return (
      <div className="about-container">
        <About />
      </div>
    );
  }
}

export default AboutPage;
