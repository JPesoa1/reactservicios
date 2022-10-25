import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'
export default class MaestroEmpleado extends Component {
    state={
        empleados:[],
        status:false
    }
    cargarEmpleados = () =>{
        var request="https://apiempleadosfullstack.azurewebsites.net/api/Empleados/EmpleadosDepartamento/";
        var id=this.props.iddepartamento;
        
        axios.get(request+id).then(res=>{
            console.log(res.data)
            this.setState({
                empleados:res.data,
                status:true
            })
        })

    }
    componentDidMount=()=>{
        this.cargarEmpleados();
    }
    //ESTE METODO DEBEMOS LLAMARLO CON CUIDADO
    //SIEMPRE DEBEMOS COMPROBAR EL TIPO DE CAMBIO
    //NORMALMENTE SE UTILIZA CON PROPS, CUANDO
    //OTORO COMPONENTE NOS HA CARGADO PREVIAMENTE
    //RECIBE UN PARAMETRO, LLAMADO OLD PROPS QUE INDICA
    //EL ANTIGUO VALOR DE PROPS
    componentDidUpdate=(oldProps)=>{
        console.log("Actual Props "+this.props.iddepartamento);
        console.log("Old Props "+oldProps.iddepartamento);
        //SOLAMENTE REALIZAREMOS CAMBIOS EN LA PAGINA
        //CUADNO LOS PROPS SEAN DIFERENTES
        if(this.props.iddepartamento!=oldProps.iddepartamento){
            this.cargarEmpleados();

        }
    }
   
  render() {
    return (
      <div>
        <h2>Maestro Empleado {this.props.iddepartamento}</h2>
        <ul>
                {   
                    this.state.status==true &&
                        this.state.empleados.map((emple,index)=>{
                            return(<li>{emple.apellido}</li>)
                        })
                }

        </ul>
            
        </div>
    )
  }
}
