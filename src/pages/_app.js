import '@/styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LoadingBar from 'react-top-loading-bar'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/router'
export default function App({ Component, pageProps }) {
  useEffect(() => {
    router.events.on('routeChangeComplete',()=>{
  setProgress(100);
    })
    }, [])
    const router=useRouter();
  const [progress, setProgress] = useState(0)
  return <>
   <LoadingBar
        color='#7cfc00'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </>
}
