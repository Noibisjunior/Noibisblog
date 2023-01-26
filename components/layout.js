import Footer from "./footer"
import Nav from "./nav"

const Layout = ({ children }) =>{
    return (
      <>
        <head>
          <script
            type="text/javascript"
            async="async"
            src="//pl18342317.highcpmrevenuenetwork.com/78/c8/bc/78c8bc6
    79de968d3ea881edfe3d9c47c.js"
          ></script>
        </head>
        <body>
          <div className="content">
            <Nav />
            {children}
            <Footer />
          </div>
        </body>
      </>
    );
}

export default Layout;