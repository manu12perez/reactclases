import { Component } from "react";

class HijoNumero extends Component {




  render() {
    return (
      <div>
        <h3>Hijo: {this.props.numero}</h3>
        <button onClick={() => this.props.sumarNumeros(this.props.numero)}>Sumar número {this.props.numero}</button>
      </div>
    );
  }
}
export default HijoNumero;
