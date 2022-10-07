import Link from 'next/link'
import Head from 'next/head'

const Nav = () => {
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <nav className="navbar navbar-expand-md fixed-top navbar-dark p-3 bg-dark ">
          <div className="container">
            <Link href="/" passHref>
              <a className="navbar-brand mb-0 h1">NOIBISJUNIOR</a>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="item">
                  <Link href="/" passHref>
                    <a className="">NOIBISJUNIOR BLOGPOST</a>
                  </Link>
                </li>
                <li className="item">
                  <Link href="/bio" passHref>
                    <a className="">PORTFOLIO</a>
                  </Link>
                </li>
                <li className="item">
                  <Link href="/portfolio" passHref>
                    <a className="">PROJECT</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
     
    }
    export default Nav