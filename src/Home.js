import React from 'react';
import { getAuth } from "firebase/auth";
import Header from './components/Header'
import HeroBanner from './components/HeroBanner';
import Footer from './components/Footer';


const Home = (props) => {
  const auth = getAuth();
  const user = auth.currentUser;
  return (
    
    <div>

      <Header />
     {/* <h2> welcome  {user ? user.email : 'Guest'}</h2> */}
     <HeroBanner />
     <Footer />
    </div>
  );
}

export default Home;


