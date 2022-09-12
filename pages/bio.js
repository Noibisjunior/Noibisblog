
import Head from "next/head"


const Bio = () => {
    return (
        <>
    <Head>
<title>noibisjunior | BIO</title>
<meta name='keywords' content='Noibisjunior'/>
    </Head>
    <section className='bgimage'>
        <div className="container-fluid">
            <div className="row">
            <div className= 'hero_text'>
               <h2 className='hero_title'>Hello This is NOIBISJUNIOR</h2>
               <p className='hero_desc p'>I am a Front-end Developer that Loves Creating Web content using Modern Web Technologies Which Includes Nextjs and Reactjs To Deliver a Responsive User Interface Experience.</p>
        </div>
        </div>
    </div>
        </section>
        <h1 className="text-center">Here are My Featured Project </h1>
        <div className="row">
            
        <div className="col-lg-4 mt-5">
                <div className="card portfolioContent">
                    <img className="card-img-top" src='/images/posts/comp.jpg' alt="card image" style={{width: '100%'}}></img>
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
                <div className="card portfolioContent">
                    <img className="card-img-top" src='/images/posts/comp.jpg' alt="card image" style={{width: '100%'}}></img>
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
        </>
    )
}

export default Bio