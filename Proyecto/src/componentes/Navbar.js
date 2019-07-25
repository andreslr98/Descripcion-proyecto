import React from 'react';
import '../styles/NavbarStyle.css'
import Logo from '../images/ait.png'

class NavbarComponent extends React.Component{
    render(){
        return(

            <div className="Navbar">
                <div className="Container-Fluid">
                    <a classname ="Navbar-Brand" href="/">
                        <img className = "LogoNavbar" src={Logo} alt = "Logo"/>
                        <span className= "NavbarText"> All In Tickets</span>
                        <button className="Registrarse"> Registrarse</button>
                        <button className="Iniciar-Sesion"> Iniciar Sesion</button>
                    </a>
                </div>
            </div>
        )
    }
}


export default NavbarComponent;
