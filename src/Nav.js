import React, { useEffect, useState } from 'react'
import "./Nav.css"

function Nav() {
    const [ show , handleShow ] = useState(false);
    const transionNavbar = () => {
        if (window.scrollY >100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    };
    useEffect(() => { 
        window.addEventListener('scroll', transionNavbar);
        return ()=> window.removeEventListener('scroll', transionNavbar);
    },[]);
    return (
        <div className={`nav ${show &&'nav__black'}`}> 
            <div className="nav__contents">
                <img className="nav__logo" src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-2-1.png" 
                alt="" 
                />
                <img className="nav__avatar" src="https://www.sbbs-soc.com/wp-content/uploads/2017/01/MemberIcon.png" alt="" />
            </div>
        </div>
    )
}

export default Nav
 