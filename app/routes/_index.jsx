import { Form } from "@remix-run/react";

import bannerImage from "../../public/banner-image.png";
import featureOneImg from "../../public/feature_one_img.png";
import featureTwoImg from "../../public/feature_two_img.png";
import featureThreeImg from "../../public/feature_three_img.png";
import featureFourImg from "../../public/feature_four_img.png";

export default function Index() {
  return (
    <>
      <div className="content-wrapper">
        <div className="wrapper-upper">
          <div className="wrapper-banner">
            <button className="btn" id="btn-demo">
              Demo Avaliable
            </button>

            <div className="upper-section--one">
              <div className="header">
                <h1>Tracking Sales and Inventory Just Got Easier.</h1>
              </div>

              <div className="header-img">
                <img src={bannerImage} alt="lorem lorem lorem" />
              </div>
            </div>

            <div className="upper-section--two">
              <div className="section-two--paragraph">
                <p>
                  Welcome to Upside Analytics - the ultimate e-commerce solution
                  for seamlessly tracking your inventory and sales manually
                  across any platform.With Upside Analytics, you gain the power
                  to monitor your entire inventory and sales activities
                  effortlessly.
                </p>
              </div>

              <span className="section-two--line"></span>

              <div className="section-two--signup">
                <Form method="POST">
                  <input
                    type="text"
                    name="username"
                    id="input-signup--banner"
                  />
                  <button type="submit" className="btn" id="btn-signup--banner">
                    Sign Up
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>

        {/* Render for mobile < 1150px */}
        <div className="wrapper-features--mobile">
          <div className="wrapper-features--left">
            <div className="features feature-one">
              <img src={featureOneImg} alt="Sales projection graph. " />
              <h3>Track Sales Growth</h3>
            </div>

            <div className="features feature-two">
              <img src={featureTwoImg} alt="Inventory managment clipboard." />
              <h3>Manage Inventory</h3>
            </div>
          </div>

          <div className="wrapper-features--right">
            <div className="features feature-three">
              <img src={featureThreeImg} alt="Hand holding a bag of money." />
              <h3>Increase Conversions</h3>
            </div>

            <div className="features feature-four">
              <img
                src={featureFourImg}
                alt="Two animated people planing a marketing statergy."
              />
              <h3>Build Marketing Strategy</h3>
            </div>
          </div>
        </div>

        {/* Render for > 1150px */}
        <div className="wrapper-features--left wrapper-features--left---large large ">
          <div className="features feature-large large large-row">
            <img src={featureOneImg} alt="Sales projection graph. " />
            <h3>Measure Development</h3>
          </div>

          <div className="features feature-large large">
            <img src={featureTwoImg} alt="Inventory managment clipboard." />
            <h3>Manage Inventory</h3>
          </div>
        </div>

        <div className="wrapper-features--right wrapper-features--right---large large">
          <div className="features feature-large large large-row">
            <img src={featureThreeImg} alt="Hand holding a bag of money." />
            <h3>Increase Conversions</h3>
          </div>

          <div className="features feature-large large">
            <img
              src={featureFourImg}
              alt="Two animated people planing a marketing statergy."
            />
            <h3>Strategize Marketing</h3>
          </div>
        </div>

        <div className="wrapper-middle"></div>
      </div>
    </>
  );
}
