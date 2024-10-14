import { Component } from "react";
import HijoDeportes from "./HijoDeportes";

class PadreDeportes extends Component {
  deportes = ["Petanca", "Curling", "Poker", "Padel", "Futbol", "Basket"];

  render() {
    return (
      <div>
        <h1 style={{ color: "red" }}>Padre Deportes</h1>
        {
          //RECORREMOS TODOS LOS DEPORTES Y DIBUJAMOS ETIQUETAS
          //HIJO POR CADA UNO
          this.deportes.map((deporte, index) => {
            return <HijoDeportes key={index} nombre={deporte} />;
          })
        }
      </div>
    );
  }
}

export default PadreDeportes;
