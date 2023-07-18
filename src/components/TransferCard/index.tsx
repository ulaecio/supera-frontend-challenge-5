import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './styles.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/request";
import { Transfer } from "../../models/transfer";

function TranferCard() {
  //pega a data atual e diminue 365 dias
  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();
  //coloca a data minima e maxima nos inputs.
  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);

  const [transfers, setTransfers] = useState<Transfer[]>([]);


  useEffect(() => {
    axios.get(`${BASE_URL}/transferencias`)
      .then(response => {
        setTransfers(response.data.content);
      })
  }, [minDate, maxDate]);

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
              <th className="show992">Operador da trans.</th>
            </tr>
          </thead>
          <tbody>
            {transfers.map(transfer => {
              return (
                <tr key={transfer.id}>
                  <td className="show992">{transfer.id}</td>
                  <td className="show576">{transfer.dataTransferencia}</td>
                  <td>{transfer.valor}</td>
                  <td className="show992">{transfer.tipo}</td>
                  <td>{transfer.nomeOperadorTransacao}</td>
                </tr>
              )
            })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TranferCard;
