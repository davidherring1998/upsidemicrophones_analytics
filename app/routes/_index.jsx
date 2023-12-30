import { Form } from "@remix-run/react";

import bannerImage from "../../public/banner-image.png";
import featureOneImg from "../../public/feature_one_img.png";
import featureTwoImg from "../../public/feature_two_img.png";
import featureThreeImg from "../../public/feature_three_img.png";
import featureFourImg from "../../public/feature_four_img.png";
import sectioneOneImg from "../../public/section_one_img.png";
import sectioneTwoImg from "../../public/section_two_img.png";
import sectioneThreeImg from "../../public/section_three_img.png";

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
            <div className="features feature-one feature-left">
              <img src={featureOneImg} alt="Sales projection graph. " />
              <h3>Measure Development</h3>
            </div>

            <div className="features feature-two feature-right">
              <img src={featureTwoImg} alt="Inventory managment clipboard." />
              <h3>Monitor Inventory Status</h3>
            </div>
          </div>

          <div className="wrapper-features--right">
            <div className="features feature-three feature-left">
              <img src={featureThreeImg} alt="Hand holding a bag of money." />
              <h3>Increase Conversions</h3>
            </div>

            <div className="features feature-four feature-right">
              <img
                src={featureFourImg}
                alt="Two animated people planing a marketing statergy."
              />
              <h3>Strategize Marketing Plans</h3>
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
            <h3>Monitor Inventory </h3>
          </div>
        </div>

        <div className="wrapper-features--right wrapper-features--right---large large">
          <div className="features feature-large large large-row">
            <img src={featureFourImg} alt="Hand holding a bag of money." />
            <h3>Increase Conversions</h3>
          </div>

          <div className="features feature-large large">
            <img
              src={featureThreeImg}
              alt="Two animated people planing a marketing statergy."
            />
            <h3>Strategize Marketing</h3>
          </div>
        </div>

        <div className="wrapper-middle">
          <div className="wrapper-sections">
            <div className="header-middle">
              <span>IT'S TIME TO START THE RIGHT WAY</span>
              <h2>Revolutionize Your Inventory Management Approach</h2>
            </div>

            <div className="sections">
              <div className="section-one section">
                <img src={sectioneOneImg} alt="Hand holding a bag of money." />

                <h3>Your All-In-One Solution</h3>
                <p>
                  Efficiently manage sales facets with our inventory software.
                  Enter sales data manually from any platform, monitor growth,
                  create marketing goals, and track inventory seamlessly.
                </p>
              </div>

              <div className="section-two section">
                <img src={sectioneTwoImg} alt="Hand holding a bag of money." />

                <h3>Set Your Marketing Goals with Precision</h3>
                <p>
                  Unveil the full potential of your marketing strategy with
                  targeted goal setting. Upside Analytics equips you with the
                  tools to establish clear, measurable, and attainable marketing
                  objectives.
                </p>
              </div>

              <div className="section-three section">
                <img
                  src={sectioneThreeImg}
                  alt="Hand holding a bag of money."
                />
                <h3>Measure your businesses Growth</h3>
                <p>
                  Track and measure your business growth effectively with Upside
                  Analytics. Gain insights into sales trends, customer behavior,
                  and market dynamics for strategic decision-making.
                </p>
              </div>
            </div>
          </div>

          <div className="wapper-customer--card"></div>

          {/* <div className="wrapper-keynotes">
            <div className="keynote keynote-one">
              <h2 className="header-h2 header-keynote">
                Monitor Your Business's Inventory
              </h2>
              <span></span>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
