import React, { Component } from "react";
import data from "../Data/Data.json";
import "../App.css";

const product4Photo = data.product.product4Photo.map(({ alt, src }) => (
  <div>
    <img className="aboutPhoto" src={src} alt={alt} />
  </div>
));
const product5Photo = data.product.product5Photo.map(({ alt, src }) => (
  <div>
    <img className="aboutPhoto" src={src} alt={alt} />
  </div>
));
const product6Photo = data.product.product6Photo.map(({ alt, src }) => (
  <div>
    <img className="aboutPhoto" src={src} alt={alt} />
  </div>
));
export default class About extends Component {
  render() {
    const {
      service: { serviceTwo },
      about: { aboutServiceTwo },
      product: { product4, product5, product6 },
    } = data;

    return (
      <div className="service-two-background">
        <section className="service-two-title">{serviceTwo}</section>
        <article className="service-one-main">
          <section className="">
            <div className="product-flex">
              <div className="productTwo">{product4}</div>
              <div>{product4Photo}</div>
            </div>
            <div className="product-flex">
              <div className="productTwo">{product5}</div>
              <div>{product5Photo}</div>
            </div>
            <div className="product-flex">
              <div className="productTwo">{product6}</div>
              <div>{product6Photo}</div>
            </div>
          </section>
          <section className="service-one-about">{aboutServiceTwo}</section>
        </article>
      </div>
    );
  }
}
