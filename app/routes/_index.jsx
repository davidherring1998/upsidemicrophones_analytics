import { Form } from "@remix-run/react";

import bannerImage from "../../public/banner-image.png";

export default function Index() {
  return (
    <>
      <div className="content-wrapper">
        <div className="wrapper-upper">
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
                for seamlessly tracking your inventory and sales manually across
                any platform.With Upside Analytics, you gain the power to
                monitor your entire inventory and sales activities effortlessly.
              </p>
            </div>

            <span className="section-two--line"></span>

            <div className="section-two--signup">
              <Form method="POST">
                <input type="text" name="username" id="input-signup--banner" />
                <button type="submit" className="btn" id="btn-signup--banner">
                  Sign Up
                </button>
              </Form>
            </div>
          </div>
        </div>

        <div className="wrapper-middle">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel facere
            sit laborum vitae maiores. Natus assumenda in, doloribus veniam
            numquam optio nisi, quas nihil, officia reprehenderit iure dicta
            odio! Numquam.
          </div>
        </div>

        <div className="wrapper-lower">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel facere
            sit laborum vitae maiores. Natus assumenda in, doloribus veniam
            numquam optio nisi, quas nihil, officia reprehenderit iure dicta
            odio! Numquam.
          </div>
        </div>
      </div>
    </>
  );
}
