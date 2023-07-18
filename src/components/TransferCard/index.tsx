import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './styles.css';
import { useState } from "react";

function TranferCard() {
//pega a data atual e diminue 365 dias
  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();
//coloca a data minima e maxima nos inputs.
  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);

  return (
    <div className="supera-card">
      <h2 className="supera-transferencia-title">Tranferencias</h2>
      <h2 className="supera-transferencia-title-operator">Filtro</h2>
      <div className="supera-operator">
        <div>
          <div className="supera-form-control-container">
            {/* mostra o calendario de data na tela */}
            <DatePicker
              selected={minDate}
              onChange={(date: Date) => setMinDate(date)} //Coloca no input a data inicio setada pelo usuário
              className="supera-form-control"
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <div className="supera-form-control-container">
            <DatePicker
              selected={maxDate}
              onChange={(date: Date) => setMaxDate(date)} //Coloca no input a data fim setada pelo usuário
              className="supera-form-control"
              dateFormat="dd/MM/yyyy"
            />
          </div>
        </div>
        <div className="supera-card-operator">
          <h2 className="supera-transferencia-title-operator">Operador</h2>
          <input className="supera-form-control" type="text" placeholder='Operador' />
        </div>
        <button className="button">
          <h2 className="buttonText">Pesquisar</h2>
        </button>
      </div>
      <div>
        <table className="supera-transferencia-table">
          <thead>
            <tr>
              <th className="show992">Conta</th>
              <th className="show576">Data</th>
              <th>Valor</th>
              <th className="show992">Tipo</th>
              <th className="show992">Nome do operador</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="show992">#341</td>
              <td className="show576">08/07/2022</td>
              <td>R$ 55300.00</td>
              <td className="show992">Saida</td>
              <td>João</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="show992">#341</td>
              <td className="show576">08/07/2022</td>
              <td>R$ 55300.00</td>
              <td className="show992">Saida</td>
              <td>João</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="show992">#341</td>
              <td className="show576">08/07/2022</td>
              <td>R$ 55300.00</td>
              <td className="show992">Entrada</td>
              <td>João</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TranferCard;
