import { Component } from "react";

class HijoDeportes extends Component{
    //QUIERO VISUALIZAR EL DEPORTE FAVORITO
    seleccionarFavorito = () => {
        this.setState({
            mensaje: "Su deporte favorito es: " + this.props.nombre
        })
    }

    state = {
        mensaje: ""
    }

    render() {
        return(
            <div>
                <h2 style={{color:"blue"}}>Hijo Deporte: {this.props.nombre}</h2>
                <h4>{this.state.mensaje}</h4>
                <button onClick={this.seleccionarFavorito}>Seleccionar Favorito</button>
            </div>
        )
    }
}

export default HijoDeportes;