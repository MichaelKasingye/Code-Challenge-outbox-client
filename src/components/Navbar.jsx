import React, {useEffect, useState} from 'react'
import {FaBars} from "react-icons/fa";
import {FaSearch} from "react-icons/fa";
import {BiCartAlt} from "react-icons/bi";
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
        }else{
            setBurger(false);
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
         value={{size:'1.5rem'}}
        //  value={{color:'white'}}

        >
            <div className={navbar ? 'navbar active' : 'navbar'}>
                {burger? <Link to="#" className='menu-bars'>
                    <FaBars onClick={showSidebar}/>
                </Link>:<Link to="/" className="logo">
                   <h3>Ewaka</h3>
               </Link>}

               <form action="" className="nav-form">
                <div className="nav-input">
               <input className="nav-inputer" type="text" />
                <FaSearch className="nav-search"/>
                </div>
               </form>
               {burger?"":<div className="nav-menu">
               <Link to="/">locations</Link>
               <Link to="/"> Rates</Link>
               <Link to="/">Login</Link>
               </div>}
               
               <Link to="/" className="nav-cart">
                   <BiCartAlt />
                   <span className="cart-number">1</span>
               </Link>
               {burger?<Link to="/" className="logo">
                   <h3>Ewaka</h3>
               </Link>:""}
               
            </div>
            <nav className={sidebar ? 'sidebar-menu active' : 'sidebar-menu'}>
                <ul className='sidebar-menu-items' onClick={showSidebar}>
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
