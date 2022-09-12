import Head from 'next/head'


const Footer = () => {
    return(
      <>
<Head>
<script src="https://kit.fontawesome.com/94262bb834.js" crossOrigin="anonymous">

</script>
</Head>
<div>
        <footer>
        <div className='socialicons'>
                <a href="https://www.facebook.com/Noibis Junior" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://www.twitter.com/clericcoder" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                <a href="https://www.whatsapp.com/" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
                <a href="https://www.github.com/Noibisjunior" target="_blank"><i className="fa-brands fa-github-square"></i></a>
            </div>

              CREATED BY NOIBISJUNIOR,<i className="fa-solid fa-copyright"></i>2022
            </footer>
            </div>
    </>
    
   );
}
export default Footer;