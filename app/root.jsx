import {
  Outlet,
  LiveReload,
  Link,
  Links,
  Meta,
  ScrollRestoration,
  Scripts,
  useRouteError,
} from "@remix-run/react";
import globalSyles from "./styles/globalStyles.css";
import logo from "../public/Logo.png";
import "remixicon/fonts/remixicon.css";

export function ErrorBoundry() {
  const error = useRouteError();
  console.log(error);
  return (
    <Document>
      <Layout>
        <Scripts />
        <ScrollRestoration />
        <div className="root-error--boundry">
          <h1>
            Ut oh! An Error has occurred, please return to the previous page or
            contact support for help at support@email.com
          </h1>
        </div>
      </Layout>
    </Document>
  );
}

export const links = () => [{ rel: "stylesheet", href: globalSyles }];
export const meta = () => {
  const description =
    "Upside Microphones analytics website for sales and inventory";
  const keywords = "Upside Microphones, Sales, Inventory, Remix";
  return [
    {
      description,
      keywords,
    },
  ];
};

function Document({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <Meta />
        <Links />
        <title> Upside Analytics </title>
      </head>
      <body>
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
        {children}
      </body>
    </html>
  );
}

function Layout({ children }) {
  return (
    <>
      {/* Navigation > 545px */}
      <div className="navigation-container">
        <ul>
          <li>
            <Link to="/">
              <img src={logo} alt="Upside Microphones logo." id="nav-logo" />
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link ">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link">
              Sales
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link">
              Inventory
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link">
              Adjustments
            </Link>
          </li>
        </ul>

        <div>
          <button>
            <Link to="/">Login</Link>
          </button>
        </div>
      </div>

      {/* Navigation Bar < 545px */}
      <div className="navigation-container navigation-container--mobile">
        <ul>
          <li>
            <Link to="/" className="nav-link--mobile ">
              <i class="ri-home-5-fill">
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
              <i class="ri-bar-chart-2-fill">
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
              <i class="ri-safe-fill">
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
              <i class="ri-edit-box-fill">
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
      </div>

      <div className="container">{children}</div>
    </>
  );
}

export default function App() {
  return (
    <>
      <Document>
        <Layout>
          <ScrollRestoration />
          <Scripts />
          <Outlet />
        </Layout>
      </Document>
    </>
  );
}
