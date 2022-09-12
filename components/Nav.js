import Link from 'next/link'

const Nav = () => {
    return (
        <nav className='navbar navbar-expand-md fixed-top navbar-dark bg-dark '>
        <div className='container'>
        <a className="navbar-brand mb-0 h1" href="/">NOIBISJUNIOR</a>
        <button class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" 
        aria-controls="navbarNav"
        aria-expanded="false" 
        aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">


        <ul className="navbar-nav ms-auto">
        <li className='nav-item active'>
          <Link href="/" passHref>
             <a className="nav-link active">NOIBISJUNIOR BLOGPOST</a>
           </Link>
        </li>
        <li className='nav-item'>
           <Link href="/bio" passHref>
             <a className='nav-link'>PORTFOLIO</a>
           </Link>
        </li>
        <li className='nav-item'>
           <Link href="/portfolio" passHref>
             <a className='nav-link'>PROJECT</a>
           </Link>
        </li>
           </ul>
           </div>
           </div>
         </nav>
    )
     
    }
    export default Nav