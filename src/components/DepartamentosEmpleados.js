import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class DepartamentosEmpleados extends Component {
  state={
    options:[],
    status:false,
    options2:[]
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
  cargarEmpleados = () =>{
    var request2="https://apiempleadosfullstack.azurewebsites.net/api/Empleados/EmpleadosDepartamento/";
    var emple=this.cajaselect.current.value;
    console.log(emple)
    axios.get(request2+emple).then(res=>{
      console.log(res.data)
      console.log(res.data)
      this.setState({
        options2: res.data
        
      })
  })
  }

  componentDidMount=()=>{
    this.loadSelect();
  }
  render() {
    return (
      <div>

        <h1>DepartamentosEmpleados</h1>
       
          <button onClick={this.cargarEmpleados}>PULSAR</button>
          <select  ref={this.cajaselect}>
            {
              this.state.status==true &&
                this.state.options.map((dept,index)=>{
                  return(<option value={dept.Numero}>{dept.Nombre}</option>)
                })
            }
          </select>
          <ul>
            {

                this.state.options2.map((dept,index)=>{
                  return(<li>{dept.apellido}</li>)
                })
            }
            
          </ul>

      
        
      </div>
    )
  }
}
