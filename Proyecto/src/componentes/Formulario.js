import React from 'react';
import '../styles/FormularioStyle.css'


class FormularioComponent extends React.Component{



    state={};
//EVENTOS DE CONTROL PARA EL ESTADO DEL FORMULARIO, ESTOS SE USAN MAS ADELANTE PARA CAMBIAR O ENVIAR LA INFORMACION QUE DIJITA EL USUARIO A TRAVES DE LOS BOTONES
    handleClick = e =>{
        console.log("BOTON PRESIONADO.")
    };

    handleSumbit = e=>{
        e.preventDefault();
        console.log("Formulario enviado.")
        console.log(this.state)
    };




    render(){
        return(
            <div className= "Formulario-General">
                <h1 className="Header-Formulario">Registro de Usuario</h1>

                <form onSubmit={this.handleSumbit}>

                    <div className="Nombres">                        
                        <label className= "labels">Nombres</label>
                        <input className="inputNombres"/>                    
                    </div>

                    <div className="Apellidos">                       
                        <label className= "labels">Apellidos</label>
                        <input className="inputApellidos"/>                         
                   </div>

                    <div className="Cedula">
                        <label className= "labels">Cedula</label>
                        <input className="inputCedula"/>  
                    </div>

                    <div className="Formulario">   
                        <label className= "labels">Correo electrónico</label>
                        <input className="inputCorreo"/>  
                    </div>

                    <div className="Formulario">   
                        <label className= "labels">Contraseña</label>
                        <input className="inputContraseña"/> 
                    </div>

                    <div className="Formulario">   
                        <label className= "labels">Dirección</label>
                        <input className="inputDireccion"/>  
                    </div>

                    <div className="Formulario">   
                        <label className= "labels">Teléfono/Celular</label>
                        <input className="inputCelular"/>  
                    </div>

                    <button onClick={this.handleClick}  className="Guardar">Guardar</button>
                </form>
                
            </div>

            
        )

}
}

export default FormularioComponent;