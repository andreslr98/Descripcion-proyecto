import React from 'react';
import '../styles/NavbarStyle.css'

class NavbarComponent extends React.Component{
    render(){
        return(

            <div className="Navbar">
                <div className="Container-Fluid">
                    <ul className="Lista">
                        <li><a className="Comprar" href="/">Comprar</a></li>
                        <li><a className="Vender" href="/">Vender</a></li> 
                        <li><a className="Crear" href="/">Crear</a></li>                       
                    </ul>
                </div>
            </div>
        )
    }
}


export default NavbarComponent;
