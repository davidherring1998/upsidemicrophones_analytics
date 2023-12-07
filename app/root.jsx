import {
  Outlet,
  LiveReload,
  Links,
  Meta,
  ScrollRestoration,
  Scripts,
  useRouteError,
} from "@remix-run/react";
import Footer from "./layout/Footer";
import MobileNavigation from "./layout/MobileNavigation";
import Navigation from "./layout/Navigation";
import globalSyles from "./styles/globalStyles.css";
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
      <div className="page-container">
        <MobileNavigation />
        <Navigation />
        <div className="content">{children}</div>
        <Footer />
      </div>
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
