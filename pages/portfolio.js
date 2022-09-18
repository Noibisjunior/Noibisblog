import Image from 'next/image'
import Head from 'next/head' 
const portfolio = () => {
    return (
      <>
        <Head>
          <title>noibisjunior | Project</title>
          <meta name="project" content="coding blog" />
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5322277310257930"
            crossOrigin="anonymous"
          ></script>
        </Head>
        <section id="portfolio">
          <div className="container mt-5">
            <h1 className="text-center"> Other Featured Project Includes</h1>
            <div className="row">
              <div className="col-lg-4 mt-5">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="/images/posts/comp.jpg"
                    style={{ width: '100%' }}
                    alt="code"
                  />
                  <div className="card-body">
                    <h4 className="card-title">
                      {' '}
                      A responsive Color flipper project
                    </h4>
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

              <div className="col-lg-4 mt-5">
                <div className="card portfolioContent">
                  <img
                    className="card-img-top"
                    src="/images/posts/noibisjunior.jpeg.jpeg"
                    alt="card image"
                    style={{ width: '100%' }}
                  ></img>
                  <div className="card-body">
                    <h4 className="card-title">A pallindrum project</h4>
                    <p className="card-text">
                      This project checks if a word is a pallindrum once the
                      modal is opened
                    </p>
                    <div className="text-center">
                      <a
                        href=" https://noibisjunior.github.io/A-pallindrum/"
                        className="btn btn-success"
                      >
                        Link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt-5">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="/images/posts/download.jpg"
                    alt="card image"
                    style={{ width: '100%' }}
                  ></img>
                  <div className="card-body">
                    <h4 className="card-title">A counter App project</h4>
                    <p className="card-text">
                      This project shows a simple counter application
                    </p>
                    <div className="text-center">
                      <a
                        href="https://noibisjunior.github.io/Noibisjunior/"
                        className="btn btn-success"
                      >
                        Link
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mt-5">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="/images/posts/download 6.jpg"
                    alt="card image"
                    style={{ width: '100%' }}
                  ></img>
                  <div className="card-body">
                    <h4 className="card-title">A filter Tab</h4>
                    <p className="card-text">
                      This project shows a responsive navigation Tab
                    </p>
                    <div className="text-center">
                      <a
                        href=" https://noibisjunior.github.io/A-filter-Tab/"
                        className="btn btn-success"
                      >
                        Link
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mt-5">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="/images/posts/Mistake.jpg"
                    alt="card image"
                    style={{ width: '100%' }}
                  ></img>
                  <div className="card-body">
                    <h4 className="card-title">
                      {' '}
                      A responsive grid Calculator project
                    </h4>
                    <p className="card-text">
                      This project shows a responsive and functional calculator
                    </p>
                    <div className="text-center">
                      <a
                        href=" https://noibisjunior.github.io/A-grid-calculator/"
                        className="btn btn-success"
                      >
                        Link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default portfolio