import NextNProgress from "nextjs-progressbar";
import '../styles/animate.min.css';
import '../styles/bootstrap.min.css';
import '../styles/fontawesome.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
        
  );
  

}

 export default MyApp
