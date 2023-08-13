import React, { Component } from "react";
import data from "../Data/Data.json";
import "../App.css";
const homeImage = data.homeImage.map(({ alt, src }) => (
  <div>
    <img className="aboutMain" src={src} alt={alt} />
  </div>
));
// const iconOne = data.iconOne.map(({ alt, src }) => (
//   <div>
//     <img className="iconAbout" src={src} alt={alt} />
//   </div>
// ));
// const iconTwo = data.iconTwo.map(({ alt, src }) => (
//   <div>
//     <img className="iconAbout" src={src} alt={alt} />
//   </div>
// ));
// const iconThree = data.iconThree.map(({ alt, src }) => (
//   <div>
//     <img className="iconAbout" src={src} alt={alt} />
//   </div>
// ));
// const iconFour = data.iconFour.map(({ alt, src }) => (
//   <div>
//     <img className="iconAbout" src={src} alt={alt} />
//   </div>
// ));
// const iconFive = data.iconFive.map(({ alt, src }) => (
//   <div>
//     <img className="iconAbout" src={src} alt={alt} />
//   </div>
// ));
// const iconSix = data.iconSix.map(({ alt, src }) => (
//   <div>
//     <img className="iconAbout" src={src} alt={alt} />
//   </div>
// ));

export default class About extends Component {
  render() {
    const {
      about: { about },
      product: { product1, product2, product3, product4, product5, product6 },
    } = data;

    return (
      <div>
        <article className="about-flex">
          <section className="about-product">
            <section className="serviceOne  aboutService">
              <div className="iconCss"></div>
              <div className="about-work">{product1}</div>
            </section>
            <section className="serviceTwo aboutService">
              <div className="iconCss"></div>
              <div className="about-work">{product2}</div>
            </section>
            <section className="serviceThree aboutService">
              <div className="iconCss"></div>
              <div className="about-work">{product3}</div>
            </section>
            <section className="serviceFour aboutService">
              <div className="iconCss"></div>
              <div className="about-work">{product4}</div>
            </section>
            <section className="serviceFive aboutService">
              <div className="iconCss"></div>
              <div className="about-work">{product5}</div>
            </section>
            <section className="serviceSix aboutService">
              <div className="iconCss"></div>
              <div className="about-work">{product6}</div>
            </section>
          </section>
          <div className="mainAbout">
            <section className="about-story">{about}</section>
            <section className="about-photo">{homeImage} </section>
          </div>
        </article>
      </div>
    );
  }
}
