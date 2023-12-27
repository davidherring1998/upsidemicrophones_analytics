import { Link } from "@remix-run/react";

// Navigation width < 545px
export default function MobileNavigation() {
  return (
    <>
      {/* User ? ___ :  */}
      {/* <div className="navigation-container navigation-container--mobile">
        <ul>
          <li>
            <Link to="/" className="nav-link--mobile ">
              <i className="ri-home-5-fill">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36"
                  height="36"
                >
                  <path
                    d="M21 19.9997C21 20.552 20.5523 20.9997 20 20.9997H4C3.44772 20.9997 3 20.552 3 19.9997V9.48882C3 9.18023 3.14247 8.88893 3.38606 8.69947L11.3861 2.47725C11.7472 2.19639 12.2528 2.19639 12.6139 2.47725L20.6139 8.69947C20.8575 8.88893 21 9.18023 21 9.48882V19.9997ZM11 12.9997V18.9997H13V12.9997H11Z"
                    fill="rgba(255,255,255,1)"
                  ></path>
                </svg>
              </i>
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link--mobile">
              <i className="ri-bar-chart-2-fill">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36"
                  height="36"
                >
                  <path
                    d="M2 13H8V21H2V13ZM9 3H15V21H9V3ZM16 8H22V21H16V8Z"
                    fill="rgba(255,255,255,1)"
                  ></path>
                </svg>
              </i>
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link--mobile">
              <i className="ri-safe-fill">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36"
                  height="36"
                >
                  <path
                    d="M18.0049 20H6.00488V22H4.00488V20H3.00488C2.4526 20 2.00488 19.5523 2.00488 19V4C2.00488 3.44772 2.4526 3 3.00488 3H21.0049C21.5572 3 22.0049 3.44772 22.0049 4V19C22.0049 19.5523 21.5572 20 21.0049 20H20.0049V22H18.0049V20ZM11.0049 13.874V17H13.0049V13.874C14.7301 13.4299 16.0049 11.8638 16.0049 10C16.0049 7.79086 14.214 6 12.0049 6C9.79574 6 8.00488 7.79086 8.00488 10C8.00488 11.8638 9.27966 13.4299 11.0049 13.874ZM12.0049 12C10.9003 12 10.0049 11.1046 10.0049 10C10.0049 8.89543 10.9003 8 12.0049 8C13.1095 8 14.0049 8.89543 14.0049 10C14.0049 11.1046 13.1095 12 12.0049 12Z"
                    fill="rgba(255,255,255,1)"
                  ></path>
                </svg>
              </i>
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link--mobile">
              <i className="ri-edit-box-fill">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36"
                  height="36"
                >
                  <path
                    d="M16.7574 2.99666L9.29145 10.4626L9.29886 14.7097L13.537 14.7023L21 7.2393V19.9967C21 20.5489 20.5523 20.9967 20 20.9967H4C3.44772 20.9967 3 20.5489 3 19.9967V3.99666C3 3.44438 3.44772 2.99666 4 2.99666H16.7574ZM20.4853 2.09717L21.8995 3.51138L12.7071 12.7038L11.2954 12.7062L11.2929 11.2896L20.4853 2.09717Z"
                    fill="rgba(255,255,255,1)"
                  ></path>
                </svg>
              </i>
            </Link>
          </li>
        </ul>
        
      </div> */}
      <div className="navigation-container navigation-container--mobile">
        <ul>
          <li>
            <Link to="/" className="nav-link--mobile ">
              <i className="ri-home-5-fill">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36"
                  height="36"
                >
                  <path
                    d="M21 19.9997C21 20.552 20.5523 20.9997 20 20.9997H4C3.44772 20.9997 3 20.552 3 19.9997V9.48882C3 9.18023 3.14247 8.88893 3.38606 8.69947L11.3861 2.47725C11.7472 2.19639 12.2528 2.19639 12.6139 2.47725L20.6139 8.69947C20.8575 8.88893 21 9.18023 21 9.48882V19.9997ZM11 12.9997V18.9997H13V12.9997H11Z"
                    fill="rgba(255,255,255,1)"
                  ></path>
                </svg>
              </i>
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link--mobile">
              <i class="ri-price-tag-3-fill">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36"
                  height="36"
                >
                  <path
                    d="M10.9042 2.10025L20.8037 3.51446L22.2179 13.414L13.0255 22.6063C12.635 22.9969 12.0019 22.9969 11.6113 22.6063L1.71184 12.7069C1.32131 12.3163 1.32131 11.6832 1.71184 11.2926L10.9042 2.10025ZM13.7327 10.5855C14.5137 11.3666 15.78 11.3666 16.5611 10.5855C17.3421 9.80448 17.3421 8.53815 16.5611 7.7571C15.78 6.97606 14.5137 6.97606 13.7327 7.7571C12.9516 8.53815 12.9516 9.80448 13.7327 10.5855Z"
                    fill="rgba(255,255,255,1)"
                  ></path>
                </svg>
              </i>
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link--mobile">
              <i class="ri-contacts-book-fill">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36"
                  height="36"
                >
                  <path
                    d="M7 2V22H3V2H7ZM9 2H19.0049C20.1068 2 21 2.89821 21 3.9908V20.0092C21 21.1087 20.1074 22 19.0049 22H9V2ZM22 6H24V10H22V6ZM22 12H24V16H22V12ZM15 12C16.1046 12 17 11.1046 17 10C17 8.89543 16.1046 8 15 8C13.8954 8 13 8.89543 13 10C13 11.1046 13.8954 12 15 12ZM12 16H18C18 14.3431 16.6569 13 15 13C13.3431 13 12 14.3431 12 16Z"
                    fill="rgba(255,255,255,1)"
                  ></path>
                </svg>
              </i>
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link--mobile">
              <i class="ri-question-answer-fill">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36"
                  height="36"
                >
                  <path
                    d="M8 18H18.2372L20 19.3851V9H21C21.5523 9 22 9.44772 22 10V23.5L17.5455 20H9C8.44772 20 8 19.5523 8 19V18ZM5.45455 16L1 19.5V4C1 3.44772 1.44772 3 2 3H17C17.5523 3 18 3.44772 18 4V16H5.45455Z"
                    fill="rgba(255,255,255,1)"
                  ></path>
                </svg>
              </i>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
