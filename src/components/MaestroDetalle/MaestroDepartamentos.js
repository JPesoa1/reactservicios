import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global';
import MaestroEmpleado from './MaestroEmpleado';

export default class MaestroDepartamento extends Component {
  state={
    options:[],
    status:false,
    idDepartamento:0
  }
  cajaselect=React.createRef();
  loadSelect=()=>{
    var request="https://apidepartamentospgs.azurewebsites.net/api/departamentos";
    axios.get(request).then(res=>{
        console.log(res.data)
        this.setState({
          options: res.data,
          status:true
        })
    })
  }
  cargarEmpleados = (e) =>{
    e.preventDefault();
    var emple=this.cajaselect.current.value;
    console.log(emple)
    this.setState({
        idDepartamento: emple
    })
    
  }
  

  componentDidMount=()=>{
    this.loadSelect();
  }
  render() {
    return (
      <div>

        <h1 style={{color:"blue"}}>DepartamentosEmpleados</h1>
        <form onSubmit={this.cargarEmpleados}> 
          <button>PULSAR</button>
            <select  ref={this.cajaselect}>
              {
                this.state.status==true &&
                  this.state.options.map((dept,index)=>{
                    return(<option value={dept.Numero}>{dept.Nombre}</option>)
                  })
              }
            </select>
            <h2>Departamento seleccionado: {this.state.idDepartamento}</h2>

           {
                this.state.idDepartamento !=0 &&
                    <MaestroEmpleado iddepartamento={this.state.idDepartamento}/>
           }

        </form>
         
      
        
      </div>
    )
  }
}