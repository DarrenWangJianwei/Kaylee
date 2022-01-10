import React,{ useState } from 'react';
import { Link } from "react-router-dom";
import header from './../css/nav.module.css'
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

const NavComponent = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }
    const closeMenu = () => {
        setNavbarOpen(false)
    }
    return (
        <>
            <div className={header.hamNavBar}>
                <button className={header.button} onClick={handleToggle}>
                    {navbarOpen ? (
                        <MdClose style={{ color: "#ffffff", width: "32px", height: "36px" }} />
                    ) : (
                        <FiMenu style={{ color: "#6d0a18", width: "32px", height: "36px" }} />
                    )}
                </button>
                <div className={`${header.menuNav} ${navbarOpen ? ` ${header.showMenu}` : ""}`}>
                    <ul >
                        <li>
                            <Link className='hover-underline-animation' onClick={() => closeMenu()} to="/">Home</Link>
                        </li>
                        <li>        
                            <Link className='hover-underline-animation' onClick={() => closeMenu()} to="/about">About</Link>
                        </li>
                        <li>
                            <Link className='hover-underline-animation' onClick={() => closeMenu()} to="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                            <Link className='hover-underline-animation' onClick={() => closeMenu()} to="/project">Project</Link>
                        </li>
                    </ul>
                </div>

            </div>

        </>
      );
}
 
export default NavComponent;