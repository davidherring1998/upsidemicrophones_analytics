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
      {/* Navigation for > 545px */}
      <div className="navigation-container">
        <ul>
          <li>
            <Link to="/">
              <img src={logo} alt="Upside Microphones logo." id="nav-logo" />
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link">
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

        <div className="login-logout">
          <button>
            <Link to="/">Login</Link>
          </button>
        </div>
      </div>

      {/* Navigation for Mobile ( < 545px) */}
      {/* <div className="navigation-container navigation-container--mobile">
        <ul>
          <li>
            <Link to="/" className="nav-link nav-link--mobile">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link nav-link--mobile">
              Sales
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link nav-link--mobile">
              Inventory
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link nav-link--mobile">
              Adjustments
            </Link>
          </li>
        </ul>
      </div> */}

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
