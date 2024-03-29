import Script from 'next/script';

const Bio = () => {
  return (
    <>
    <head>
      <title>noibisjunior | BIO</title>
      <meta name="portfolio" content="web developer" />
      <script
        async="async"
        type="text/javascript"
        src="//pl18342317.highcpmrevenuenetwork.com/78/c8/bc/78c8bc679de968d3ea881edfe3d9c47c.js"
      ></script>
</head>
<body>
      <section className="bgimage">
        <div className="container-fluid">
          <div className="row">
            <div className="hero_text">
              <h2 className="hero_title">Hello This is NOIBISJUNIOR</h2>
              <p className="hero_desc p">
                I am a Front-end Developer that Loves Creating Web content using
                Modern Web Technologies Which Includes Nextjs and Reactjs To
                Deliver a Responsive User Interface Experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      <h1 className="text-center">Here are My Featured Project </h1>
      <div className="row">
        <div className="col-lg-4 mt-5">
          <div className="card portfolioContent">
            <img
              className="card-img-top"
              src="/images/posts/comp.jpg"
              alt="card image"
              style={{ width: '100%' }}
            ></img>
            <div className="card-body">
              <h4 className="card-title">A color flipper project</h4>
              <p className="card-text">
                This project gives the identification of color by its
                hexa-decimal values
              </p>
              <div className="text-center">
                <a
                  href="https://noibisjunior.github.io/A-color-flipper/"
                  className="btn btn-success"
                >
                  Link
                </a>
              </div>
            </div>
          </div>
        </div>
        <script
          async="async"
          data-cfasync="false"
          src="//pl18342362.highcpmrevenuenetwork.com/784731eb4a2ec065ec0989a6bb7afb58/invoke.js"
        ></script>
        <div id="container-784731eb4a2ec065ec0989a6bb7afb58"></div>

        <div className="col-lg-4 mt-5">
          <div className="card portfolioContent">
            <img
              className="card-img-top"
              src="/images/posts/download 6.jpg"
              alt="card image"
              style={{ width: '100%' }}
            ></img>
            <div className="card-body">
              <h4 className="card-title">
                computer scientist philanthropist review
              </h4>
              <p className="card-text">
                This project gives a brief biography about philanthropist of
                computer scientist
              </p>
              <div className="text-center">
                <a
                  href="https://noibisjunior.github.io/computer-scientist-philanthropist-review/"
                  className="btn btn-success"
                >
                  Link
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mt-5">
          <div className="card portfolioContent">
            <img
              className="card-img-top"
              src="/images/posts/comp.jpg"
              alt="card image"
              style={{ width: '100%' }}
            ></img>
            <div className="card-body">
              <h4 className="card-title">
                A countdown timer for a sale-off product
              </h4>
              <p className="card-text">
                This project shows a real-time countdown timer for a sale-off
                product
              </p>
              <div className="text-center">
                <a
                  href=" https://noibisjunior.github.io/A-countdown-timer-for-product-saleoff/"
                  className="btn btn-success"
                >
                  Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </body>
    </>
  );
};

export default Bio;
