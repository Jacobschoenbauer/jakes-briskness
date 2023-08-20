import React, { Component } from "react";
import data from "../Data/Data.json";
import "../App.css";
const phoneLogo = data.phoneLogo.map(({ alt, src }) => (
  <div>
    <img className="contact-image" src={src} alt={alt} />
  </div>
));
const emailLogo = data.emailLogo.map(({ alt, src }) => (
  <div>
    <img className="contact-image" src={src} alt={alt} />
  </div>
));

export default class Contact extends Component {
  render() {
    const {
      about: { introContact, telephone, email  },
    } = data;

    return (
      <div>
        <article className="contact-flex">
          <section className="intro-contact font-color background-three"><h3>{introContact}</h3></section>
          <section className="contact-phone font-color">
            <a className="phone" href="tel:651-285-8336">
              {phoneLogo}
            </a>
            <div>{telephone}</div>
          </section>
          <section className="contact-email font-color">
            <a className="email" href="mailto:jacobschoenbauer@gmail.com">
              {emailLogo}
            </a>
            <div>{email}</div>
          </section>
        </article>
      </div>
    );
  }
}
