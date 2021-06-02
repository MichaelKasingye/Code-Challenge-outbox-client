import React, {useEffect, useState} from 'react'
import {FaBars} from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai";
import {Link} from 'react-router-dom';
import {SidebarData} from './Sidebar';
import {IconContext} from 'react-icons';
import './navbar.css';
function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const [burger, setBurger] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const showBurger = () => {
        if(window.innerWidth <= 500){
            setBurger(true);
            // console.log("less");
        }else{
            setBurger(false);
            // console.log("more");
        }
    }

    useEffect(() => {
        showBurger()
    }, []);

window.addEventListener('resize', showBurger);

    const changeBackground = () => {
        // console.log(window.scrollY)
        if(window.scrollY >= 50){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);
    return (
        <>
        <IconContext.Provider
         value={{size:'2rem'}}
        //  value={{color:'white'}}

        >
            <div className={navbar ? 'navbar active' : 'navbar'}>
                {burger? <Link to="#" className='menu-bars'>
                    <FaBars onClick={showSidebar}/>
                </Link>:""}
               
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className='menu-bars'>
                            <AiOutlineClose style={{color:'white'}} onClick={showSidebar}/>
                        </Link>
                    </li>
                    {
                        SidebarData.map((item, index) => {
                            return(
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
