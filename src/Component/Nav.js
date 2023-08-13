import React, { Component } from "react";
import data from "../Data/Data.json";
import { Link } from "react-router-dom";
import "../App.css";
const logo = data.logo.map(({ alt, src }) => (
  <div>
    <img className="logo" src={src} alt={alt} />
  </div>
));
const images = data.images.map(({ alt, src }) => (
  <div>
    <img className="Sirv image-hover header-images" src={src} alt={alt} />
  </div>
));
const imagesTwo = data.imagesTwo.map(({ alt, src }) => (
  <div>
    <img className="Sirv image-main header-images" src={src} alt={alt} />
  </div>
));

export default class Nav extends Component {
  render() {
    const {
      about: { telephone, slogan, serviceOne, serviceTwo },
    } = data;

    return (
      <div className="nav-all">
        <div className="logo-box">
          <div className="logo">{logo}</div>
        </div>
        <div className="navbox">
          <section className="navgate">
            <div className="navSearch">
              <div>
                <Link className="about navFont" to="/">
                  About
                </Link>
              </div>
              <div>
                <Link className="service navFont" to="/ServiceOne">
                  {serviceOne}
                </Link>
              </div>
              <div>
                <Link className="service navFont" to="/ServiceTwo">
                  {serviceTwo}
                </Link>
              </div>
              <div>
                <Link className="contact navFont" to="/contact">
                  Contact
                </Link>
              </div>
            </div>
            <div className="num ">
              <div>Call</div>
              <a className="phone " href="tel:651-500-1758">
                {telephone}
              </a>
              <div>for a free estimate</div>
            </div>
          </section>
          <section className="figure">
            <div>{images}</div>
            <div>{imagesTwo}</div>
          </section>
          <div className="slogan">{slogan}</div>
        </div>
      </div>
    );
  }
}
