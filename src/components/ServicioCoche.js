import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
export default class ServicioCoche extends Component {
    cajaMarca=React.createRef();
    aux=false;
    state={
        coches:[],
        status: false,
        coches2:[]
        
    }

    loadCoches =(e)=>{
        if(e != null){
            e.preventDefault();
        }
        var request="webresources/coches";
        axios.get(Global.urlCoches+request).then(res=>{
            this.setState({
                coches: res.data,
                status:true
            })
        })
    }
    componentDidMount=()=>{
        this.loadCoches();
    }

    filtrarCoche = (e) =>{
        e.preventDefault();
        var marca = this.cajaMarca.current.value.toLowerCase();
        
        this.aux=true
        //VOY UTILIZAR UN METODO aRRAY LLAMADO FILTER()
        //Array.filter(obj=>obj.propiedad == valor)
        var cochesfiltrados =
            this.state.coches.filter(car => car.marca.toLowerCase().includes(marca));

            this.setState({
                coches:cochesfiltrados
            })

    }
  render() {
    return (
      <div>
        <h1>Servicio Coches</h1>
        <form>
            <label>Marca: </label>
            <input type="text" ref={this.cajaMarca}></input>
            <button onClick={this.filtrarCoche}>Filtrar</button>
            <button onClick={this.loadCoches}>Cargar todos lo coches</button>
            
           
        </form>
        <table border={1}>
                <thead>
                    <tr>
                        <td>MARCA</td>
                        <td>MODELO</td>
                        <td>CONDUCTOR</td>
                        <td>IMAGEN</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.status== true &&
                            this.state.coches.map((coche,index)=>{
                                return(<tr>
                                        <td>{coche.marca}</td>
                                        <td>{coche.modelo}</td>
                                        <td>{coche.conductor}</td>
                                        <td><img style={{width: "80px",height:"80px"}}src={coche.imagen}/></td>
                                    </tr>)
                            })
                    }
                </tbody>
            </table>
      </div>
    )
  }
}
