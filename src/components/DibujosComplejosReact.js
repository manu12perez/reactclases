import { Component } from "react";

class DibujosComplejosReact extends Component {
  //EN STATE TENDREMOS UN CONJUNTO DE NOMBRES
  state = {
    nombres: ["Lucia", "adrian", "Antonia", "Diana", "Sofia", "Carlos"],
  };

  generarNombre = () => {
    this.state.nombres.push("NUEVO NOMBRE");
    //ACTUALIZAMOS STATE
    this.setState({
      nombres: this.state.nombres,
    });
  };

  render() {
    return (
      <div>
        <h1>Dibujos complejos con react Collection</h1>
        {/* <button onClick={() => this.generarNombre()}>Generar nombre</button>  */}
        <button onClick={this.generarNombre}>Generar nombre</button>

        {
          //ESTO ES CODIGO REACT, ES DIFERENTE AL CODIGO JS
          //ES CODIGO LOGICO CON SINTAXIS JSX
          //EL CODIGO LOGICO DEBE CONTENER UN RETURN
          this.state.nombres.map((name, index) => {
            //dentro de map un metodo para el recorrido
            //ESTE CODIGO NUNCA DEBE ESTAR VACIO, SIEMPRE
            //TIENE QUE DEVOLVER UN return
            return (
              <h1 key={index} style={{ color: "blue" }}>
                {name}
              </h1>
            );
          })
        }
      </div>
    );
  }
}

export default DibujosComplejosReact;
