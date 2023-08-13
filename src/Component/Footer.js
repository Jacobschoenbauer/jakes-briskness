import React, { Component } from "react";
import data from "../Data/Data.json";
import "../App.css";
const faceBook = data.faceBook.map(({ alt, src }) => (
  <div>
    <img className="faceBook" src={src} alt={alt} />
  </div>
));
export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer">
          <a
            className="facebook-footer"
            href="https://www.facebook.com/profile.php?id=100092271052712"
          >
            {faceBook}
          </a>
        </div>
      </div>
    );
  }
}
