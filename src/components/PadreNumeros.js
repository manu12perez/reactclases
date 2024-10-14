import { Component } from "react";
import HijoNumero from "./HijoNumero";

class PadreNumeros extends Component {
  state = {
    numeros: [],
    sumaTotal: 0,
  };

  generarNumero = () => {
    var numeroAleatorio = parseInt(Math.random() * 100) + 1;
    this.state.numeros.push(numeroAleatorio);
    this.setState({
      numeros: this.state.numeros,
    });
    console.log(this.state.numeros);
  };

  sumarNumeros = (numero) => {
    this.state({
        sumaTotal : this.state.sumaTotal + numero
    })
  }

  render() {
    return (
      <div>
        <h1>Padre Números</h1>
        <button onClick={this.generarNumero}>Nuevo número</button>
        <h2>Total suma = {this.state.sumaTotal}</h2>

        {
            this.state.numeros.map((numero, index) => {
            return <HijoNumero key={index} numero={numero} 
            sumarNumeros={this.sumarNumeros} />;
            })
        }
      </div>
    );
  }
}
export default PadreNumeros;
