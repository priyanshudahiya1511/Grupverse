import React from "react";
import logo from "./imgFolder/logo.png";
import userlogo from "./imgFolder/userlogo.png";
import {MdNotificationsActive} from "react-icons/md";
import {CgLogIn} from "react-icons/cg";
import {FaUserPlus} from "react-icons/fa";
import {BsFillInfoCircleFill} from "react-icons/bs";
import {FaAddressBook} from "react-icons/fa";
import {ImHammer2} from "react-icons/im";
import {GiGears} from "react-icons/gi";
import {FaLanguage} from "react-icons/fa";
import "./Navbarappview.css"
import { useState } from "react";
import PostSection from "./PostSection";

function NavbarAppview(){

    const [dropdown,setDropdown] = useState(false);

    function handledropdown(){
        if(dropdown == true){
            setDropdown(false)
        }
        else{
            setDropdown(true)
        }
    }

    function dropdownfalse(){
        if(dropdown == true){
            setDropdown(false)
        }
    }

    return(
        <div onClick={dropdownfalse}>
            <header>
                <nav className="Navbar">
                   <div className="logo-container">
                      <img src={logo} className="logo-round"/>
                      <span className="company-name">Grupverse</span>
                   </div>

                   <div className="user-container">
                       <MdNotificationsActive size={30} className="notification"/>
                       <div onClick={handledropdown}
                        className="image-container">
                        <img src={userlogo}/>
                        
                       </div>
                   </div>
                </nav>
                
                { dropdown &&
                       <div className="dropdown-appview">
                           <div className="content">
                              <span><CgLogIn className="icon"/></span><span className="text">&nbsp; Login</span>
                            </div>
                            <div className="content" >
                              <span><FaUserPlus className="icon"/></span><span className="text">&nbsp; Register</span>
                            </div>
                            <div className="content">
                              <span><BsFillInfoCircleFill className="icon"/></span><span className="text">&nbsp; About</span>
                            </div>
                            <div className="content"> 
                              <span><FaAddressBook className="icon"/></span><span className="text">&nbsp; Contact</span>
                            </div>
                            <div className="content">
                              <span><ImHammer2 className="icon"/></span><span className="text">&nbsp; Terms & Condition</span>
                            </div>
                            <div className="content">
                              <span><GiGears className="icon"/></span><span className="text">&nbsp; Privacy Policy</span>
                            </div>
                            <div className="content">
                              <span><FaLanguage className="icon"/></span><span className="text">&nbsp; Language</span>
                            </div>
                        </div>

                }
                
            </header>

            <h2>Hello, 👋 <br/>Good Morning<br/><br/>Team Recommendation for you<br/><br/><br/><br/><br/><br/><br/><br/><br/>
		  </h2>
      
      
            
        </div>
    )
}

export default NavbarAppview;