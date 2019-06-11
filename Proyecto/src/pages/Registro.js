import React from 'react';
import '../styles/RegistroStyle.css'
import NavbarComponent from '../componentes/Navbar';


class Registro extends React.Component{
    render(){
        return(
            <div>
                <h1>All-In-Tickets</h1>
                <NavbarComponent/>
            </div>
        )
    }
}

export default Registro;