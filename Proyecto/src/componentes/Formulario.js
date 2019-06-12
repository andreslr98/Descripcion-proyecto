import React from 'react';
import '../styles/FormularioStyle.css'


class FormularioComponent extends React.Component{



    state={};
//EVENTOS DE CONTROL PARA EL ESTADO DEL FORMULARIO, ESTOS SE USAN MAS ADELANTE PARA CAMBIAR O ENVIAR LA INFORMACION QUE DIJITA EL USUARIO A TRAVES DE LOS BOTONES
    handleClick = e =>{
        console.log("BOTON PRESIONADO, SAPAPERRA.")
    };

    handleSumbit = e=>{
        e.preventDefault();
        console.log("Formulario enviado.")
        console.log(this.state)
    };




    render(){
        return(
            <div className= "Formulario-General">
                <h2 className="Header-Formulario">Registro de Usuario</h2>

                <form onSubmit={this.handleSumbit}>

                    <div className="Formulario">                        
                        <label>Nombres</label>
                        <input/>                    
                    </div>

                    <div className="Formulario">                       
                        <label>Apellidos</label>
                        <input/>                         
                   </div>

                    <div className="Formulario">
                        <label>Cedula</label>
                        <input/>  
                    </div>

                    <div className="Formulario">   
                        <label>Correo electrónico</label>
                        <input/>  
                    </div>

                    <div className="Formulario">   
                        <label>Teléfono/Celular</label>
                        <input/> 
                    </div>

                    <div className="Formulario">   
                        <label>Dirección</label>
                        <input/>  
                    </div>

                    <div className="Formulario">   
                        <label>Contraseña</label>
                        <input/>  
                    </div>

                    <button onClick={this.handleClick}  className="Guardar">Guardar</button>
                </form>
            </div>
        )

}
}

export default FormularioComponent;