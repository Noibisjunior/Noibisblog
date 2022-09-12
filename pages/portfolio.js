import Image from 'next/image'
import Head from 'next/head' 
const portfolio = () => {
    return (
        <>
    <Head>
<title>noibisjunior | Project</title>
<meta name='keywords' content='Noibisjunior'/>
    </Head>
    <section id="portfolio">
        <div className="container mt-5">
            <h1 className="text-center"> Other Featured Project Includes</h1>
        <div className="row">
            <div className="col-lg-4 mt-5">
                <div className="card">
                    <img className="card-img-top" src='/images/posts/comp.jpg' style={{width: '100%'}}/>
                    <div class="card-body">
                            <h4 class="card-title">Calculator project</h4>
                            <p class="card-text">This project explain how to create a responsive calculator app</p>
                            <div class="text-center">
                                <a href="#" class="btn btn-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mt-5">
                <div className="card portfolioContent">
                    <img className="card-img-top" src='/images/posts/noibisjunior.jpeg.jpeg' alt="card image" style={{width: '100%'}}></img>
                    <div class="card-body">
                            <h4 class="card-title">Calculator project</h4>
                            <p class="card-text">This project explain how to create a responsive calculator app</p>
                            <div class="text-center">
                                <a href="#" class="btn btn-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-5">
                <div className="card">
                    <img className="card-img-top" src='/images/posts/download.jpg' alt="card image" style={{width: '100%'}}></img>
                    <div class="card-body">
                            <h4 class="card-title">Calculator project</h4>
                            <p class="card-text">This project explain how to create a responsive calculator app</p>
                            <div class="text-center">
                                <a href="#" class="btn btn-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mt-5">
                <div className="card">
                    <img className="card-img-top" src='/images/posts/download 6.jpg' alt="card image" style={{width: '100%'}}></img>
                    <div class="card-body">
                            <h4 class="card-title">Calculator project</h4>
                            <p class="card-text">This project explain how to create a responsive calculator app</p>
                            <div class="text-center">
                                <a href="#" class="btn btn-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 mt-5">
                <div className="card">
                    <img className="card-img-top" src='/images/posts/Mistake.jpg' alt="card image" style={{width: '100%'}}></img>
                    <div class="card-body">
                            <h4 class="card-title">Calculator project</h4>
                            <p class="card-text">This project explain how to create a responsive calculator app</p>
                            <div class="text-center">
                                <a href="#" class="btn btn-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
        )
}

export default portfolio