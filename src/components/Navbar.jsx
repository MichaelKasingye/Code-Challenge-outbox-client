import React, {useEffect, useState} from 'react'
import {FaBars} from "react-icons/fa";
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
                   <h3>CodeChallenge</h3>
               </Link>}

               
               {burger?"":<div className="nav-menu">
               <Link to="/">Home</Link>
               <Link to="/">Factorial</Link>
               <Link to="/squareroot"> Square root</Link>
               <Link to="/"> Multiples</Link>
               <Link to="/results"> Results</Link>
               <Link to="/">Login</Link>
               </div>}
               
               {burger?<Link to="/" className="logo">
                   <h3>CodeChallenge</h3>
               </Link>:""}
               
            </div>
            <div className={sidebar ? 'sidebar-menu active' : 'sidebar-menu'}>
                <ul className='sidebar-menu-items' onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className='menu-bars'>
                            <AiOutlineClose style={{color:'black'}} onClick={showSidebar}/>
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
            </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
