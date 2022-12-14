import Script from "next/script";

const Footer = () => {
  return (
    <>
      <script
        src="https://kit.fontawesome.com/94262bb834.js"
        crossOrigin="anonymous"
        async
      ></script>

      <footer className="p-5 bg-dark text-white text-center position-relatives">
        <div className="container">
          <div className="socialicons">
            <a href="https://www.facebook.com/Noibis Junior">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.twitter.com/clericcoder">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCJQmbtiMOaWro6ZCstnkhkg">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="https://www.github.com/Noibisjunior">
              <i className="fa-brands fa-github-square"></i>
            </a>
          </div>
          <p className="lead text-center">CREATED BY NOIBISJUNIOR,2022</p>
          <div className="contact">
            <p>Reach Me at</p>
            <p> Contact No: +234-0905-7210-160</p>
            <p> Email: Noibisjunior22@gmail.com</p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
