import React from "react";
import "./Polysure.css";
import Box2 from "./assets/Rectangle 7.svg";
import Box3 from "./assets/Rectangle 8.svg";
import Box4 from "./assets/Rectangle 9.svg";
import Uparrow from "./assets/Vector.svg";
import Arrow from "./assets/Arrow.svg";
import Adobe from "./assets/Adobe.svg";
import { Right, Left } from "./Button";
const Polysure = () => {
  return (
    <div className="box">
      <div className="rectangle" />
      <div className="navbar">
        <div className="text-wrapper">Polysure</div>
        <div className="group">
          <div className="div">
            <div className="text-wrapper-2">Insurance Products</div>
            <div className="text-wrapper-2">Renew Your Policy</div>
            <div className="text-wrapper-2">Claim</div>
            <div className="text-wrapper-2">Support</div>
            <div className="text-wrapper-2">Learn</div>
          </div>
          <div className="frame">
            <div className="text-wrapper-3">Sign In</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-4">Get Started</div>
          </div>
        </div>
      </div>
      <div className="box1">
        <div className="banner-description">
          <p className="heading">Taking care of what’s important.</p>
          <div className="description-and">
            <p className="about">
              Start buying and managing your projects by digitally system. And
              reate a comfortable and easy collection as per your need. Protect
              yourself and your loved one.
            </p>
            <div className="frame1">
              <div className="div">Start for Free</div>
            </div>
            <div className="div-wrapper1">
              <div className="learn">Learn More</div>
            </div>
          </div>
        </div>
      </div>
      <div className="family-box-container">
        <div className="box2">
          <div className="card-content">
            <div className="overlap-group">
              <img className="rectangle" alt="Rectangle" src={Box2} />
              <div className="div" />
              <div className="card-text">
                <div className="individuals-family">
                  Individuals &amp; Family
                </div>
                <p className="text-wrapper">
                  We help a proper send-off and help your family keep living
                  their best life in your absence.
                </p>
              </div>
              <div className="arrow">
                <img
                  className="solar-arrow-up"
                  alt="Solar arrow up"
                  src={Uparrow}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="box3">
          <div className="card-content">
            <div className="overlap-group">
              <img className="rectangle" alt="Rectangle" src={Box3} />
              <div className="div" />
              <div className="card-text">
                <div className="individuals-family">
                  Individuals &amp; Family
                </div>
                <p className="text-wrapper">
                  We help a proper send-off and help your family keep living
                  their best life in your absence.
                </p>
              </div>
              <div className="arrow">
                <img
                  className="solar-arrow-up"
                  alt="Solar arrow up"
                  src={Uparrow}
                />
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="box4">
          <div className="card-content">
            <div className="overlap-group">
              <img className="rectangle" alt="Rectangle" src={Box4} />
              <div className="div" />
              <div className="card-text">
                <div className="individuals-family">
                  Individuals &amp; Family
                </div>
                <p className="text-wrapper">
                  We help a proper send-off and help your family keep living
                  their best life in your absence.
                </p>
              </div>
              <div className="arrow">
                <img
                  className="solar-arrow-up"
                  alt="Solar arrow up"
                  src={Uparrow}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="left-arrow">
        <div className="group">
          <Left />
        </div>
      </div>
      <div className="right-arrow">
        <div className="group">
          <Right />
        </div>
      </div>
      <div className="box5">
        <div className="frame">
          <img className="image" alt="Image" src={Adobe} />
          <img className="image" alt="Image" src={Adobe} />
          <img className="image" alt="Image" src={Adobe} />
          <img className="image" alt="Image" src={Adobe} />
          <img className="image" alt="Image" src={Adobe} />
          <img className="image" alt="Image" src={Adobe} />
        </div>
      </div>
    </div>
  );
};
export default Polysure;
