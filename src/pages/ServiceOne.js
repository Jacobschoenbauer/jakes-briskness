import React, { Component } from "react";
import data from "../Data/Data.json";
import "../App.css";
const product1Photo = data.product.product1Photo.map(({ alt, src }) => (
  <div>
    <img className="aboutPhoto" src={src} alt={alt} />
  </div>
));
const product2Photo = data.product.product2Photo.map(({ alt, src }) => (
  <div>
    <img className="aboutPhoto" src={src} alt={alt} />
  </div>
));
const product3Photo = data.product.product3Photo.map(({ alt, src }) => (
  <div>
    <img className="aboutPhoto" src={src} alt={alt} />
  </div>
));

export default class ServiceOne extends Component {
  render() {
    const {
      about: { aboutServiceOne },
      service: { serviceOne },
      product: { product1, product2, product3 },
    } = data;

    return (
      <div>
        <section className="service-one-title">
          <div>{serviceOne}</div>
        </section>
        <article className="service-one-main">
          <section className="service-one-about">{aboutServiceOne}</section>
          <section className="service-one-flex">
            <div className="product-flex">
              <div className="product">{product1}</div>
              <div>{product1Photo}</div>
            </div>
            <div className="product-flex">
              <div className="product">{product2}</div>
              <div>{product2Photo}</div>
            </div>
            <div className="product-flex">
              <div className="product">{product3}</div>
              <div>{product3Photo}</div>
            </div>
          </section>
        </article>
      </div>
    );
  }
}
