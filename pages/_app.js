
// Aos
// import 'aos/dist/aos.css';

// Common Css
import "bootstrap/dist/css/bootstrap.min.css";
import "/styles/common.css";
import "/styles/order_section.css";
import "/styles/common_component.css";

// main_page_css

// landing Css
// import "../styles/landing_one/landing_one.css";

import "../styles/landing-15/landing-15.css";



import SSRProvider from "react-bootstrap/SSRProvider";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
     
      {/* <SSRProvider> */}
  
          <Component {...pageProps} />
      
      {/* </SSRProvider> */}
    </>
  );
}

export default MyApp;
