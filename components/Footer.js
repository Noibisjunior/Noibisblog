import Head from 'next/head'


const Footer = () => {
    return(
      <>
<div>
        <footer>
        <div className='socialicons'>
                <a href="https://www.facebook.com/Noibis Junior"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://www.twitter.com/clericcoder" ><i className="fa-brands fa-twitter"></i></a>
                <a href="https://www.whatsapp.com/" ><i className="fa-brands fa-whatsapp"></i></a>
                <a href="https://www.github.com/Noibisjunior" ><i className="fa-brands fa-github-square"></i></a>
            </div>

              CREATED BY NOIBISJUNIOR,<i className="fa-solid fa-copyright"></i>2022
              <div className='contact'>
              <p>Reach Me at</p>
              <p> Contact No: +234-0905-7210-160</p>
              <p> Email: Noibisjunior22@gmail.com</p></div>
            </footer>
            </div>
    </>
    
   );
}
export default Footer;