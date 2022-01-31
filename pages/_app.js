import '../styles/globals.css'
import Navigation from '../components/Navigation'
function MyApp({ Component, pageProps }) {
  return (
    <>
    <script async defer src="https://tools.luckyorange.com/core/lo.js?site-id=605447fe"></script>
    <Navigation/>
    <Component {...pageProps} />
    </>
    )
}

export default MyApp
