import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import BrandingLogo from '../assets/social/brand_logo_white.svg'

import {auth} from '../firebase';
const Header = () => {
    const [presentUser,setPresentUser] = useState(null);
    const signOut = () =>{
        auth.signOut();
        }
    useEffect (() =>{ 
      const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      
      const uid = user.uid;
      const email = user.email;
     
      setPresentUser({
            uid:user.uid,
            email:user.email
          })
      
    } else {
      setPresentUser(null);
    
    }
  });
  
    }, [])

    return (

        <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <img src={BrandingLogo} alt='transferwise-Brand' />
            </h1>
    
          <nav id="navbar" className="navbar">
            <ul>
              <li><Link className="nav-link scrollto active" to="/">Money Tranfer</Link></li>
              <li><Link className="nav-link scrollto" to="/">Multi currency-account</Link></li>
              <li><Link className="nav-link scrollto" to="/">Business</Link></li>
              <li><Link className="nav-link   scrollto" to="/">Help</Link></li>
              <li><Link className="nav-link scrollto" to="/">EN</Link></li>
              <li className="dropdown"><Link to="/"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></Link>
                <ul>
                  <li><Link to="#">Drop Down 1</Link></li>
                  <li className="dropdown"><Link to="/"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></Link>
                    <ul>
                      <li><Link to="/">Deep Drop Down 1</Link></li>
                      <li><Link to="/">Deep Drop Down 2</Link></li>
                      <li><Link to="/">Deep Drop Down 3</Link></li>
                      <li><Link to="/">Deep Drop Down 4</Link></li>
                      <li><Link to="/">Deep Drop Down 5</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/">Drop Down 2</Link></li>
                  <li><Link to="/">Drop Down 3</Link></li>
                  <li><Link to="/">Drop Down 4</Link></li>
                </ul>
              </li>
              {
                presentUser ? <li><Link className="getstarted scrollto" to='#' onClick={signOut}>SignOut</Link></li> :
                <>
                 <li><Link className="nav-link scrollto" to='/login'>Login</Link></li>
                 <li><Link className="getstarted scrollto" to='/register'>Register</Link></li>
              </>

              }
             
              {/* <li>{presentUser ? <button className="btn btn-outline-warning" onClick={signOut}>SignOut</button> : <Link to='/login'>
<button className="btn btn-outline-success" type="submit">Login</button>
</Link>}</li> */}
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
    
        </div>
      </header>
    );
}

export default Header;


