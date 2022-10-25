import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    //EN ESTE COMPONENTE, VAMOS A RECIBIR PROPS DE numero
    constructor(props){
        super(props);
        console.log("Numero props: "+props.numero);
    }

    state={
        tabla: []
    }
    generarTabla=()=>{
        var datos=[];
        for(var i=1;i<=10;i++){

            datos.push(this.props.numero*i);

        }
        this.setState({
            tabla:datos
        })
       
    }
    componentDidUpdate=(oldProps)=>{
        if(oldProps.numero!=this.props.numero){
            this.generarTabla();
        }
       
    }
    componentDidMount=()=>{
        this.generarTabla()
    }

  render() {
    return (
      <div>
        <h1>Tabla multiplicar {this.props.numero}</h1>
        <table className='table table-dark table-striped'>
            <tbody>
                {
                    this.state.tabla.map((numero,index)=>{
                        return(<tr key={index}><td>{numero}</td></tr>)
                    })
                }

            </tbody>
           

        </table>
          
      </div>
    )
  }
}
