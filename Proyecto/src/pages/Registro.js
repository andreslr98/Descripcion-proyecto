import React from 'react';
import '../styles/RegistroStyle.css'
import NavbarComponent from '../componentes/Navbar';
import FormularioComponent from '../componentes/Formulario';



class Registro extends React.Component{
    render(){
        return(
            <div>
                    <div>
                        <NavbarComponent/>
                    </div>

                    <div>
                        <FormularioComponent/>
                    </div>
            </div>


        )
    }
}

export default Registro;