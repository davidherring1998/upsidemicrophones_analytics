import { Form } from "@remix-run/react";

import bannerImage from "../../public/banner-image.png";

export default function Index() {
  return (
    <>
      <div className="content-wrapper">
        <div className="wrapper-upper">
          <div className="upper-section-one">
            <button id="btn-demo">Demo Avaliable</button>
            <h1>Tracking Sales and Inventory Just Got Easier.</h1>
            <img src={bannerImage} alt="lorem lorem lorem" />
          </div>

          <div className="upper-section-two">
            <div className="section-two--paragraph">
              <p>
                Welcome to Upside Analytics - the ultimate e-commerce solution
                for seamlessly tracking your inventory and sales manually across
                any platform.With Upside Analytics, you gain the power to
                monitor your entire inventory and sales activities effortlessly.
              </p>
            </div>

            <div className="section-two--signup">
              <Form method="POST">
                <input type="text" name="username" id="banner-signup" />
                <button type="submit" className="btn" id="btn-banner--signup">
                  Sign Up
                </button>
              </Form>
            </div>

            <span className="section-two--link"></span>
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
