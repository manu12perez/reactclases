import { Component } from "react";

class HijoNumero extends Component {
  sumarNumeros = () => {
    var numero = this.props.numero;
    this.props.sumarNumeros(numero);
  };

  render() {
    return (
      <div>
        <h3>Hijo: {this.props.numero}</h3>
        {/* <button onClick={() => this.props.sumarNumeros(this.props.numero)}> */}
          <button onClick={this.sumarNumeros}>
          Sumar número {this.props.numero}
        </button>
      </div>
    );
  }
}
export default HijoNumero;
