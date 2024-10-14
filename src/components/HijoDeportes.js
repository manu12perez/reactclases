import { Component } from "react";

class HijoDeportes extends Component {
  seleccionarFavorito = () => {
    //CAPTURAMOS EL DEPORTE SELECCIONADO EN props
    var deporte = this.props.nombre;
    //REALIZAMOS LA LLAMADA AL PADRE ENVIANDO EL DEPORTE
    this.props.mostrarFavorito(deporte);
  };

  render() {
    return (
      <div>
        <h2 style={{ color: "blue" }}>Hijo Deporte: {this.props.nombre}</h2>
        <button onClick={this.seleccionarFavorito}>Seleccionar Favorito</button>
      </div>
    );
  }
}

export default HijoDeportes;
