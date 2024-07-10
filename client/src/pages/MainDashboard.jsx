import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
import Advertisment from './Advertisment'
import Chefs from '../components/Chefs'
import { useLocation, useNavigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';



const MainDashboard = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("Location:", location.search); // Log location.search for debugging
    const params = new URLSearchParams(location.search);
    if (params.get('refresh') === 'true') {
      setTimeout(() => {
        setIsLoading(false); // Set loading state to false after delay
        window.location.reload(); // Reload the page
      }, 1000); // Increased delay
    } else {
      setIsLoading(false); // If not refreshing, set loading state to false immediately
    }
  }, [location.search]);

  console.log("Is Loading:", isLoading); // Log isLoading for debugging




  return (
    <>
   
      {isLoading ? (
  
        <div>
          <CircularProgress />
        </div>
      ) : (
        <>
        <Advertisment/>
        <Navbar/>
        <About/>
        {/* <FamousDishes/> */}
        {/* <MenuImage/> */}
        <Gallery/>
        {/* <BlogContainer/> */}
        <Chefs/>
        <Contact/>  
        {/* <Footer/> */}
        </>

     )}

    </>
  )
}

export default MainDashboard;





